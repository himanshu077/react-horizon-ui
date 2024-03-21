import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryButton = ({ className, title, size, src, alt }) => {
    return <div>
        <Button size={size} className={`${className} hover:!text-[--logo-color] hover:!bg-[--bg-search]`}>
            <img src={src} alt={alt} className="!mr-2"/>
            <p>{title}</p>
        </Button>
    </div>;
};

export default SecondaryButton;
