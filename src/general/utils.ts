import { defaultImageURL } from "./constants";
import mockContent from "assets/data/content.json";
import { NewsArticle } from "./types";
import dayjs from "dayjs";

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

    if (!content) {
      let randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
      while (indices.includes(randomIdx)) {
        randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
      }
      indices.push(randomIdx);
      content = mockContent[randomIdx];
    }

    content = removeBracketedContent(content);

    const updatedObj = {
      ...obj,
      urlToImage: obj?.urlToImage ?? defaultImageURL,
      content,
    };

    return updatedObj;
  });
  return updatedData;
};

export const parseDate = (dateStr: string) => {
  const formattedDate = dayjs(dateStr).format("MMMM D, YYYY h:mm A");

  return formattedDate;
};
