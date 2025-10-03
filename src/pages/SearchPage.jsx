import { useState } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import ProductList from "../components/ProductList";

function SearchPage({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-3">
      <div className="relative w-full max-w-md mx-auto lg:mr-20 lg:ml-auto mb-6">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
      {filteredProducts.length > 0 ? (
        <section>
          <ProductList products={filteredProducts} />
        </section>
      ) : (
        searchTerm && (
          <div className="flex flex-col items-center justify-center mt-20 space-y-2">
            <div className="flex items-center gap-2 text-gray-500 text-lg font-medium">
              <FaTimesCircle className="text-red-500 text-2xl" />
              <span>No products found</span>
            </div>
            <p className="text-sm text-gray-400">Try another keyword</p>
          </div>
        )
      )}
    </section>
  );
}

export default SearchPage;
