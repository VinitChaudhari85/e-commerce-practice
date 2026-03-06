import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createPortal } from "react-dom";
import ItemCard from "./ItemCard";
import { clearCart } from "../store/cartSlice";

export default function Checkout() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // VALIDATE FIELDS
    const newErrors = {};

    if (/\d/.test(formData.name))
      newErrors.name = "Name cannot contain numbers.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Contact must be exactly 10 digits.";
    if (formData.address.trim().length < 10)
      newErrors.address = "Address must be at least 10 characters.";
    if (!formData.payment)
      newErrors.payment = "Please select a payment method.";

    // IF ERRORS EXIST, SHOW THEM AND STOP
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ALL GOOD — CLEAR ERRORS, CLEAR CART, SHOW MODAL
    setErrors({});
    dispatch(clearCart());
    setShowModal(true);
  }

  return (
    <div className="text-black px-36 py-16 max-w-5xl mx-auto">

      {/* ORDER PLACED MODAL — RENDERED VIA PORTAL ABOVE EVERYTHING */}
      {showModal && createPortal(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-black p-16 text-center flex flex-col gap-4 max-w-md w-full">
            <p className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">Success</p>
            <h2 className="text-4xl font-black text-black uppercase">Order Placed!</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Thanks for your order. We'll be in touch soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-black text-sm tracking-widest uppercase py-3 mt-4 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>,
        document.body
      )}

      {/*First we have to show the products, their quantities and prices, and then final amount while checking out*/}
      <div className="mb-16">
        <p className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-2">Review</p>
        <h1 className="text-4xl font-black tracking-tight uppercase mb-8">Items List</h1>
        <div className="mb-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="border-t-2 border-black pt-6 flex justify-between items-center">
          <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">Total</p>
          <p className="text-3xl font-black">${totalAmount}</p>
        </div>
      </div>

      {/* Then we will show the checkout form to the user here */}
      <div>
        <p className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-2">Details</p>
        <h2 className="text-4xl font-black tracking-tight uppercase mb-8">Checkout</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-2 border-black focus:border-red-600 outline-none text-black px-4 py-3 text-sm tracking-wide placeholder:text-zinc-400 w-full"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-2 border-black focus:border-red-600 outline-none text-black px-4 py-3 text-sm tracking-wide placeholder:text-zinc-400 w-full"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact number (10 digits)"
              value={formData.contact}
              onChange={handleChange}
              className="bg-white border-2 border-black focus:border-red-600 outline-none text-black px-4 py-3 text-sm tracking-wide placeholder:text-zinc-400 w-full"
            />
            {errors.contact && <p className="text-red-600 text-xs mt-1">{errors.contact}</p>}
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Delivery address"
              value={formData.address}
              onChange={handleChange}
              className="bg-white border-2 border-black focus:border-red-600 outline-none text-black px-4 py-3 text-sm tracking-wide placeholder:text-zinc-400 w-full"
            />
            {errors.address && <p className="text-red-600 text-xs mt-1">{errors.address}</p>}
          </div>

          <div>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="bg-white border-2 border-black focus:border-red-600 outline-none text-black px-4 py-3 text-sm tracking-wide w-full"
            >
              <option value="">Select payment method</option>
              <option value="upi">UPI</option>
              <option value="debit-card">Debit Card</option>
              <option value="credit-card">Credit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            {errors.payment && <p className="text-red-600 text-xs mt-1">{errors.payment}</p>}
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-black text-sm tracking-widest uppercase py-4 mt-2 transition-colors duration-200"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}