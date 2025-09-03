import ProfileCard from "@/pages/ProfileCard";
import { useGetUserQuery } from "@/Redux/Features/authApi/authApi";

const DriverProfile = () => {
           const { data, error, isLoading } = useGetUserQuery(undefined);
    
        const user = data?.user?.user;
    
        if (isLoading) return <p>Loading...</p>;
    
        if (error) {
            console.log(error)
        }
        
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-10">Well Come to your Profile</h1>
            <ProfileCard profile={user} ></ProfileCard>
        </div>
    );
};

export default DriverProfile;