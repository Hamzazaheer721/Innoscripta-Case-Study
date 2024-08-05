/* eslint-disable no-constant-condition */
import { Button, DatePicker, Input } from "antd";
import { memo } from "react";
import { Container, LowerContainer, OuterContainer } from "./index.styled";
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
