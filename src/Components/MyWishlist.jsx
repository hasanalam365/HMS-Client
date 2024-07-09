import { MdDeleteForever } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import { FiShoppingCart } from "react-icons/fi";

const MyWishlist = () => {

    const [wishlistData, refetch] = useWishlist()
    // const myWishlists = wishlistData.mywishList


    return (
        <div>
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
                            wishlistData.map((data, idx) => <tr key={data._id}>
                                <td>{idx + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={data.imgUrl} />
                                        </div>
                                    </div>


                                </td>
                                <td>{data.title}</td>
                                <td>
                                    $ {data.price}
                                </td>
                                <th className="flex gap-2 mt-4">
                                    <FiShoppingCart className="text-lg hover:scale-125 hover:text-[#FF5722]"></FiShoppingCart>
                                    <MdDeleteForever className="text-lg hover:scale-125 hover:text-[#FF5722]" />
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