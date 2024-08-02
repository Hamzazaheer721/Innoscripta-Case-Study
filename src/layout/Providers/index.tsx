import { ErrorBoundry } from "components";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "styles";
import { IProvidersProps } from "./types";

export const Providers: FC<IProvidersProps> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ErrorBoundry>{children}</ErrorBoundry>
  </ThemeProvider>
);
