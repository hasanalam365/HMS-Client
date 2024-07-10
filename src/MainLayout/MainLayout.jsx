import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import { Animated } from "react-animated-css";
import 'animate.css/animate.css'
import useCartList from "../hooks/useCartList";
import { FaTrash } from "react-icons/fa";


const MainLayout = () => {

    const [openCart, setOpenCart] = useState(false)

    const [data] = useCartList()

    // const check = data.map().productData
    // console.log(data.productData)
    // console.log(check)
    const totalPrices = data.reduce((total, product) => total + product.productData.price, 0)

    return (
        <div>
            <div className="container mx-auto">
                <Navber setOpenCart={setOpenCart} openCart={openCart}></Navber>

                <div className="relative  ">
                    {openCart && <div className={`absolute right-0 animate__animated  ${openCart && " animate__fadeInRight"} z-30`}>
                        <div className="flex  flex-col h-full p-3 w-96 bg-white  ">
                            <div className="font-medium text-lg flex items-center justify-between">
                                <h5>Shopping Cart</h5>
                                <h5 className="text-orange-500">Items: {data.length}</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}

                                    <tbody className="mb-1">
                                        {/* row 1 */}
                                        {
                                            data.map((product, idx) => <tr key={idx} className="bg-base-200">
                                                <th>{idx + 1}</th>
                                                <td>
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={product.productData.imgUrl}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </td>
                                                <td>{product.productData.title}</td>
                                                <td>$ {product.productData.price}</td>
                                                <td>
                                                    <FaTrash className="text-orange-600 hover:scale-125"></FaTrash>
                                                </td>
                                            </tr>)


                                        }


                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="divider divide-dashed"></div> */}
                            <div className="text-center font-semibold boder border-2 mt-1 mb-1 border-dashed p-2">
                                <h4>Total: $ {totalPrices} </h4>
                            </div>
                            <div>
                                <button className="text-white bg-orange-600 p-4 w-full font-semibold">Checkout</button>
                            </div>
                        </div>
                    </div>}
                </div>

                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;