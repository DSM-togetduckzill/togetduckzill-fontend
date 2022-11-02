import type { NextPage } from "next";
import Input from "../components/common/Input";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import { bridgeEvent } from "../utils/func/bridgeEvent";
import PageContainer from "../components/common/Container";
import useInput from "../hooks/useInput";
import Profile from "../components/common/Profile";
import { useState } from "react";
import useBridgeEvent from "../hooks/useBridgeEvent";

const Home: NextPage = () => {
  const [value, setValue] = useInput({
    name: "",
    password: "",
    pesswordCheck: "",
    id: "",
    introduce: "",
    phoneNumber: "",
    birth: "",
  });
  const router = useRouter();
  const [imageData, setImageData] = useState<string>("");

  useBridgeEvent("getImage", (e) => {
    setImageData(e.detail);
  });

  return (
    <PageContainer>
      <Profile src={imageData} onClick={() => bridgeEvent("openGallery")} />
      <Input
        label="이름"
        placeholder="입력하세요"
        name="name"
        value={value.name}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      />
      <Button
        onClick={() =>
          bridgeEvent("signUpNext", undefined, () => router.push("/test"))
        }
      >
        회원가입
      </Button>
    </PageContainer>
  );
};

export default Home;
