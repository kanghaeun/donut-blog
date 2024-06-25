import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { supabase } from "../supabase";
import styled from "styled-components";
import Modal from "react-modal";
import "./CreatePostCss.css";

const CreatePost = ({ isOpen, onRequestClose, getPostData }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async () => {
    const { data } = await supabase.from("page").insert([{ title, tag, body }]);
    setTitle(data);
    getPostData();
    onRequestClose();
    setTitle("");
    setTag("");
    setBody("");
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="CreatePostCss"
        overlayClassName="overlay"
      >
        <button onClick={onRequestClose}>
          <IoClose size="1.2rem" />
        </button>
        <InputField
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputField
          placeholder="태그를 입력하세요"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <InputField
          placeholder="메모를 입력하세요"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button onClick={onSubmit}>저장</button>
      </Modal>
    </>
  );
};

export default CreatePost;

const InputField = styled.input`
  width: calc(100% - 2.5rem);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;
