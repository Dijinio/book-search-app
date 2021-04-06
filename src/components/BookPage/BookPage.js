import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { fetchSingleBook } from "../../api";
import noImage from "../../images/noImage.png";
import useStyles from "./styles";

function BookPage({
  match: {
    params: { id },
  },
}) {
  const classes = useStyles();

  const [book, setBook] = useState({
    title: "",
    subtitle: "",
    publishedAt: "",
    infoLink: "",
    authors: [],
    categories: [],
    imageLinks: [],
  });

  const getBook = async (bookId) => {
    const {
      data: { volumeInfo },
    } = await fetchSingleBook(bookId);

    setBook(volumeInfo);
  };

  useEffect(() => {
    id && getBook(id);
  }, []);

  const {
    title,
    publishedDate,
    infoLink,
    authors,
    categories,
    imageLinks,
  } = book;

  if (!title) {
    return (
      <div className={classes.circular}>
        <CircularProgress size={60} color="secondary" />
      </div>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography
        variant="button"
        component={Link}
        to="/"
        color="primary"
        className={classes.backButton}
      >
        Back
      </Typography>
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img
              className={classes.image}
              src={imageLinks?.thumbnail || noImage}
              alt={title}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" align="center" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" paragraph className={classes.paragraph}>
              <span className={classes.span}>
                {authors?.length > 1 ? "Authors:" : "Author:"}
              </span>
              {authors?.join(", ")}
            </Typography>
            <Typography variant="body1" paragraph className={classes.paragraph}>
              <span className={classes.span}>
                {categories?.length > 1 ? "Categories:" : "Category:"}
              </span>
              {categories?.join(", ")}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              paragraph
              className={classes.paragraph}
            >
              <span className={classes.span}>Published:</span>
              {publishedDate}
            </Typography>
            <Button
              variant="text"
              color="primary"
              href={infoLink}
              target="_blank"
            >
              Full Info
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default BookPage;
