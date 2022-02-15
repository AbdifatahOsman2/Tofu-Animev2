import React from "react";
import { postNewAnime } from "../services";
import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";


const useStyles = makeStyles({
  textField: {
    width: "600px",
    marginTop: "25px",
  },
});

// const types = [
//   {
//     type: "Anime",
//   },
//   {
//     type: "Manga",
//   },
// ];

export default function PostAnime(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [hotTake, setHotTake] = useState("");
  const [image, setImage] = useState('')

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnime = {
      name,
      author,
      type,
      rating,
      hot_take: hotTake,
      image
    };
    await postNewAnime(newAnime);
    const response = await instance.get();
    const anime = response.data.results[0].image_url;
    setImage(anime)
    console.log(anime)
    history.push("/posts");
  };

  const instance = axios.create({
    baseURL: `https://api.jikan.moe/v3/search/anime?q=${name}`,
  });
  instance.defaults.withCredentials = false;

  const classes = useStyles();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
            marginLeft: "700px",
          }}
        >
          <TextField
            className={classes.textField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            label="Anime Name"
          />
          <TextField
            className={classes.textField}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            variant="filled"
            label="Anime Author/Creator"
          />
          <TextField
            className={classes.textField}
            value={hotTake}
            onChange={(e) => setHotTake(e.target.value)}
            variant="filled"
            label="Your Hot Take"
          />

          {/* <TextField
            select
            label="Select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            helperText="Please select your currency"
            style={{width:"600px"}}
          >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.type}
            </MenuItem>
          ))}
          </TextField> */}

          <TextField
            className={classes.textField}
            value={type}
            onChange={(e) => setType(e.target.value)}
            variant="filled"
            label="type"
          />

          <TextField
            className={classes.textField}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            variant="filled"
            label="Your Rating"
          />
          <Button
            variant="contained"
            style={{
              width: "250px",
              height: "40px",
              marginTop: "30px",
              marginLeft: "170px",
              color: "blue",
            }}
            type="submit"
          >
            Post!
          </Button>
        </Box>
      </form>
    </div>
  );
}
