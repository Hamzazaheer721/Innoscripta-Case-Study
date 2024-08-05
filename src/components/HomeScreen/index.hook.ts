import { mockNewsAPIData, mockNYTimesData } from "assets/mock/mockData";
import {
  NewsArticle,
  sanitizeData,
  sanitizeNYTimesDataForNewsFeed,
} from "general";
import { useAppLoader } from "hooks";
import { useCallback, useEffect } from "react";
import { setNewsState } from "redux/actions/newsActions";
import { NewsReducerType } from "redux/types/newsTypes";
import { NewsApiService, NewYorkTimesService } from "services";

const testing = true;

export const useHomeScreen = () => {
  const { startLoading, stopLoading, loaders, dispatch } = useAppLoader();

  const setDataIntoGlobalState = (payload: NewsReducerType) =>
    dispatch(setNewsState(payload));

  const getNYTimesGenericData = async () => {
    const testing = true;
    try {
      if (testing) {
        const data = { ...mockNYTimesData };
        return data;
      } else {
        const data = await NewYorkTimesService.getGenericNewsData();
        console.info({ data });
      }
    } catch (error) {
      console.error({ error });
      return [];
    }
  };

  const fetchNewsData = useCallback(async () => {
    try {
      startLoading();

      let data_: any, nyData_: any;

      if (testing) {
        data_ = await NewsApiService.getTopHeadlines();
        nyData_ = await getNYTimesGenericData();
      } else {
        data_ = { ...mockNewsAPIData };
        nyData_ = { ...mockNYTimesData };
      }

      if (!data_ || !data_?.articles) return;

      if (!nyData_ || !nyData_?.response?.docs) return;

      const data = sanitizeData(data_?.articles as NewsArticle[]);

      const nyData = sanitizeNYTimesDataForNewsFeed(nyData_?.response?.docs);
      const updatedState: NewsReducerType = {
        loaders,
        carouselNews: data.slice(0, 4),
        fullNews: nyData,
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
