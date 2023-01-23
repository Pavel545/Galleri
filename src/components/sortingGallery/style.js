import styled, { css } from "styled-components";
import { useThemeContext } from "../../context/theme";

const Themes = (hover) => {
  const { theme } = useThemeContext();
  if (hover === "hover") {
    return css`
      background: ${theme.background};
      color: ${theme.color};
      border: 1px solid ${theme.border};
      &:hover {
        background: ${theme.color};
      }
    `;
  }
  return css`
    background: ${theme.background};
    color: ${theme.color};
    border: 1px solid ${theme.border};
  `;
};
export const Box = styled.div`
  padding-top: 35px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  padding-bot: 35px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  height: 75px;

  grid-column: 1/-1;
  @media (max-width: 320px) {
    flex-direction: column;
    height: 243px;

  }
`;
export const Input = styled.input`
  ${(props) => Themes()}
  height: 45px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  padding-left: 5px;
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 140px;
  }
  @media (max-width: 320px) {
    width: 260px;
    min-height: 45px;
  }
`;

export const SelectTitle = styled.div`
  ${(props) => Themes()}

  width: 265px;
  height: 45px;
  padding: 5px;
  border-radius: 8px;
  margin: 0 auto;
`;
export const Option = styled.option`
  ${(props) => Themes("hover")}

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  background-color: transparent;
  border: 0;
  padding-right: 15px;
  width: 270px;
  height: 40px;

  &:nth-child(1) {
    border-radius: 20px 0 0 20px;
  }
  &:nth-last-child(1) {
    border-radius: 0 20px 20px 0;
  }
`;
