import React from 'react'
import More from "@/assets/svg/More.svg"

const TableHeader = ({ title }) => {
    return (
        <div className='!flex !justify-between !p-4'>
            <h4 className="Poppins700 !text-2xl !text-[--card-title]">{title}</h4>
            <img src={More} alt='more'   className="!px-3 !py-4 !bg-[--bg-search] !rounded-[10px] !ml-auto !mb-3"/>
        </div>
    )
}

export default TableHeader
