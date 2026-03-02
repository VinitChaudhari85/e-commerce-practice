import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

// WE ARE USING useSearchParams TO GET THE CATEGORIES FROM THE URL (IT LETS YOU READ QUERIES AND ALSO UPDATE THEM)

export default function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // THE CUSTOM HOOK GIVES US DATA, LOADING AND ERROR, WE JUST DESTRUCTURED THEM AND RENAMED THEM BY DOING data : products
  const {
    data: products,
    loading,
    error,
  } = useFetch("http://localhost:3001/products");

  // OKAY SO WE ARE COMPARING THE PRODUCTS CATEGORY FETCHED FROM THE DATA WITH THE CATEGORY RECEIEVED FROM THE URL
  const filteredProducts = products
    ? products.filter((product) => product.category === category)
    : [];

  // AND THEN WE ARE SHOWING THOSE SELECTED CATEGORY PRODUCTS ON THE PAGE
  // THIS WAY ONLY ONE PAGE IS REQUIRED WHICH IS USED FOR EVERY CATEGORY INSTEAD OF MAKING INDIVIDUAL PAGES FOR EACH CATEGORY.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="flex justify-center pt-12">
      <div className="grid grid-cols-3 gap-6 content-evenly">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
