

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AllPagination from "../Shared/Pagination";
import { useMyRideHistoryQuery } from "@/Redux/Features/DriverApi/driverApi";


// type Ride = {
//     _id: string;
//     pickup: string;
//     destination: string;
//     fare: number;
//     status: string;
//     createdAt: string;
// };

export default function MyRideHistory() {
    

    // filters
    const [searchTerm, setSearchTerm] = useState("");
    const [minFare, setMinFare] = useState("");
    const [maxFare, setMaxFare] = useState("");
    const [page, setPage] = useState(1);
     const limit = 5;


    const { data, error, isLoading } = useMyRideHistoryQuery({
        page,
        limit,
        searchTerm,
        minFare,
        maxFare
    });
    const meta = data?.data?.meta;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

    console.log(data)


    return (
        <div className="p-6 space-y-4">
             <h1 className="text-3xl mb-10 text-center font-medium">My Ride History</h1>
            {/* 🔍 Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Input
                    placeholder="Search by pickup/destination..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Min Fare"
                    value={minFare}
                    onChange={(e) => setMinFare(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Max Fare"
                    value={maxFare}
                    onChange={(e) => setMaxFare(e.target.value)}
                />


                <Button className="cursor-pointer">Apply</Button>
            </div>

            {/* 📋 Ride List */}
            <div className="space-y-2">
                {data?.data?.rides?.length > 0 ? (
                    data?.data?.rides?.map((ride: any) => (
                        <div key={ride._id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center ">
                            <div className="space-y-2">
                                <p className="font-medium">{ride?.pickupLocation.address} → {ride?.destinationLocation.address}</p>
                               
                               {/* driver info */}
                                {
                                    ride.driver &&

                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-gray-500">
                                           <span className="text-black font-medium">driver_Name: </span> {ride?.driver?.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                           <span className="text-black font-medium">Driver_Email:</span> {ride?.driver?.email}
                                        </p>
                                    </div>}


                                     {/* rider info */}
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-gray-500">
                                            <span className="text-black font-medium">Rider_Name:</span> {ride?.rider?.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="text-black font-medium"> Rider_Email:</span> {ride?.rider?.email}
                                        </p>
                                    </div>
                                <p className="text-sm text-gray-500">
                                    {new Date(ride?.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">${ride?.fare}</p>
                                <p className="text-sm capitalize">{ride?.status}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No rides found</p>
                )}
            </div>

              {/* added pagination here */}
            <div className="my-5">
                <AllPagination
                    limit={meta?.limit}
                    page={meta?.page}
                    total={meta?.total}
                    onPageChange={(newPage:number) => setPage(newPage)}
                ></AllPagination>
            </div>
        </div>
    );
}
