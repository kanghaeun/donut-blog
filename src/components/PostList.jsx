import styled from "styled-components";
import PostItem from "./PostItem";

const PostList = ({ postData }) => {
  return (
    <div>
      <PostFrame>
        {postData.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </PostFrame>
    </div>
  );
};

export default PostList;

const PostFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
