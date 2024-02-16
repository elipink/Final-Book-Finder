import styled from 'styled-components';

export const FlexRow = styled.div`
 display: flex;
 justify-content: start;
 align-items: start;
 gap: 10px;
 `;

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 10px;
`;


export const BookDetailContainer = styled.div`
background-color: #fefbf8;
  /* border: 1px solid green; */
  width: 76vw;
  padding: 30px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;
export const BookDetailWrapper = styled.div`
  /* border: 3px solid orangered; */
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  min-height: 76vh;

  
 `;

//Book image section
export const BookImage = styled.img`
  /* border: 3px solid yellow; */
  flex: 2;
  width: 100%;
  height: 100%;
`;

//Book info section
export const BookInfoSection = styled.div`
  /* border: 3px solid green; */
  flex: 4;
  width: 100%;
  height: 100%;
`;
export const BookSummery = styled.p`
  padding: 0 ;
  overflow: hidden ;
  display: -webkit-box ;
  -webkit-box-orient: vertical ;
  -webkit-line-clamp: 3 ;
  margin: 2em 
`;


//Book link/action section
export const BookLinksSection = styled.div`
  /* border: 3px solid greenyellow; */
  flex: 1;
  width: 100%;
  height: 100%;
`;


//Description section
export const BookDescWrapper = styled.div`
  /* border: 3px solid purple; */
 
`;

export const BookDescriptionTitle = styled.h3`
  /* border: 3px solid orangered; */
 
`;
export const BookDescription = styled.p`
  /* border: 3px solid orangered; */
  padding-right: 180px;
 
`;

