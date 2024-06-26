// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "../views/cart/Cart";
import Detalle from "../views/detalle/Detalle";
import Home from "../views/home/Home";
import ErrorPage from "../views/notFound/NotFound";
import { Provider } from "react-redux";
import store from "../store";


function Router() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/details/:id", element: <Detalle /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
    // return (
    //   <div>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="*" element={<ErrorPage />} />
    //         <Route path="/cart" element={<Cart />} />
    //         <Route path="/details/:id" element={<Detalle />} />
    //       </Routes>
    //     </BrowserRouter >
    //   </div >
    // );
}

export default Router;
