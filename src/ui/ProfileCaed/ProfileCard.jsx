import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react';
import Background from "@/assets/Background.png";
import Avatar from "@/assets/Avatar.svg";

const ProfileCard = () => {
    return (
        <Card className="p-5 relative">
            <CardContent>
                <div className='relative'>
                    <img src={Background} alt='Background' className='w-full h-auto rounded-lg' />
                    <img src={Avatar} alt='Avatar' className='absolute left-1/2 -bottom-10 transform -translate-x-1/2 !w-[87px] !border-4 !boreder-white rounded-full' />
                </div>
                <CardTitle className="Poppins700 !text-xl !text-center !text-[--logo-color] pt-16">Adela Parkson</CardTitle>
                <p className='Poppins500 !text-sm !leading-6 !text-[--tab-color] !text-center'>Product Designer</p>
                {/* <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
