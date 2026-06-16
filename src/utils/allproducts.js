import { useSelector } from "react-redux";
import { bestseller } from "./bestseller";
import { products3 } from "./products3";
import { products1 } from "../pages/home/products1";

export const useAllProducts = () => {
  const apiProducts = useSelector((state) => state.products.data);

  const localProducts = [
    ...products1,
    ...products3,
    ...bestseller,
  ];

  return [
    ...localProducts,
    ...apiProducts,
  ];
};