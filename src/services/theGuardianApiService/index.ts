import axios from "axios";
import { GUARDIAN_API } from "config";

export class TheGuardianService {
  static getGenericNewsData = async () => {
    try {
      const targetURL = GUARDIAN_API.getGuardianAPIURL();
      const data = await axios.get(targetURL);
      return data;
    } catch (error) {
      console.error("Error - Guardian Service: getGenericNewsData ", { error });
      throw error;
    }
  };
}
