import useProductsData from "../../../hooks/useProductsData";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const CategoriesList = () => {

    const [products, isLoading] = useProductsData()

    const categories = products ? [...new Set(products.map(product => product.category))] : [];

    return (
        <div>
            <h3 className="text-2xl mt-8 border-l-4 pl-2 border-orange-600 ml-2">Categories</h3>
            <div className="divider"></div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Navigation]}
                className="mySwiper mt-4 !px-4 md:!w-[60%] md:!px-8 lg:!w-1/2 lg:!px-8"
            >
                {
                    categories.map(category => <SwiperSlide key={category} className="border-2 border-gray-600 text-center !h-[100px] !flex !items-center !justify-center font-medium">{category}</SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default CategoriesList;