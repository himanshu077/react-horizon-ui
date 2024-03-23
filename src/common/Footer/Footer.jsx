import React from "react";

const Footer = () => {
    const options = ["Marketplace", "License", "Terms of Use", "Blog"];

    return (
        <div className="!py-6 !px-4 !flex !flex-col !gap-4 lg:!flex-row lg:!justify-between !justify-center">
            <p className="Poppins400 !text-sm !text-[--tab-color]">
                © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
            </p>
            <div className="!flex !gap-10 !px-6">
                {options.map((option) => (
                    <p key={option} className="Poppins400 !text-sm !text-[--tab-color]">{option}</p>
                ))}
            </div>
        </div>
    );
};

export default Footer;
