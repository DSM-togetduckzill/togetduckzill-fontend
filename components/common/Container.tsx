import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background};
`;

export default PageContainer;
