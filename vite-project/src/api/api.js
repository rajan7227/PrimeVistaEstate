import axios from "axios"

export const createResidency = async (data,) => {
    console.log(data)
    try{
      const res = await axios.post(
        "http://localhost:9090/property/create",
        {
          data
        }
      )
    }catch(error)
    {
      throw error
    }
  }