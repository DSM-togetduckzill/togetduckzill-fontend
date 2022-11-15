import { useEffect, useState } from "react";
import useScrollBottom from "./useScrollBottom";

export type ChatType = { chat: string; isMine: boolean };

const useChatTest = <T extends HTMLElement>() => {
  const [chatList, setChatList] = useState<ChatType[]>([]);
  const { bottomRef, toButtom } = useScrollBottom<T>();
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
        setChatList((state) => [...state, { chat: s, isMine: false }]);
        toButtom();
      }, idx * 6000);
    });
  }, []);
  return { chatList, setChatList, bottomRef, toButtom };
};

export default useChatTest;
