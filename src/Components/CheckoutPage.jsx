import { FaTrash } from "react-icons/fa";
import useCartList from "../hooks/useCartList";
import { useEffect, useState } from "react";

const CheckoutPage = () => {

    const [orderId, setOrderId] = useState('');
    const [data] = useCartList()

    console.log(orderId)

    const totalPrices = data.reduce((total, product) => total + product.productData.price, 0)

    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()


    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let createId = ''

    for (let i = 0; i < 8; i++) {
        const randomCreateId = Math.floor(Math.random() * characters.length)

        createId += characters[randomCreateId]
    }

    useEffect(() => {

        setOrderId(createId);
    }, []);

    return (
        <div className="p-8 md:p-10 lg:p-16 flex flex-col md:flex-row lg:flex-row gap-5">

            <div className="w-full md:w-3/4 lg:w-3/4">
                <div className="bg-orange-600 text-center rounded-xl mt-10 md:mt-10 lg:mt-7">
                    <h3 className="text-lg font-semibold text-white p-2">Shopping Cart</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>No.</th>
                                <th>Photo</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="mb-1">
                            {/* row 1 */}
                            {
                                data.map((product, idx) => <>
                                    <tr key={idx} className="bg-base-200">
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
                                    </tr>
                                    <hr />
                                </>)


                            }


                        </tbody>
                    </table>
                </div>
                {/* <div className="divider divide-dashed"></div> */}
                <div className="text-center font-semibold boder border-2 mt-1 mb-1 border-dashed p-2">
                    <h4>Total: $ {totalPrices} </h4>
                </div>
                {/* <Link to="/checkout">
                    <button onClick={() => setOpenCart(false)} className="text-white bg-orange-600 p-4 w-full font-semibold rounded-lg">Checkout</button>
                </Link> */}
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 mt-5 md:mt-10 lg:mt-6 bg-gray-200 p-4">
                <div className="bg-orange-600 text-center  ">
                    <h3 className="text-lg font-semibold text-white p-2">Order Summery</h3>
                </div>
                <div className="flex items-center justify-between">
                    <p>Date:</p>
                    <p>{date}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Time:</p>
                    <p>{time}</p>
                </div>
                <h3>{orderId}</h3>
                <h3>Shopping Cart</h3>
                <h3>Shopping Cart</h3>
            </div>
        </div>

    );
};

export default CheckoutPage;