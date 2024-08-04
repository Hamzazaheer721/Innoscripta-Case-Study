import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { setNewsLoaders } from "redux/actions/newsActions";
import { NewsLoadersType } from "redux/types/newsTypes";

export const useAppLoader = () => {
  const dispatch = useAppDispatch();
  const loaders = useAppSelector((state) => state.news.loaders);

  const stopLoading = () => {
    const updatedLoaders = {
      ...loaders,
      appLoader: false,
    } as NewsLoadersType;

    dispatch(setNewsLoaders(updatedLoaders));
  };

  const startLoading = () => {
    const updatedLoaders = {
      ...loaders,
      appLoader: true,
    } as NewsLoadersType;
    dispatch(setNewsLoaders(updatedLoaders));
  };

  return {
    startLoading,
    stopLoading,
    loaders,
  };
};
