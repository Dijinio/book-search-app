import SearchInput from "../SearchInput/SearchInput";
import BookList from "../BookList/BookList";
import { useSelector } from "react-redux";

function Home() {
  const books = useSelector((state) => state.books);

  const style = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: books.length > 0 ? "10px" : "200px",
  };

  return (
    <div style={style}>
      <SearchInput />
      <BookList />
    </div>
  );
}

export default Home;
