import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProduct = () => {

    const [imgPrev, setImgPrev] = useState('')
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const handleAddProduct = async (e) => {

        e.preventDefault()

        const form = e.target;
        const title = form.title.value;

        const category = form.category.value;
        const rating = form.rating.value;
        const features = form.features.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const description = form.description.value;
        // const photo = form.photo.files[0];

        // const formData = new FormData();
        // formData.append('image', photo);
        // const res = await axiosPublic.post(image_hosting_api, formData, {
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // });
        // const imgUrl = res.data.data.display_url;

        //TODO: imgUrl add all property
        const all = { title, category, rating, features, stock, price, description }
        console.table(all)
    }

    const handleImg = (e) => {

        const photo = e.target.files[0];
        setImgPrev(photo.name)

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
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="category" className="font-medium">Category</label>
                        <input id="category" name="category" type="text"
                            placeholder="category" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="rating" className="font-medium">Rating</label>
                        <input id="rating" name="rating" type="number"
                            placeholder="rating" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label htmlFor="features" className="font-medium">Features</label>
                        <input id="features" name="features" type="text"
                            placeholder="Features" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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
                    <button type="submit" className="btn btn-secondary w-full">Confirm Order</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;