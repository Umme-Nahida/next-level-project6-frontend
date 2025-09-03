import { useManageActiveRideQuery } from "@/Redux/Features/DriverApi/driverApi";
import ActiveRideCard from "./ActiveRideCard";
import { Skeleton } from "@/components/ui/skeleton";



const ActiveRideManage = () => {
    const { data, isLoading, isError } = useManageActiveRideQuery(undefined)

    if (isLoading) {
        return <div className="text-center flex items-center justify-center"><div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div></div>
    }
    
    if (isError) return <div>something went wrongs</div>

    // console.log(data)


    return (
        <div>
            <h1 className="text-center text-2xl font-medium mb-10">My all Active Rides </h1>
            <div className="grid grid-cols-2 items-center justify-items-center gap-5">
                {data?.data?.map((ride: any) => (
                    <ActiveRideCard key={ride._id} ride={ride} />
                ))}
            </div>
        </div>
    );
};

export default ActiveRideManage;