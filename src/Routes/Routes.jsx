import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Brands from "../Pages/Brands/Brands";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import DeliveryAddress from "../Pages/DashboardPage/DeliveryAddress";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../Components/ProductDetail";
import MyWishlist from "../Components/MyWishlist";
// import PersonaLinfo from "../Dashboard/UserDashboard/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brands',
                element: <Brands></Brands>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/product/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/address',
                element: <DeliveryAddress></DeliveryAddress>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishlist></MyWishlist>
            },
        ]
    }

]);

export default router