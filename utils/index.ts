import { FilterProps } from "@/types";

export async function fetchBikes (filters : FilterProps) {
  const { model, make, year } = filters;

  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
  };

  const res = await fetch (
    `https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=${make}&model=${model}&year=${year}`, 
    { headers: headers,}
  );

  const result = await res.json();

  return result;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export const calculateBikeRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};