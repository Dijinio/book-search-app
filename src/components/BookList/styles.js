import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  card: {
    minHeight: "300px",
    padding: "0 10px",
  },
  cardMedia: {
    height: "150px",
    margin: "0 auto",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  title: {
    display: "-webkit-box",
    overflow: " hidden",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    fontWeight: "800",
  },
}));
