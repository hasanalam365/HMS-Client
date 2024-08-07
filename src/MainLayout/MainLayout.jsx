import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import 'animate.css/animate.css'

import CheckOutBOxCart from "../Shared/CheckOutBOxCart";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MainLayout = () => {

    const [openCart, setOpenCart] = useState(false)
    const axiosPublic = useAxiosPublic()

    const [search, setSearch] = useState('')

    const { data: allProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['users', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-products?search=${search}`)
            return res.data
        },
        enabled: search !== '',
    })



    return (

        <div className="container mx-auto relative">

            <div className="">
                <Navber setOpenCart={setOpenCart} openCart={openCart} setSearch={setSearch}></Navber>
            </div>
            <div>
                {
                    allProducts.map(product => <div key={product._id} className="overflow-x-auto fixed top-10 z-50 bg-gray-300 ">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    )
                }
            </div>
            <div className="  ">
                {openCart && <CheckOutBOxCart setOpenCart={setOpenCart} openCart={openCart}></CheckOutBOxCart>}
            </div>

            <div className="min-h-[calc(100vh-334px)]">
                <Outlet></Outlet>
            </div>
            <div className="h-[268px]">
                <Footer></Footer>
            </div>
        </div>


    );
};

export default MainLayout;