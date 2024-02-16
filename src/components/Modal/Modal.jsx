import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  height: auto;
  max-height: 90%;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const ModalHeader = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Select = styled.select`
  margin-bottom: 10px;
  width: 100%;
  border: 2px solid black;
  border-radius: 4px;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const ModaloBtn = styled.button`
  padding: 1rem 2rem;
  margin-left: 0.5rem;
  background-color: #8cb9ad;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #8cb9bd;
  }
`;

function Modal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = () => {
    onSubmit({ title, author });
    setTitle("");
    setAuthor("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <Overlay onClick={onClose} />
          <ModalWrapper method="dialog">
            <ModalContent>
            
              <form onSubmit={handleSubmit}>
              <ModalHeader>Add New Book</ModalHeader>
                <Input
                  id="isbn"
                  minLength="14"
                  maxLength="14"
                  placeholder="ISBN"
                  required
                />
                <Input id="image-url" placeholder="Image URL" required />
                <Input
                  id="author"
                  type="text"
                  placeholder="Author"
                  required
                />
                <Input id="title" placeholder="Title" required />
                <TextArea
                  id="description"
                  placeholder="Description"
                  rows="5"
                ></TextArea>
                <Input
                  id="edition"
                  placeholder="Edition"
                  type="number"
                  required
                />
                <Input id="publisher" placeholder="Publisher" />
                <Input
                  id="published-date"
                  placeholder="Published date"
                  type="date"
                  required
                />
                <Input id="pages" placeholder="Pages" type="number" required />
                <Input id="language" placeholder="Language" required />
                <div id="categories-container-add">
                  <Label for="categories">Categories</Label>
                  <Select>
                    <option value="Select">Select</option>
                    <option value="academic">Academic</option>
                    <option value="kids">Kids</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="biography">Biography</option>
                    <option value="business">Business</option>
                    <option value="science">Science</option>
                    <option value="reference">Reference</option>
                    <option value="poetry">Poetry</option>
                    <option value="religion">Religion</option>
                  </Select>
                </div>
                <div>
                  <ModaloBtn onClick={handleSubmit}>Add Book</ModaloBtn>
                  <ModaloBtn onClick={onClose}>Cancel</ModaloBtn>
                </div>
              </form>
            </ModalContent>
          </ModalWrapper>
        </>
      )}
    </>
  );
}

export default Modal;