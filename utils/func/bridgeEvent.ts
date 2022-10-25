type BridgeEventType = "navigate" | "signUpNext";

interface BridgeDataType {
  navigate: {
    url: string;
  };
  signUpNext: undefined;
}

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) == null ? false : true;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null
      ? false
      : true;
  },
  any: function () {
    return isMobile.Android() || isMobile.iOS();
  },
};

export const bridgeEvent = <T extends BridgeEventType>(
  event: T,
  data?: BridgeDataType[T],
  webEvent?: (data: BridgeDataType[T]) => void
) => {
  const windowThis = window as any;

  const stringData =
    typeof data === "string" ? String(data) : JSON.stringify(data);
  if (isMobile.any()) {
    if (isMobile.Android()) {
      typeof data === "undefined"
        ? windowThis.android[event]()
        : windowThis.android[event](stringData);
    }
  } else {
    data && webEvent?.(data);
  }
};
