import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} >
      <div className="rounded-xl border border-black w-md flex flex-col gap-2 p-2 h-full">
        {/* THIS DIV WILL CONTAIN THE IMAGE  */}
        <img
          className="rounded-xl w-full object-cover"
          src={product.image}
          alt={product.title}
        />
        {/* THIS DIV WIL CONTAIN INFO 0 */}
        <div>
          <h2 className="font-semibold">{product.title}</h2>
          <p>${product.price}</p>
          <p className="line-clamp-2">{product.description}</p>
        </div>
        <button className="bg-slate-500 p-2 w-full rounded-2xl text-white">
          Add to cart
        </button>
      </div>
    </Link>
  );
}
