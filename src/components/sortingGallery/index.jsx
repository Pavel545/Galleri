import { useEffect } from "react";
import {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAuthor, allLocations } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import { Dropdown } from "../Dropdown";
import * as S from "./style";

export function Sorting({setAuthor,setLoc,setFilter }) {
  const ref = useRef(null);
  const textSubmit = () => setFilter(ref.current.value)
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  let a =0;
  useEffect(() => {
    if (a===0) {
      dispatch(allAuthor());
      dispatch(allLocations());

      a++;
    }
  }, []);

  return (
    <S.Box>
      <S.Input ref={ref} onChange={textSubmit} type="text" placeholder="Name" />
      <Dropdown label={"Author"} data={data.author} />
      <Dropdown label={"Location"} data={data.location} />
      <Dropdown label={"Created"} />
    </S.Box>
  );
}
