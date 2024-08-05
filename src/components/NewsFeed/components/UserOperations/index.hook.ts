import {
  DateRangeHandleChangeType,
  DatesType,
  ERROR_MESSAGES,
  getFormattedDates,
  getOptions,
  getSourceOptions,
  NewsArticle,
  SelectFieldHandleChangeType,
  TOASTER_PLACEMENT,
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
import dayjs from "dayjs";
import { useNotification } from "context/toaster.context";

export const useUserOperations = () => {
  const [state, setState] = useState<UserOperationsType>(
    () => initialUserOptionsState,
  );
  const { openErrorNotification } = useNotification();

  const searchFieldRef = useRef<HTMLInputElement>(null);

  const fullNews = useAppSelector((state) => state.news.fullNews);

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

      const {
        searchValue,
        sourceOption,
        categoryOption,
        authorOption,
        dateRange: { dateStrings },
      } = updatedState;

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

      if (sourceOption) {
        draft = draft.filter(
          (article) =>
            (sourceOption as string)?.toLowerCase().trim() ===
            (article?.source as string)?.toLowerCase().trim(),
        );
      }

      if (categoryOption) {
        draft = draft.filter(
          (article) =>
            (categoryOption as string)?.toLowerCase().trim() ===
            (article?.category as string)?.toLowerCase().trim(),
        );
      }

      if (authorOption) {
        draft = draft.filter(
          (article) =>
            (authorOption as string)?.toLowerCase().trim() ===
            (article?.author as string)?.toLowerCase().trim(),
        );
      }

      if (!!dateStrings[0] && !!dateStrings[1]) {
        const { endDate, startDate } = getFormattedDates(dateStrings);

        draft = draft.filter((article) => {
          const targetDate = dayjs(article.publishedAt, "MMMM D, YYYY h:mm A");

          const isInRange =
            targetDate.isSame(startDate) ||
            targetDate.isSame(endDate) ||
            (targetDate.isAfter(startDate) && targetDate.isBefore(endDate));

          return isInRange;
        });
      }

      setFilteredNamesGlobally(draft);
    },
    [state, fullNews],
  );

  const handleCategoryChange: SelectFieldHandleChangeType = (value) => {
    setState((prev) => ({ ...prev, categoryOption: value }));

    const updatedState = {
      ...state,
      categoryOption: value,
    };
    filterGlobalState(updatedState);
  };

  const handleSourceChange: SelectFieldHandleChangeType = (value) => {
    setState((prev) => ({ ...prev, sourceOption: value }));

    const updatedState = {
      ...state,
      sourceOption: value,
    };
    filterGlobalState(updatedState);
  };

  const handleAuthorChange: SelectFieldHandleChangeType = (value) => {
    setState((prev) => ({ ...prev, authorOption: value }));

    const updatedState = {
      ...state,
      authorOption: value,
    };
    filterGlobalState(updatedState);
  };

  const validateDateRange = useCallback(
    (dateStrings: [string, string]) => {
      const { endDate, startDate } = getFormattedDates(dateStrings);

      if (startDate.isAfter(endDate)) {
        openErrorNotification(
          ERROR_MESSAGES.START_DATE_AFTER_END_DATE,
          TOASTER_PLACEMENT,
        );
        return;
      }

      if (endDate.isBefore(startDate)) {
        openErrorNotification(
          ERROR_MESSAGES.END_DATE_BEFORE_START_DATE,
          TOASTER_PLACEMENT,
        );
        return;
      }
    },
    [openErrorNotification],
  );

  const handleDateRangeChange: DateRangeHandleChangeType = (
    dates,
    dateStrings,
  ) => {
    const updatedDate = {
      dates: dates as DatesType,
      dateStrings: dateStrings as [string, string],
    };

    validateDateRange(dateStrings);

    setState((prev) => ({ ...prev, dateRange: updatedDate }));

    const updatedState = {
      ...state,
      dateRange: updatedDate,
    };
    filterGlobalState(updatedState);
  };

  const handleKeywordChange = debounce(
    useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
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
          return;
        }

        filterGlobalState(updatedState);
      },
      [state, fullNews],
    ),
    800,
  );

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
