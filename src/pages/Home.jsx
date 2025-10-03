import { useState, useEffect } from "react";
import SearchPage from "../pages/SearchPage";

function Home() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(80);
  const [limit] = useState(20);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = async () => {
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
      );
      const data = await res.json();
      setProducts((prev) => [...prev, ...data.products]);
      setTotalProducts(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const handleLoadMore = () => {
    setSkip(products.length);
  };

  if (isPending && products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-7.5 h-7.5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <h1 className="text-xl mt-4 text-gray-600">⏳ Loading...</h1>
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="bg-white border border-red-400 text-red-700 px-6 py-4 rounded shadow-md max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-2">
            ❗ Ma'lumotni olishda xatolik
          </h2>
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="p-6">
      <SearchPage products={products} />

      {products.length < totalProducts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="btn btn-dash btn-warning"
          >
            {isPending ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Home;
