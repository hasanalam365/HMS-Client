import { FaRegHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useProductsData from "../../hooks/useProductsData";







const SecurityCamera = () => {


    const [products] = useProductsData()

    const securityCameras = products.filter(product => product.category === 'SecurityCamera')

    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-10">
            <div>
                <h3 className="text-3xl font-semibold">Security Camera</h3>
                <div className="divider mt-0"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {
                        securityCameras.map(securityCamera => <div key={securityCamera._id} className="card card-compact bg-base-100 shadow-xl mt-5 hover:scale-105">
                            <figure>

                                <img className='w-full h-[150px]' src={securityCamera.imgUrl} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-lg font-medium">{securityCamera.title}</h2>
                                <p className="font-medium">$ <span className="">{securityCamera.price}</span></p>

                                <div className="flex justify-between">
                                    <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> {securityCamera.rating}</p>
                                    <div className="flex gap-4">
                                        <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                        <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SecurityCamera;