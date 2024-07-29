import { FaTrash } from "react-icons/fa";
import useCartList from "../hooks/useCartList";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [orderId, setOrderId] = useState('');
    const [data, refetch] = useCartList()
    const navigate = useNavigate()
    const totalPrices = data.reduce((total, product) => total + (product.productData.price * product.quantity), 0)

    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    const axiosPublic = useAxiosPublic()

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let createId = ''

    for (let i = 0; i < 8; i++) {
        const randomCreateId = Math.floor(Math.random() * characters.length)

        createId += characters[randomCreateId]
    }

    useEffect(() => {

        setOrderId(createId);
    }, []);



    const handleCheckboxChange = (index) => {
        setSelectedCheckbox(index);
    };


    const handleIncrease = (productId) => {
        console.log(productId)
    }
    const handleDiscrease = (productId) => {
        console.log(productId)
    }


    const handleDelete = async (_id) => {

        const res = await axiosPublic.delete(`/addToCart/${_id}`)
        if (res.data.deletedCount === 1) {
            toast.error('This item has been deleted')
            refetch()
        }

    }


    const handleConfirm = async () => {
        const allProduct = data.map(product => ({
            ...product.productData,
            quantity: product.quantity,
        }));



        const orderInfo = {
            paymentType: selectedCheckbox,
            orderId: orderId,
            totalPrices: totalPrices,
            date: date,
            time: time,
            allProducts: allProduct,

        }

        navigate('/dashboard/address', { state: { orderId, orderInfo } });





    }


    return (
        <div className=" flex flex-col md:flex-row lg:flex-row gap-5 mt-3">

            <div className="w-full md:w-[60%] lg:w-[60%]  ">
                <div className="bg-orange-600 text-center rounded-xl ">
                    <h3 className="text-lg font-semibold text-white p-2">Shopping Cart</h3>
                </div>
                {
                    data.length === 0 ? <div className="mt-10 text-center text-2xl font-medium">Your Cart is Empty!!!!!</div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>No.</th>
                                        <th>Photo</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="mb-1">
                                    {/* row 1 */}
                                    {
                                        data.map((product, idx) =>
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
                                                <td>{product.productData.price}</td>
                                                <td className="flex items-center justify-center gap-2 h-[49px]">
                                                    <p onClick={() => handleDiscrease(product.
                                                        productId
                                                    )} className="hover:text-white p-1 hover:bg-orange-600 rounded-xl">-</p>
                                                    <input type="text" value={product.quantity} className="w-[30px] pl-1" />
                                                    <p onClick={() => handleIncrease(product.
                                                        productId
                                                    )} className="hover:text-white p-1 hover:bg-orange-600 rounded-xl">+</p>
                                                </td>
                                                <td>$ {product.productData.price * product.quantity}</td>
                                                <td>
                                                    <button onClick={() => handleDelete(product._id)}>
                                                        <FaTrash className="text-red-600 hover:scale-125"></FaTrash>
                                                    </button>

                                                </td>
                                            </tr>

                                        )


                                    }


                                </tbody>
                            </table>
                        </div>
                }

            </div>
            <div className="w-full md:w-[40%] lg:w-[40%]  bg-gray-200 mt-4 md:mt-0 p-4">
                <div className="bg-orange-600 text-center  ">
                    <h3 className="text-lg font-semibold md:font-medium text-white p-2 flex items-center justify-center ">OrderId <span>- {orderId}</span> </h3>

                </div>


                <div className="flex items-center justify-between mt-2">
                    <p className=" font-medium">Date:</p>
                    <p>{date}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <p className=" font-medium">Time:</p>
                    <p>{time}</p>
                </div>
                <div className="divider"></div>
                <div>
                    <div>

                        <div className="form-control">
                            <label className="flex items-center gap-5 mb-2">

                                <input
                                    type="checkbox"
                                    checked={selectedCheckbox === 'Cash On Delivery'}
                                    onChange={() => handleCheckboxChange('Cash On Delivery')}
                                    className="checkbox checkbox-info"
                                />

                                <span className="font-medium">Cash On Delivery</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-5 mb-2">

                                <input
                                    type="checkbox"
                                    checked={selectedCheckbox === 'bkash'}
                                    onChange={() => handleCheckboxChange('bkash')}
                                    className="checkbox checkbox-info"
                                />

                                <img className="h-[60px] w-[35%] md:w-3/4 lg:w-3/4" src="https://i.ibb.co/Wnqn0QP/bkash-payment-logo-removebg-preview.png" alt="bkash logo" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-5 mb-2">

                                <input
                                    type="checkbox"
                                    checked={selectedCheckbox === 'nagad'}
                                    onChange={() => handleCheckboxChange('nagad')}
                                    className="checkbox checkbox-info"
                                />

                                <img className="h-[60px] w-[35%]" src="https://i.ibb.co/kyMbzf0/Nagad-Logo-2024-removebg-preview.png" alt="nagad logo" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-5 mb-2">

                                <input
                                    type="checkbox"
                                    checked={selectedCheckbox === 'stripe'}
                                    onChange={() => handleCheckboxChange('stripe')}
                                    className="checkbox checkbox-info"
                                />

                                <img className="h-[60px] w-[35%]" src="https://i.ibb.co/MgNmKRQ/stripe-removebg-preview.png" alt="stripe logo" />
                            </label>
                        </div>
                    </div>

                </div>
                <div className="text-center font-semibold boder border-2 border-white mt-1 mb-1 border-dashed p-2">
                    <h4>Total Orders: $ {totalPrices} </h4>
                </div>
                <div onClick={handleConfirm} className="mt-4 text-center ">
                    <button className="btn bg-orange-600 p-2 rounded-xl w-full text-white font-medium ">Confirm Order</button>
                </div>

            </div>
        </div>

    );
};

export default CheckoutPage;