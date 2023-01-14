import styled, { css } from "styled-components";

const back = (img) => {
  return css`
    background: url(https://test-front.framework.team${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `;
};

export const Box = styled.div`
  ${(props) => back(props.img)}
  display: flex;
  align-items: flex-end;
  width: 360px;
  height: 275px;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 20px;
`;
export const Name = styled.div`
  background: rgba(255, 255, 255, 0);
  font-family: "Roboto";
  font-size: 16px;
`;
export const Str = styled.div`
padding-top:8px;

  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0);
`;
export const Key = styled.div`
  background: rgba(255, 255, 255, 0);
  font-size: 13px;
  line-height: 20px;
`;
export const Content = styled.div`
  background: rgba(255, 255, 255, 0);
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  width: 200px;
`;
export const Text_op = styled.div`
  background: rgba(255, 255, 255, 0);
  
  
`;
export const Text = styled.div`
overflow: hidden;
  width: 360px;
  height: 30px;
  :hover {
    height: 145px;
  }
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.75);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;

  padding-left: 15px;
  padding-top: 5px;
  padding-bot: 5px;
`;
