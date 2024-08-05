import { ErrorBoundry } from "components";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "styles";
import { IProvidersProps } from "./types";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "lib";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { NotificationProvider } from "context/toaster.context";

export const Providers: FC<IProvidersProps> = ({ children }) => (
  <ErrorBoundry>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NotificationProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </NotificationProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </ErrorBoundry>
);
