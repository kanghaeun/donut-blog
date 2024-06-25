import styled from "styled-components";

const PostItem = ({ title, tag, body, created_at, handlePostClick }) => {
  return (
    <>
      <PostCard onClick={() => handlePostClick(title, tag, body)}>
        <div>{title}</div>
        <div>{tag}</div>
        <div>{created_at.split("T")[0]}</div>
      </PostCard>
    </>
  );
};

export default PostItem;

const PostCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  gap: 24px;
  border: 1px solid #ebeaec;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 24px;
`;