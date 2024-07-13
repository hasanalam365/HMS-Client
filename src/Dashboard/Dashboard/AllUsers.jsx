import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


    const handleChangeRole = (user) => {

        Swal.fire({
            title: "Do you want to change user role?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Make Admin`,
            denyButtonText: `Make User`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const role = 'admin'
                const res = await axiosSecure.patch(`/users/admin/${user._id}`, { role })
                console.log(res.data)
                if (res.data.modifiedCount === 1) {
                    toast('Make Admin successfully')
                    refetch()
                }
            } else if (result.isDenied) {
                const role = 'user'
                console.log(role)
                const res = await axiosSecure.patch(`/users/admin/${user._id}`, { role })

                if (res.data.modifiedCount === 1) {
                    toast('Make user successfully')
                    refetch()
                }
            }
        });
    }


    const handleDelete = (email) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${email}`)

                if (res.data.deletedCount === 1) {
                    toast('User has been deleted')
                    refetch()
                }
            }
        });


    }


    return (
        <div className="flex flex-col mt-4 px-4 md:p-8">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold">All Users</h4>
                <h4 className="text-lg font-semibold">Total Users: <span>{users.length}</span></h4>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =>
                                <tr key={idx}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={user.photoURL} alt='user photo' />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? <button onClick={() => handleChangeRole(user)}>
                                            Admin
                                        </button> : <button onClick={() => handleChangeRole(user)} className="btn btn-ghost btn-xs text-white bg-green-600 ">
                                            <FaUsers className="text-lg" />
                                        </button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user.email)} className="btn btn-ghost btn-xs text-white bg-red-600 ">Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;