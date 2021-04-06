import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import noImage from "../../images/noImage.png";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

function BookItem({
  id,
  title,
  authors,
  imageLinks,
  publishedDate,
  averageRating,
}) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.card}>
      <Link to={`/book/${id}`}>
        <CardMedia
          image={imageLinks?.smallThumbnail || noImage}
          title={title}
          className={classes.cardMedia}
        />
      </Link>

      <CardContent>
        <Typography
          variant="body1"
          align="center"
          paragraph
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {authors ? authors.join(", ") : "Unknown author"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {publishedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating value={averageRating || 0} readOnly />
      </CardActions>
    </Card>
  );
}

export default BookItem;
