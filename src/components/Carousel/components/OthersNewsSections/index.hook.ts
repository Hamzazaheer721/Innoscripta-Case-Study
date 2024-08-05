import { useQuery } from "@tanstack/react-query";
import { mockGuardianData } from "assets/mock/mockData";
import { sanitizeNYTimesData, sanitizeTheGuardianData } from "general";
import { NewYorkTimesService, TheGuardianService } from "services";

const testing = true;

const getGuardianData = async () => {
  try {
    let response: Record<string, any>;
    if (testing) {
      response = mockGuardianData;
      let data = response?.results;
      data = sanitizeTheGuardianData(data);
      return data.slice(0, 4);
    } else {
      response = await TheGuardianService.getGenericNewsData();
      if (!response) return null;
      let data = response?.data || {};
      data = data?.response?.results;
      data = sanitizeTheGuardianData(data);
      return data.slice(0, 4);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

console.error({ getGuardianData });

const getNewYourTimesData = async () => {
  try {
    const response_ =
      (await NewYorkTimesService.getGenericNewsData()) as Record<string, any>;
    if (!response_) return [];
    if (response_.status !== "200") return [];

    const response = response_.response;

    let data = response?.docs || [];
    data = sanitizeNYTimesData(data);
    return data.slice(0, 4);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

console.error({ getNewYourTimesData });

export const useGuardianCarousel = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getGuardianData"],
    queryFn: getGuardianData,
  });

  return {
    state: data,
    error,
    isLoading,
  };
};
