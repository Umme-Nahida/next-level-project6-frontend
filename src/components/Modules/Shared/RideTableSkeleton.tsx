import { Skeleton } from "@/components/ui/skeleton"

export default function RideTableSkeleton() {
  return (
    <div className="w-full border rounded-lg p-4">
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 border-b pb-2 mb-2 text-sm font-semibold">
        <div>Date</div>
        <div>Status</div>
        <div>Driver</div>
        <div>Rider</div>
        <div>Fare (৳)</div>
      </div>

      {/* Table Rows Skeleton */}
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 items-center"
          >
            <Skeleton className="h-4 w-28" /> {/* Date */}
            <Skeleton className="h-4 w-20" /> {/* Status */}
            <Skeleton className="h-4 w-24" /> {/* Driver */}
            <Skeleton className="h-4 w-24" /> {/* Rider */}
            <Skeleton className="h-4 w-12" /> {/* Fare */}
          </div>
        ))}
      </div>
    </div>
  )
}
