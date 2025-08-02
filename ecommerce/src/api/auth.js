import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1"; // removed space

export const userLogin = async (email, password) => {
  const url = `https://api.escuelajs.co/api/v1/auth/login`;
  try {
    const { data } = await axios.post(url, { email, password });
    return data;
  } catch (e) {
    console.error("Login error:", e);
    throw e;
  }
};

