import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryButton = ({ className, title,size }) => {
    return <div>
        <Button  size={size} className={`${className}`}>{title}</Button>
    </div>;
};

export default SecondaryButton;
