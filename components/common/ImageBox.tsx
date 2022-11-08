import styled from "@emotion/styled";
import image from "../../assets/image.png";
import Image from "next/image";

interface ImageBoxProps {
  onClick: () => void;
  src?: string;
}

const ImageBox = ({ src, onClick }: ImageBoxProps) => {
  return (
    <ImageBoxContainer onClick={onClick}>
      {src ? (
        <ImageWrapper src={src}></ImageWrapper>
      ) : (
        <Image src={image.src} width={50} height={50} alt="이미지 아이콘" />
      )}
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

const ImageWrapper = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default ImageBox;
