import styled from "styled-components";

export const Box = styled.div`
  padding-top: 35px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bot: 35px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;
export const Input = styled.input`
  width: 265px;
  height: 45px;

  background: #0c0c0c;
  border: 1px solid #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  padding-left: 5px;
  color: rgba(255, 255, 255, 0.3);
`;
export const Select = styled.select`
  width: 265px;
  height: 45px;
  padding: 5px;
  background: #0c0c0c;
  border: 1px solid #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;

  color: #ffffff;
  box-sizing: border-box;
`;

export const Option = styled.option`
  background: #0c0c0c;
  border: 1px solid #ffffff;

  background-color: transparent;
  border: 0;
  padding-right: 15px;
  height: 31px;
  width: 220px;
  &:nth-child(1) {
    border-radius: 20px 0 0 20px;
  }
  &:nth-last-child(1) {
    border-radius: 0 20px 20px 0;
  }
`;
