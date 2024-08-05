import { createContext, useContext, useMemo, ReactNode, FC } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

interface NotificationContextType {
  openErrorNotification: (
    message: string,
    placement: NotificationPlacement,
  ) => void;
  openSuccessNotification: (
    message: string,
    placement: NotificationPlacement,
  ) => void;
}

// Create Context
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = (
    message: string,
    placement: NotificationPlacement,
  ) => {
    api.error({
      message,
      placement,
    });
  };

  const openSuccessNotification = (
    message: string,
    placement: NotificationPlacement,
  ) => {
    api.success({
      message,
      placement,
    });
  };

  const value = useMemo(
    () => ({ openErrorNotification, openSuccessNotification }),
    [api],
  );

  return (
    <NotificationContext.Provider value={value}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the Notification context
const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};

export { NotificationProvider, useNotification };
