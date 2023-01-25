import styled, { css } from "styled-components";
import { useThemeContext } from "../../context/theme";

const Themes = (key) => {
  const { theme } = useThemeContext();
  if (key === "hover") {
    return css`
      background: ${theme.background};
      color: ${theme.color};
      border: 1px solid ${theme.color};
      &:hover {
        background: ${theme.color};
        color: ${theme.background};
      }
      &:nth-child(1) {
        border-bot: 1px solid ${theme.border};
        pointer-events: none;
        border-radius: 8px;
      }
    `;
  }
  if (key === "button") {
    return css`
      border-top: 6px solid ${theme.button};
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
  position: relative;

  min-width: 265px;
  max-height: 305px;

  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  @media (max-width: 1024px) {
    min-width: 220px;
  }
  @media (max-width: 768px) {
    min-width: 160px;
  }
  @media (max-width: 320px) {
    width: 265px;
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

  width: 264px;
  min-height: 205px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  &:nth-last-child(1) {
    border-radius: 0 0 8px 8px;
  }

  &:nth-child(1) {
    border-radius: 8px 8px 0 0;
  }
  :first-of-type {
    border-radius: 8px;
  }
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 160px;
  }
  @media (max-width: 320px) {
    width: 264px;
  }
`;
export const ElementMenu = styled.div`
  ${(props) => Themes("hover")}

  width: 240px;

  min-height: 45px;

  display: flex;
  align-items: center;
  padding: 2px;

  padding-left: 15px;
  border: none;
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 140px;
  }
  @media (max-width: 320px) {
    width: 265px;
  }
`;
export const Input = styled.input`
  ${(props) => Themes()}
  width: 95px;
  height: 45px;

  background: #ffffff;
  border-radius: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: rgba(0, 0, 0, 0.3);
`;
export const BoxAge = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: row;
  padding: 15px;
`;
export const ButtonFix = styled.div`
  ${(props) => Themes("button")}
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;
export const ButtonReset = styled.div`
  position: relative;
  height: 8px;
  width: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: #555555;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
export const SelectHead = styled.div`
  display: flex;
  max-width: 255px;
  align-items: center;
  gap: 5px;
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 160px;
  }
  @media (max-width: 320px) {
    width: 265px;
  }
`;
