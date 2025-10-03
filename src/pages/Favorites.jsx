import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { formatPrice } from "../utils";
import { handleCartSubmit } from "../utils/handleCartSubmit";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Favorites() {
  const { dispatch, products, likedProducts } = useGlobalContext();

  const removeLiked = (e, id) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_LIKED", payload: id });
  };

  if (likedProducts.length === 0) {
    return (
      <h2 className="flex flex-col items-center justify-center text-center mt-15 sm:mt-25 text-gray-500">
        <FaHeartBroken className="text-4xl sm:text-5xl text-red-600 mb-3 animate-bounce" />
        <p className="flex items-center gap-2 text-lg sm:text-2xl">
          <FaHeart className="text-red-500 text-xl sm:text-2xl" /> Saralangan
          mahsulotlar yo‘q
        </p>
        <p className="text-xs sm:text-sm mt-3">Iltimos, mahsulot qo'shing</p>
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 p-5">
      {likedProducts.map((product) => (
        <Link key={product.id} to={`/singleProduct/${product.id}`}>
          <div className="rounded-lg shadow-lg flex flex-col items-center">
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-50 h-50 object-contain mb-4"
              />
              <button
                className="absolute top-4 -right-5 text-xl p-1.5"
                onClick={(e) => removeLiked(e, product.id)}
              >
                <FaHeart color="red" />
              </button>
            </div>
            <ul className="card-body shadow hover:shadow-2xl">
              <li className="card-title line-clamp-1">{product.title}</li>
              <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-400">
                    {formatPrice(Number(product.price) || 0)}
                  </span>
                  <span className="line-through text-sm text-gray-400">
                    {formatPrice((Number(product.price) || 0) + 1)}
                  </span>
                </div>
                <button
                  onClick={(e) =>
                    handleCartSubmit(e, product, products, dispatch)
                  }
                  className="w-[40px] h-[40px] border border-gray-500 rounded-full flex items-center cursor-pointer justify-center mt-3"
                >
                  <img src="/basket.svg" alt="" width={30} />
                </button>
              </div>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Favorites;
