import styled from "@emotion/styled";
import { ChangeEvent, RefObject, useRef } from "react";
import sendIcon from "../../assets/send.png";
interface ChatInputProps {
  value: string;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const ChatInput = ({
  onChange,
  onSend,
  value,
  placeholder,
  inputRef,
}: ChatInputProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <BottomWrapper
        onSubmit={(e) => {
          onSend();
          e.preventDefault();
        }}
      >
        <InputContainer>
          <Input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            ref={inputRef}
          />
          <SubmitIcon
            src={sendIcon.src}
            onClick={() => {
              onSend();
            }}
          ></SubmitIcon>
        </InputContainer>
      </BottomWrapper>
      <DisVisiableBox ref={bottomRef} />
    </>
  );
};

const BottomWrapper = styled.form`
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

const SubmitIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 12px;
`;

const Input = styled.input`
  flex: 1;
`;

const DisVisiableBox = styled.div`
  width: 100%;
  height: 72px;
`;
export default ChatInput;
