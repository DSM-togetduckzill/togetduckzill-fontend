import { useRef } from "react";

const useScrollBottom = <T extends HTMLElement>() => {
  const bottomRef = useRef<T>(null);
  const toButtom = () => {
    if (bottomRef.current) {
      bottomRef.current?.scrollIntoView(false);
    } else {
      throw Error("bottomRef가 존재하지 않습니다. BottomRef 를 설정해주세요.");
    }
  };

  return { bottomRef, toButtom };
};

export default useScrollBottom;
