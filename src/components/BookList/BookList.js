import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <Container maxWidth="md">
      {books?.length > 0 && (
        <Typography
          variant="h5"
          align="center"
          style={{ margin: "20px 0 10px 0" }}
        >
          Search Results
        </Typography>
      )}

      <Grid container spacing={3}>
        {books?.map((book) => (
          <Grid key={book.id} item xs={6} sm={4} md={3}>
            <BookItem {...book.volumeInfo} id={book.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BookList;
