import { useId, useState } from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { useSetAvailibityMutation } from "@/Redux/Features/DriverApi/driverApi"

export default function Active() {
  const id = useId()
  
  const [updateStatus] = useSetAvailibityMutation()
  const [active, setActive] = useState("ACTIVE") //INACTIVE

  const handleActiveStatus =async()=>{
    setActive(active === "ACTIVE" ? "INACTIVE" : "ACTIVE")
    const res = await updateStatus({isActive: active})

    if(res.data){
      const lowarCaseStatus = active.toLowerCase()
      toast.success(`You has been ${lowarCaseStatus} successfully`)
    }

    if(res.error){
      toast.error((res.error as any)?.err?.data?.message || "Status update failed")
    }
    console.log(active)
  }

  // console.log("updateStatus",active)
  return (
      <div onClick={handleActiveStatus} className="inline-flex items-center gap-2">
        <Switch
          id={id}
          className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
        />
        <Label htmlFor={id} className="sr-only">
          Small switch
        </Label>
      </div>
  )
}
