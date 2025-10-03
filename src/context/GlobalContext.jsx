import { useReducer, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

const globalStateFromLocal = () => {
  return localStorage.getItem("globalState")
    ? JSON.parse(localStorage.getItem("globalState"))
    : {
        user: null,
        likedProducts: [],
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      };
};

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: false,
      };
    case "ADD_PRODUCT":
      setTimeout(() => toast.success("🛒 Mahsulot savatchaga qo‘shildi"), 0);
      return {
        ...state,
        products: [...state.products, { ...payload, amount: 1 }],
      };
    case "INCREASE_AMOUNT":
      setTimeout(() => toast.success("✅ Mahsulot miqdori oshirildi"), 0);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    case "DECREASE_AMOUNT":
      setTimeout(() => toast.warning("⚠️ Mahsulot miqdori kamaytirildi"), 0);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: Math.max(product.amount - 1, 1) }
            : product
        ),
      };
    case "CHANGE_AMOUNT_PRICE":
      return {
        ...state,
        totalAmount: payload.amount,
        totalPrice: payload.price,
      };
    case "DELETE_ITEM":
      if (!confirm("Rostan ham ushbu mahsulotni o'chirmoqchimisiz?")) {
        setTimeout(
          () => toast.warning("❌ Mahsulot o‘chirish bekor qilindi"),
          0
        );
        return state;
      }
      setTimeout(() => toast.error("🗑️ Mahsulot o‘chirildi"), 0);
      return {
        ...state,
        products: state.products.filter((p) => p.id !== payload),
      };
    case "CLEAR":
      if (!confirm("Rostdan ham savatchani tozalamoqchimisiz?")) {
        setTimeout(() => toast.warning("😉 Mahsulotlar joyida"), 0);
        return state;
      }
      setTimeout(() => toast.info("🧹 Savatcha tozalandi"), 0);
      return {
        ...state,
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      };
    case "ADD_LIKED":
      return {
        ...state,
        likedProducts: [...state.likedProducts, payload],
      };
    case "REMOVE_LIKED":
      return {
        ...state,
        likedProducts: state.likedProducts.filter((p) => p.id !== payload),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, globalStateFromLocal());

  useEffect(() => {
    let price = 0;
    let amount = 0;

    state.products.forEach((product) => {
      price += (Number(product.amount) || 0) * (Number(product.price) || 0);
      amount += Number(product.amount) || 0;
    });

    dispatch({ type: "CHANGE_AMOUNT_PRICE", payload: { price, amount } });
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        totalAmount: state.totalAmount,
        totalPrice: state.totalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
