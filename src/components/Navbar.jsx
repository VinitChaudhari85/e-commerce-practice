import cartImage from "../assets/cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { items } = useSelector((state) => state.cart);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
      <nav className="flex justify-between py-4 px-36 items-center">
        <p className="text-2xl font-black tracking-widest text-white uppercase">STORE</p>
        <ul className="flex gap-6 items-center text-sm font-medium tracking-wider uppercase">
          {/* THE URLS PASS THE PRODUCT CATEGORIES TO THE PRODUCTS PAGE  */}
          <li>
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/products?category=keyboards" className="text-zinc-400 hover:text-white transition-colors duration-200">Keyboards</Link>
          </li>
          <li>
            <Link to="/products?category=mice" className="text-zinc-400 hover:text-white transition-colors duration-200">Mice</Link>
          </li>
          <li>
            <Link to="/products?category=mousepads" className="text-zinc-400 hover:text-white transition-colors duration-200">Mousepads</Link>
          </li>
          <li>
            <Link to="/cart" className="relative">
              <img src={cartImage} alt="cart-logo" className="h-9 invert opacity-80 hover:opacity-100 transition-opacity duration-200" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-zinc-950 text-xs font-black rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}