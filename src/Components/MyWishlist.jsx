import { MdDeleteForever } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const MyWishlist = () => {

    const [wishlistData, refetch] = useWishlist()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()



    const handleDeleteWishlist = async (id) => {

        const res = await axiosPublic.delete(`/wishlist/${id}`)



        if (res.data.deletedCount === 1) {
            toast.error('This item has been delete from wishlist')
            refetch()
        }

    }

    const handleAddCart = async (product) => {

        const addCartInfo = {
            email: user?.email,
            productId: product.product._id,
            productData: product.product,
            quantity: product.quantity
        }

        const res = await axiosPublic.post('/addToCart', addCartInfo)
        console.log(res.data)
        if (res.data.insertedId) {
            toast('added cart')
            await axiosPublic.delete(`/wishlist/${product._id}`)
            refetch()

        }




    }

    return (
        <div className="md:w-full mx-auto mt-8">
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FF5722] text-white ">
                            <th>No.</th>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            wishlistData.map((product, idx) => <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={product.product.imgUrl} />
                                        </div>
                                    </div>


                                </td>
                                <td>{product.product.title}</td>
                                <td>
                                    $ {product.product.price}
                                </td>
                                <th className="flex gap-2 mt-4">
                                    <button onClick={() => handleAddCart(product)}>
                                        <FiShoppingCart className="text-lg hover:scale-125 hover:text-[#FF5722]"></FiShoppingCart>
                                    </button>
                                    <button onClick={() => handleDeleteWishlist(product._id)}>
                                        <MdDeleteForever className="text-lg hover:scale-125 hover:text-[#FF5722]" />
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyWishlist;