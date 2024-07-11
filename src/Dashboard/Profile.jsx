
const Profile = () => {
    return (
        <div className="bg-base-200 shadow-xl p-4 w-[98%] md:w-3/4 mx-auto">
            <h3 className="text-center  text-xl ">Personal Information</h3>
            <div className="flex gap-10 mt-5">

                <figure>
                    <img className="w-[100px] h-[100px] rounded-full"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                </figure>
                <div className="w-[50%] flex flex-row gap-5 ">
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
                        <h2 className="">hasan@gmail.com </h2>
                        <h2 className="">019000000 </h2>
                        <h2 className="">Male </h2>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Profile;