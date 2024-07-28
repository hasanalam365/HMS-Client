import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllOrders = () => {

    const [orderId, setOrderId] = useState('')
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')



    const { data: allOrders = [], refetch } = useQuery({
        queryKey: ['all-orders', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-orders?search=${search}`);
            return res.data;
        },
        enabled: !!search || search === '',
    })

    const handleView = () => {
        navigate({ state: orderId });

    }


    const handleOrderDelete = (id) => {


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
                const res = await axiosSecure.delete(`/order-delete/${id}`)

                if (res.data.deletedCount === 1) {
                    toast('Order has been deleted')
                    refetch()
                }

            }
        });


    }

    //handleChange
    const inputText = (e) => {
        setSearch(e.target.value)

    }



    return (
        <div className="flex flex-col mt-4 px-4 md:p-8">
            <div className="flex items-center justify-between mb-2">

                <h4 className="text-lg font-semibold">Total Orders: <span>{allOrders.length}</span></h4>
                <div className="join mr-5">
                    <div>

                        <input onChange={inputText} className="input input-bordered join-item " placeholder="Search by order id" />

                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>


                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, idx) =>
                                <tr key={idx}>



                                    <td>{order.name}</td>
                                    <td>{order.orderId}</td>
                                    <td>{order.time}
                                        <span> {order.date}</span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/view-order/${order._id}`} className="bg-green-600 p-1 text-white rounded-lg hover:text-orange-600">
                                            pending
                                        </Link>

                                    </td>

                                    <td>
                                        <button onClick={() => handleOrderDelete(order._id)} className="btn btn-ghost btn-xs text-white bg-red-600 ">Delete</button>
                                    </td>

                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllOrders;