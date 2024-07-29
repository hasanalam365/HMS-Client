import { FaCircleArrowRight } from "react-icons/fa6";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useCartList from "../hooks/useCartList";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const CheckOutBOxCart = ({ setOpenCart, openCart }) => {

    const [data, refetch] = useCartList()
    const axiosPublic = useAxiosPublic()

    const totalPrices = data.reduce((total, product) => total + (product.productData.price * product.quantity), 0)

    const handleDelete = async (_id) => {

        const res = await axiosPublic.delete(`/addToCart/${_id}`)
        console.log(res.data)
        if (res.data.deletedCount === 1) {
            toast.error('This item has been deleted')
            refetch()
        }


    }

    return (
        <div className={` right-0 top-0  z-30  md:fixed`}>
            <div className="flex  flex-col  p-3  bg-white h-[550px] w-[425px]">
                <div className="flex items-center justify-end ">
                    <button onClick={() => setOpenCart(false)} className="btn">
                        <FaCircleArrowRight />
                    </button>
                </div>
                <div className="font-medium text-lg flex items-center justify-between">
                    <h5>Shopping Cart</h5>
                    <h5 className="text-orange-500">Items: {data.length}</h5>
                </div>
                <div className="divider"></div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody className="mb-1">
                            {/* row 1 */}
                            {
                                data.map((product, idx) => <tr key={idx} className="bg-base-200 ">
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
                                            <FaTrash className="text-orange-600 hover:scale-125"></FaTrash>
                                        </button>

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
                <Link to="/dashboard/checkout">
                    <button onClick={() => setOpenCart(false)} className="text-white bg-orange-600 p-4 w-full font-semibold rounded-lg">Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOutBOxCart;