import {
  DateRangeHandleChangeType,
  DatesType,
  getOptions,
  getSourceOptions,
  sanitizePayloadForApi,
  SelectFieldHandleChangeType,
} from "general";
import { ChangeEvent, useLayoutEffect, useMemo, useRef, useState } from "react";
import { initialUserOptionsState, UserOperationsType } from "./helper";
import { InputRef } from "antd";
import { useAppSelector } from "hooks";

export const useUserOperations = () => {
  const [state, setState] = useState<UserOperationsType>(
    () => initialUserOptionsState,
  );

  const searchFieldRef = useRef<InputRef>(null);

  const fullNews = useAppSelector((state) => state.news.fullNews);

  useLayoutEffect(() => {
    if (!searchFieldRef.current) return;
    if (!searchFieldRef?.current?.input) return;
    searchFieldRef.current.input.value = "";
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

  const makeApiCall = async (payload: UserOperationsType = state) => {
    const updatedPayload = sanitizePayloadForApi(payload);
    console.info({ updatedPayload });
    try {
      const response = true;
      console.info({ response });
    } catch (error) {
      console.error({ error });
    }
  };

  const handleCategoryChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, categoryOption: value }));

    const updatedState = {
      ...state,
      categoryOption: value,
    };

    makeApiCall(updatedState);
  };

  const handleSourceChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, sourceOption: value }));

    const updatedState = {
      ...state,
      sourceOption: value,
    };

    makeApiCall(updatedState);
  };

  const handleAuthorChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });

    setState((prev) => ({ ...prev, authorOption: value }));

    const updatedState = {
      ...state,
      authorOption: value,
    };

    makeApiCall(updatedState);
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

    makeApiCall(updatedState);
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setState((prev) => ({
      ...prev,
      searchValue: value,
    }));

    const updatedState = {
      ...state,
      searchValue: value,
    };

    makeApiCall(updatedState);
  };

  const handleClick = () => {
    if (searchFieldRef?.current?.input) {
      searchFieldRef.current.input.value = "";
    }
    setState(() => ({
      ...initialUserOptionsState,
    }));
    makeApiCall();
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
