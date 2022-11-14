import styled from "@emotion/styled";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import sendIcon from "../../assets/send.png";
interface ChatInputProps {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const ChatInput = ({ onChange, value, placeholder }: ChatInputProps) => {
  return (
    <BottomWrapper>
      <InputContainer>
        <Input onChange={onChange} value={value} placeholder={placeholder} />
        <SubmitIcon src={sendIcon.src}></SubmitIcon>
      </InputContainer>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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
`;

const Input = styled.input`
  flex: 1;
`;

export default ChatInput;
