import SecurityCamera from "../../Components/SecurityCameras/SecurityCamera";
import useProductsData from "../../hooks/useProductsData";
import NewArrival from "../Home/NewArrival/NewArrival";
import PopularProducts from "../Home/PopularProducts/PopularProducts";

const Categories = () => {

    const [products, isLoading] = useProductsData()

    return (
        <div className="pt-5">

            <NewArrival></NewArrival>
            <PopularProducts></PopularProducts>
            <SecurityCamera></SecurityCamera>

        </div>
    );
};

export default Categories;