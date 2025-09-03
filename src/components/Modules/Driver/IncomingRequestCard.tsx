// const StatusBadge = ({ status }) => {
//   const base = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium";
//   switch (status) {
//     case "accepted":
//       return <span className={`${base} bg-green-100 text-green-800`}>Accepted</span>;
//     case "completed":
//       return <span className={`${base} bg-blue-100 text-blue-800`}>Completed</span>;
//     case "cancelled":
//       return <span className={`${base} bg-red-100 text-red-800`}>Cancelled</span>;
//     case "pending":
//     default:
//       return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
//   }
// };

import { useAcceptRideMutation } from "@/Redux/Features/DriverApi/driverApi";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const formatDate = (input:Date) => {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleString();
};

export default function IncomingRequestCard({ ride}:any) {
  const navigate = useNavigate()
  const [acceptedRide] = useAcceptRideMutation()
  const {
    pickupLocation,
    destinationLocation,
    timestampsHistory,
   paymentMethod,
    status,
    fare,
    _id
  } = ride;


  const handleAcceptRide = async(id:any)=>{
    console.log("active ride id", id)
    const res = await acceptedRide(id)
    
    if(res.data){
        toast.success(res.data.message || "ride accepted successfully")
        navigate("/driver/activeRides")
    }

    if(res.error){
        toast.error((res.error as any).data.message || "ride has not accepted")
    }
    console.log(res.data)
  }

  return (
    <div className="max-w-3xl w-full mx-auto bg-white border border-green-400 dark:bg-gray-800  shadow-md rounded-2xl p-4 sm:p-6">
      <div className="flex items-start gap-4 sm:gap-6">
        {/* Icon column */}
        <div className="hidden sm:flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-lg font-semibold">
            R
          </div>
          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">{pickupLocation?.address} → {destinationLocation?.address}</h3>

            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <dt className="text-xs text-gray-400">Requested at</dt>
                <dd className="mt-1">{formatDate(timestampsHistory?.requestedAt)}</dd>
              </div>

              <div>
                <dt className="text-xs text-gray-400">Payment</dt>
                <dd className="mt-1">{paymentMethod}</dd>
              </div>

              <div>
                <dt className="text-xs text-gray-400">Fare</dt>
                <dd className="mt-1 font-medium">{fare ? `৳ ${fare.toFixed(2)}` : '-'} </dd>
              </div>

              <div>
                <dt className="text-xs text-gray-400">Status </dt>
                <dd className="mt-1">{status} </dd>
              </div>
            </dl>

            {/* small description / note area */}
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Ride ID: {_id || '—'}</p>
          </div>

          {/* Actions column */}
          <div className="col-span-1 flex flex-col items-start sm:items-end gap-3">
            <div className="w-full sm:w-auto flex items-center gap-3">
              <button
                onClick={() => handleAcceptRide(_id)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <span className="text-xs sm:text-sm">Accept</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}