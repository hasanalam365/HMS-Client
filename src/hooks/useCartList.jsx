import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCartList = () => {
    // const { user } = useAuth()
    // const axiosPublic = useAxiosPublic()

    // const { data: cartLists = [] } = useQuery({
    //     queryKey: ['cartListsData'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/addToCart/${user.email}`)
    //         return res.data
    //     }
    // })
    // console.log(cartLists)
    // return [cartLists]
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data = [], refetch } = useQuery({
        queryKey: ['cardList'],
        queryFn: async () => {
            const res = await axiosPublic(`/addToCart/${user.email}`)
            return res.data
        }
    })

    return [data, refetch]
};

export default useCartList;