import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 ">
      {products.map((prod) => {
        return <Product key={prod.id} prod={prod} />;
      })}
    </div>
  );
}

export default ProductList;
