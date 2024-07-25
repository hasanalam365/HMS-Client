
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";


const ViewOrderDetails = () => {


    const LoaderData = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const [data, setData] = useState(LoaderData);

    useEffect(() => {
        setData(LoaderData);
    }, [LoaderData]);

    const handleOrderConfirm = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value


    }



    const handleOrderDelete = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this orders!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/view-order-delete/${LoaderData.
                    orderId}/${index}`)

                if (res.data.modifiedCount === 1) {
                    toast('Order has been deleted')
                    setData((prevData) => ({
                        ...prevData,
                        allProducts: prevData.allProducts.filter((_, idx) => idx !== index),
                    }));
                }
                console.log(res.data)
            }
        });
    }

    return (
        <div>

            <section className=" mt-2 md:mt-10">
                <form onSubmit={handleOrderConfirm} action="" className="container flex flex-col md:flex-row gap-7 mx-auto ">
                    <div className="text-center">
                        <h4 className="text-3xl font-semibold mb-5">Order  Information</h4>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>No</th>
                                        <th>Photo</th>

                                        <th>Name</th>
                                        <th>ProductId</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data.allProducts.map((product, idx) => <tr key={idx}>
                                            <td>
                                                {idx + 1}

                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={product.imgUrl}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.title}
                                            </td>
                                            <td>
                                                {product.productId}
                                            </td>
                                            <td>
                                                ${product.price}
                                            </td>

                                            <th>
                                                {product.stock}
                                            </th>
                                            <th>
                                                <button onClick={() => handleOrderDelete(idx)} className="btn btn-ghost btn-xs">Delete</button>
                                            </th>
                                        </tr>)

                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                    <div>
                        <div className="text-center mb-5">
                            <h4 className="text-3xl font-semibold">Customer Information</h4>
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-gray-200 p-4">
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Name</label>
                                <input id="firstname" name="name" type="text"
                                    value={LoaderData.name} placeholder="First name" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="orderId" className="font-medium">OrderId</label>
                                <input id="firstname" name="orderId" type="text"
                                    value={LoaderData.orderId} placeholder="OrderId" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="font-medium">Email</label>
                                <input id="email" name="email" type="text"
                                    value={LoaderData.email} placeholder="Email" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="phone" className="font-medium">Phone</label>
                                <input id="phone" name="phone" type="text"
                                    value={LoaderData.phone} placeholder="Phone" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="Second Phone" className="font-medium">Second Phone</label>
                                <input id="secondPhone" name="secondPhone" type="text"
                                    value={LoaderData.secondPhone} placeholder="Second Phone" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Division</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.division} placeholder="Division" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">District</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.district} placeholder="District" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Thana</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.thana} placeholder="Thana" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Full Address</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.address} placeholder="Thana" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Current Delivery</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.currentLocation} placeholder="Current" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Time & Date</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.time + ' ,  ' + LoaderData.date} placeholder="Date & Time" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Payment Type</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.paymentType} placeholder="Payment Type" className="w-full rounded-md p-[6px]" />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Total Price</label>
                                <input id="firstname" type="text"
                                    value={LoaderData.totalPrices
                                    } placeholder="Total Price" className="w-full rounded-md p-[6px]" />
                            </div>

                        </div>
                        <div className="mb-5 ">
                            <button className="btn btn-secondary w-full">Confirm Order</button>
                        </div>
                    </div>


                </form>
            </section>

        </div>
    );
};

export default ViewOrderDetails;