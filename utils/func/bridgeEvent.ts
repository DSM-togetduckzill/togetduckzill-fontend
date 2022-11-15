export type BridgeEventType =
  | "navigate"
  | "signUpNext"
  | "openGallery"
  | "getImage"
  | "makeRoomFinish";

export interface BridgeDataType extends Record<BridgeEventType, unknown> {
  navigate: {
    url: string;
  };
  signUpNext: undefined;
  makeRoomFinish: undefined;
}

export interface BridgeReturnType extends Record<BridgeEventType, unknown> {
  getImage: string;
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
): BridgeReturnType[T] | undefined => {
  const windowThis = window as any;
  const stringData =
    typeof data === "string" ? String(data) : JSON.stringify(data);
  if (isMobile.any()) {
    if (isMobile.Android()) {
      return typeof data === "undefined"
        ? windowThis.android[event]()
        : windowThis.android[event](stringData);
    }
  } else {
    data && webEvent?.(data);
  }
};
