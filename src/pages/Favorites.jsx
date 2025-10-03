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
        <FaHeartBroken className="text-4xl sm:text-5xl text-blue-500 mb-3 animate-bounce" />
        <p className="flex items-center gap-2 text-lg sm:text-2xl">
          <FaHeart className="text-blue-500 text-xl sm:text-2xl" /> Saralangan
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
                <FaHeart color="blue" />
              </button>
            </div>
            <ul className="card-body shadow hover:shadow-2xl">
              <li className="card-title line-clamp-1">{product.title}</li>
              <li className="line-clamp-2">{product.description}</li>
              <div className="flex gap-3 text-[18px]">
                <span className="line-through">
                  {formatPrice((Number(product.price) || 0) + 1)}
                </span>
                <span className="text-green-600 font-400">
                  {formatPrice(Number(product.price) || 0)}
                </span>
              </div>
              <h2 className="flex gap-2">
                ⭐{product.rating} ({(Number(product.stock) || 0) + 20} sold)
              </h2>
              <button
                onClick={(e) =>
                  handleCartSubmit(e, product, products, dispatch)
                }
                className="btn btn-primary ml-auto mr-auto w-full h-8 rounded-lg transition-normal hover:bg-blue-700 hover:border-b-blue-700"
              >
                Buy Now
              </button>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Favorites;
