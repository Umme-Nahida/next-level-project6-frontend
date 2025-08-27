import { useId } from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectInput({...field}) {
  // console.log('select field',field)
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        Required select <span className="text-destructive">*</span>
      </Label>
      <Select defaultValue="RIDER" 
          onValueChange={field.onChange}
          value={field.value} required>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="RIDER">RIDER</SelectItem>
          <SelectItem value="DRIVER">DRIVER</SelectItem>
          <SelectItem value="ADMIN">ADMIN</SelectItem>
          <SelectItem value="SUPER_ADMIN">SUPER_ADMIN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
