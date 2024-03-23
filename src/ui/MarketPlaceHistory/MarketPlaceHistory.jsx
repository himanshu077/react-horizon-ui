import React from 'react'
import HistoryCard from '../HistoryCard/HistoryCard'
import { historyData } from './Data'
import SecondaryButton from '@/common/Button/SecondaryButton'

const MarketPlaceHistory = () => {
    return (
        <div className='!my-4 !bg-[--signin-bg] !w-full !rounded-[16px] !p-4 '>
            <div className="!flex !justify-between">
                <h3 className="Poppins700 !text-xl !text-[--card-title]">
                    History
                </h3>
                <SecondaryButton
                    title="See all"
                    size="sm"
                    className=" !text-[--divider-color] !bg-[--bg-search] !rounded-full !py-4 !px-4"
                />
            </div>
            <div>
                {historyData.map((data) => (
                    <HistoryCard
                        key={data.id}
                        src={data.src}
                        alt={data.alt}
                        name={data.name}
                        time={data.time}
                        title={data.title}
                        eth={data.eth}
                    />
                ))}
                </div>
        </div>
    )
}

export default MarketPlaceHistory
