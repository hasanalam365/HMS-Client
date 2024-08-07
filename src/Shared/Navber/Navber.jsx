import { Link, NavLink } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import useCartList from "../../hooks/useCartList";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Navber = ({ setOpenCart, openCart, setSearch }) => {

    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [data] = useCartList()
    const axiosPublic = useAxiosPublic()
    const { signOutUser, user } = useAuth()
    const [navOpen, setNavOpen] = useState(false)
    // const [search, setSearch] = useState('')

    // const { data: allProducts = [], refetch, isLoading } = useQuery({
    //     queryKey: ['users', search],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/all-products?search=${search}`)
    //         return res.data
    //     },
    //     enabled: !!search || search === '',
    // })

    // console.log(allProducts)

    const { data: userData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user.email}`)
            return res.data
        }
    })

    const navLinks = <>
        <NavLink onClick={() => setNavOpen(false)} className='hover:text-orange-600'>
            <li>Trending</li>
        </NavLink>
        <NavLink onClick={() => setNavOpen(false)} to='/brands' className='hover:text-orange-600'>
            <li>Brands</li>
        </NavLink>
        <NavLink onClick={() => setNavOpen(false)} className='hover:text-orange-600'>
            <li>Service Center</li>
        </NavLink>
        <NavLink onClick={() => setNavOpen(false)} className='hover:text-orange-600'>
            <li>Blogs</li>
        </NavLink>
        <NavLink to='/categories' onClick={() => setNavOpen(false)} className='hover:text-orange-600'>
            <li>Categories</li>
        </NavLink>
    </>

    const hangleLogOut = () => {
        signOutUser()
    }

    // const inputText = (e) => {
    //     setSearch(e.target.value)
    //     refetch()
    // }


    return (
        <div className="navbar bg-base-100 container mx-auto h-[66px] z-40 md:z-10 lg:z-10 fixed top-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
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
                        </button>
                    </div>
                    {navOpen && <ul
                        tabIndex={0}
                        className="menu  dropdown-content bg-base-100  z-10 mt-2 w-80 p-2 shadow text-lg space-y-2  font-medium ">
                        {navLinks}

                        <div className="divider"></div>
                        <NavLink to='/dashboard'>
                            <li>Dashboard</li>
                        </NavLink>

                    </ul>}
                </div>
                <Link to='/' className="hover:scale-105">
                    <img src="https://i.ibb.co/1LSTmBy/logo.png" className="w-[60px] h-[50px]" alt="" />

                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium">
                    {navLinks}
                </ul>
                <label className="input input-bordered flex items-center gap-2 ml-5">
                    {/* <input onChange={inputText} type="text" className="grow" placeholder="Search Products" /> */}
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search Products" />
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
            </div>

            <div className="navbar-end">

                <div className="">
                    <div className="flex items-center justify-center gap-4 ml-5 mr-5">

                        <button onClick={() => setIsOpenProfile(!isOpenProfile)}>
                            {
                                user?.email ? <img className="w-[40px] h-[40px] rounded-full" src={user.photoURL || userData.photoURL} alt="user profile photo" />
                                    :
                                    <CgProfile className="text-xl"></CgProfile>
                            }

                        </button>
                        <button onClick={() => setOpenCart(!openCart)} className="relative flex">

                            <HiOutlineShoppingCart className="text-2xl"></HiOutlineShoppingCart>
                            <div className="absolute -right-3 bottom-5 bg-secondary rounded-full text-white">


                                {
                                    !data.length > 0 ? <p className="p-1">0</p>
                                        :
                                        <p className="p-1">{data.length}</p>
                                }

                            </div>
                        </button>
                    </div>

                    {
                        isOpenProfile && <div className="absolute z-10 p-4 bg-green-100 top-16 right-16 rounded-lg">
                            <ul className="font-medium space-y-1">
                                <li className="hover:text-orange-600">
                                    <Link to="/dashboard">My Profile</Link>
                                </li>
                                {user?.email ? <li className="hover:text-orange-600">
                                    <button onClick={hangleLogOut}>Logout</button>
                                </li>
                                    :
                                    <li className="hover:text-orange-600">
                                        <Link to="/login" >Login</Link>
                                    </li>}
                            </ul>
                        </div>
                    }
                </div>

            </div>
            {/* <div>
                {
                    allProducts.map(product => <span key={product._id}>product.title</span>)
                }
            </div> */}
        </div>
    );
};

export default Navber;