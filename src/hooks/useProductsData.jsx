import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductsData = () => {

    const axiosPublic = useAxiosPublic()


    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic('/products')
            return res.data
        }
    })

    return [products]
};

export default useProductsData;