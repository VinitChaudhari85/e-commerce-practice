import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const {
    data: products,
    loading,
    error,
  } = useFetch("http://localhost:3001/products");

  const filteredProducts = products
    ? products.filter((product) => product.category === category)
    : [];

  return (
    <div>
      This is the products page.
      {filteredProducts.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
