import { useIncomingRequestsQuery } from "@/Redux/Features/DriverApi/driverApi";
import IncomingRequestCard from "./IncomingRequestCard";


const IncomingRequest = () => {

    const { data, isLoading, isError, refetch } = useIncomingRequestsQuery(undefined)

    if (isLoading) {
        <p>is loading.....</p>
    }

    if (isError) {
        return <p>{isError}</p>
    }
    console.log("incoming request", data)
    return (
        <div >
            <h1 className="text-center text-2xl mb-10 font-medium">Incoming Request</h1>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6">
                {
                    data?.data?.map((ride: any) => <IncomingRequestCard key={ride._id} ride={ride} />)
                }
            </div>
        </div>
    );
};

export default IncomingRequest;


/**
 * RideRequestCard
 * Props: {
 *   ride: {
 *     id?: string,
 *     pickupLocation: string,
 *     destinationLocation: string,
 *     timestampsHistory: { requestedAt: string | number | Date },
 *     paymentMethod: string,
 *     status: 'pending' | 'accepted' | 'cancelled' | 'completed' | string,
 *     fare: number,
 *   },
 *   onCancel?: (id) => void,
 *   onTrack?: (id) => void,
 * }
 *
 * Tailwind CSS is used for styling. Drop this file into a React app that already
 * has Tailwind configured (Create React App, Next.js, Vite etc.).
 */



/* ------------------ Example usage ------------------ */

// Example mock data and how to render the card. Paste into a parent component:

/*
import RideRequestCard from './RideRequestCard';

const mockRide = {
  id: 'ride_001',
  pickupLocation: 'Dhanmondi 32, Dhaka',
  destinationLocation: 'Bashundhara City, Dhaka',
  timestampsHistory: { requestedAt: new Date().toISOString() },
  paymentMethod: 'Cash',
  status: 'pending',
  fare: 350,
};

function Parent() {
  const handleCancel = (id) => {
    console.log('cancel', id);
  };
  const handleTrack = (id) => {
    console.log('track', id);
  };

  return (
    <div className="p-4">
      <RideRequestCard ride={mockRide} onCancel={handleCancel} onTrack={handleTrack} />
    </div>
  );
}
*/
