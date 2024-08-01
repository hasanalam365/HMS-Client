import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import useProductsData from "../../../hooks/useProductsData";
import { Link } from "react-router-dom";
import { BounceLoader, MoonLoader } from "react-spinners";

const NewArrival = () => {



    const [products, isLoading] = useProductsData()

    const newArrivals = products.filter(product => product.category === 'newArrival')


    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-10">
            {isLoading ? <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-4 border-dashed border-orange-500 rounded-full animate-spin dark:border-default-600 text-orange-600"></div>
            </div>
                : <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-semibold">New Arrival</h3>
                        {
                            newArrivals.length > 10 && <h3 className="text-lg md:text-xl font-semibold text-orange-600 hover:scale-105">View All</h3>
                        }
                    </div>
                    <div className="divider mt-0"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {
                            newArrivals.slice(0, 10).map(product => <Link to={`/product/${product._id}`} key={product._id} className="card card-compact bg-base-100 shadow-xl mt-5 ">
                                <figure>

                                    <img className='w-full h-[150px] hover:scale-110' src={product.imgUrl} alt="" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-medium">{product.title}</h2>
                                    <p className="font-medium">$ <span className="">{product.price}</span></p>

                                    <div className="flex justify-between">
                                        <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> {product.rating}</p>
                                        <div className="flex gap-4">
                                            {/* <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                        <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart> */}
                                            <FaArrowRight className="text-lg text-orange-600 hover:text-xl"></FaArrowRight>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }

                    </div>


                </div>}
        </div>
    );
};

export default NewArrival;