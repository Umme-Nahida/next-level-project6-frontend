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
      <Select defaultValue="Rider" 
          onValueChange={field.onChange}
          value={field.value} required>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Rider">Rider</SelectItem>
          <SelectItem value="Driver">Driver</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
          <SelectItem value="Super-Admin">Super Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
