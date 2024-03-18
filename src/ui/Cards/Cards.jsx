
import React from 'react'

const Cards = ({ alt, src, title, subTitle }) => {
    return (
        <div className="!p-5 !bg-white !rounded-[20px] !w-[248px]">
            <div className="!flex !flex-row !gap-4">
                <div className='!flex !items-center !justify-center !bg-gray-100 !rounded-full !px-4'>
                    <img src={src} alt={alt} />
                </div>
                <div>
                    <p className="Poppins500 !text-sm !leading-[24px] !text-[--tab-color]">{title}</p>
                    <h3 className="Poppins700 !text-2xl !text-[--logo-color]">{subTitle}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards
