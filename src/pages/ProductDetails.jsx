import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const {
    data: product,
    loading,
    error,
  } = useFetch(`http://localhost:3001/products/${id}`);

  if (loading) return <p className="text-zinc-400 text-sm tracking-widest uppercase text-center mt-20 animate-pulse">Loading...</p>;
  if (error) return <p className="text-red-600 text-sm tracking-widest uppercase text-center mt-20">Something went wrong!</p>;

  if (!product) return null;

  return (
    <div className="pt-16 px-36 pb-20 text-black">
      <div className="flex justify-evenly items-center gap-16">
        <div className="max-w-xl flex flex-col gap-6">
          <div>
            <p className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-3">{product.category}</p>
            <h1 className="font-black text-4xl uppercase tracking-tight">{product.title}</h1>
          </div>
          <p className="text-zinc-500 leading-relaxed">{product.description}</p>
          <p className="text-5xl font-black">${product.price}</p>
          <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-black text-sm tracking-widest uppercase py-4 w-full transition-colors duration-200" onClick={()=>dispatch(addItem(product))}>
            Add to cart
          </button>
        </div>
        <img src={product.image} alt={product.title} className="border-2 border-black" />
      </div>
    </div>
  );
}