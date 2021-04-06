import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    padding: "10px 0",
  },
  input: {
    "& .MuiFormControl-root": {
      margin: "0",
    },
  },
  button: {
    height: "56px",
  },
}));
