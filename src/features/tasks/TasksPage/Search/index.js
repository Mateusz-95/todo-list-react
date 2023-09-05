import { useRef } from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../../queryParameters";
import { searchQueryParamName } from "../../../../searchQueryParamName";
import { Input } from "../Form/styled";
import { Wrapper } from "./styled";

export default () => {
  const query = useQueryParameter(searchQueryParamName);

  const replaceQueryParameter = useReplaceQueryParameter();

  const inputRef = useRef(null);

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value,
    });
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
