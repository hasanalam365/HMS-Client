import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const OrderStatus = () => {

    const { user } = useAuth()
    const axioSecure = useAxiosSecure()


    const { data: orderStatus = [] } = useQuery({
        queryKey: ['order-status'],
        queryFn: async () => {
            const res = await axioSecure.get(`/orderStatus/${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>OrderId</th>
                            <th>Order Date</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderStatus?.map((status, idx) =>
                                <tr key={status._id}>
                                    <th>{idx + 1}</th>
                                    <td>{status.orderId}</td>
                                    <td>{status.orderDate}</td>
                                    <td className={`${status.status === 'pending' ? 'bg-orange-400 text-white' : 'bg-green-600 text-white'}`}>{status.status}</td>

                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* <div className="flex flex-col gap-5">
                {
                    orderStatus.map(status => <ul key={status._id} className="steps steps-vertical lg:steps-horizontal">
                        <li data-content="orderId" className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step">Purchase</li>
                        <li className="step">Receive Product</li>
                    </ul>)
                }
            </div> */}
        </div>
    );
};

export default OrderStatus;