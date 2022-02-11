import HashLoader from "react-spinners/HashLoader";
import { Route, Switch, Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AllPosts from "./screens/AllPosts";
import Home from "./screens/Home";
import PostAnime from "./screens/PostAnime";
import Profile from './screens/Profile'

import './screens/Profile.scss'
import "./screens/PostAnime.scss";
import "./screens/Register.scss";
import "./screens/AllPosts.scss";
import "./screens/Login.scss";
import "./screens/Home.scss";
import "./App.scss";
import "./components/Nav.scss";

function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] =useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <HashLoader
            id="loading"
            color={"#f50057"}
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <>
          <Switch>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/register">
              <Register setUser={setUser} />
            </Route>
            <PostAnime setImage={setImage} exact path="/post-anime" />
            <>
              <Nav user={user} setUser={setUser} />
              <Route  path='/profile'>
                <Profile user={user} setUser={setUser}/>
              </Route>
              <Route exact image={image}  path="/posts">
                <AllPosts user={user}/>
              </Route>
              <Route exact path="/" component={Home} />
            </>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
