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
import styled from "@emotion/styled";

const Signup: NextPage = () => {
  const [value, setValue] = useInput({
    name: "",
    password: "",
    passwordCheck: "",
    id: "",
  });
  const router = useRouter();
  const [imageData, setImageData] = useState<string>("");

  useBridgeEvent("getImage", (e) => {
    setImageData(`data:image/jpeg;base64,${e.detail}`);
  });

  return (
    <SignupPageContainer>
      <Profile
        src={imageData}
        onClick={() => bridgeEvent("openGallery", undefined, () => {})}
      />
      <InputContainer>
        <Input
          label="이름"
          placeholder="이름을 입력하세요"
          name="name"
          value={value.name}
          onChange={setValue}
          limit={20}
        />
        <Input
          label="아이디"
          placeholder="아이디를 입력하세요"
          name="id"
          value={value.id}
          onChange={setValue}
          limit={20}
        />
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          name="password"
          type={"password"}
          value={value.password}
          onChange={setValue}
          limit={20}
        />
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요"
          name="passwordCheck"
          type={"password"}
          value={value.passwordCheck}
          onChange={setValue}
          limit={20}
        />
      </InputContainer>
      <Button
        onClick={() =>
          bridgeEvent("signUpNext", undefined, () => router.push("/test"))
        }
      >
        회원가입
      </Button>
    </SignupPageContainer>
  );
};

const SignupPageContainer = styled(PageContainer)`
  gap: 32px;
  padding-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Signup;
