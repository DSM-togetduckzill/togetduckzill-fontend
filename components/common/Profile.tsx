import styled from "@emotion/styled";
import EditIcon from "../../assets/edit.png";

interface ProfileType {
  src: string;
}

const Profile = ({ src }: ProfileType) => {
  return (
    <ImageWrapper src={src}>
      <EditButton />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{ src: string }>`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.light_gray};
  background-position: center;
  background-size: cover;
`;
const EditButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(${EditIcon.src});
  background-color: ${({ theme }) => theme.white};
  background-size: 12px 12px;
  background-position: center;
  position: absolute;
  background-repeat: no-repeat;
  bottom: 0;
  right: 0;
`;

export default Profile;
