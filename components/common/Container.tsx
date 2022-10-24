import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface PageContainerProps {}

const PageContainer = ({ children }: PropsWithChildren<PageContainerProps>) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: absolute;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background};
`;

export default PageContainer;
