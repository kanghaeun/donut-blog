import { useState } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

const PostList = ({ postData, handlePostClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPosts = postData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get current posts based on pagination
  const currentPosts = postData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PostFrame>
        {currentPosts.map((post) => (
          <PostItem key={post.id} {...post} handlePostClick={handlePostClick} />
        ))}
      </PostFrame>
      <PaginationWrapper>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
      </PaginationWrapper>
    </div>
  );
};

export default PostList;

// Styled components
const PostFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#c5c5c5" : "#F0F0F0")};
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c5c5c5;
  }
`;
