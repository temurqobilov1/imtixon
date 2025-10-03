  import { Link } from "react-router-dom";
  import { useGlobalContext } from "../hooks/useGlobalContext";
  import { handleCartSubmit } from "../utils/handleCartSubmit";
  import { formatPrice } from "../utils";
  import { FaRegHeart, FaHeart } from "react-icons/fa6";
  import { useEffect, useState } from "react";

  function Product({ prod }) {
    const { dispatch, products, likedProducts } = useGlobalContext();
    const [alreadyLiked, setAlreadyLiked] = useState(false);

    const addLiked = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setAlreadyLiked(true);
      dispatch({ type: "ADD_LIKED", payload: prod });
    };

    const removeLiked = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setAlreadyLiked(false);
      dispatch({ type: "REMOVE_LIKED", payload: prod.id });
    };

    useEffect(() => {
      const item = likedProducts.find((p) => p.id === prod.id);
      setAlreadyLiked(!!item);
    }, [likedProducts, prod.id]);

    return (
      <Link to={`/singleProduct/${prod.id}`}>
        <div className="shadow-lg flex flex-col w-full items-center">
          <div className="relative">
            <img
              className="w-full object-contain mb-2"
              src={prod.thumbnail}
              alt={prod.title}
            />
            {alreadyLiked ? (
              <button
                onClick={removeLiked}
                className="cursor-pointer absolute top-4 -right-1  text-xl p-1.5"
              >
                <FaHeart color="red" />
              </button>
            ) : (
              <button
                onClick={addLiked}
                className="cursor-pointer absolute top-4 -right-1 text-xl p-1.5"
              >
                <FaRegHeart />
              </button>
            )}
          </div>
          <ul className="card-body w-full shadow hover:shadow-2xl">
            <li className="card-title line-clamp-1">{prod.title}</li>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-400">
                  {formatPrice(Number(prod.price) || 0)}
                </span>
                <span className="line-through text-sm text-gray-400">
                  {formatPrice((Number(prod.price) || 0) + 1)}
                </span>
              </div>
              <button
                onClick={(e) => handleCartSubmit(e, prod, products, dispatch)}
                className="w-[40px] h-[40px] border border-gray-500 rounded-full flex items-center cursor-pointer justify-center mt-3"
              >
                <img src="/basket.svg" alt="" width={30} />
              </button>
            </div>
          </ul>
        </div>
      </Link>
    );
  }

  export default Product;
