
const Profile = () => {
    return (
        <div className="bg-base-200 shadow-xl p-2 md:p-8 mt-2 md:mt-5 lg:mt-0 w-[98%]  mx-auto">
            <h3 className=" text-xl ">Personal Information</h3>
            <div className="flex gap-3 md:gap-8 lg:gap-10 w-[98%] mx-auto mt-5">

                <figure>
                    <img className="w-[100px] h-[100px] rounded-full"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                </figure>
                <div className="w-full flex flex-row gap-3 md:gap-10 lg:gap-16 ">
                    <div className="flex flex-col justify-between font-medium opacity-95 ">
                        <h2 className="">Name </h2>
                        <h2 className="">Email </h2>
                        <h2 className="">Phone </h2>
                        <h2 className="">Gender </h2>
                    </div>
                    <div className="flex flex-col justify-between font-medium opacity-95 ">
                        <h2 className="">: </h2>
                        <h2 className="">: </h2>
                        <h2 className="">: </h2>
                        <h2 className="">: </h2>
                    </div>
                    <div className="flex flex-col justify-between font-medium opacity-95 ">
                        <h2 className="">Hasan </h2>
                        <h2 className="">hasanalam365@gmail.com </h2>
                        <h2 className="">019000000 </h2>
                        <h2 className="">Male </h2>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Profile;