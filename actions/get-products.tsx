import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  companyId?: string;
  model?: string;
  tyre?: string;
  condition?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      companyId: query.companyId,
      model: query.model,
      tyre: query.tyre,
      condition: query.condition,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  console.log(getProducts);
  return res.json();
};

export default getProducts;
