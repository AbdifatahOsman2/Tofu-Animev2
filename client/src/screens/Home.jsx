import bg from "../Assests/darkRoom.png";
import luffy from "../Assests/Luffy.jpg";
import Bg from "../Assests/c1.jpg";
import ship from "../Assests/4ias7edxvv981.png";

import { useEffect } from "react";
import aos from "aos";
import { height } from "@mui/system";
import { Button } from "@material-ui/core";

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in",
    });
  }, []);

  return (
    <section className="sectionOne">
      <div className="container">
        <img className="landing-img" src={bg} />
        <div className="tofus">Tofu's</div>
        <div className="Anime">Anime</div>
      </div>
      <div data-aos="zoom" className="first-container">
        <img className="luffy" src={luffy} />
        <div className="first-text">
          <p>
            Eu proident enim proident elit sunt ea ex.Elit sit in mollit
            quis.Est aliqua pariatur eiusmod occaecat irure.Laborum et proident
            aliqua amet culpa qui.Excepteur consequat fugiat excepteur ad quis
            tempor magna eu enim consequat commodo.Pariatur exercitation aute
            commodo id proident fugiat laborum ex ut.Incididunt enim nisi
            occaecat est Lorem ex minim fugiat sint ex mollit.Ullamco
            exercitation qui irure elit elit esse est dolore cupidatat laborum.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="second-container">
        <img className="ship" src={ship} />
        <div className="second-text">
          <p>
            Eu proident enim proident elit sunt ea ex.Elit sit in mollit
            quis.Est aliqua pariatur eiusmod occaecat irure.Laborum et proident
            aliqua amet culpa qui.Excepteur consequat fugiat excepteur ad quis
            tempor magna eu enim consequat commodo.Pariatur exercitation aute
            commodo id proident fugiat laborum ex ut.Incididunt enim nisi
            occaecat est Lorem ex minim fugiat sint ex mollit.Ullamco
            exercitation qui irure elit elit esse est dolore cupidatat laborum.
          </p>
        </div>
      </div>

      <div data-aos="fade-left" className="third-container">
        <img className="Bg" src={Bg} />
        <div className="third-text">
          <p>
            Eu proident enim proident elit sunt ea ex.Elit sit in mollit
            quis.Est aliqua pariatur eiusmod occaecat irure.Laborum et proident
            aliqua amet culpa qui.Excepteur consequat fugiat excepteur ad quis
            tempor magna eu enim consequat commodo.Pariatur exercitation aute
            commodo id proident fugiat laborum ex ut.Incididunt enim nisi
            occaecat est Lorem ex minim fugiat sint ex mollit.Ullamco
            exercitation qui irure elit elit esse est dolore cupidatat laborum.
          </p>
          <Button
            className="btn"
            variant="contained"
            color="primary"
            size="large"
          >
            Learn More!
          </Button>
        </div>
      </div>

      {/* ---------------------------------------------------------------------FOOTER START HERE!----------------------------------------------------------------------------------------------------------------------------------- */}
      <footer>
        <div
          className="footer-social"
          data-aos="zoom-in-up"
          easing="ease-in-sine"
          data-aos-anchor-placement="bottom"
        >
          <a id="social">
            <i class="fab fa-github"></i>
          </a>
          <a id="social">
            <i class="fab fa-twitter"></i>
          </a>
          <a id="social">
            <i class="fab fa-youtube"></i>
          </a>
        </div>

        <ul
          className="site-map"
          data-aos="zoom-in-up"
          easing="ease-in-sine"
          data-aos-anchor-placement="bottom"
          offset="200"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="#">AllPosts</a>
          </li>
        </ul>
        <p
          data-aos="zoom-in-up"
          offset="300"
          easing="ease-in-sine"
          data-aos-anchor-placement="bottom"
          className="copyright"
        >
          © AbdifatahOsman 2022
        </p>
      </footer>
    </section>
  );
};

export default Home;
