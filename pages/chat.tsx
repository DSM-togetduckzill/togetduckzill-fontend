import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ChatInput from "../components/chat/ChatInput";
import PageContainer from "../components/common/Container";
import Message from "../components/common/Message";
import useInput from "../hooks/useInput";
import localstorage from "../utils/func/localstorage";

type ChatType = { chat: string; isMine: boolean };

const Chat = () => {
  const [chat, setChat] = useInput("");
  const [chatList, setChatList] = useState<ChatType[]>([]);
  useEffect(() => {
    const listData = localstorage.getData("chatList");
    setChatList((JSON.parse(listData) as ChatType[]) || []);
  }, []);

  useEffect(() => {
    const otherChat = [
      "안녕",
      "뭐해?",
      "혹시 앙상블 스타즈 많이 좋아하니?",
      "오 내 최애 캐릭터는 신카이 카나타야!",
      "우리 많이 친해지자!",
      "실명 공개할까?",
    ];
    otherChat.map((s, idx) => {
      setTimeout(() => {
        setChatList((state) => {
          const afterData = [...state, { chat: s, isMine: false }];
          localstorage.setData("chatList", JSON.stringify(afterData));
          return afterData;
        });
      }, (idx - 1) * 6000);
    });
  }, []);

  const onSendChat = () => {
    if (chat) {
      setChatList((state) => {
        const afterData = [...state, { chat: chat, isMine: true }];
        localstorage.setData("chatList", JSON.stringify(afterData));
        return afterData;
      });
      setChat({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
    }
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
      />
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled(PageContainer)`
  gap: 4px;
  padding-top: 20px;
`;

export default Chat;
