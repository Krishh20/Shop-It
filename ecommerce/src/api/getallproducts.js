import axios from "axios";
const baseUrl = " https://api.escuelajs.co/api/v1";

export const getAllproducts = async () => {
  const url = `${baseUrl}/products`;
  try {
    const {data}=await axios.get(url)
    // console.log(data)
    return data;
  } catch (e) {
    return e;
  }
};
