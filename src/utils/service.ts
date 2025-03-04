import { Car } from "../Types";

type ReturnType = {
  results: Car[];
  total_count: number;
};
export const fetchCars = async (): Promise<ReturnType> => {
  const url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make:BMW";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
