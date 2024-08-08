import { FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useProductsData from "../../../hooks/useProductsData";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const PopularProducts = () => {

    const [products, isLoading] = useProductsData()

    const populars = products.filter(product => product.category === 'Popular')

    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-10" id="Popular">
            {isLoading ? <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-4 border-dashed border-orange-500 rounded-full animate-spin dark:border-default-600 text-orange-600"></div>
            </div>
                : <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-semibold">Popular Products</h3>
                        {
                            populars.length > 10 && <h3 className="text-lg md:text-xl font-semibold text-orange-600 hover:scale-105">View All</h3>
                        }
                    </div>
                    <div className="divider mt-0"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {
                            populars.map(popular => <Link to={`/product/${popular._id}`} key={popular._id} className="card card-compact bg-base-100 shadow-xl mt-5 ">
                                <figure>

                                    <img className='w-full h-[150px] hover:scale-110' src={popular.imgUrl} alt="" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-medium">{popular.title}</h2>
                                    <p className="font-medium">$ <span className="">{popular.price}</span></p>

                                    <div className="flex justify-between">
                                        <Rating style={{ maxWidth: 100 }} value={popular.rating} readOnly />
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

export default PopularProducts;