import { useState } from "react";
import { register } from "../services";
import { Link } from "react-router-dom";
import luffy from "../Assests/23231-5-one-piece-chibi-image.png";
import { TextField, Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: "700px",
    marginTop: "20px",
    color: "primary",
    ['@media (max-width:480px)']: {
      width: '350px',
      margin: '10px auto'
    }
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginTop: "0px",
    marginLeft: "70px",
    ['@media (max-width:480px)']: {
      marginLeft: "0px",
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around'
    }
  },
  btn:{
    width: "200px",
    height: "40px",
    marginTop: "30px",
    marginLeft: "250px",
    color: "blue",
    ['@media (max-width:480px)']: {
      width:'auto',
    }
  }
});

const Register = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const classes = useStyles();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    const user = await register(newUser);
  };

  return (
    <section className="register-body">
          <img className="luffy" src={luffy} />
      <div>
        <form onSubmit={handleSubmit}>
          <Box
          className={classes.box}
          >
            <h1>Create a free account</h1>
            <p>
              Aliqua nisi dolore incididunt officia officia do ad dolor irure
              officia.
            </p>
            <TextField
              className={classes.input}
              id="#reg-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="filled"
              label="UserName"
              helperText="*Username Required"
              color="primary"
            />
            <TextField
              id="#reg-email"
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              label="Email"
              helperText="*Email Required"
            />
            <TextField
              className={classes.input}
              id="#reg-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              label="Password"
              helperText="*Password Required"
            />
            <TextField
            className={classes.input}
              id="#reg-setPassword"
              variant="filled"
              label="Confirm Password"
              helperText="*Confirm Password"
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.btn}
            >
              Register
            </Button>
            <p className="sign-in">
              <Link to="/login">Already a member?</Link>
            </p>
          </Box>
        </form>
      </div>

    </section>
  );
};

export default Register;
