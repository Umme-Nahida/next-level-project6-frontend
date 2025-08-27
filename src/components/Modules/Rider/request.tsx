import { useRideRequestMutation } from "@/Redux/Features/RiderApi/riderApi";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RideRequestForm() {
  const [pickup, setPickup] = useState({ lat: 0, lng: 0, address: "Habiganj" });
  const [destination, setDestination] = useState({ lat: 0, lng: 0, address: "Sylhet" });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [fare, setFare] = useState<number | null>(0);
  const [riderRequest] = useRideRequestMutation()
  const [open, setOpen] = useState(false);

  const handleEstimateFare = async () => {
    // const res = await fetch("/api/v1/rides/estimate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     pickupLocation: pickup,
    //     destinationLocation: destination,
    //   }),
    // });
    // const data = await res.json();
    // setFare(data.fare);
    setOpen(true)
    console.log(setFare)
  };

  const handleRequestRide = async () => {
    const rideRequestInfo = { 
        pickupLocation:pickup,
        destinationLocation:destination
    }

  const res = await riderRequest(rideRequestInfo)
  console.log(res)
  if ((res as any).data) {
      toast.success((res as any).data.message || "Ride Request created successfully")
  }
  if ((res as any).error) {
      toast.error((res as any).error?.data?.message || "Ride Request has been failed")
  }
  console.log("Ride Requested:", rideRequestInfo);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold">Request a Ride</h2>

      {/* Pickup Inputs */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Pickup Address"
          value={pickup.address}
          onChange={(e) => setPickup({ ...pickup, address: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Pickup Latitude"
          value={pickup.lat}
          onChange={(e) => setPickup({ ...pickup, lat: Number(e.target.value)})}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Pickup Longitude"
          value={pickup.lng}
          onChange={(e) => setPickup({ ...pickup, lng: Number(e.target.value) })}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Destination Inputs */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Destination Address"
          value={destination.address}
          onChange={(e) => setDestination({ ...destination, address: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Destination Latitude"
          value={destination.lat}
          onChange={(e) => setDestination({ ...destination, lat: Number(e.target.value) })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Destination Longitude"
          value={destination.lng}
          onChange={(e) => setDestination({ ...destination, lng:Number( e.target.value) })}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Payment */}
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="wallet">Wallet</option>
      </select>

      {/* Fare */}
      {fare && <p className="text-lg">Estimated Fare: ৳{fare}</p>}

      <div className="flex gap-3">
        <button
          onClick={handleEstimateFare}
          className=" cursor-pointer bg-secondary hover:bg-primary text-ring hover:text-amber-50 border-2 border-ring font-medium px-4 py-2 rounded"
        >
          Estimate Fare
        </button>
        <button
          onClick={handleRequestRide}
          className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded"
        >
          Request Ride
        </button>
      </div>

        {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Estimated Fare</DialogTitle>
            <DialogDescription>
              {fare ? (
                <span className="text-lg font-bold">
                  {fare} Tk for this ride
                </span>
              ) : (
                "Unable to calculate fare"
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
