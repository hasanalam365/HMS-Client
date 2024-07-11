import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import useCartList from "../../hooks/useCartList";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const Navber = ({ setOpenCart, openCart }) => {

    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [data] = useCartList()

    const navLinks = <>
        <NavLink>
            <li>Smart Watches</li>
        </NavLink>

        <NavLink>
            <li>Smart Phones</li>
        </NavLink>

        <NavLink>
            <li>Headphones</li>
        </NavLink>

        <NavLink>
            <li>Smart TV & Accessories</li>
        </NavLink>
        <NavLink>
            <li>Computer & Accessories</li>
        </NavLink>
        <NavLink>
            <li>Wireless Speakers</li>
        </NavLink>
        <NavLink>
            <li>Security Cameras</li>
        </NavLink>
    </>




    return (
        <div className="navbar bg-base-100 container mx-auto h-[66px] z-40 md:z-10 lg:z-10 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-64 p-2 shadow text-lg space-y-2  font-medium">
                        {navLinks}
                        <div className="divider"></div>
                        <NavLink to='/dashboard/profile'>
                            <li>Dashboard</li>
                        </NavLink>

                    </ul>
                </div>
                <Link to='/' className="hover:scale-105">
                    <img src="logo.png" className="w-[60px] h-[50px]" alt="" />

                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium">
                    <NavLink className='hover:text-orange-600'>
                        <li>Trending</li>
                    </NavLink>
                    <NavLink to='/brands' className='hover:text-orange-600'>
                        <li>Brands</li>
                    </NavLink>
                    <NavLink className='hover:text-orange-600'>
                        <li>Service Center</li>
                    </NavLink>
                    <NavLink className='hover:text-orange-600'>
                        <li>Blogs</li>
                    </NavLink>
                </ul>
            </div>

            <div className="navbar-end">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search Products" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="hidden md:block lg:block">
                    <div className="flex gap-4 ml-5 mr-5">

                        <button onClick={() => setIsOpenProfile(!isOpenProfile)}>
                            <CgProfile className="text-xl"></CgProfile>
                        </button>
                        <button onClick={() => setOpenCart(!openCart)} className="relative flex">

                            <HiOutlineShoppingCart className="text-xl"></HiOutlineShoppingCart>
                            <div className="absolute -right-4 bottom-2 bg-secondary rounded-full text-white">

                                <button>
                                    {
                                        !data.length > 0 ? <p className="p-1">0</p>
                                            :
                                            <p className="p-1">{data.length}</p>
                                    }
                                </button>
                            </div>
                        </button>
                    </div>

                    {
                        isOpenProfile && <div className="absolute z-10 p-4 bg-green-100 top-16 right-16 rounded-lg">
                            <ul className="font-medium space-y-1">
                                <li className="hover:text-orange-600">
                                    <Link to="/dashboard/profile">My Profile</Link>
                                </li>
                                <li className="hover:text-orange-600">
                                    <Link>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navber;