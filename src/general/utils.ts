import { defaultImageURL, defaultURL, IMAGE_KEYS_URL } from "./constants";
import mockContent from "assets/data/content.json";
import { NewsArticle, Source } from "./types";
import dayjs from "dayjs";
import { UserOperationsType } from "components/NewsFeed/components/UserOperations/helper";

export const addQueryParamsToUrl = (
  baseUrl: string,
  params: Record<string, string | number | boolean>,
): string => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value.toString());
    }
  });
  return url.toString();
};

export const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const removeBracketedContent = (str: string) => {
  return str.replace(/\[.*?\]/g, "");
};

export const sanitizeData = (data: NewsArticle[]) => {
  const indices: number[] = [];

  const imgToUrlObjectIdx = data?.findIndex((obj) => !!obj.urlToImage);

  let updatedData: NewsArticle[] = data?.filter(
    (obj: NewsArticle) => !!obj?.author && !!obj?.source?.id,
  );
  updatedData = updatedData.slice();

  if (imgToUrlObjectIdx >= 0) {
    const obj = data?.[imgToUrlObjectIdx];
    updatedData.splice(imgToUrlObjectIdx, 1);
    updatedData.unshift(obj);
  }

  updatedData = updatedData?.map((obj) => {
    let content = obj?.content;

    let noContent = false;
    if (!content) {
      let randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
      while (indices.includes(randomIdx)) {
        randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
      }
      indices.push(randomIdx);
      content = mockContent[randomIdx];
      noContent = true;
    }

    content = removeBracketedContent(content);

    const updatedObj = {
      ...obj,
      urlToImage: obj?.urlToImage ?? defaultImageURL,
      content,
      publishedAt: parseDate(obj?.publishedAt ?? new Date().toISOString()),
      noContent,
    };

    return updatedObj;
  });
  return updatedData;
};

export const parseDate = (dateStr: string) => {
  const formattedDate = dayjs(dateStr).format("MMMM D, YYYY h:mm A");

  return formattedDate;
};

export const sanitizeTheGuardianData = (data: Record<string, any>[]) => {
  return data?.map((article, idx: number) => {
    const imgKey = ((article?.pillarName?.toLowerCase() as string) ??
      "news") as string;

    const urlToImg = (IMAGE_KEYS_URL as Record<string, string>)[
      imgKey
    ] as string;
    const publishedAt = parseDate(
      article?.webPublicationDate ?? new Date().toISOString(),
    );
    const category = article?.pillarName;
    const url = article?.webUrl ?? defaultURL;
    const title = article?.webTitle ?? mockContent[idx];
    return {
      urlToImg,
      publishedAt,
      category,
      url,
      title,
    };
  });
};

export const sanitizePayloadForApi = (payload: UserOperationsType) => {
  const rtnObj = {} as Record<string, string>;
  rtnObj.from = payload.dateRange.dateStrings[0];
  rtnObj.to = payload.dateRange.dateStrings[1];
  rtnObj.sources = payload.sourceOption as string;
  rtnObj.q = payload.searchValue; // URL encoded

  /* These params might require custom filtering */
  rtnObj.author = payload.authorOption as string;
  rtnObj.category = payload.categoryOption as string;

  return rtnObj;
};

export const getUniqueOptions = (
  options: {
    label: string;
    value: string;
  }[],
) => {
  const uniqueArray: {
    label: string;
    value: string;
  }[] = [];

  options.forEach((option) => {
    const alreadyExists = uniqueArray.some(
      (option_) => option_.label === option.label,
    );
    if (!alreadyExists) {
      uniqueArray.push(option);
    }
  });
  return uniqueArray;
};

export const getOptions = (options: string[]) => {
  const options_ = options?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  return getUniqueOptions(options_);
};

export const getSourceOptions = (options: Source[]) => {
  const options_ = options
    ?.filter((option) => !!option.name && !!option.id)
    ?.map((option) => {
      return {
        label: option.name as string,
        value: option.id as string,
      };
    });

  return getUniqueOptions(options_);
};

export const capitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCategoryOptions = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return categories.map((category) => ({
    label: capitalizeString(category),
    value: category,
  }));
};
