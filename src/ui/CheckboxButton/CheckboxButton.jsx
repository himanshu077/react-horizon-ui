import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxButton({ label, labelClass }) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms"/>
            <label
                htmlFor="terms"
                className={`${labelClass} leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
            >
                {label}
            </label>
        </div>
    )
}
