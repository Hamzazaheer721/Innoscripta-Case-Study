import {
  GetNewsApiURLType,
  NEWS_API_ORG_API_KEY,
  NY_TIMES_API_KEY,
  THE_GUARDIAN_API_KEY,
} from "general";

export const NEWS_API = {
  getTopHeadlines: (country: string = "us") => {
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_ORG_API_KEY}`;
    return URL;
  },
  getTopHeadlineSources: (country: string = "us") => {
    const URL = `https://newsapi.org/v2/top-headlines/sources?country=${country}&apiKey=${NEWS_API_ORG_API_KEY}`;
    return URL;
  },
  getEverything: () => {
    const URL = `https://newsapi.org/v2/everything?category=business&from=2024-07-05&sortBy=publishedAt&apiKey=${NEWS_API_ORG_API_KEY}`;
    return URL;
  },
  getNewsApiUrl: (args?: GetNewsApiURLType) => {
    const { category = "business", country = "us" } = args || {};
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${NEWS_API_ORG_API_KEY}`;
    return URL;
  },
};

export const GUARDIAN_API = {
  getGuardianAPIURL: () => {
    return `https://content.guardianapis.com/search?api-key=${THE_GUARDIAN_API_KEY}`;
  },
};

export const NY_TIMES_API = {
  getSearchArticles: (
    beginDate: string = "20200601",
    endDate: string = "20240805",
  ) => {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${beginDate}&end_date=${endDate}&api-key=${NY_TIMES_API_KEY}`;
  },
};
