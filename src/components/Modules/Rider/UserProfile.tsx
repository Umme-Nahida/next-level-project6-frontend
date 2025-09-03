import ProfileCard from "@/pages/ProfileCard";
import { useGetUserQuery } from "@/Redux/Features/authApi/authApi";


const profile = {
    fullName: "Mohammad Emam Uddin",
    email: "emamskingdom@gmail.com",
    studentId: "RESET9-0730",
    mobile: "01790910529",
};

const devices = [
    {
        serial: 1,
        platform: "Windows 10",
        date: "28-08-2025 08:36 PM",
    },
];

const UserProfile = () => {

    const { data, error, isLoading } = useGetUserQuery(undefined);

    const user = data?.user?.user;

    if (isLoading) return <p>Loading...</p>;

    if (error) {
        console.log(error)
    }
    return (
        <div>
            <h1  className="text-center text-3xl font-bold my-10">Well Come to your Profile </h1>
            <ProfileCard profile={user} ></ProfileCard>
        </div>
    );
};

export default UserProfile;