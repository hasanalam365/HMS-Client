import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePersonalInjury } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";

import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {

    const { signOutUser, user } = useAuth()
    console.log(user)

    const handleLogOut = () => {
        signOutUser()
    }


    const dashNavLinks = <>
        <NavLink to="/dashboard/profile" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <MdOutlinePersonalInjury />
            <li className="hidden md:hidden lg:block">Personal Info</li>
        </NavLink>
        <NavLink className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <FiShoppingBag />
            <li className="hidden md:hidden lg:block">My Orders</li>
        </NavLink>
        <NavLink to="/dashboard/address" className={({ isActive }) =>
            `flex gap-3 items-center justify-center hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>
            <TiHomeOutline />
            <li className="hidden md:hidden lg:block">Address</li>
        </NavLink>

        <NavLink className={({ isActive }) =>
            ` hover:text-orange-600 ${isActive ? 'text-orange-600' : ''
            }`
        }>

            <button onClick={handleLogOut} className="flex gap-3 items-center justify-center">
                <AiOutlineLogout />

                <li className="hidden md:hidden lg:block">Logout</li>
            </button>
        </NavLink>

    </>




    return (
        <div className="">
            <Navber></Navber>
            <div className="mt-5 bg-gray-50 mb-5p-2 md:p-2 lg:p-16 flex ">
                {/* navItems */}
                <div className="w-1/4 hidden md:hidden lg:block">
                    <ul className="flex flex-col items-start space-y-2 font-medium">
                        {dashNavLinks}

                    </ul>
                </div>

                <div className=" fixed w-full ms-auto bg-gray-400 p-2 bottom-0 lg:hidden ">
                    <ul className="flex flex-row items-start justify-center gap-5 text-3xl font-medium w-3/4 mx-auto">
                        {dashNavLinks}

                    </ul>
                </div>
                {/* Info Items */}
                <div className="w-full  lg:w-3/4" >

                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;