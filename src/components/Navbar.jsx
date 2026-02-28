import cartImage from "../assets/cart.png"
import { Link } from "react-router-dom"

export default function Navbar() {
    return <header className="border border-black">
        <nav className="flex justify-between py-3 px-8 items-center">
            <p className="border border-black text-3xl">STORE</p>
            <ul className="border border-black flex gap-6 items-center text-xl">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart"><img src={cartImage} alt="cart-logo" className="h-9" /></Link></li>
            </ul>
        </nav>
    </header>
};
