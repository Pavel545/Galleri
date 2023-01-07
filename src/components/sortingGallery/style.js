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
`;

export const Option = styled.option`
  
`;
