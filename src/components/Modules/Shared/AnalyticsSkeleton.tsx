import { Skeleton } from "@/components/ui/skeleton"

export default function AnalyticsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pie Chart Card Skeleton */}
      <div className="border rounded-2xl shadow-sm p-6">
        <div className="mb-4">
          <Skeleton className="h-5 w-40 mb-2" /> {/* Title */}
          <Skeleton className="h-4 w-32" />       {/* Subtitle */}
        </div>

        <div className="flex justify-center items-center">
          <Skeleton className="h-40 w-40 rounded-full" /> {/* Pie Chart Circle */}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-12" /> // Legend items
          ))}
        </div>
      </div>

      {/* Bar Chart Card Skeleton */}
      <div className="border rounded-2xl shadow-sm p-6">
        <div className="mb-4 flex justify-between">
          <div>
            <Skeleton className="h-5 w-44 mb-2" /> {/* Title */}
            <Skeleton className="h-4 w-60" />       {/* Subtitle */}
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-end">
              <Skeleton className="h-4 w-16 mb-1" /> {/* Label */}
              <Skeleton className="h-6 w-12" />      {/* Value */}
            </div>
            <div className="flex flex-col items-end">
              <Skeleton className="h-4 w-16 mb-1" />
              <Skeleton className="h-6 w-12" />
            </div>
          </div>
        </div>

        {/* Bar Chart Skeleton */}
        <div className="flex items-end gap-2 h-40">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="w-6 h-[60%]" /> // Bars
          ))}
        </div>
      </div>
    </div>
  )
}
