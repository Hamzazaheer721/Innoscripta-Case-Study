import { ErrorBoundry } from "components";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "styles";
import { IProvidersProps } from "./types";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "lib";

export const Providers: FC<IProvidersProps> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ErrorBoundry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundry>
  </ThemeProvider>
);
