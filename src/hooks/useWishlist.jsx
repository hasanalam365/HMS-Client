import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useWishlist = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: wishlistData = [], refetch } = useQuery({
        queryKey: ['wishlistData'],
        queryFn: async () => {
            const res = await axiosPublic(`/wishlist/${user?.email}`)
            return res.data
        }
    })

    return [wishlistData, refetch]
};

export default useWishlist;