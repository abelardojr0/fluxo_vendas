import styled from "styled-components";

export const CardStyled = styled.div`
  border: 2px solid #4a6ef1;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0px 30px;
  border-radius: 8px;
  h2 {
    color: #1d1d1d;
    font-weight: 600;
  }
  p {
    color: orange;
    background-color: #1d1d1d;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 12px;
  }
`;

export const CardInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardBotao = styled.button`
  border: none;
  background-color: #4a6ef1;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
`;
