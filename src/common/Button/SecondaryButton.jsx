import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryButton = ({ className, children, size, ...props }) => {
    return <div>
        <Button size={size} className={`${className} hover:!text-[--logo-color] hover:!bg-[--bg-search]`} {...props}>
            {children}
        </Button>
    </div>;
};

export default SecondaryButton;
