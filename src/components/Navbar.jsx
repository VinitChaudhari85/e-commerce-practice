import cartImage from "../assets/cart.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between py-3 px-36 items-center">
        <p className="text-3xl font-extrabold">STORE</p>
        <ul className="flex gap-6 items-center text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products?category=keyboards">Keyboards</Link>
          </li>
          <li>
            <Link to="/products?category=mice">Mice</Link>
          </li>
          <li>
            <Link to="/products?category=mousepads">Mousepads</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cartImage} alt="cart-logo" className="h-9" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
