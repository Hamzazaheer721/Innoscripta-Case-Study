import { Spin } from "antd";
import { SpinnerStylesConfig } from "general";
import { FC, memo } from "react";

interface ILoaderProps {
  height?: string;
}

export const Loader: FC<ILoaderProps> = memo(({ height = "100vh" }) => (
  <div style={{ ...SpinnerStylesConfig, ...{ height } }}>
    <Spin size="large" />
  </div>
));
