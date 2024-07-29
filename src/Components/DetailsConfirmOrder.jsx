import { useLoaderData } from "react-router-dom";

const DetailsConfirmOrder = () => {

    const detailsData = useLoaderData()



    return (
        <div>
            <div>
                <form >
                    <div className="text-center mb-5">
                        <h4 className="text-3xl font-semibold">Customer Information</h4>
                    </div>

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-gray-200 p-4">
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="firstname" className="font-medium">Name</label>
                            <input id="firstname" name="name" type="text"
                                value={detailsData.customerInfo.name} placeholder="First name" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="orderId" className="font-medium">OrderId</label>
                            <input id="firstname" name="orderId" type="text"
                                value={detailsData.customerInfo.orderId} placeholder="OrderId" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <input id="email" name="email" type="text"
                                value={detailsData.customerInfo.email} placeholder="Email" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="phone" className="font-medium">Phone</label>
                            <input id="phone" name="phone" type="text"
                                value={detailsData.customerInfo.phone} placeholder="Phone" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="Second Phone" className="font-medium">Second Phone</label>
                            <input id="secondPhone" name="secondPhone" type="text"
                                value={detailsData.customerInfo.secondPhone} placeholder="Second Phone" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="division" className="font-medium">Division</label>
                            <input id="division" name="division" type="text"
                                value={detailsData.customerInfo.division} placeholder="Division" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="district" className="font-medium">District</label>
                            <input id="district" name="district" type="text"
                                value={detailsData.customerInfo.district} placeholder="District" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="thana" className="font-medium">Thana</label>
                            <input id="thana" name="thana" type="text"
                                value={detailsData.customerInfo.thana} placeholder="Thana" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="fullAddress" className="font-medium">Full Address</label>
                            <input id="fullAddress" name="fullAddress" type="text"
                                value={detailsData.customerInfo.address} placeholder="Full Address" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="currentDelivery" className="font-medium">Current Location</label>
                            <input id="currentDelivery" name="currentDelivery" type="text"
                                value={detailsData.customerInfo.currentLocation} placeholder="Current Location" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="orderTimeDate" className="font-medium">Time & Date</label>
                            <input id="orderTimeDate" name="orderTimeDate" type="text"
                                value={detailsData.customerInfo.time + ' ,  ' + detailsData.customerInfo.date} placeholder="Date & Time" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="paymentType" className="font-medium">Payment Type</label>
                            <input id="paymentType" name="paymentType" type="text"
                                value={detailsData.customerInfo.paymentType} placeholder="Payment Type" className="w-full rounded-md p-[6px]" readOnly />
                        </div>
                        {/* <div className="col-span-2 sm:col-span-3">
                            <label htmlFor="totalPrices" className="font-medium">Total Price</label>
                            <input id="totalPrices" name="totalPrices" type="text"
                                value={totalPrice} placeholder="Total Price" className="w-full rounded-md p-[6px]" />
                        </div> */}

                    </div>

                </form>
            </div>
        </div>
    );
};

export default DetailsConfirmOrder;