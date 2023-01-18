import { useGetAllAuthorsQuery } from "../../services/todo";
import { Dropdown } from "../Dropdown";
import * as S from "./style";

export function Sorting(params) {
  const { data, error, isLoading } = useGetAllAuthorsQuery();

  if (isLoading) {
    return console.log("Loading Authors");
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  params.setAuthor(data);
  return (
    <S.Box>
      <S.Input type="text" placeholder="Name" />
      <Dropdown label={"Author"} data={data} />
    </S.Box>
  );
}
