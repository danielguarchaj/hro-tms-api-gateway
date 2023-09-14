export const replaceSpacesForUrl = (inputString) => {
  return inputString.replace(/\s/g, "%20");
};

export const buildQueryStrinParams = (params) => {
  let queryString = "?";
  for (const [key, value] of Object.entries(params)) {
    queryString += `${value && key + "=" + value + "&"}`.trim();
  }
  return replaceSpacesForUrl(queryString);
};
