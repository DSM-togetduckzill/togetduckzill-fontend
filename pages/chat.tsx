import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import ChatInput from "../components/chat/ChatInput";
import PageContainer from "../components/common/Container";
import Message from "../components/common/Message";
import useChatTest from "../hooks/useChatTest";
import useInput from "../hooks/useInput";

const Chat = () => {
  const [chat, setChat] = useInput("");
  const { bottomRef, chatList, setChatList, toButtom } =
    useChatTest<HTMLInputElement>();

  const onSendChat = () => {
    if (chat) {
      setChatList((state) => [...state, { chat: chat, isMine: true }]);
      setChat({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
    }
    toButtom();
    bottomRef.current?.focus();
  };

  return (
    <ChatPageContainer>
      {chatList.map((chatInfo, idx) => (
        <Message isMine={chatInfo.isMine} key={idx}>
          {chatInfo.chat}
        </Message>
      ))}
      <ChatInput
        onSend={onSendChat}
        onChange={setChat}
        value={chat}
        placeholder="채팅을 입력하세요."
        inputRef={bottomRef}
      />
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled(PageContainer)`
  gap: 4px;
  padding-top: 20px;
`;

export default Chat;
