import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ConfirmOrders = () => {

    const [search, setSearch] = useState('')
    const axiosSecure = useAxiosSecure()

    const { data: confirmOrders = [], refetch } = useQuery({
        queryKey: ['confirm-orders', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/confirmOrder?search=${search}`)
            return res.data
        }
    })

    const inputText = (e) => {
        setSearch(e.target.value)
        refetch()
    }

    return (
        <div className="flex flex-col mt-4 px-4 md:p-8">
            <div className="flex items-center justify-between mb-2">

                <h4 className="text-lg font-semibold">Confirm Orders: <span>{confirmOrders.length}</span></h4>
                <div className="join mr-5">
                    <div>

                        <input onChange={inputText} className="input input-bordered join-item " placeholder="Search by order id" />

                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-600 text-white">
                            <th>No</th>
                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            confirmOrders.map((order, idx) => <tr key={order._id}>
                                <th>{idx + 1}</th>

                                <td>{order.customerInfo.name}</td>
                                <td>{order.customerInfo.orderId}</td>

                                <td className="text-blue-600 hover:scale-105 hover:text-green-600">
                                    <span>View</span>
                                </td>
                                <td>
                                    <FaTrashAlt className="text-red-400 hover:scale-125 hover:text-red-600" />
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ConfirmOrders;