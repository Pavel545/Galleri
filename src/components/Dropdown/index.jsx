import * as S from "./style";

import styled from "styled-components";
import { useEffect, useState } from "react";

export const Dropdown = (props) => {
  const { label, data } = props;

  const [isOpen, setOpen] = useState(false);
  const [Lab, setLab] = useState(label);
 
  const handleOpen = () => setOpen(!isOpen);
  const ResetSort=()=>setLab(label)
  useEffect(() => {
    
    console.log(Lab);
  });
  if (label === "Author") {
    return (
      <S.Select onClick={handleOpen}>
        <S.SelectHead><S.ElementMenu>{Lab}</S.ElementMenu><S.ButtonReset onClick={ResetSort}/><S.ButtonFix/></S.SelectHead>
        
        {isOpen && (
          <S.Menu>
            {data.map((todo) => (
              <S.ElementMenu
                onClick={() => setLab(todo.name)}
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
                onClick={() => setLab(todo.location)}
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
