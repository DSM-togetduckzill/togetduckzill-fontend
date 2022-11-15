import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../components/common/Button";
import PageContainer from "../components/common/Container";
import ImageBox from "../components/common/ImageBox";
import Input from "../components/common/Input";
import useBridgeEvent from "../hooks/useBridgeEvent";
import useInput from "../hooks/useInput";
import { bridgeEvent } from "../utils/func/bridgeEvent";

const MakeRoom = () => {
  const [imageData, setImageData] = useState<string>("");
  const [makeRoomInfo, setMakeRoomInfo] = useInput({
    roomName: "",
    roomDescription: "",
  });
  useBridgeEvent("getImage", (e) => {
    setImageData(`data:image/jpeg;base64,${e.detail}`);
  });
  return (
    <MakeRoomInfoContainer>
      <ImageBox src={imageData} onClick={() => bridgeEvent("openGallery")} />
      <InputConatiner>
        <Input
          onChange={setMakeRoomInfo}
          placeholder="방 제목을 입력해주세요"
          limit={15}
          name="roomName"
          value={makeRoomInfo.roomName}
        />
        <Input
          onChange={setMakeRoomInfo}
          placeholder="방 설명을 간단히 적어주세요."
          limit={20}
          name="roomDescription"
          value={makeRoomInfo.roomDescription}
        />
      </InputConatiner>
      <Button onClick={() => bridgeEvent("makeRoomFinish")}>방 생성하기</Button>
    </MakeRoomInfoContainer>
  );
};

const MakeRoomInfoContainer = styled(PageContainer)`
  padding-top: 20px;
  gap: 20px;
`;
const InputConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default MakeRoom;
