import axios from "axios";
const baseUrl = " https://api.escuelajs.co/api/v1";

export const getAllcategories = async () => {
  const url = `${baseUrl}/categories`;
  try {
    const {data}=await axios.get(url)
    // console.log(data)
    return data;
  } catch (e) {
    return e;
  }
};
