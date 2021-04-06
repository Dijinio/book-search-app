import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { liveSearchBooks, getBooks } from "../../redux/actions";
import useStyles from "./styles";

function SearchInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const liveResults = useSelector((state) => state.liveResults);
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) return;
    const timeout = setTimeout(() => {
      dispatch(liveSearchBooks(searchText));
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchText, dispatch]);

  useEffect(() => {
    liveResults && setOptions(liveResults);
    !searchText && setOptions([]);
  }, [liveResults, searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchText && dispatch(getBooks(searchText));
  };

  const handleAutocompleteSubmit = (e) => {
    if (e.key === "Enter" && searchText) {
      return dispatch(getBooks(searchText));
    }

    if (e.target.outerText) {
      dispatch(getBooks(e.target.outerText));
    }

    setSearchText(e.target.outerText);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        SEARCH FOR BOOKS BY TITLE
      </Typography>
      <Grid
        container
        spacing={1}
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={9}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={options}
            className={classes.input}
            onChange={handleAutocompleteSubmit}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search..."
                margin="normal"
                variant="outlined"
                autoComplete="off"
                autoFocus
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            className={classes.button}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchInput;
