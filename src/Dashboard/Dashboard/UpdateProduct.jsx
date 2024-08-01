import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateProduct = () => {

    const axiosSecure = useAxiosSecure()

    const handleStockUpdate = async (e) => {
        e.preventDefault()
        const form = e.target;
        const productId = form.productId.value;
        const stockAmounts = form.stockAmounts.value

        const updateProduct = { stockAmounts }

        const res = await axiosSecure.put(`/stockAdded/${productId}`, updateProduct)

        if (res.data.modifiedCount === 1) {
            toast('Stock Updated')
            form.productId.value = '';
            form.stockAmounts.value = ''
        }

    }

    return (
        <form onSubmit={handleStockUpdate}>

            <div className="flex flex-col md:flex-row gap-5 w-[90%] mx-auto">
                <div className="">
                    <label htmlFor="productId" className="font-medium">Product Id</label>
                    <input id="productId" name="productId" type="number"
                        placeholder="product Id" className="w-full rounded-md p-[6px] bg-gray-100" />
                </div>
                <div className="">
                    <label htmlFor="stockAmounts" className="font-medium">Stock Amounts</label>
                    <input id="stockAmounts" name="stockAmmounts" type="number"
                        placeholder="stock Amounts" className="w-full rounded-md p-[6px] bg-gray-100" />
                </div>

            </div>
            <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">Update Stock</button>
            </div>
        </form>
    );
};

export default UpdateProduct;