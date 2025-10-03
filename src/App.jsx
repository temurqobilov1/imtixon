import {
  About,
  Cart,
  Contact,
  Home,
  Login,
  Profile,
  Register,
  AllProducts,
  SingleProduct,
  Favorites,
} from "./pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

function App() {
  const { user } = useGlobalContext();
  console.log("user:", user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" replace /> : <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="colored"
        icon={false}
        toastClassName={(context) =>
          clsx(
            "text-sm md:text-lg max-w-[90%] sm:max-w-[350px] py-3 px-4 rounded shadow font-medium",
            {
              "bg-green-600 text-white": context?.type === "success",
              "bg-red-600 text-white": context?.type === "error",
              "bg-yellow-500 text-black": context?.type === "warning",
              "bg-blue-600 text-white": context?.type === "info",
            }
          )
        }
      />
    </>
  );
}

export default App;
