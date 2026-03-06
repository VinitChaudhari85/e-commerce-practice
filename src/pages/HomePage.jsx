import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div className="text-black px-36 py-24">
        <p className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-4">Premium Peripherals</p>
        <h1 className="text-6xl font-black tracking-tight leading-none mb-6">
          Gear Built for <span className="text-red-600">Precision.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mb-10 leading-relaxed">
          Keyboards, mice, and mousepads chosen for performance. No fluff, just the best.
        </p>
        <div className="flex gap-4">
          <Link to="/products?category=keyboards" className="bg-red-600 text-white px-8 py-3 font-bold text-sm tracking-wider uppercase hover:bg-red-700 transition-colors duration-200">
            Shop Now
          </Link>
          <Link to="/products?category=mice" className="border-2 border-black text-black px-8 py-3 font-bold text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-colors duration-200">
            View Mice
          </Link>
        </div>
      </div>
    );
};

