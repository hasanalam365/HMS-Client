import { FaTrash } from "react-icons/fa";
import useCartList from "../hooks/useCartList";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const CheckoutPage = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [orderId, setOrderId] = useState('');
    const [data, refetch] = useCartList()

    const totalPrices = data.reduce((total, product) => total + product.productData.price, 0)

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


    const handleDelete = async (_id) => {

        const res = await axiosPublic.delete(`/addToCart/${_id}`)
        if (res.data.deletedCount === 1) {
            toast('This item has been deleted')
            refetch()
        }

    }


    const handleConfirm = () => {
        console.log('confirm')
    }


    return (
        <div className="p-8 md:p-10 lg:p-16 flex flex-col md:flex-row lg:flex-row gap-5">

            <div className="w-full md:w-[65%] lg:w-3/4">
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
                                        <td>$ {product.productData.price}</td>
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

            </div>
            <div className="w-full md:w-[35%] lg:w-1/4 mt-5 md:mt-10 lg:mt-6 bg-gray-200 p-4">
                <div className="bg-orange-600 text-center  ">
                    <h3 className="text-lg font-semibold text-white p-2 flex items-center justify-center gap-2">OrderId <span>- {orderId}</span> </h3>

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
                    <h4>Total: $ {totalPrices} </h4>
                </div>
                <div onClick={handleConfirm} className="mt-4 text-center bg-orange-600 p-2 rounded-xl">
                    <button className=" w-full text-white font-medium hover:scale-110">Confirm Order</button>
                </div>

            </div>
        </div>

    );
};

export default CheckoutPage;