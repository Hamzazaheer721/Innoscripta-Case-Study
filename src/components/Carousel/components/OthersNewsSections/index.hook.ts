import { useQuery } from "@tanstack/react-query";
import { mockGuardianData } from "assets/mock/mockData";
import {
  GuardianResponseType,
  sanitizeTheGuardianData,
  testing,
} from "general";
import { TheGuardianService } from "services";

const getGuardianData = async () => {
  try {
    let response: GuardianResponseType;
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
