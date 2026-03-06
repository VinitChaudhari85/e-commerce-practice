import { useDispatch } from "react-redux"
import { removeItem } from "../store/cartSlice";

export default function ItemCard({item}) {
    const dispatch = useDispatch();
    return <div className="flex items-center gap-6 py-6 border-b-2 border-black">
        <div className="border-2 border-black w-24 h-24 overflow-hidden flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-black font-bold text-sm tracking-wide uppercase">{item.title}</h3>
          <p className="text-red-600 font-black mt-1">${item.price}</p>
          <p className="text-zinc-500 text-xs mt-1">Qty: {item.quantity}</p>
        </div>
        <div className="text-right">
          <p className="text-black font-black text-lg">${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={()=> dispatch(removeItem(item.id))} className="text-zinc-400 hover:text-red-600 text-xs font-bold tracking-wider uppercase mt-2 transition-colors duration-200">
            Remove
          </button>
        </div>
    </div>
};