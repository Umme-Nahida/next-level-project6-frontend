
import { Skeleton } from "@/components/ui/skeleton";
import ProfileCard from "@/pages/ProfileCard";
import { useGetUserQuery } from "@/Redux/Features/authApi/authApi";
const AdminProfile = () => {
    const { data, error, isLoading } = useGetUserQuery(undefined);

    const user = data?.user?.user;

    

    if (isLoading) {
        return (
            <div> 
                <div className="flex flex-col items-center justify-center space-y-3 p-20 border rounded-lg w-[390px] mx-auto mt-10">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-48" />
                </div>
            </div>
        )
    }


    if (error) {
        console.log(error)
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-10">Well Come to your Profile </h1>
            <ProfileCard profile={user} ></ProfileCard>
        </div>
    );
};

export default AdminProfile;