import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const NotificationSwitch = ({ id, label, isChecked }) => {
    const [checked, setChecked] = useState(isChecked || false);

    const handleSwitchChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="!my-3">
            <Switch
                id={id}
                className="data-[state=checked]:bg-[--divider-color] data-[state=unchecked]:bg-[--border-color]"
                checked={checked}
                onChange={handleSwitchChange}
            />
            <Label
                htmlFor={id}
                className="Poppins500 !text-sm !text-[--logo-color] !pl-4"
            >
                {label}
            </Label>
        </div>
    );
};

export default NotificationSwitch;

