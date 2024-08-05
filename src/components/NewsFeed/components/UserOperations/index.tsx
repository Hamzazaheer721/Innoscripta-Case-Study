/* eslint-disable no-constant-condition */
import { Button, DatePicker } from "antd";
import { memo } from "react";
import {
  Container,
  InputField,
  LowerContainer,
  OuterContainer,
} from "./index.styled";
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
    handleClick,
    options,
  } = useUserOperations();

  return (
    <OuterContainer>
      <Container>
        <InputField
          placeholder="Search a keyword"
          onChange={handleKeywordChange}
          ref={searchFieldRef}
          id="news-feed-search-field"
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
          options={options.categoryOptions}
        />
        <CustomSelect
          placeholder="Search to Select Source"
          onChange={handleSourceChange}
          value={state.sourceOption}
          options={options.sourceOptions}
        />
        <CustomSelect
          placeholder="Search to Select Author"
          onChange={handleAuthorChange}
          value={state.authorOption}
          options={options.authorOptions}
        />
      </Container>{" "}
      <LowerContainer>
        <Button type="primary" danger onClick={handleClick}>
          Reset All Filters
        </Button>
      </LowerContainer>
    </OuterContainer>
  );
});
