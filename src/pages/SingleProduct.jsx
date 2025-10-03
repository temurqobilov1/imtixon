import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { handleCartSubmit } from "../utils/handleCartSubmit";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function SingleProduct() {
  const { id } = useParams();
  const { products, dispatch } = useGlobalContext();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);

  if (isPending) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-7.5 h-7.5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <h1 className="text-xl mt-4 text-gray-600">⏳ Loading...</h1>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-red-50">
          <div className="bg-white border border-red-400 text-red-700 px-6 py-4 rounded shadow-md max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-2">
              ❗ Ma'lumotni olishda xatolik
            </h2>
            <p className="text-lg">{error}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {product && (
        <div className="card bg-base-100 sm:w-85 md:w-4/5 shadow-lg mx-auto my-8 p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            🛒 Product Info
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <figure className="w-full md:w-1/2 flex justify-center">
              <img
                className="rounded-md shadow-md hover:shadow-2xl"
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px" }}
              />
            </figure>

            <ul className="card-body w-full md:w-1/2">
              <h2 className="card-title text-center sm:text-left md:text-2xl font-bold mb-2">
                {product.title}
              </h2>
              <li className="mb-4 text-center sm:text-left">
                {product.description}
              </li>
              <div className="flex justify-between items-center md:text-[18px] sm:text-[14px] text-[15px] mb-4">
                <div className="flex gap-3">
                  <span className="line-through">
                    {formatPrice(product.price + 1)}
                  </span>
                  <span className="text-green-600 font-bold">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
              <h2 className="md:text-[18px]">
                ⭐{product.rating} ({product.stock + 20} sold)
              </h2>
              <button
                onClick={(e) =>
                  handleCartSubmit(e, product, products, dispatch)
                }
                className="btn btn-primary w-26 h-9 md:w-40 md:ml-auto md:mr-0 ml-auto mr-auto rounded-md hover:bg-blue-500 hover:border-b-blue-500"
              >
                Buy Now
              </button>
              <details>
                <summary className="md:text-lg font-semibold cursor-pointer mb-2 mt-5">
                  📝 Product Information
                </summary>
                <div className="pl-4 mt-2 space-y-4">
                  <details>
                    <summary className="font-medium cursor-pointer">
                      📦 Product Details
                    </summary>
                    <ul className="mt-1 pl-4 text-sm space-y-1">
                      <li>
                        <strong>Category:</strong> {product.tags}
                      </li>
                      <li>
                        <strong>Brand:</strong> {product.brand}
                      </li>
                      <li>
                        <strong>Stock:</strong> {product.stock} items available
                      </li>
                      <li>
                        <strong>SKU:</strong> {product.sku}
                      </li>
                      <li>
                        <strong>Weight:</strong> {product.weight}g
                      </li>
                    </ul>
                  </details>
                  <details>
                    <summary className="font-medium cursor-pointer">
                      📏 Dimensions (cm)
                    </summary>
                    <ul className="mt-1 pl-4 text-sm space-y-1">
                      <li>
                        <strong>Width:</strong> 15.14
                      </li>
                      <li>
                        <strong>Height:</strong> 13.08
                      </li>
                      <li>
                        <strong>Depth:</strong> 22.99
                      </li>
                    </ul>
                  </details>
                  <details>
                    <summary className="font-medium cursor-pointer">
                      🚚 Warranty & Shipping
                    </summary>
                    <ul className="mt-1 pl-4 text-sm space-y-1">
                      <li>
                        <strong>Warranty:</strong> {product.warrantyInformation}
                      </li>
                      <li>
                        <strong>Shipping:</strong> {product.shippingInformation}
                      </li>
                      <li>
                        <strong>Availability:</strong> In Stock
                      </li>
                    </ul>
                  </details>
                </div>
              </details>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
