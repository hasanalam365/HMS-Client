import { Helmet } from "react-helmet-async";
import CategoryProduct from "../../Components/CategoryProduct";
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
    const gadgetDeals = products.filter(product => product.category === 'Gadget Deals')
    const SmartHome = products.filter(product => product.category === 'Smart Home')
    const techEssentials = products.filter(product => product.category === 'Tech Essentials')
    const bestSellers = products.filter(product => product.category === 'Best Sellers')
    const trendingGadgets = products.filter(product => product.category === 'Trending Gadgets')
    const innovativeTech = products.filter(product => product.category === 'Innovative Tech')
    const topRated = products.filter(product => product.category === 'Top Rated')
    const wearableTech = products.filter(product => product.category === 'Wearable Tech')
    const homeAutomation = products.filter(product => product.category === 'Home Automation')
    const portableDevices = products.filter(product => product.category === 'Portable Devices')


    return (
        <div className="pt-5 flex flex-col-reverse md:flex-row lg:flex-row ">
            <Helmet>
                <title>Category | HMS </title>
            </Helmet>
            <div className="w-full md:w-[77%] lg:w-[77%]">
                {/* Categories Left Side */}
                <NewArrival></NewArrival>
                <PopularProducts></PopularProducts>
                <SecurityCamera></SecurityCamera>
                <CategoryProduct categoryProducts={gadgetDeals} categoryName="Gadget Deals"></CategoryProduct>
                <CategoryProduct categoryProducts={SmartHome} categoryName="Smart Home"></CategoryProduct>
                <CategoryProduct categoryProducts={techEssentials} categoryName="Tech Essentials"></CategoryProduct>
                <CategoryProduct categoryProducts={bestSellers} categoryName="Best Sellers"></CategoryProduct>
                <CategoryProduct categoryProducts={trendingGadgets} categoryName="Trending Gadgets"></CategoryProduct>
                <CategoryProduct categoryProducts={innovativeTech} categoryName="Innovative Tech"></CategoryProduct>
                <CategoryProduct categoryProducts={topRated} categoryName="Top Rated"></CategoryProduct>
                <CategoryProduct categoryProducts={wearableTech} categoryName="Wearable Tech"></CategoryProduct>
                <CategoryProduct categoryProducts={homeAutomation} categoryName="Home Automation"></CategoryProduct>
                <CategoryProduct categoryProducts={portableDevices} categoryName="Portable Devices"></CategoryProduct>
            </div>
            <div className="mt-10 md:mt-5 lg:mt-5 ml-10 md:w-[23%] p-4 md:fixed md:right-1 md:top-10 lg:fixed lg:right-1 lg:top-10">
                {/* Categpries Right Side */}
                <h5 className="text-center text-2xl font-semibold ">All Category </h5>
                <div className="divider"></div>
                <ul className="pl-4 font-medium">

                    {
                        categories.map((category, idx) => <li key={idx}
                            className="list-disc hover:text-orange-600 hover:cursor-pointer"> <a href={`#${category}`}> {category}</a></li>)
                    }
                </ul>

            </div>

        </div>
    );
};

export default Categories;