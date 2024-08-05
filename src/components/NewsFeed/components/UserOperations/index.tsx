/* eslint-disable no-constant-condition */
import { DatePicker, Input } from "antd";
import { memo } from "react";
import { Container } from "./index.styled";
import { CustomSelect } from "components/Select";
import { useUserOperations } from "./index.hook";

const RangePicker = DatePicker.RangePicker;

export const UserOperations = memo(() => {
  const {
    handleAuthorChange,
    handleCategoryChange,
    handleDateRangeChange,
    handleSourceChange,
    handleKeywordChange,
    state,
    searchFieldRef,
  } = useUserOperations();

  return (
    <Container>
      <Input
        placeholder="Search a keyword"
        onChange={handleKeywordChange}
        value={state.searchValue}
        ref={searchFieldRef}
      />
      <RangePicker
        showTime
        onChange={handleDateRangeChange}
        value={state.dateRange.dates}
      />
      <CustomSelect
        placeholder="Search to Select Category"
        onChange={handleCategoryChange}
        value={state.categoryOption}
      />
      <CustomSelect
        placeholder="Search to Select Source"
        onChange={handleSourceChange}
        value={state.sourceOption}
      />
      <CustomSelect
        placeholder="Search to Select Author"
        onChange={handleAuthorChange}
        value={state.authorOption}
      />
    </Container>
  );
});
