import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPages } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import { Picture } from "../Picture";

import * as S from "./style";
export function Gallery({ currentPage }) {
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      dataPages({
        pages: currentPage,
        limit: 12,
      })
    );
  }, [dispatch,currentPage]);
  const none = () => {};

  const a1 = (todo, aut) => {
    let le = "d";

    data.location.forEach((loca) => {
      if (todo.locationId === loca.id) {
        le = loca;
      }
    });

    return <Picture key={todo.id} todo={todo} author={aut} loc={le} />;
  };
  return (
    <S.Box>
      {data.pages.map((todo) =>
        data.author.map((aut) =>
          todo.authorId === aut.id ? a1(todo, aut) : none()
        )
      )}
    </S.Box>
  );
}
