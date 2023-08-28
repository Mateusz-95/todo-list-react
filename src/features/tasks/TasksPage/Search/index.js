import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQueryParameter } from "../../../../queryParameters";
import { searchQueryParamName } from "../../../../searchQueryParamName";
import { Input } from "../Form/styled";
import { Wrapper } from "./styled";

export default () => {
  const location = useLocation();

  const history = useHistory();

  const query = useQueryParameter(searchQueryParamName);

  const inputRef = useRef(null);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <Input
        ref={inputRef}
        value={query || ""}
        placeholder="Filtruj zadania"
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
