import { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  SearchForm,
  SearchBar,
  SearchButton,
} from "./Hero.styles";
import { useAllBooks } from "context/useAllBooks";
import axios from "axios";




const HeroSection = () => {
  const {setSearchedBooks} = useAllBooks();
  const [inputValue, setinputValue] = useState("");
  
  const handleChange = (e) => {
    setinputValue(e.target.value);
    // console.log(inputValue);
  };



  const handleSearchQuery = async (e) => {
    e.preventDefault();
    
    //fetch data
    const abortController = new AbortController();
      try {
        if (inputValue !== "") {
          
        //params
        const params = {
          q: inputValue,
          maxResults: 40,
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        };

        //request
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params,
            signal: abortController.signal,
          }
        );

        setSearchedBooks(response.data);
        
        } 
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error);
          
        }
      }

      // Log the context data!
    //  console.log(`The search rquest is done!`);
    //  console.group(`allBooks context Data=> `,searchedBooks );

      //Clean up function
      return () => {
        abortController.abort();
      };
  };

 

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Find the book you are looking for!</HeroH1>
        <HeroP>Get access to over 1,000,000 books in any format.</HeroP>
        <SearchForm onSubmit={handleSearchQuery}>
          <SearchBar
            onChange={(e) => {
              handleChange(e);
            }}
            value={inputValue}
            type="text"
            placeholder="Search by Title, Author, ISBN or Keyword . . ."
          />
          <SearchButton type="submit">Search Book</SearchButton>
        </SearchForm>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

// console.log("Serach query reasult");
// console.group(books);


 
    