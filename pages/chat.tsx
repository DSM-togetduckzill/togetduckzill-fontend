import styled from "@emotion/styled";
import PageContainer from "../components/common/Container";
import Message from "../components/common/Message";

const Chat = () => {
  return (
    <ChatPageContainer>
      <Message>sdfasdfjasdjfkasjkfsjadfaksjfdksjkaskdfjaksdjfk</Message>
      <Message>sdfa</Message>

      <Message>sdfa</Message>
      <Message isMine={false}>sdfa</Message>
      <Message>sdfa</Message>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled(PageContainer)`
  gap: 4px;
  padding-top: 20px;
`;

export default Chat;
