import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryButton = ({ className, title,size }) => {
    return <div>
        <Button  size={size} className={`${className} hover:!text-[--logo-color] hover:!bg-[--bg-search]`}>{title}</Button>
    </div>;
};

export default SecondaryButton;
