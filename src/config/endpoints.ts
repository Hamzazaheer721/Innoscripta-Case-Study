import {
  GetNewsApiURLType,
  NEWS_API_ORG_API_KEY,
  THE_GUARDIAN_API_KEY,
} from "general";

export const getNewsApiUrl = (args?: GetNewsApiURLType) => {
  const { category = "business", country = "us" } = args || {};
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${NEWS_API_ORG_API_KEY}`;
  return URL;
};

export const getGuardianAPIURL = () => {
  return `https://content.guardianapis.com/search?api-key=${THE_GUARDIAN_API_KEY}`;
};
