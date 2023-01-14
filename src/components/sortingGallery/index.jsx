import { useGetAllAuthorsQuery } from "../../services/todo";
import { Location } from "../Location";

import * as S from "./style";

export function Sorting(params) {

  const { data, error, isLoading } = useGetAllAuthorsQuery();
  
  if (isLoading) {
    return console.log("Loading Authors");
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  
  params.setAuthor(data)
  return (
    <S.Box>
      <S.Input type="text" placeholder="Name" />
      <S.Select>
        <S.Option value="Author">Author</S.Option>
        {data.map((todo) => (
        <S.Option value={todo.name}   key={todo.id}  >{todo.name}</S.Option>
      ))}
      </S.Select>
      <Location setLoc={params.setLoc}/>
      <S.Select>
        <S.Option value="">Created</S.Option>
      </S.Select>
    </S.Box>
  );
}
