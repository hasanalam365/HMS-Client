import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const UpdatedProfile = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: userData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user.email}`)
            return res.data
        }
    })


    const handleAddress = async (e) => {

        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const secondPhone = form.secondNumber.value;
        const division = form.division.value;
        const district = form.district.value;
        const thana = form.thana.value;
        const address = form.address.value;
        const currentLocation = select === 1 ? 'Home' : 'Office'

        const updatedAddress = { name, phone, email, secondPhone, division, district, thana, address, currentLocation }
        console.log(updatedAddress)

        // const res = await axiosPublic.put(`/orders/${orderId}`, allAddress)
        // if (res.data.modifiedCount === 1) {
        //     toast('Order Confirmed')

        //     const res = await axiosPublic.delete(`/mycarts-delete/${user.email}`)
        //     console.log(res.data)

        //     navigate('/')
        // }

    }

    return (
        <div>
            <section className="  dark:text-gray-900 w-[95%] md:mt-5 lg:mt-0 mx-auto bg-gray-200">
                <form onSubmit={handleAddress} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="fullname" className="font-medium">Full Name</label>
                                <input id="fullName" name="name" type="text" placeholder="Full Name" defaultValue={userData?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full  sm:col-span-3">
                                <label htmlFor="fullname" className="font-medium">Email</label>
                                <input id="fullName" name="email" type="text" value={userData.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="phone" className="font-medium">Phone</label>
                                <input id="phone" type="text" name="phone" placeholder="Phone Number" defaultValue={userData?.phone} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Division" className="font-medium">Division</label>
                                <input id="division" type="text"
                                    name="division" placeholder="Division" defaultValue={userData?.division} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="District" className="font-medium">District</label>
                                <input id="district" type="text"
                                    name="district" placeholder="District" defaultValue={userData?.district} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Thana" className="font-medium">Thana</label>
                                <input id="thana" type="text"
                                    name="thana" placeholder="Thana" defaultValue={userData?.thana} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Thana" className="font-medium">Photo</label>
                                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="address" className="font-medium">Address</label>
                                <input id="address" type="text"
                                    name="address" placeholder="Building/House/Street" defaultValue={userData?.address} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300  p-2" />
                            </div>

                        </div>

                        <div className="mt-2">
                            <button className="btn btn-secondary w-full">Confirm</button>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default UpdatedProfile;