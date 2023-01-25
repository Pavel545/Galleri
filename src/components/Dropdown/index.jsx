import * as S from "./style";

import styled from "styled-components";
import { useEffect, useState } from "react";

export const Dropdown = (props) => {
  const { label, data,setLocationFilter,setAuthorFilter } = props;

  const [isOpen, setOpen] = useState(false);
  const [Lab, setLab] = useState(label);
 
  const handleOpen = () => setOpen(!isOpen);
  const ResetSort=()=>setLab(label)
  const sortLoc =({name,id})=>{
    setLab(name);
    setLocationFilter(id)
  }
  const sortAuthor =({name,id})=>{
    setLab(name);
    setAuthorFilter(id)
  }
  
  
  if (label === "Author") {
    return (
      <S.Select onClick={handleOpen}>
        <S.SelectHead><S.ElementMenu>{Lab}</S.ElementMenu><S.ButtonReset onClick={ResetSort}/><S.ButtonFix/></S.SelectHead>
        
        {isOpen && (
          <S.Menu>
            {data.map((todo) => (
              <S.ElementMenu
                onClick={() => sortAuthor({mame:todo.name,id:todo.id})}
                value={todo.name}
                key={todo.id}
              >
                {todo.name}
              </S.ElementMenu>
            ))}
          </S.Menu>
        )}
      </S.Select>
    );
  }
  if (label === "Location") {
    return (
      <S.Select onClick={handleOpen}>
        <S.SelectHead><S.ElementMenu>{Lab}</S.ElementMenu><S.ButtonReset onClick={ResetSort}/><S.ButtonFix/></S.SelectHead>
        {isOpen && (
          <S.Menu>
            {data.map((todo) => (
              <S.ElementMenu
                onClick={() => sortLoc({name:todo.location,id:todo.id}) }
                value={todo.location}
                key={todo.id}
              >
                {todo.location}
              </S.ElementMenu>
            ))}
          </S.Menu>
        )}
      </S.Select>
    );
  }
  if (label === "Created") {
    return (
      <S.Select >
        <S.SelectHead onClick={handleOpen}><S.ElementMenu>{Lab}</S.ElementMenu><S.ButtonReset onClick={ResetSort}/><S.ButtonFix/></S.SelectHead>
        
        {isOpen && (
          <S.BoxAge>
          <S.Input placeholder="from" />
          -
          <S.Input placeholder="before" />
        </S.BoxAge>
        )}
      </S.Select>
    );
  }
};
