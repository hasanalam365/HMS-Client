import SecurityCamera from "../../../Components/SecurityCameras/SecurityCamera";
import Banner from "../Banner/Banner";
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import CategoriesList from "../CategoriesList/CategoriesList";
import NewArrival from "../NewArrival/NewArrival";
import PopularProducts from "../PopularProducts/PopularProducts";
import ServiceSection from "../ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <CategoriesList />

            <NewArrival></NewArrival>


            <div className="flex flex-col md:flex-row lg:flex-row gap-5 p-4">
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/JmS84pt/home-down-2.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/m9XYrXP/home-down-1.jpg" alt="" />
                </div>
            </div>

            <PopularProducts></PopularProducts>

            <div className="mt-5">
                <img className="w-full h-[150px] md:h-[200px] lg:h-[250px]" src="https://i.ibb.co/DkHnKyS/dilwali-offers.jpg" alt="" />
            </div>
            <SecurityCamera></SecurityCamera>

            <div className="divider"></div>
            <BrandsLogo></BrandsLogo>
            <div className="divider"></div>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;