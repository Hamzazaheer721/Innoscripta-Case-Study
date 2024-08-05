import axios from "axios";
import { NY_TIMES_API } from "config";

export class NewYorkTimesService {
  static getGenericNewsData = async () => {
    try {
      const targetURL = NY_TIMES_API.getSearchArticles();
      const data = await axios.get(targetURL);
      return data;
    } catch (error) {
      console.error("Error - Guardian Service: getGenericNewsData ", { error });
      throw error;
    }
  };
}
