import { defaultImageURL } from "./constants";
import mockContent from "assets/data/content.json";
import { NewsArticle } from "./types";

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

export const sanitizeData = (data: NewsArticle[]) => {
  const indices: number[] = [];

  const updatedData: NewsArticle[] = data
    ?.map((obj) => {
      let content = obj?.content;

      if (!content) {
        let randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
        while (indices.includes(randomIdx)) {
          randomIdx = getRandomNumberInRange(0, mockContent.length - 1);
        }
        indices.push(randomIdx);
        content = mockContent[randomIdx];
      }

      const updatedObj = {
        ...obj,
        urlToImage: obj?.urlToImage ?? defaultImageURL,
        content,
      };

      return updatedObj;
    })
    ?.filter((obj: NewsArticle) => !!obj?.author);

  return updatedData;
};
