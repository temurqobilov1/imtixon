import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary justify-center sm:justify-start"
          >
            <ShoppingCart className="sm:w-7 sm:h-7 text-accent" />
            <span>
              Online<span className="text-accent">Shop</span>
            </span>
          </NavLink>
          <p className="mt-2 text-sm text-gray-400 text-center sm:text-left">
            Siz istagan mahsulotlar, eng yaxshi narxlarda.
          </p>
        </div>

        <div className="sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Pages</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:underline">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Shop</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to="/allproducts" className="hover:underline">
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:underline">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className="hover:underline">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: support@onlineshop.uz</li>
            <li>Phone: +998 90 390 03 26</li>
            <li>Address: Ferghana, Uzbekistan</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} OnlineShop. Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;
