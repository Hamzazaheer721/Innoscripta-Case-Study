import {
  DateRangeHandleChangeType,
  DatesType,
  SelectFieldHandleChangeType,
} from "general";
import { ChangeEvent, useRef, useState } from "react";
import { initialUserOptionsState } from "./helper";
import { InputRef } from "antd";

export const useUserOperations = () => {
  const [state, setState] = useState(() => initialUserOptionsState);

  const searchFieldRef = useRef<InputRef>(null);

  const handleCategoryChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });
    setState((prev) => ({ ...prev, categoryOption: value }));
  };

  const handleSourceChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });
    setState((prev) => ({ ...prev, sourceOption: value }));
  };

  const handleAuthorChange: SelectFieldHandleChangeType = (value, option) => {
    console.info({ value, option });
    setState((prev) => ({ ...prev, authorOption: value }));
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
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    console.info({ value: searchFieldRef.current?.input?.value });
    setState((prev) => ({
      ...prev,
      searchValue: value,
    }));
  };

  return {
    handleAuthorChange,
    handleCategoryChange,
    handleSourceChange,
    handleDateRangeChange,
    handleKeywordChange,
    state,
    searchFieldRef,
  };
};
