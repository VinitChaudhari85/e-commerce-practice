import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`http://localhost:3001/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  if (!product) return null;

  return (
    <div className="pt-12">
      <div className="flex justify-evenly">
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="font-semibold text-3xl">{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className="bg-slate-500 p-2 w-full rounded-2xl text-white ">
            Add to cart
          </button>
        </div>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
}
