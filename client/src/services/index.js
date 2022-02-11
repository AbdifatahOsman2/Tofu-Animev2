import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 

export const login = async (userInfo) => {
  try{
    const response = await axios.post(`${apiURL}/user/login`, userInfo)
    return response.data;
  }catch(error){
    console.error(error.message)
  }
}

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/user/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`)
  } catch (error) {
    console.error(error.message)
  }
}

export const getAllAnimes = async() => {
  try {
    const response = await axios.get(`${apiURL}/animes/`)
    return response.data
  } catch (error) {
    console.error(error.message)
  }
}

export const postNewAnime = async (newAnime) => {
  try {
    await axios.post(`${apiURL}/animes/`, newAnime)
  } catch (error) {
    console.error(error.message)
  }
}