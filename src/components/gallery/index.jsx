import { useGetAllPictureQuery } from "../../services/todo";
import { Picture } from "../Picture";
import * as S from "./style";
export function Gallery(params) {
  const { data, error, isLoading } = useGetAllPictureQuery();

  if (isLoading) {
    return console.log("Loading");
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  const noteOnPages = 12;

  console.log(data);
  return (
    <S.Box>
      {data.map((todo) => (
        <Picture key={todo.id} todo={todo} />
      ))}
    </S.Box>
  );
}
