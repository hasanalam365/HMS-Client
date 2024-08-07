import SecurityCamera from "../../Components/SecurityCameras/SecurityCamera";
import useProductsData from "../../hooks/useProductsData";
import NewArrival from "../Home/NewArrival/NewArrival";
import PopularProducts from "../Home/PopularProducts/PopularProducts";

const Categories = () => {

    const [products, isLoading] = useProductsData()

    const categories = products ? [...new Set(products.map(product => product.category))] : [];

    const handleCategory = (category) => {
        console.log('click and jump this category')
    }

    return (
        <div className="pt-5 flex flex-col-reverse md:flex-row lg:flex-row ">

            <div className="w-[77%]">
                {/* Categories Left Side */}
                <NewArrival></NewArrival>
                <PopularProducts></PopularProducts>
                <SecurityCamera></SecurityCamera>
            </div>
            <div className="mt-20 ml-10 w-[23%] ">
                {/* Categpries Right Side */}
                <h5 className="text-center text-2xl font-semibold mb-5">All Category </h5>
                <ul className="pl-4 font-medium">

                    {
                        categories.map((category, idx) => <li key={idx}
                            onClick={() => handleCategory(category)} className="list-disc hover:text-orange-600 hover:cursor-pointer">{category}</li>)
                    }
                </ul>

            </div>

        </div>
    );
};

export default Categories;