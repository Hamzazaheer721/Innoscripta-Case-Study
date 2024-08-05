/* eslint-disable no-constant-condition */
import { DatePicker, Input } from "antd";
import { memo } from "react";
import { Container } from "./index.styled";

const RangePicker = DatePicker.RangePicker;
export const UserOperations = memo(() => {
  return (
    <Container>
      <Input placeholder="Search a keyword" />
      <RangePicker showTime />
    </Container>
  );
});
