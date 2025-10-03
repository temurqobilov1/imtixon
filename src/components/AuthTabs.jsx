import { NavLink, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

const AuthTabs = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <NavLink
        to="/"
        className="flex items-center gap-2 sm:text-2xl text-[18px] font-bold text-primary my-3"
      >
        <ShoppingCart className="sm:w-7 sm:h-7 text-accent" />
        <span>
          Online<span className="text-accent">Shop</span>
        </span>
      </NavLink>
      <div className="flex  md:w-[320px] h-9 light:bg-blue-50 dark:border-blue-400 dark:border rounded-sm overflow-hidden light:py-1 light:px-1">
        <Link
          to="/login"
          className={`w-1/2 flex items-center justify-center text-[15px] font-medium rounded-b-md transition-all duration-200 ${
            isActive("/login")
              ? "light:bg-white light:text-blue-600 shadow-sm dark:bg-blue-400 dark:rounded-sm dark:text-blue-50"
              : "text-blue-400"
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className={`w-1/2 flex items-center justify-center text-[15px] font-medium rounded-[6px] transition-all duration-200 ${
            isActive("/register")
              ? "light:bg-white light:text-blue-600 shadow-sm dark:bg-blue-400 dark:rounded-sm dark:text-blue-50"
              : "text-blue-400"
          }`}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default AuthTabs;
