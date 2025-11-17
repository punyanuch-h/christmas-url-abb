import styled from "@emotion/styled";

const Root = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export default Root;

