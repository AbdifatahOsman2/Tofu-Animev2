import { login } from "../services";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Box, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";


const useStyles = makeStyles({
  input: {
    width:'800px',
    ['@media (max-width:480px)']: {
      width: '380px',
      margin:'5px auto'
    }
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
    marginLeft: "700px",
    ['@media (max-width:480px)']: {
      marginTop: "px",
      marginLeft: "0px",
    }
  },
  btn: {
    width: "250px",
    height: "40px",
    marginTop: "30px",
    marginLeft: "170px",
    color: "blue",
    ['@media (max-width:480px)']: {
      margin:'10px auto'
    }
  }
});
const Login = ({setUser}) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleSubmit = async (e) => {
      e.preventDefault();
      const userInfo = {
        username,
        password,
      };
      const user = await login(userInfo);
      setUser(user);
      
      history.push('/');
  };


  return (
    <section className="login-body">
      <form onSubmit={handleSubmit}>
        <Link to="/">
          <i id="otter" class="fas fa-otter"></i>
        </Link>
        <Box
          className={classes.box}
        >
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.input}
            variant="filled"
            label="username"
            helperText="*username Required"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.input}
            variant="filled"
            label="Password"
            helperText="*Password Required"
          />
          <Button
            variant="contained"
            className={classes.btn}
            type= "submit"
          >
            Login
          </Button>
          <p className="notReg">
            <Link to="/register">Not Registered?</Link>
          </p>
        </Box>
      </form>
    </section>
  );
};

export default Login;
