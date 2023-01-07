import styled, { css } from "styled-components";

export const Box = styled.div`
  padding-top: 45px;
  display: flex;
`;
const data = (poz) => {
  if (poz === "first") {
    return css`
      border-radius: 20px 0 0 20px;
    `;
  }
  if (poz === "end") {
    return css`
      border-radius: 0 20px 20px 0;
    `;
  }
  if (poz === "active") {
    return css`
      background: #ffffff;
      color: #000000;
      border: 1px solid #ffffff;
    `;
  }
  return css``;
};
const Glob = (globalPoz,Li ) => {
  if (!globalPoz) {
    return css``
  }
  if (globalPoz === 1) {
    return css`
    opacity: 0.5;
    pointer-events: none;
    `;
  }
  if (Li===globalPoz) {
    return css`
    opacity: 0.5;
    pointer-events: none;
    `;
  }

  return css``;
};
export const Button = styled.button`
  box-sizing: border-box;

  width: 11.27px;
  height: 20.5px;
  left: 256.35px;
  top: 1434.25px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  color: #ffffff;

  width: 41px;
  height: 41px;

  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    background: #464646;
  }
  ${(props) => data(props.poz)}
  ${(props) => Glob(props.globalPoz, props.Li)}

`;
