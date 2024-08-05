import axios from "axios";
import { NEWS_API } from "config";

export class NewsApiService {
  static getTopHeadlines = async () => {
    try {
      const targetURL = NEWS_API.getTopHeadlines();
      const response = await axios.get(targetURL);
      return response?.data;
    } catch (error) {
      console.error("Error - News Api Service  getTopHeadlines ", {
        error,
      });
      throw error;
    }
  };
  static getTopHeadlinesSources = async () => {
    try {
      const targetURL = NEWS_API.getTopHeadlineSources();
      const response = await axios.get(targetURL);
      return response?.data;
    } catch (error) {
      console.error("Error - News Api Service  getTopHeadlinesSources ", {
        error,
      });
      throw error;
    }
  };
  static getEverything = async () => {
    try {
      const targetURL = NEWS_API.getEverything();
      const response = await axios.get(targetURL);
      return response?.data;
    } catch (error) {
      console.error("Error - News Api Service  getEverything ", {
        error,
      });
      throw error;
    }
  };
}
