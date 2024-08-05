import { mockNewsAPIData, mockNYTimesData } from "assets/mock/mockData";
import {
  NewsArticle,
  sanitizeData,
  sanitizeNYTimesDataForNewsFeed,
  testing,
} from "general";
import { useAppLoader } from "hooks";
import { useCallback, useEffect } from "react";
import { setNewsState } from "redux/actions/newsActions";
import { NewsReducerType } from "redux/types/newsTypes";
import { NewsApiService, NewYorkTimesService } from "services";

export const useHomeScreen = () => {
  const { startLoading, stopLoading, loaders, dispatch } = useAppLoader();

  const setDataIntoGlobalState = (payload: NewsReducerType) =>
    dispatch(setNewsState(payload));

  const getNYTimesGenericData = async () => {
    try {
      const response = await NewYorkTimesService.getGenericNewsData();
      return response.data;
    } catch (error) {
      console.error({ error });
      return {};
    }
  };

  const fetchNewsData = useCallback(async () => {
    try {
      startLoading();

      let data_: any, nyData_: any;

      if (testing) {
        data_ = { ...mockNewsAPIData };
        nyData_ = { ...mockNYTimesData };
      } else {
        data_ = await NewsApiService.getTopHeadlines();
        nyData_ = await getNYTimesGenericData();
      }

      if (!data_ || !data_?.articles) return;

      if (!nyData_ || !nyData_?.response?.docs) return;

      const data = sanitizeData(data_?.articles as NewsArticle[]);

      nyData_ = nyData_?.response?.docs;

      const nyData = sanitizeNYTimesDataForNewsFeed(nyData_);
      const updatedState: NewsReducerType = {
        loaders,
        carouselNews: data.slice(0, 4),
        fullNews: structuredClone(nyData),
        filteredNews: structuredClone(nyData),
      };
      setDataIntoGlobalState(updatedState);
    } catch (error) {
      console.error({ error });
    } finally {
      stopLoading();
    }
  }, [loaders]);

  useEffect(() => {
    fetchNewsData();
  }, []);
};
