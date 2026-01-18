import axios from "axios";

const API_BASE_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
// const API_HOST = "cars-by-api-ninjas.p.rapidapi.com";

export async function fetchCars(model = "corolla") {
  if (!process.env.RAPIDAPI_KEY) {
    throw new Error("RAPIDAPI_KEY is not defined");
  }

  try {
    const response = await axios.get(API_BASE_URL, {
      params: { model },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}
