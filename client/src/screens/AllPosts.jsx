import { getAllAnimes } from "../services";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllPosts(props) {
  const [anime, setAnime] = useState([]);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  
  const instance = axios.create({
    baseURL: `https://api.jikan.moe/v3/search/anime?q=${props.animeName}`,
  });
  instance.defaults.withCredentials = false;
  
  useEffect(() => {
    setName(props.animeName)
    getAllAnimes().then((fetchedAnime) => setAnime(fetchedAnime));
    const resp = instance.get().then((image) => setImage(image.data.results[0].image_url));
    console.log(props.image)
  }, []);

  return (
    <div>
      <section className="anime-section">
        <>
          {anime.map((anime) => (
            <div className="anime-container">
              <img src={props.image} alt="Anime-img"/>
              <h1 className="anime-text">{anime.name} by {anime.author}</h1>
              <p className="anime-text">{"{user}"}{props.user} rates this name {anime.rating} saying {anime.hot_take}</p>
            </div>
          ))}
        </>
      </section>
    </div>
  );
}
