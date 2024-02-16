import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-image: url(${require('../../assets/hero-book.jpg')});
  background-size: cover; 
  background-position: center; 
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  backdrop-filter: contrast(50%);
  color: #333;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  text-align: center;
  width: 100%;
  padding: 2rem;
`;

export const HeroH1 = styled.h1`
  color: aliceblue;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HeroP = styled.p`
color: aliceblue;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;
 
export const SearchForm = styled.form`
   /* border: 4px solid red; */
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem;
`;

export const SearchBar = styled.input`
 padding: 1rem 2rem;
  width: 500px;
  border: 4px solid #dfeced;
  border-radius: 6px;
  font-size: 1rem;
  

  &:focus {
    outline: none;
    border: 4px solid #8CB9BD;
  }
`;

export const SearchButton = styled.button`
  padding: 1rem 2rem;
  margin-left: .5rem;
  background-color: #8CB9aD;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #8CB9BD;
  }
`;