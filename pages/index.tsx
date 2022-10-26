import type { NextPage } from "next";
import Input from "../components/common/Input";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import { bridgeEvent } from "../utils/func/bridgeEvent";
import PageContainer from "../components/common/Container";
import useInput from "../hooks/useInput";
import Profile from "../components/common/Profile";
import { useState } from "react";

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
  const onGetImage = async () => {
    try {
      const data = await bridgeEvent("getImage");
      alert(data);
      if (data) {
        const url = URL.createObjectURL(data);
        setImageData(url);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <PageContainer>
      <Profile src={imageData} onClick={onGetImage}></Profile>
      <Input
        label="이름"
        placeholder="입력하세요"
        name="name"
        value={value.name}
        onChange={setValue}
        limit={20}
      ></Input>
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={value.password}
        onChange={setValue}
        limit={20}
      ></Input>
      <Button
        onClick={() =>
          bridgeEvent("signUpNext", undefined, () => router.push("/test"))
        }
      >
        비밀번호
      </Button>
    </PageContainer>
  );
};

export default Home;
