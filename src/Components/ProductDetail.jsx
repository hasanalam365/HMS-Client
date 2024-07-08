import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useWishlist from "../hooks/useWishlist";

const ProductDetail = () => {

    const productData = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    // const [isPresent, setIsPresent] = useState(false)
    const [wishlistData, refetch] = useWishlist()
    const { imgUrl, title, price, rating, stock, features, productId, _id } = productData

    const [isPresent, setIsPresent] = useState(false)
    console.log('isPresent', isPresent)

    const handleWishlistAdd = async (id) => {

        const wishlistAddInfo = {
            email: user?.email,

            wishlistId: id
        }

        const res = await axiosPublic.put('/wishlist', wishlistAddInfo)
        if (res.data.modifiedCount === 1) {
            toast('added wishlist')
        }
        refetch()
    }
    useEffect(() => {
        if (wishlistData.mywishList) {
            // Check if the current wishlist ID is in the list of wishlist IDs
            setIsPresent(wishlistData.mywishList.includes(_id));
        }
    }, [wishlistData]);


    return (
        <div>
            <div className=" bg-base-200 p-8">
                <div className="flex flex-col md:flex-col lg:flex-row gap-5 md:gap-5 ">
                    <div className="flex-1">
                        <img
                            src={imgUrl}
                            className=" rounded-lg shadow-2xl w-full h-[250px] md:h-[320px] lg:h-[380px]" />
                    </div>
                    <div className="flex-1 space-y-2 p-2">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="font-medium">Price:  <span className=" text-[#FF5722] ">
                            ${price}
                        </span>

                        </p>
                        <div>
                            <h5 className="font-medium">Features:</h5>
                            <ul>
                                {
                                    features.map((feature, idx) => <li key={idx} className="list-disc ml-8">{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div className="flex gap-8 items-center">

                            {/* <p className=" font-medium text-[#F29120]">{rating}</p> */}

                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly

                            />


                            {
                                isPresent ? <button onClick={() => handleWishlistAdd(_id)} className="hover:scale-110 tooltip tooltip-right" data-tip="add to wishlist">
                                    <FaHeart className="text-[#FF5722] text-xl "></FaHeart>
                                </button> :
                                    <button onClick={() => handleWishlistAdd(_id)} className="hover:scale-110 tooltip tooltip-right" data-tip="add to wishlist">
                                        <FaRegHeart className="text-[#FF5722] text-xl "></FaRegHeart>
                                    </button>
                            }

                        </div>

                        <div className="flex gap-5">
                            <p className="font-medium">
                                Availabe:    <span className="text-[#FF5722]">{stock} pieces</span>

                            </p>
                            {/* <p className="font-medium">
                                ProductId: <span className="text-[#FF5722]">{productId}</span>

                            </p> */}
                        </div>
                        <div className="flex gap-5 items-center ">
                            <button className="btn text-white bg-[#F29120] hover:bg-[#d68324] mt-3">Add to Cart</button>
                            <button className="btn text-white bg-[#FF5722] hover:bg-[#ec5527] mt-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;