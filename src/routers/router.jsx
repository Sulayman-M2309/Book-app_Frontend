import { createBrowserRouter, Route } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "./../pages/books/CartPage";
import CheckoutPage from "./../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from './../components/AdminLogin';
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook></SingleBook>,
      },
      {
        path: "/user-dashboard",
        element: <PrivateRoute><UserDashboard/></PrivateRoute>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/dashboard",
    element: <AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
    children: [
      {
        path: "",
        element:<AdminRoute><Dashboard></Dashboard></AdminRoute>,
      },
      {
        path: "add-new-book",
        element: <AdminRoute><AddBook></AddBook></AdminRoute>,
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><UpdateBook></UpdateBook></AdminRoute>,
      },
      {
        path: "manage-books",
        element: <AdminRoute><ManageBooks></ManageBooks></AdminRoute>,
      },
    ],
  },
]);

export default router;
