import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div className="text-white px-36 py-24">
        <p className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Premium Peripherals</p>
        <h1 className="text-6xl font-black tracking-tight leading-none mb-6">
          Gear Built for <span className="text-amber-400">Precision.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
          Keyboards, mice, and mousepads chosen for performance. No fluff, just the best.
        </p>
        <div className="flex gap-4">
          <Link to="/products?category=keyboards" className="bg-amber-400 text-zinc-950 px-8 py-3 font-bold text-sm tracking-wider uppercase hover:bg-amber-300 transition-colors duration-200">
            Shop Now
          </Link>
          <Link to="/products?category=mice" className="border border-zinc-700 text-zinc-300 px-8 py-3 font-bold text-sm tracking-wider uppercase hover:border-zinc-400 hover:text-white transition-colors duration-200">
            View Mice
          </Link>
        </div>
      </div>
    );
};