import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TimerResetIcon } from "lucide-react";
import { useParams } from "react-router";
import { useRideDetailsQuery } from "@/Redux/Features/RiderApi/riderApi";

export default function RiderDetails() {
    const { rideId } = useParams();
    // console.log("rideId", params.)
    const { data: rideDetails } = useRideDetailsQuery({ id: rideId })

    // const data = {
    //     pickupLocation: {
    //         address: "Habiganj Shadar ",
    //     },
    //     destinationLocation: {
    //         address: "Dhanmondi, Dhaka",
    //     },
    //     timestampsHistory: {
    //         requestedAt: "2025-08-30T10:29:34.457Z",
    //         acceptedAt: "2025-08-31T15:32:21.019Z",
    //         pickedUpAt: "2025-09-01T10:50:14.663Z",
    //     },
    //     rider: {
    //         name: "Umme Nahida",
    //         email: "niha@gmail.com",
    //     },
    //     driver: {
    //         name: "Tonmoy Ahmed",
    //         email: "tonmoy@gmail.com",
    //         vehicleInfo: {
    //             vehicle_type: "Car",
    //             vehicle_number: "DHA-3445",
    //             license_number: "nahida@license1234",
    //             seats_available: "4",
    //             vehicle_model: "Toyota",
    //             vehicle_color: "Black",
    //         },
    //     },
    //     status: "picked_up",
    //     paymentMethod: "Card",
    //     fare: 50,
    // };

    const data = rideDetails?.data || {}

    console.log(rideDetails?.data)

    return (
        <div>
            <h1 className="text-center text-2xl mb-10">Retrieve Ride Details</h1>


            {/* ride Details cards */}
            <div className="p-4 grid gap-6 md:grid-cols-2">
                {/* Rider Info */}
                <Card className="shadow-md rounded-2xl">
                    <CardHeader>
                        <CardTitle>Rider Information</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://ui-avatars.com/api/?name=Umme+Nahida" />
                            <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{data?.rider?.name}</p>
                            <p className="text-sm text-muted-foreground">{data?.rider?.email}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Driver Info */}
                <Card className="shadow-md rounded-2xl">
                    <CardHeader>
                        <CardTitle>Driver Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://ui-avatars.com/api/?name=Tonmoy+Ahmed" />
                                <AvatarFallback>TA</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{data?.driver?.name}</p>
                                <p className="text-sm text-muted-foreground">{data.driver.email}</p>
                            </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="text-sm space-y-1">
                            <p><span className="font-medium">Vehicle:</span> {data?.driver?.vehicleInfo.vehicle_model} ({data?.driver?.vehicleInfo.vehicle_color})</p>
                            <p><span className="font-medium">Type:</span> {data?.driver?.vehicleInfo.vehicle_type}</p>
                            <p><span className="font-medium">Number:</span> {data?.driver?.vehicleInfo.vehicle_number}</p>
                            <p><span className="font-medium">Seats:</span> {data?.driver?.vehicleInfo.seats_available}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Ride Details */}
                <Card className="md:col-span-2 shadow-md rounded-2xl">
                    <CardHeader>
                        <CardTitle>Ride Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-start gap-2">
                            <span className="font-medium">Pickup:</span>
                            <span>{data?.pickupLocation?.address}</span>
                        </div>
                        <div className="flex justify-start gap-2">
                            <span className="font-medium">Destination:</span>
                            <span>{data?.destinationLocation?.address}</span>
                        </div>
                        <div className="flex justify-start gap-2">
                            <span className="font-medium">Fare:</span>
                            <span>{data?.fare} BDT</span>
                        </div>
                        <div className="flex justify-start gap-2">
                            <span className="font-medium">Payment:</span>
                            <Badge>{data?.paymentMethod}</Badge>
                        </div>
                        <div className="flex justify-start gap-2">
                            <span className="font-medium">Status:</span>
                            <Badge variant="outline" className="capitalize">{data?.status}</Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Timeline */}
                <Card className="md:col-span-2 shadow-md rounded-2xl">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TimerResetIcon />
                            Status Timeline
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li>
                                <Badge variant="secondary">Requested</Badge> – {new Date(data?.timestampsHistory?.requestedAt).toLocaleString()}
                            </li>
                            <li>
                                <Badge variant="secondary">Accepted</Badge> – {new Date(data?.timestampsHistory?.acceptedAt).toLocaleString()}
                            </li>
                            <li>
                                <Badge variant="secondary">Picked Up</Badge> – {new Date(data?.timestampsHistory?.pickedUpAt).toLocaleString()}
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
