import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Categories from "./pages/Categories.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import AuthChecker from "./components/AuthChecker.tsx";
import PublicRouteChecker from "./components/PublicRouteChecker.tsx";
import OTPVerify from "./pages/OTPVerify.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <PublicRouteChecker element={ <Login />}/>,
      },
      {
        path: "register",
        element:  <PublicRouteChecker element={ <Register />}/>,
      },
      {
        path: "otp-verify",
        element:  <PublicRouteChecker element={ <OTPVerify />}/>,
      },
      {
        path: "",
        element: <AuthChecker element={<Categories />} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster/>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
