/* API KEY Constants */

export const NEWS_API_ORG_API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;

export const THE_GUARDIAN_API_KEY = import.meta.env.VITE_APP_GUARDIAN_API_KEY;

export const NY_TIMES_API_KEY = import.meta.env.VITE_APP_NY_TIMES_API_KEY;

/* Error Messages */

export const ERROR_MESSAGES = {
  START_DATE_AFTER_END_DATE: "Start date is after End date",
  END_DATE_BEFORE_START_DATE: "End Date is before the Start Date",
};

export const TOASTER_PLACEMENT = "topRight";

/* Mock Testing */
export const testing = false;

/* if api doesn't return the imgURL, this will be used as fallback image */
export const defaultImageURL =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const defaultURL = "https://www.theguardian.com/international";

export const IMAGE_KEYS_URL: Record<string, string> = {
  sport:
    "https://images.unsplash.com/photo-1579156618335-f6245e05236a?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entertainment:
    "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  news: "https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  lifestyle:
    "https://images.unsplash.com/photo-1533037853526-b94301e591db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  environment:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  arts: "https://plus.unsplash.com/premium_photo-1664438942410-e31ca26a4853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  opinion:
    "https://plus.unsplash.com/premium_photo-1664438942410-e31ca26a4853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
