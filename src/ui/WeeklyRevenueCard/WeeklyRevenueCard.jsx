import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Earning from "@/assets/svg/Earning.svg";
import ChartSvg from "@/assets/svg/chart.svg"

const WeeklyRevenueCard = () => {
    return (
        <Card className="!mt-6 xl:!w-[39.8vw] !w-full !bg-[--signin-bg] !border-none !shadow-none !rounded-[20px]">
            <CardContent className="!p-5">
                <div className="!flex !justify-between !mb-1">
                    <h4 className='Poppins700 !text-2xl !leading-6 !text-[--logo-color]'>Weekly Revenue</h4>
                    <img
                        src={Earning}
                        alt="more"
                        className="!p-2 !bg-[--bg-search] !rounded-[10px]"
                    />
                </div>
                <img src={ChartSvg} alt='chart' className='!w-full'/>
            </CardContent>
        </Card>
    )
}

export default WeeklyRevenueCard
