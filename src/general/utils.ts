export const addQueryParamsToUrl = (
  baseUrl: string,
  params: Record<string, string | number | boolean>,
): string => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value.toString());
    }
  });
  return url.toString();
};
