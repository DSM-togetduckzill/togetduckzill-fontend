export const isClient = () => {
  if (!window) throw Error("server 상태입니다.");
};
