import { Select } from "antd";
import { valueType } from "antd/es/statistic/utils";
import {
  defaultOptions,
  SelectFieldHandleChangeType,
  SelectOptionType,
} from "general";
import { FC, memo } from "react";

interface ICustomSelectProps {
  onChange: SelectFieldHandleChangeType;
  placeholder: string;
  options: SelectOptionType[];
  value: valueType | null | undefined;
}

export const CustomSelect: FC<Partial<ICustomSelectProps>> = memo(
  ({ placeholder, onChange = undefined, options, value = undefined }) => {
    return (
      <Select
        showSearch
        placeholder={placeholder || "Select an option"}
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options ?? defaultOptions}
        onChange={onChange}
        value={value}
      />
    );
  },
);
