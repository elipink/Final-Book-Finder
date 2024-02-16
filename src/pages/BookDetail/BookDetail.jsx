import { useParams } from "react-router-dom";
import {FlexRow,
  FlexColumn,
  BookDetailContainer,
  BookDetailWrapper,
  BookImage,
  BookInfoSection,
  BookLinksSection,
  BookDescWrapper,
  BookDescriptionTitle,
  BookDescription,
} from "./BookDetail.styles";
import useGetGoogleBookByID from "hooks/useGetGoogleBookByID";



function BookDetail() {
  const { bookId } = useParams();
  const { book, loading, error } = useGetGoogleBookByID(bookId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <>
      {book && (
        <BookDetailContainer>
          <BookDetailWrapper>
            <BookImage src={book.volumeInfo.imageLinks.thumbnail} alt="desc"/>
            
            <BookInfoSection>
              <h2>{book.volumeInfo.title}</h2>
              <h5>{book.volumeInfo.subtitle}</h5>
              <FlexColumn>
                 {book.volumeInfo.authors.map((author,index) => <p key={index}>{author}</p>)}
                
              </FlexColumn>
              <FlexRow>
                <li>stare</li> <li>4.7</li> <li>204 Reting</li>{" "}
              </FlexRow>
              <p>{book?.volumeInfo.description}</p>
              <FlexRow>
                <span>Page Count: {book.volumeInfo.pageCount}</span>
                <span>Published Date: {book.volumeInfo.publishedDate}</span>
              </FlexRow>
              <FlexColumn>
                <h5>Categories</h5>
                <FlexRow>
                {book.volumeInfo.categories.map((category,index) => <p key={index}>  {category}</p>)}
                 
                </FlexRow>
              </FlexColumn>

              <FlexRow>
              {book.volumeInfo.industryIdentifiers.map((isbn,index) => <p key={index}>
                <span>{isbn.type}: </span>
                <span> {isbn.identifier}</span>
              </p>)}
                
              </FlexRow>
            </BookInfoSection>


            <BookLinksSection>
              
              {/* <a href="#">previewLink</a>
              <a href="#">downloadLink</a> */}
            </BookLinksSection>
          </BookDetailWrapper>

          <BookDescWrapper>
            <BookDescriptionTitle>Description</BookDescriptionTitle>
            <BookDescription>{book.volumeInfo.description}</BookDescription>
          </BookDescWrapper>
        </BookDetailContainer>
      )}
    </>
  );
}

export default BookDetail;
