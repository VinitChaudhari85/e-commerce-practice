// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { addItem } from "../store/cartSlice";

export default function ProductCard({ product }) {
  // const dispatch = useDispatch();

  return (
    <Link to={`/product/${product.id}`} >
      <div className="group bg-white border-2 border-black hover:border-red-600 transition-all duration-200 flex flex-col h-full">
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
            <h2 className="font-bold text-black text-sm tracking-wide uppercase">{product.title}</h2>
            <p className="text-red-600 font-black text-lg">${product.price}</p>
            <p className="text-zinc-500 text-xs line-clamp-2 mt-1 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}