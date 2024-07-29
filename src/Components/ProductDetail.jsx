import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useCartList from "../hooks/useCartList";
import useWishlist from "../hooks/useWishlist";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ProductDetail = () => {

    const productData = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [quantity, setQuantity] = useState(1)


    const [data, refetch] = useCartList()
    const { imgUrl, title, price, rating, stock, features, productId, _id } = productData





    const handleWishlistAdd = async (productData) => {

        if (user && user.email) {
            const wishlistAddInfo = {
                email: user?.email,
                productId: productData._id,
                product: productData
            }

            const res = await axiosSecure.put('/wishlist', wishlistAddInfo)
            console.log(res.data)
            if (res.data.upsertedCount === 1) {
                toast('added wishlist')

            }
        }
        else {
            Swal.fire({
                title: "You are not Logged In!!",
                text: "Please login after additing to the wishlist",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: location?.pathname })
                    refetch()
                }
            });
        }






    }






    const handleAddtoCart = async (productData) => {

        if (user && user.email) {
            const addCartInfo = {
                email: user?.email,
                productId: productData._id,
                productData: productData,
                quantity: quantity
            }
            const res = await axiosSecure.post('/addToCart', addCartInfo)
            if (res.data.insertedId) {
                toast('added cart')
                refetch()

            }
            else {
                toast('added cart')
            }
        }
        else {
            Swal.fire({
                title: "You are not Logged In!!",
                text: "Please login after additing to the wishlist",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: location?.pathname })
                    refetch()
                }
            });
        }




    }
    const handleBuyAddtoCart = async (productData) => {

        if (user && user.email) {
            const addCartInfo = {
                email: user?.email,
                productId: productData._id,
                productData: productData,
                quantity: quantity
            }
            const res = await axiosSecure.post('/addToCart', addCartInfo)
            if (res.data.insertedId) {
                navigate('/dashboard/checkout')


            }
            else {

                navigate('/dashboard/checkout')
            }
        }
        else {
            Swal.fire({
                title: "You are not Logged In!!",
                text: "Please login after additing to the wishlist",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: location?.pathname })

                }
            });
        }




    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)

    }
    const handleDiscrease = () => {
        if (quantity === 1) {
            return
        }
        setQuantity(quantity - 1)


    }


    return (
        <div>
            <div className=" bg-base-200 p-8 pt-20">
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
                            <button
                                onClick={() =>
                                    handleWishlistAdd(productData)

                                }
                                className="hover:scale-110 tooltip tooltip-right"
                                data-tip="add to wishlist"
                            >
                                <FaHeart className="text-[#FF5722] text-xl "></FaHeart>
                            </button>
                            <div className="flex items-center justify-center">
                                <button onClick={handleDiscrease} className="text-xl font-bold btn btn-sm bg-[#FF5722] text-white">-</button>
                                <input value={quantity} type="text"
                                    id="quantity"
                                    name="quantity" className="w-[60px] p-[2px]" readOnly />
                                <button onClick={handleIncrease} className="text-xl font-bold btn btn-sm bg-[#F29120] text-white">+</button>
                            </div>

                            {/* <button
                                onClick={() =>
                                    handleWishlistDelete(productData._id)

                                }
                                className="hover:scale-110 tooltip tooltip-right"
                                data-tip="add to wishlist"
                            >Delete */}
                            {/* <FaRegHeart className="text-[#FF5722] text-xl "></FaRegHeart> */}
                            {/* </button> */}


                        </div>

                        {/* <div className="flex gap-5">
                            <p className="font-medium">
                                Availabe:    <span className="text-[#FF5722]">{stock} pieces</span>

                            </p>
                            <p className="font-medium">
                                ProductId: <span className="text-[#FF5722]">{productId}</span>

                            </p>
                        </div> */}
                        <div className="flex gap-5 items-center ">
                            <button onClick={() => handleAddtoCart(productData)} className="btn text-white bg-[#F29120] hover:bg-[#d68324] mt-3">Add to Cart</button>
                            <button onClick={() => handleBuyAddtoCart(productData)} className="btn text-white bg-[#FF5722] hover:bg-[#ec5527] mt-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;