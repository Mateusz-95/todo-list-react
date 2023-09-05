import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (queryParaName) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(queryParaName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  return ({ key, value }) => {
    const query = new URLSearchParams(location.search);

    query.set(key, value);
    history.push(`${location.pathname}?${query.toString()}`);
  };
};
