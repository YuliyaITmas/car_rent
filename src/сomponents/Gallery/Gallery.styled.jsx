import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;
  padding: 20px 20px;

`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const LoadBtn = styled.button`
  margin: 0 auto;
  display: flex;
  padding: 0 12px 12px;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  color: rgba(52, 112, 255, 1);

  :hover,
  :focus {
    color: rgba(11, 68, 205, 1);
  }
`;