import { Button } from "@/components/ui/button";
import { useUpdateProfileMutation } from "@/Redux/Features/AdminApi/adminApi";
import { useChangePasswordMutation } from "@/Redux/Features/authApi/authApi";
import { useState } from "react";
import { toast } from "sonner";


const ProfileCard = ({ profile }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [changePass] = useChangePasswordMutation()
    const [update] = useUpdateProfileMutation()

    const [formData, setFormData] = useState({
        name: profile?.name || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        vehicleType: '',
        vehicleModel: '',
        vehicleNumber: '',
        vehicleColor: '',
        licenseNumber: '',
        licenseExpiryDate: '',
        seatsAvailable: ''

    });

    const isPasswordValid =
        formData.currentPassword.trim() !== "" &&
        formData.newPassword.trim() !== "" &&
        formData.confirmPassword.trim() !== "" &&
        formData.newPassword === formData.confirmPassword;

    // console.log("profile", profile)

    const isConfirmMismatch =
        formData.confirmPassword &&
        formData.newPassword !== formData.confirmPassword;


    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    // -------handle user update profile 
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const updateInfo = {
            name: formData.name,
            vehicleInfo: {
                vehicle_type: formData.vehicleType,
                vehicle_model: formData.vehicleModel,
                vehicle_number: formData.vehicleNumber,
                vehicle_color: formData.vehicleColor,
                licenseExpireDate: formData.licenseExpiryDate,
                license_number: formData.licenseNumber,
                seats_available: formData.seatsAvailable
            }

        }

        const res = await update(updateInfo)
        console.log('updated:', res.data)
        if (res.data) {
            toast.success(res.data.message)
        }

        if (res.error) {
            toast.error((res.error as any).data.message || "profile update has been failed")
            return;
        }
        // Save logic here
        console.log(formData);
        setIsModalOpen(false);
    };


    // password change api called
    const handleChangePass = async () => {
        try {
            console.log("password changes", {
                oldPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            })

            const res = await changePass({
                oldPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            if (res?.data?.success) {
                toast.success("Password has been change successfully")
            }
            if (res?.error) {
                toast.error((res.error as any).data.message || "password change is failed")
                console.log(res)

            }
        } catch (err: any) {
            toast.error((err?.error as any)?.data.message || "password change is failed")
            console.log(err)
        }

    }

    return (
        <div className="bg-gray-900 text-white max-w-3xl mx-auto rounded-2xl shadow-lg p-6">
            {/* Profile Header */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                <h2 className="text-xl font-semibold text-purple-400">My Profile</h2>
                <button onClick={() => setIsModalOpen(true)} className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
                    ✎ Edit
                </button>
            </div>

            {/* Profile Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="font-medium">{profile?.name}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="font-medium ">{profile?.email}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Join Date</p>
                    <p className="font-medium">{profile.createdAt}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">User Role</p>
                    <p className="font-medium">{profile.role}</p>
                </div>

            </div>

            {/* password change */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                <div>
                    <p className="text-gray-400 text-sm">Your Password</p>
                    <p className="font-medium">*************</p>
                </div>


                {
                    profile.role === "DRIVER" &&
                    <div>
                        <label className="text-gray-400 text-sm flex items-center gap-1">Vehicle info</label>
                        {
                            profile.vehicleInfo ? "" : <p className="text-red-500">must be update your vehicle_Info to admin approval</p>
                        }
                        {
                            profile.vehicleInfo && <p>Model: {profile.vehicleInfo.vehicle_model} | Number: {profile.vehicleInfo.vehicle_number} | Type: {profile.vehicleInfo.vehicle_type} </p>
                        }
                    </div>
                }

            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gray-900 text-white max-w-3xl max-h-[90vh] w-full mx-4 my-10 rounded-2xl shadow-lg p-6 relative overflow-y-auto">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
                        >
                            &times;
                        </button>

                        {/* Form */}
                        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                            <h2 className="text-xl font-semibold text-purple-400">My Profile</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-400 text-sm flex items-center gap-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-sm flex items-center gap-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        readOnly
                                        defaultValue={profile?.email}
                                        className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                            </div>


                            {/*------------driver vehycle info---------------*/}
                            {profile?.role === "DRIVER" && (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Vehicle Type</label>
                                            <input type="text" name="vehicleType" placeholder="Car / Bike / CNG"
                                                onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.vehicle_type}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Vehicle Model</label>
                                            <input type="text" name="vehicleModel" placeholder="Toyota Corolla"
                                                onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.vehicle_model}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Vehicle Number</label>
                                            <input type="text" name="vehicleNumber" placeholder="DHA-12345"
                                                onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.vehicle_number}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Vehicle Color</label>
                                            <input type="text" name="vehicleColor" placeholder="Black"
                                                onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.vehicle_color}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Driving License Number</label>
                                            <input type="text" name="licenseNumber" placeholder="License Number" required onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.license_number}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">License Expire Date</label>
                                            <input type="date" name="licenseExpiryDate" placeholder="Black"
                                                onChange={handleChange}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.licenseExpireDate}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-gray-400 text-sm flex items-center gap-1">Seats Available</label>
                                            <input type="text" name="seatsAvailable"
                                                onChange={handleChange} min={1}
                                                defaultValue={profile.vehicleInfo && profile.vehicleInfo.seats_available}
                                                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                        </div>

                                    </div>

                                </>
                            )}

                            {/* password change */}
                            <div className="border-t border-gray-700 pt-6">
                                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                                    Password
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-gray-400 text-sm flex items-center gap-1">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            value={formData.currentPassword}
                                            onChange={handleChange}
                                            className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-400 text-sm flex items-center gap-1">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-400 text-sm flex items-center gap-1">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />

                                        {isConfirmMismatch && <p className="text-red-400 text-sm">Confirm password does not match to new password</p>}
                                    </div>

                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500"
                                >
                                    Save Changes
                                </button>
                                <div>
                                    <Button
                                        onClick={handleChangePass}
                                        className={`cursor-pointer ${!isPasswordValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!isPasswordValid}
                                    >
                                        Change Password
                                    </Button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};




export default ProfileCard;