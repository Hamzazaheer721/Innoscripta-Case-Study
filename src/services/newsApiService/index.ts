import axios from "axios";
import { NEWS_API } from "config";

export class NewsApiService {
  static getTopHeadlines = async () => {
    try {
      const targetURL = NEWS_API.getTopHeadlines();
      const response = await axios.get(targetURL);
      return response?.data;
    } catch (error) {
      console.error("Error - News Api Service  getGenericNewsData ", {
        error,
      });
      throw error;
    }
  };
}
