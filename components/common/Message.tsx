import { css, ThemeType } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface MessageProps {
  isMine?: boolean;
}

const Message = ({
  isMine = true,
  children,
}: PropsWithChildren<MessageProps>) => {
  return <MessageBox isMine={isMine}>{children}</MessageBox>;
};

const mineStyle = (theme: ThemeType) => css`
  align-self: flex-end;
  color: ${theme.white};
  background-color: ${theme.yellow};
  border-radius: 8px 8px 0 8px;
`;

const otherStyle = (theme: ThemeType) => css`
  align-self: flex-start;
  color: ${theme.black};
  background-color: ${theme.white};
  border-radius: 8px 8px 8px 0;
`;

const MessageBox = styled.div<{ isMine: boolean }>`
  font-size: 14px;
  font-weight: 400;
  padding: 6px 16px;
  ${({ isMine, theme }) => (isMine ? mineStyle(theme) : otherStyle(theme))}
  max-width: 60%;
  white-space: pre-line;
  word-break: break-all;
  height: auto;
`;

export default Message;
