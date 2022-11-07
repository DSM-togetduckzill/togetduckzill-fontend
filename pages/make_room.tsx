import { useState } from "react";
import ImageBox from "../components/common/ImageBox";
import useBridgeEvent from "../hooks/useBridgeEvent";
import { bridgeEvent } from "../utils/func/bridgeEvent";

const MakeRoom = () => {
  const [ImaggeData, setImageData] = useState<string>("");
  useBridgeEvent("getImage", (e) => {
    setImageData(`data:image/jpeg;base64,${e.detail}`);
  });
  return <ImageBox onClick={() => bridgeEvent("openGallery")}></ImageBox>;
};

export default MakeRoom;
