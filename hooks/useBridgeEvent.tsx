import { useEffect } from "react";
import { BridgeEventType, BridgeReturnType } from "../utils/func/bridgeEvent";

const useBridgeEvent = <T extends BridgeEventType>(
  event: T,
  callback: (e: CustomEvent<BridgeReturnType[T]>) => void
) => {
  useEffect(() => {
    const onCallback = ((e: CustomEvent<BridgeReturnType[T]>) => {
      callback(e);
    }) as EventListener;
    window.addEventListener(event, (e) => onCallback(e));
    return () => window.removeEventListener(event, (e) => onCallback(e));
  }, [callback, event]);
};

export default useBridgeEvent;
