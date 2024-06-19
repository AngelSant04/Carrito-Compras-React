import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => {
  return {
    payload: { text: obj.text },
  };
})

const captureTotal = createAction("captureTotal", (obj) => {
  return {
    payload: { products: obj.products },
  };
})

const productsActions = {captureText, captureTotal}
export default productsActions
