import { Loader2 } from "lucide-react"

export default function LoaderDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  )
}
