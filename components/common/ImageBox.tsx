import styled from "@emotion/styled";
import image from "../../assets/image.png";
import Image from "next/image";

interface ImageBoxProps {
  onClick: () => void;
}

const ImageBox = ({ onClick }: ImageBoxProps) => {
  return (
    <ImageBoxContainer onClick={onClick}>
      <Image src={image.src} width={50} alt="이미지 아이콘" />
    </ImageBoxContainer>
  );
};

const ImageBoxContainer = styled.div`
  width: 100%;
  height: 181px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.light_gray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ImageBox;
