import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    padding: "20px 10px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "clamp(1.2rem, 1.8vw, 2.2rem)",
    fontWeight: "700",
  },
  paragraph: {
    fontSize: "clamp(0.9rem, 1.3vw, 1.6rem)",
  },
  backButton: {
    display: "block",
    margin: "10px 0",
    letterSpacing: ".1rem",
  },
  image: {
    width: "100%",
  },
  span: {
    fontWeight: "700",
    marginRight: "5px",
  },
  circular: {
    display: "flex",
    height: "300px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
