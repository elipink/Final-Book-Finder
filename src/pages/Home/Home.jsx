import HeroSection from "components/Hero/Hero";
import BookDisplay from "components/BookDisplay/BookDisplay";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import styled from "styled-components";
import { useAllBooks } from "context/useAllBooks";
import SearchContainer from "components/SearchContainer/SearchContainer";

const HeroBtn = styled.button`
  display: none;
  padding: 1rem 2rem;
  margin: 20px;
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
function Home() {
  const {
    searchedBooks: { items },
  } = useAllBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBook = (newBook) => {
    console.log("Adding new book:", newBook);
  };

  
  return (
    <>
      <HeroSection />
      <HeroBtn onClick={openModal}>Add New Book</HeroBtn>

      {items ? (
        <SearchContainer books={items} />
      ) : (
        <>
          <BookDisplay category={"Academics"} />
          <BookDisplay category={"History"} />
          <BookDisplay category={"Biography"} />
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddBook}
      />
    </>
  );
}

export default Home;
