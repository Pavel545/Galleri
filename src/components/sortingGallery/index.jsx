import { useGetAuthorsQuery, useGetLocationsQuery } from "../../servise/todo";
import { Dropdown } from "../Dropdown";
import * as S from "./style";

export function Sorting(params) {
  return (
    <S.Box>
      <S.Input type="text" placeholder="Name" />
      <Auth setAuthor={params.setAuthor} />
      <Loc setLoc={params.setLoc} />
      <Dropdown label={"Created"}  />
    </S.Box>
  );
}
export function Auth(params) {
  const { data, error, isLoading } = useGetAuthorsQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  params.setAuthor(data);
  return <Dropdown label={"Author"} data={data} />;
}
export function Loc(params) {
  const { data, error, isLoading } = useGetLocationsQuery();
  if (isLoading) {
    return <p>Loading loc...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  params.setLoc(data);
  return <Dropdown label={"Location"} data={data} />;
}
