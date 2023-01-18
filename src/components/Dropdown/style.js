import styled, { css } from "styled-components";
import { useThemeContext } from "../../context/theme";

const Themes = (hover) => {
  const { theme } = useThemeContext();
  if (hover === "hover") {
    return css`
      background: ${theme.background};
      color: ${theme.color};
      border: 1px solid ${theme.color};
      &:hover {
        background: ${theme.color};
        color: ${theme.background};
      }
    `;
  }
  return css`
    background: ${theme.background};
    color: ${theme.color};
    border: 1px solid ${theme.border};
  `;
};
export const Select = styled.div`
  ${(props) => Themes()}
  
  width: 265px;
  min-height: 45px;
  max-height:305px;
  border-radius:8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  padding-left:15px;
  justify-content: center;
  flex-direction: column;
  &:nth-last-child(1) {
    border-radius:  0 0 8px 8px;
  }
  
  &:nth-child(1) {
    border-radius: 8px 8px 0 0 ;
  }
  :first-of-type{
    border-radius: 8px ;
  }
  
`;
export const Menu = styled.div`
  ${(props) => Themes()}
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;

    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    width: 9px;
    height: 131.57px;

    background: #7b7b7b;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  width: 280px;
  min-height: 45px;
  max-height:305px;
  border-radius:8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  &:nth-last-child(1) {
    border-radius:  0 0 8px 8px;
  }
  
  &:nth-child(1) {
    border-radius: 8px 8px 0 0 ;
  }
  :first-of-type{
    border-radius: 8px ;
  }
  
`;
export const ElementMenu = styled.div`
  ${(props) => Themes("hover")}

  width: 265px;
  min-height: 45px;


 
  display: flex;
  align-items: center;
  padding-left:15px;
  border:none;
  
`;

