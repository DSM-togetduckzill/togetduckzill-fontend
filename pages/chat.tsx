import styled from "@emotion/styled";
import ChatInput from "../components/chat/ChatInput";
import PageContainer from "../components/common/Container";
import Message from "../components/common/Message";
import useInput from "../hooks/useInput";

const Chat = () => {
  const [chat, setChat] = useInput("");
  return (
    <ChatPageContainer>
      <Message>sdfasdfjasdjfkasjkfsjadfaksjfdksjkaskdfjaksdjfk</Message>
      <Message>sdfa</Message>

      <Message>sdfa</Message>
      <Message isMine={false}>sdfa</Message>
      <Message>sdfa</Message>
      <ChatInput
        onSend={() => {}}
        onChange={setChat}
        value={chat}
        placeholder="채팅을 입력하세요."
      ></ChatInput>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled(PageContainer)`
  gap: 4px;
  padding-top: 20px;
`;

export default Chat;
