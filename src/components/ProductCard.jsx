// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { addItem } from "../store/cartSlice";

export default function ProductCard({ product }) {
  // const dispatch = useDispatch();

  return (
    <Link to={`/product/${product.id}`} >
      <div className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 flex flex-col h-full">
        {/* THIS DIV WILL CONTAIN THE IMAGE  */}
        <div className="overflow-hidden">
          <img
            className="w-full object-cover h-52 group-hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt={product.title}
          />
        </div>
        {/* THIS DIV WIL CONTAIN INFO 0 */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          <div className="flex-1">
            <h2 className="font-bold text-white text-sm tracking-wide uppercase">{product.title}</h2>
            <p className="text-amber-400 font-black text-lg">${product.price}</p>
            <p className="text-zinc-500 text-xs line-clamp-2 mt-1 leading-relaxed">{product.description}</p>
          </div>
          {/* <button type="button" className="bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 text-zinc-300 text-xs font-bold tracking-widest uppercase py-3 w-full transition-all duration-200 border border-zinc-700 hover:border-amber-400"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addItem(product));
            }}
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </Link>
  );
}