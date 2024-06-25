import styled from "styled-components";

const ContentDisplay = ({ title, tag, body }) => {
  return (
    <ContentFrame>
      <div>{title}</div>
      <div>{tag}</div>
      <div>{body}</div>
    </ContentFrame>
  );
};

export default ContentDisplay;

const ContentFrame = styled.div`
  background-color: blue;
  margin: 1rem;
  border-radius: 3rem;
  width: 50%;
  height: 96.5vh;
`;
