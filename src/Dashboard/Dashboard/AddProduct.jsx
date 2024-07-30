import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProduct = () => {

    const [imgPrev, setImgPrev] = useState('')
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [feature, setFeature] = useState([])
    const [currentFeatures, setCurrentFeatures] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')



    const handleAddProduct = async (e) => {

        e.preventDefault()

        const form = e.target;
        const title = form.title.value;

        const category = selectedCategory
        const rating = form.rating.value;
        const features = feature;
        const stock = form.stock.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.files[0];

        try {
            const formData = new FormData();
            formData.append('image', photo);
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const imgUrl = res.data.data.display_url;


            const productData = { title, category, rating, features, stock, price, description, imgUrl }

            const addProduct = await axiosSecure.post('/add-product', productData)
            if (addProduct.data.modifiedCount === 1) {
                toast('product added successfully')
            }

        } catch (error) {
            console.log(error.message)
        }



    }

    const handleAddFeature = () => {
        if (currentFeatures && !feature.includes(currentFeatures)) {
            setFeature([...feature, currentFeatures])
            setCurrentFeatures('')
        }
        toast('added feature')
    }

    const handleImg = (e) => {

        const photo = e.target.files[0];
        setImgPrev(photo.name)

    }

    const handleChangeCategory = (e) => {
        setSelectedCategory(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <div className="text-center mb-5">
                    <h4 className="text-3xl font-semibold">Add Product</h4>
                </div>

                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-gray-200 p-4">
                    {/* <div className="col-span-2 sm:col-span-3">
                        <label htmlFor="productdId" className="font-medium">Productd Id</label>
                        <input id="productdId" name="productId" type="number"
                            placeholder="productd id" className="w-full rounded-md p-[6px]" />
                    </div> */}
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="title" className="font-medium">Title</label>
                        <input id="title" name="title" type="text"
                            placeholder="title" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="col-span-3 sm:col-span-3 flex flex-col">
                        <label htmlFor="category" className="font-medium">Category</label>
                        <select
                            className="select focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full "
                            value={selectedCategory}
                            onChange={handleChangeCategory}
                        >
                            <option disabled value="">Pick your category</option>
                            <option value="Popular">Popular</option>
                            <option value="NewArrival">NewArrival</option>
                            <option value="BestSellers">BestSellers</option>
                            <option value="TrendingGadgets">TrendingGadgets</option>
                            <option value="SmartHome">SmartHome</option>
                            <option value="TechEssentials">TechEssentials</option>
                            <option value="InnovativeTech">InnovativeTech</option>
                            <option value="GadgetDeals">GadgetDeals</option>
                            <option value="TopRated">TopRated</option>
                            <option value="WearableTech">WearableTech</option>
                            <option value="HomeAutomation">HomeAutomation</option>
                            <option value="PortableDevices">PortableDevices</option>
                        </select>
                        {/* <label htmlFor="category" className="font-medium">Category</label>
                        <input id="category" name="category" type="text"
                            placeholder="category" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> */}
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="rating" className="font-medium">Rating</label>
                        <input id="rating" name="rating" type="number"
                            placeholder="rating" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="col-span-3 sm:col-span-3 ">
                        <label htmlFor="features" className="font-medium">Features</label>
                        <div className="flex">
                            <input id="features" name="features" type="text"
                                value={currentFeatures}
                                onChange={(e) => setCurrentFeatures(e.target.value)}
                                placeholder="Add some Features" className="w-3/4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            <button type="button" onClick={handleAddFeature} className="ml-2 p-2 bg-blue-500 text-white rounded-md w-1/4">Add</button>
                        </div>

                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="stock" className="font-medium">Stock</label>
                        <input id="stock" name="stock" type="number"
                            placeholder="stock" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="price" className="font-medium">Price</label>
                        <input id="price" name="price" type="number"
                            placeholder="price" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " />
                    </div>

                    <div className=' col-span-3 sm:col-span-3 text-center'>
                        <label>
                            <input onChange={handleImg} className='text-sm cursor-pointer w-36 hidden'
                                type='file'
                                name='photo'
                                id='image'
                                accept='image/*'

                                required
                            />


                            <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                Upload Image
                            </div>
                        </label>
                    </div>
                    {imgPrev ? <div className="col-span-3 sm:col-span-3 flex items-center ">
                        {imgPrev}
                    </div> :
                        <div className="col-span-3 sm:col-span-3 flex items-center text-red-600">
                            No file Select
                        </div>
                    }
                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="description" className="font-medium">Description</label>
                        {/* <input id="description" name="description" type="textarea"
                            placeholder="description" className="w-full rounded-md p-[6px]" /> */}
                        <textarea
                            name="description"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows="4"
                            placeholder="Enter your description here..."
                        ></textarea>
                    </div>
                </div>
                <div className="mb-5">
                    <button type="submit" className="btn btn-secondary w-full">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;