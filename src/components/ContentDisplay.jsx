import styled from "styled-components";
import donutImg from "../assets/donutImg.jpg";

const ContentDisplay = ({ title, tag, body }) => {
  return (
    <ContentFrame>
      <ImageWrapper>
        <Image src={donutImg} />
        <TitleWrapper>
          <div>{title}</div>
        </TitleWrapper>
        <TagWrapper>
          <div>{tag}</div>
        </TagWrapper>
        <BodyWrapper>
          <div>{body}</div>
        </BodyWrapper>
      </ImageWrapper>
    </ContentFrame>
  );
};

export default ContentDisplay;

const ContentFrame = styled.div`
  margin: 1rem;
  border-radius: 3rem;
  width: 50%;
  height: 96.5vh;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 96vh;
  border-radius: 3rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  object-fit: cover;
  opacity: 0.7;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  color: white;
  font-size: 18px;
`;

const BodyWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 20px;
  color: white;
  font-size: 16px;
`;
