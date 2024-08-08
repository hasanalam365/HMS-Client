import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useQuantityCheck = (id) => {

    const axiosPublic = useAxiosPublic()

    const { data: productsQuantity } = useQuery({
        queryKey: ['product-quantity'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/quantity/check/${id}`)
            return res.data
        }
    })

    return [productsQuantity]
};

export default useQuantityCheck;