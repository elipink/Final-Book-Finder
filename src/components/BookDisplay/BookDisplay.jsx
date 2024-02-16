import Card from "components/Card/Card";
import {
  BookDisplayCatagoryName,
  BookDisplayContener,
  BookDisplayWrapper,
} from "./BookDisplay.styles";
import useSearchGoogleBooks from "hooks/useSearchGoogleBooks";

const BookDisplay = ({ category, maxResults }) => {
  const {
    books: { items },
    loading,
    error,
  } = useSearchGoogleBooks(category, maxResults);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BookDisplayContener>
      <BookDisplayCatagoryName>{category}</BookDisplayCatagoryName>
      <BookDisplayWrapper>
        {items &&
          items.map((book, index) => (
            <Card
              key={index}
              id={book.id}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              imageUrl={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://via.placeholder.com/150"
              }
            />
          ))}
      </BookDisplayWrapper>
    </BookDisplayContener>
  );
};

export default BookDisplay;
