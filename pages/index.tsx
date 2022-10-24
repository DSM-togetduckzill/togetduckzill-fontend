import type { NextPage } from "next";
import Input from "../components/common/Input";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import { bridgeEvent } from "../utils/func/bridgeEvent";
import PageContainer from "../components/common/Container";
import useInput from "../hooks/useInput";
import Profile from "../components/common/Profile";

const Home: NextPage = () => {
  const inputValue = useInput({
    name: "",
    password: "",
  });
  const router = useRouter();
  return (
    <PageContainer>
      <Profile src=""></Profile>
      <Input
        label="이름"
        placeholder="입력하세요"
        name="name"
        value={inputValue[0].name}
        onChange={inputValue[1]}
        limit={20}
      ></Input>
      <Input
        label="비밀번호"
        placeholder="입력하세요"
        name="password"
        type={"password"}
        value={inputValue[0].password}
        onChange={inputValue[1]}
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
