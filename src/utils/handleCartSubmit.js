export function handleCartSubmit(e, prod, products, dispatch) {
  e.preventDefault();
  e.stopPropagation();

  const item = products.find((product) => product.id == prod.id);

  if (item) {
    dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
  } else {
    dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
  }
}
