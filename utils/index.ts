import { FilterProps } from "@/types";

export async function fetchBikes (filters : FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    'x-rapidapi-key': 'd667da13d2msh010e04edb1a3b0cp1fcbc1jsnfa9b580ce735',
    'x-rapidapi-host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
  };

  const res = await fetch (`https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}`, {
    headers: headers,
  });

  const result = await res.json();

  return result;
}

export const calculateBikeRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};