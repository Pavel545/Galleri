import styled, { css } from "styled-components";
import { useThemeContext } from "../../context/theme";

export const Box = styled.div`
  padding-top: 45px;
  display: flex;

  grid-column:1/6;
  @media (max-width: 320px) {
    grid-column:1/-1;

  }
`;
const Data = (poz) => {
  const { theme } = useThemeContext();

  if (poz === "active") {
    return css`
      background: ${theme.color};
      color: ${theme.background};
      border: 1px solid ${theme.color};
    `;
  }
  return css``;
};
const Glob = (globalPoz, Li) => {
  if (!globalPoz) {
    return css``;
  }
  if (globalPoz === 1) {
    return css`
      opacity: 0.5;
      pointer-events: none;
    `;
  }
  if (Li === globalPoz) {
    return css`
      opacity: 0.5;
      pointer-events: none;
    `;
  }

  return css``;
};
const Themes = () => {
  const { theme } = useThemeContext();

  return css`
    background: ${theme.background};
    color: ${theme.color};
    border: 1px solid ${theme.color};
    &:hover {
      background: ${theme.hover};
    }
  `;
};
export const Button = styled.button`
  box-sizing: border-box;
  ${(props) => Themes()}
  width: 11.27px;
  height: 20.5px;
  left: 256.35px;
  top: 1434.25px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  width: 41px;
  height: 41px;

  
  &:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }
  &:nth-last-child(1) {
    border-radius: 0 5px 5px 0;
  }
  ${(props) => Data(props.poz)}
  ${(props) => Glob(props.globalPoz, props.Li)}
`;
