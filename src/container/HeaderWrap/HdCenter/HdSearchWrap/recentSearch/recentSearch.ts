import cookie from 'cookie';

export const getRecentSearch = () => {
  const recentSearchDecode = cookie.parse(document.cookie).recentSearch;
  if (!recentSearchDecode) {
    return [];
  }
  const recentSearchString = unescape(recentSearchDecode);
  const recentSearchArray:Array<any> = JSON.parse(recentSearchString);
  return recentSearchArray;
};
export const setCookieRecentSearch = (arr:Array<string>) => {
  const arrString = JSON.stringify(arr);

  document.cookie = cookie.serialize('recentSearch', arrString);
};
