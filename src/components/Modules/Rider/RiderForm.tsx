

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRideRequestMutation } from "@/Redux/Features/RiderApi/riderApi";
import { toast } from "sonner";



export default function RiderForm() {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [fare, setFare] = useState<number | null>(0);
    const [riderRequest] = useRideRequestMutation()

    // fare estimation (backend er API hit korbe)
    const handleEstimateFare = async () => {
        try {
            const rideRequestInfo = {
                pickupLocation: pickup,
                destinationLocation: destination
            }

            const res = await riderRequest(rideRequestInfo)
            console.log(res)
            if (res.data) {

                setFare(res.data.estimatedFare);
                toast.success(res.data.message || "Ride Request created successfully")
            }
            if (res.error) {
                toast.error(res.error.data.message || "Ride Request has been failed")
            }
            console.log("Ride Requested:", rideRequestInfo);

        } catch (error) {
            console.error("Error estimating fare:", error);
        }
    };

    // final ride request submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const rideRequestInfo = {
            pickupLocation: {
                lat: 23.7808875,
                lng: 90.2792371,
                address: pickup
            },
            destinationLocation: {
                lat: 23.763801,
                lng: 90.430191,
                address: destination
            },
            paymentMethod:paymentMethod,
            fare:fare
        }

        const res = await riderRequest(rideRequestInfo)
        console.log(res)
        if (res.data) {

            setFare(res.data.estimatedFare);
            toast.success(res.data.message || "Ride Request created successfully")
        }
        if (res.error) {
            toast.error(res.error.data.message || "Ride Request has been failed")
        }
        console.log("Ride Requested:", rideRequestInfo);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto my-10 p-6 space-y-4 border rounded-2xl shadow-md"
        >
            <div>
                <Label className="mb-2" htmlFor="pickup">Pickup Location</Label>
                <Input
                    id="pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup location"
                    required
                />
            </div>

            <div>
                <Label className="mb-2" htmlFor="destination">Destination</Label>
                <Input
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination"
                    required
                />
            </div>

            <div>
                <Label className="mb-2">Payment Method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Cash">Cash</SelectItem>
                        <SelectItem value="Card">Card</SelectItem>
                        <SelectItem value="Wallet">Wallet</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Button type="button" onClick={handleEstimateFare}>
                    Estimate Fare
                </Button>
                {fare !== null && (
                    <span className="font-semibold">Estimated Fare: ${fare}</span>
                )}
            </div>

            <Button type="submit" className="w-full">
                Request Ride
            </Button>
        </form>
    );
}
