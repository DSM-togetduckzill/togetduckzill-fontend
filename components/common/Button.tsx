import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <>
      <ButtonWrapper>
        <CustomButton onClick={onClick}>{children}</CustomButton>
      </ButtonWrapper>
      <ButtonBlank />
    </>
  );
};

const ButtonWrapper = styled.div`
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const CustomButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.orange};
`;

const ButtonBlank = styled.div`
  width: 100%;
  height: 80px;
`;

export default Button;
