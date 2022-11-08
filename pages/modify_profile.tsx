import styled from "@emotion/styled";
import Button from "../components/common/Button";
import PageContainer from "../components/common/Container";
import Input from "../components/common/Input";
import Profile from "../components/common/Profile";
import useInput from "../hooks/useInput";

const ModifyProfile = () => {
  const [modifyValue, setModifyValue] = useInput({
    name: "",
    introduce: "",
    birth: "",
    phoneNumber: "",
  });
  return (
    <ModifyProfilePageContainer>
      <Profile src="" onClick={() => {}}></Profile>
      <InputContainer>
        <Input
          onChange={setModifyValue}
          value={modifyValue.name}
          label="이름"
          name="name"
          placeholder="이름을 입력하세요."
        />
        <Input
          onChange={setModifyValue}
          value={modifyValue.introduce}
          name="introduce"
          label="한 줄 소개"
          placeholder="한 줄 소개글을 작성하세요."
        />
        <Input
          onChange={setModifyValue}
          value={modifyValue.birth}
          name="birth"
          label="생년월일"
          placeholder="생년월일을 입력하세요."
        />
        <Input
          onChange={setModifyValue}
          value={modifyValue.phoneNumber}
          label="휴대폰 번호"
          name="phoneNumber"
          placeholder="휴대폰 번호를 입력하세요."
        />
      </InputContainer>
      <Button onClick={() => {}}>수정</Button>
    </ModifyProfilePageContainer>
  );
};

const ModifyProfilePageContainer = styled(PageContainer)`
  padding-top: 20px;
  gap: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default ModifyProfile;
