import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:9090",
});

export const getAllFav = async (email, loggedInUser) => {
  if(!loggedInUser) return 
  try{

    const res = await api.post(
      `/user/favorite`,
      {
        email,
      }
    );
      
    return res.data["favResidenciesID"]

  }catch(e)
  {
    toast.error("Something went wrong while fetching favs");
    throw e
  }
} 

export const toFav = async (id, email) => {
  try {
    await api.post(
      `/user/tofavorite/${id}`,
      {
        email,
      }
    );
  } catch (e) {
    throw e;
  }
};