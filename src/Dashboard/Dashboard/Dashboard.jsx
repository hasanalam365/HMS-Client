import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";

import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import CheckOutBOxCart from "../../Shared/CheckOutBOxCart";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Dashboard = () => {

    const { signOutUser, user } = useAuth()
    console.log(user)
    const [openCart, setOpenCart] = useState(false)
    const handleLogOut = () => {
        signOutUser()
    }


    const dashNavLinks = <>
        <NavLink to="/dashboard/profile" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <MdOutlinePersonalInjury />
            <li className="hidden md:block lg:block">Personal Info</li>
        </NavLink>

        <NavLink className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <FiShoppingBag />
            <li className="hidden md:block lg:block">My Orders</li>
        </NavLink>
        {/* 
        <NavLink to="/dashboard/address" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-black'
            }`
        }>
            <TiHomeOutline />
            <li className="hidden md:block lg:block">Address</li>
        </NavLink> */}

        <NavLink to="/dashboard/wishlist" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <FaRegHeart />
            <li className="hidden md:block lg:block">Wishlist</li>
        </NavLink>

        <NavLink to="/dashboard/mycarts" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <HiOutlineShoppingCart className=""></HiOutlineShoppingCart>
            <li className="hidden md:block lg:block">My Carts</li>
        </NavLink>

        <NavLink className={
            `flex gap-3 items-center justify-center hover:text-orange-600 
            }`
        }>

            <button onClick={handleLogOut} className="flex gap-3 items-center justify-center"
            >
                <AiOutlineLogout />

                <li className="hidden md:block lg:block">Logout</li>
            </button>
        </NavLink>

    </>




    return (
        <div className="container mx-auto relative ">
            <div className="">
                <Navber setOpenCart={setOpenCart} openCart={openCart}></Navber>
            </div>
            <div className=" md:p-10 lg:p-16 bg-gray-50">
                <div className="  ">
                    {openCart && <CheckOutBOxCart setOpenCart={setOpenCart} openCart={openCart}></CheckOutBOxCart>}
                </div>
                <div className="  gap-5 p-2 md:p-2 lg:p-16 flex ">
                    {/* navItems */}
                    <div className="w-1/4 hidden md:mt-10 lg:mt-0 md:block lg:block">
                        <ul className="flex flex-col items-start space-y-2 font-medium">
                            {dashNavLinks}

                        </ul>
                    </div>

                    <div className="z-30  fixed w-full mx-auto bottom-0 md:hidden lg:hidden bg-orange-100 -ml-2">
                        <ul className="flex flex-row items-start justify-center gap-5 text-3xl border-2 border-green-600 bg-orange-6000  rounded-full pl-5 pr-5 pt-2 pb-2 font-medium max-w-min mx-auto">
                            {dashNavLinks}

                        </ul>
                    </div>
                    {/* Info Items */}
                    <div className="min-h-[calc(100vh-334px)] w-full  lg:w-3/4 mt-16 md:mt-2 lg:mt-0" >

                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;