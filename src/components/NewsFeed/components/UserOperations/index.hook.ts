import {
  DateRangeHandleChangeType,
  DatesType,
  getOptions,
  getSourceOptions,
  NewsArticle,
  SelectFieldHandleChangeType,
} from "general";
import {
  ChangeEvent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { initialUserOptionsState, UserOperationsType } from "./helper";
// import { InputRef } from "antd";
import { useAppDispatch, useAppSelector } from "hooks";
import { cloneDeep, debounce } from "lodash";
import { setFilteredNews } from "redux/actions/newsActions";

export const useUserOperations = () => {
  const [state, setState] = useState<UserOperationsType>(
    () => initialUserOptionsState,
  );

  const searchFieldRef = useRef<HTMLInputElement>(null);

  const fullNews = useAppSelector((state) => state.news.fullNews);
  const filteredNews = useAppSelector((state) => state.news.filteredNews);

  console.info({ filteredNews });
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (!searchFieldRef.current) return;
    searchFieldRef.current.value = "";
  }, []);

  const options = useMemo(() => {
    const authors =
      fullNews
        ?.map((article) => {
          let author = article.author ?? "";
          author = author.replace("By", "").trim();
          return author;
        })
        .filter((author) => !!author) ?? [];

    const sources = (fullNews
      ?.filter((article) => !!article?.source)
      ?.map((article) => article.source)
      ?.filter((source) => !!source) ?? []) as string[];

    const categories = (fullNews
      ?.filter((article) => !!article?.category)
      ?.map((article) => article.category)
      ?.filter((category) => !!category) ?? []) as string[];

    const authorOptions = getOptions(authors);
    const sourceOptions = getSourceOptions(sources);
    const categoryOptions = getOptions(categories);

    return { authorOptions, sourceOptions, categoryOptions };
  }, [fullNews]);

  const setFilteredNamesGlobally = (payload: NewsArticle[]) =>
    dispatch(setFilteredNews(payload));

  const resetFullNamesGlobally = () => dispatch(setFilteredNews(fullNews));

  const filterGlobalState = useCallback(
    (updatedState: UserOperationsType = state) => {
      let draft = cloneDeep(fullNews);

      if (!draft) return;

      const { searchValue } = updatedState;
      if (searchValue) {
        draft = draft?.filter(
          (article) =>
            article.content
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase().trim()) ||
            article.title
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase().trim()),
        );
      }

      setFilteredNamesGlobally(draft);
    },
    [state, fullNews],
  );

  const handleCategoryChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, categoryOption: value }));

    const updatedState = {
      ...state,
      categoryOption: value,
    };
    filterGlobalState(updatedState);
  };

  const handleSourceChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, sourceOption: value }));

    const updatedState = {
      ...state,
      sourceOption: value,
    };
    filterGlobalState(updatedState);
  };

  const handleAuthorChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, authorOption: value }));

    const updatedState = {
      ...state,
      authorOption: value,
    };
    filterGlobalState(updatedState);
  };

  /* Gives dates in string */
  const handleDateRangeChange: DateRangeHandleChangeType = (
    dates,
    dateStrings,
  ) => {
    const updatedDate = {
      dates: dates as DatesType,
      dateStrings: dateStrings as [string, string],
    };

    setState((prev) => ({ ...prev, dateRange: updatedDate }));

    const updatedState = {
      ...state,
      dateRange: updatedDate,
    };
    filterGlobalState(updatedState);
  };

  const handleKeywordChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setState((prev) => ({
      ...prev,
      searchValue: value,
    }));

    const updatedState = {
      ...state,
      searchValue: value,
    };

    if (!value) {
      resetFullNamesGlobally();
      return;
    }

    filterGlobalState(updatedState);
  }, 1000);

  const handleClick = () => {
    if (searchFieldRef?.current) {
      searchFieldRef.current.value = "";
    }
    setState(() => ({
      ...initialUserOptionsState,
    }));
    resetFullNamesGlobally();
  };

  return {
    handleAuthorChange,
    handleCategoryChange,
    handleSourceChange,
    handleDateRangeChange,
    handleKeywordChange,
    state,
    searchFieldRef,
    handleClick,
    options,
  };
};
