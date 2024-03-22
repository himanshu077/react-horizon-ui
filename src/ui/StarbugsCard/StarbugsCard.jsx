import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Starbugs from "@/assets/svg/Starbugs.svg";
import StarbugsLogo from "@/assets/svg/StarbugsLogo.svg";
import Clock from "@/assets/svg/Clock.svg";
import Food from "@/assets/svg/Food.svg"

const StarbugsCard = () => {
    return (
        <Card className="p-4 shadow-none w-full border-none !bg-[--signin-bg] rounded-[20px]">
            <CardContent className="p-0">
                <div className='!relative'>
                <img src={Starbugs} alt='starbug' className='!w-full' />
                <img src={Clock} alt='clock' className='p-3 rounded-12px absolute right-3 top-3 !rounded-[12px]' style={{ background: 'linear-gradient(112.83deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 110.84%)' }} />
                <img src={StarbugsLogo} alt='logo' className='absolute left-5 -bottom-7' />
                </div>
                <h4 className='Poppins700 !text-2xl !text-[--logo-color] !px-4 !pt-10'>
                Starbucks
                </h4>
                <div className='!flex !gap-2 !px-4'>
                    <img src={Food} autoSave='food'/>
                    <p className='Poppins500 !text-lg !leading-8 !text-[--tab-color]'>10% cashback & off</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default StarbugsCard;
