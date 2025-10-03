import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function CartItem({ product }) {
  const { dispatch } = useGlobalContext();
  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: product.id,
    });
  };
  const decrement = (e) => {
    e.preventDefault();
    if (product.amount == 1) {
      dispatch({
        type: "DELETE_ITEM",
        payload: product.id,
      });
    } else {
      dispatch({
        type: "DECREASE_AMOUNT",
        payload: product.id,
      });
    }
  };
  return (
    <>
      <Link to={`/singleProduct/${product.id}`}>
        <div className="card bg-base-100 shadow-lg p-4 mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="flex-1 text-center lg:text-left">
            <h2 className="card-title md:text-2xl">{product.title}</h2>
            <p className="text-sm mt-2">Price: {formatPrice(product.price)}</p>
            <p className="text-sm text-amber-800 mt-2">
              Total Price:{" "}
              <span className="text-sm text-amber-500 mt-2">
                {formatPrice(product.amount * product.price)}
              </span>
            </p>
          </div>

          <div className="card-actions">
            <button
              className="btn btn-ghost hover:bg-amber-400 transition-normal rounded-md border border-amber-400 md:text-2xl"
              onClick={increment}
            >
              &#43;
            </button>
            <span className="mt-1 font-bold md:text-2xl text-[18px]">
              {product.amount}
            </span>
            <button
              className="btn btn-ghost hover:bg-amber-400 transition-normal rounded-md border border-amber-400 md:text-2xl"
              onClick={decrement}
            >
              &#8722;
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CartItem;
