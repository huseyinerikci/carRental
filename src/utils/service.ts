import { Car } from "../Types";

type ReturnType = {
  results: Car[];
  total_count: number;
};
export const fetchCars = async (
  make?: string,
  model?: string,
  year?: string,
  page: string = "1"
): Promise<ReturnType> => {
  let url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?";

  // Eğer marka filtresi varsa, url'e marka filtresini ekleyin
  if (make) {
    url += `&refine=make:${encodeURIComponent(make)}`;
  }

  // Eğer model filtresi varsa, url'e model filtresini ekleyin
  if (model) {
    url += `&refine=model:${encodeURIComponent(model)}`;
  }

  // Eğer yıl filtresi varsa, url'e yıl filtresini ekleyin
  if (year) {
    url += `&refine=year:${encodeURIComponent(year)}`;
  }

  //offset: page 1 iken 0, page 2 iken 10, page 3 iken 20, page 4 iken 30, page 5 iken 40 ve limit 10 olduğu için 10'ar 10'ar artıyor.
  const offset = (parseInt(page) - 1) * 10;

  url += `&limit=12`;
  url += `&offset=${offset}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
