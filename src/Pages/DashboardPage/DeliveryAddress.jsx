import { useState } from "react";

const DeliveryAddress = () => {

    const [select, setSelect] = useState(1)



    const handleAddress = async (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const secondNumber = form.secondNumber.value;
        const division = form.division.value;
        const district = form.district.value;
        const thana = form.thana.value;
        const address = form.address.value;



        const allAddress = { name, phone, secondNumber, division, district, thana, address }
        console.table(allAddress)

    }


    return (
        <div>
            <section className="  dark:text-gray-900 w-[95%] md:mt-5 lg:mt-0 mx-auto bg-gray-200">
                <form onSubmit={handleAddress} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="fullname" className="font-medium">Full Name</label>
                                <input id="fullName" name="name" type="text" placeholder="Full Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="phone" className="font-medium">Phone</label>
                                <input id="phone" type="text" name="phone" placeholder="Phone Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="alternative phone number" className="font-medium">Alternative Phone</label>
                                <input id="secondNumber" type="text"
                                    name="secondNumber" placeholder="Alternative Phone" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Division" className="font-medium">Division</label>
                                <input id="division" type="text"
                                    name="division" placeholder="Division" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="District" className="font-medium">District</label>
                                <input id="district" type="text"
                                    name="district" placeholder="District" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Thana" className="font-medium">Thana</label>
                                <input id="thana" type="text"
                                    name="thana" placeholder="Thana" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300 p-2" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="font-medium">Address</label>
                                <input id="address" type="text"
                                    name="address" placeholder="Building/House/Street" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300  p-2" />
                            </div>

                        </div>
                        <div className="flex gap-1 mt-4">
                            <div onClick={() => setSelect(1)} className={`border-2  p-4 max-w-max rounded-lg ${select === 1 ? 'border-green-400 font-medium' : 'border-gray-300'}`}>
                                Home
                            </div>
                            <div onClick={() => setSelect(2)} className={`border-2 p-4  max-w-max rounded-lg ${select === 2 ? 'border-green-400 font-medium' : 'border-gray-300 '}`}>
                                Office
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-secondary w-full">Save</button>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default DeliveryAddress;