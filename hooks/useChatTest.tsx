import { useEffect, useState } from "react";
import useScrollBottom from "./useScrollBottom";

export type ChatType = { chat: string; isMine: boolean };

type MockType = "ensemble" | "spider";

const useChatTest = <T extends HTMLElement>(mockType: MockType) => {
  const [chatList, setChatList] = useState<ChatType[]>([]);
  const { bottomRef, toButtom } = useScrollBottom<T>();
  useEffect(() => {
    const otherChat: Record<MockType, string[]> = {
      ensemble: [
        "안녕",
        "뭐해?",
        "혹시 앙상블 스타즈 많이 좋아하니?",
        "오 내 최애 캐릭터는 신카이 카나타야!",
        "너도 51명의 남자들이 나를 꼬신다 들어봤어?",
        "내가 제일 사랑하는 영상이야",
        "오늘도 들어봤는데... 신카이카나타... 너무 사랑해",
        "우리 잘 맞는거 같은데...",
        "나랑 친구하지 않을래??",
        "미안해..",
      ],
      spider: [
        "안녕하세요!",
        "스파이더 좋아하는 사람을 만나서 너무 좋아요",
        "스파이더맨 엄청 잘생겼지 않아요??",
        "저도 나중에 스파이더맨이 될 거에요",
        "그래서 요즘 초능력을 가질 수 있는 거미를 찾고 있어요wwwww",
        "헉 알겠습니다.",
      ],
    };
    otherChat[mockType].map((s, idx) => {
      setTimeout(() => {
        setChatList((state) => [...state, { chat: s, isMine: false }]);
        toButtom();
      }, idx * 6000);
    });
  }, []);
  return { chatList, setChatList, bottomRef, toButtom };
};

export default useChatTest;
