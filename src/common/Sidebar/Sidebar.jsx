import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Desktop from "@/assets/svg/Desktop.svg";
import Kanban from "@/assets/svg/Kanban.svg";
import MarketPlace from "@/assets/svg/MarketPlace.svg";
import Profile from "@/assets/svg/Profile.svg";
import SignIn from "@/assets/svg/SignIn.svg";
import Tables from "@/assets/svg/Tables.svg";
import UpgradeToPRO from '@/ui/UpgradeToPRO/UpgradeToPRO';

const Sidebar = () => {
    const location = useLocation();

    const data = [
        { id: 0, src: Desktop, alt: 'desktop', primary: 'Dashboard', path: '/' },
        { id: 1, src: MarketPlace, alt: 'market place', primary: 'NFT Marketplace', path: '/market-place' },
        { id: 2, src: Tables, alt: 'tables', primary: 'Tables', path: '/tables' },
        { id: 3, src: Kanban, alt: 'kanban', primary: 'Kanban', path: '/kanban' },
        { id: 4, src: Profile, alt: 'profile', primary: 'Profile', path: '/profile' },
        { id: 5, src: SignIn, alt: 'signin', primary: 'Sign In', path: '/signin' },
    ];

    return (
        <div className="h-screen bg-[--signin-bg] !min-w-[290px] m-0 py-8 !pl-8 sticky top-0 left-0 overflow-auto">
            <div className='!mb-24'>
                <h3 className='Poppins700 !text-[26px] text-[--logo-color]'>HORIZON <span className='Poppins400 text-[26px] text-[--logo-color]'>FREE</span></h3>
            </div>
            <div role="presentation" className="relative">
                <ul>
                    {data.map((list) => (
                        <Link to={list.path} key={list.id}>
                            <li className={`flex flex-row gap-8 py-3 ${location.pathname === list.path ? 'text-[--logo-color] !border-r-4 !border-r-[--divider-color]' : 'text-[--tab-color]'}`}>
                                <img src={list.src} alt={list.alt} />
                                <p className='text-base leading-[30px] Poppins500'>{list.primary}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <UpgradeToPRO/>
        </div>
    );
};

export default Sidebar;
