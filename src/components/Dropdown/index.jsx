import { useGetLocationsQuery } from "../../services/todo";
import * as S from "./style";



import styled from "styled-components";
import { useEffect,  useState } from "react";



export const Dropdown = (props) => {
  const { label,data } = props;

  const [isOpen, setOpen] =useState(false)
  const [Lab, setLab] =useState(label)

  const handleOpen = () => setOpen(!isOpen);
  useEffect(() => {

    console.log(Lab);
    
})
  return (
    <div onClick={handleOpen}>
      <S.Select  >{Lab}</S.Select>
      {
      isOpen && (
        <S.Menu  >
          {data.map((todo,) => (
        <S.ElementMenu   onClick={()=>setLab(todo.name)} value={todo.name}   key={todo.id}  >{todo.name}</S.ElementMenu>
        
      ))}
        </S.Menu>        
      )
    }
    </div>
  );
};



