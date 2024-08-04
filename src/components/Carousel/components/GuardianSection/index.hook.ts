import { useQuery } from "@tanstack/react-query";
import { sanitizeTheGuardianData } from "general";
import { TheGuardianService } from "services";

const getGuardianData = async () => {
  try {
    const response = await TheGuardianService.getGenericNewsData();
    if (!response) return null;
    let data = response?.data || {};
    data = data?.response?.results;
    data = sanitizeTheGuardianData(data);
    console.info({ data });
    return data;
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
