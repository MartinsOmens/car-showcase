import { CarCardProps } from "@/types";
import axios from "axios";

const API_BASE_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export async function fetchCars(model = "carrera") {
  if (!process.env.RAPIDAPI_KEY || !process.env.RAPIDAPI_HOST) {
    throw new Error("RapidAPI credentials are missing");
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

const cars = await fetchCars("carrera");
// console.log(cars.length);    

//THE SECOND API FOR FETCHING CAR IMAGES

export const fetchCarImageURL = (car: CarCardProps, angle?: string) => {};
