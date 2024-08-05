import { valueType } from "antd/es/statistic/utils";
import { DatesType } from "general";

export type UserOperationsType = {
  dateRange: {
    dates: DatesType;
    dateStrings: [string, string];
  };
  searchValue: string;
  categoryOption: valueType | null | undefined;
  sourceOption: valueType | null | undefined;
  authorOption: valueType | null | undefined;
};

export const initialUserOptionsState: UserOperationsType = {
  dateRange: {
    dates: null,
    dateStrings: ["", ""],
  },
  searchValue: "",
  categoryOption: null,
  sourceOption: null,
  authorOption: null,
};
