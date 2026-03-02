import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ItemCard from "./ItemCard"

export default function Cart() {
    const {items, totalAmount} = useSelector((state) => state.cart)

    if (items.length === 0) return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
        <p className="text-zinc-600 text-xs font-bold tracking-[0.4em] uppercase">Your cart is empty</p>
        <h2 className="text-3xl font-black text-white uppercase">Nothing here yet.</h2>
        <Link to="/products?category=keyboards" className="bg-amber-400 text-zinc-950 px-8 py-3 font-bold text-sm tracking-wider uppercase hover:bg-amber-300 transition-colors duration-200">
          Start Shopping
        </Link>
      </div>
    )

    return (
      <div className="px-36 py-16 text-white max-w-4xl mx-auto">
        <p className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-2">Review</p>
        <h1 className="text-4xl font-black tracking-tight uppercase mb-12">Your Cart</h1>
        <div className="mb-10">
            {items.map((item) => <ItemCard key={item.id} item={item} />)}
        </div>
        <div className="border-t border-zinc-700 pt-8 flex items-center justify-between">
          <div>
            <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">Total</p>
            <p className="text-4xl font-black text-white">${totalAmount}</p>
          </div>
          {/* <Link to="/checkout" className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm tracking-widest uppercase px-12 py-4 transition-colors duration-200">
            Checkout →
          </Link> */}
        </div>
      </div>
    )
};