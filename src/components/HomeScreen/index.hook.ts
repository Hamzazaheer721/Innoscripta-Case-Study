import { NewsArticle, sanitizeData } from "general";
import { useAppLoader } from "hooks";
import { useCallback, useEffect } from "react";
import { setNewsState } from "redux/actions/newsActions";
import { NewsReducerType } from "redux/types/newsTypes";
import { NewsApiService } from "services";

export const useHomeScreen = () => {
  const { startLoading, stopLoading, loaders, dispatch } = useAppLoader();

  const setDataIntoGlobalState = (payload: NewsReducerType) =>
    dispatch(setNewsState(payload));

  const fetchNewsData = useCallback(async () => {
    try {
      startLoading();
      const data_ = await NewsApiService.getTopHeadlines();
      if (!data_ || !data_?.articles) return;
      const data = sanitizeData(data_?.articles as NewsArticle[]);
      const updatedState: NewsReducerType = {
        loaders,
        carouselNews: data.slice(0, 4),
        fullNews: data,
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
