import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import ArrowUp from "@/assets/svg/ArrowUp.svg"
import DailyBarChart from "@/common/Charts/DailyBarChart"

const DailyTrafficCard = () => {
  return (
    <Card className="!p-5 !border-none xl:!w-[19.5vw] !w-full !shadow-none !bg-[--signin-bg] !rounded-[20px]">
      <CardContent className="!p-0">
        <div className='!flex !justify-between !mb-5'>
          <div>
            <p className='Poppins500 !text-sm !text-[--tab-color]'>Daily Traffic</p>
            <p className='!text-[34px] Poppins700 !leading-[42px] !text-[--logo-color]'>2.579<span className='Poppins500 !text-sm !text-[--tab-color] px-2'>Visitors</span></p>
          </div>
          <div className="!flex !gap-2 !items-center">
            <img src={ArrowUp} alt="arrow"  />
            <p className="!text-[--number-color] Poppins700 !text-xs !leading-5 !pt-[2px]">
              +2.45%
            </p>
          </div>
        </div>
        <DailyBarChart/>
      </CardContent>
    </Card>
  )
}

export default DailyTrafficCard
