import styled from "styled-components";

export const Main = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    padding-left: 34px;
    padding-right: 34px;
  }
  @media (max-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
`;
