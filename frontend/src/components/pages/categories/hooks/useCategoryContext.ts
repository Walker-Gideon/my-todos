import React from "react";
import { CategoryContext } from "../context/CategoryContext";

export function useCategoryContext() {
  const context = React.useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider",
    );
  }
  return context;
}
