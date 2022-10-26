import { useEffect, useState } from "react";
import {
  BridgeDataType,
  bridgeEvent,
  BridgeEventType,
} from "../utils/func/bridgeEvent";

const useBridgeEffect = <T extends BridgeEventType>(
  event: T,
  data?: BridgeDataType[T],
  webEvent?: (data: BridgeDataType[T]) => void
) => {
  const [bridgeData, setBridgeData] = useState(null);
  useEffect(() => {
    bridgeEvent(event, data, webEvent);
  }, []);

  return { bridgeData };
};

export default useBridgeEffect;
