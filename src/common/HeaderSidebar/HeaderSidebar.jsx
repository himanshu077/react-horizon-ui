import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import Profile from "@/assets/svg/Profile.svg";
import { Link, useLocation } from 'react-router-dom';
import Desktop from "@/assets/svg/Desktop.svg";
import Kanban from "@/assets/svg/Kanban.svg";
import MarketPlace from "@/assets/svg/MarketPlace.svg";
import SignIn from "@/assets/svg/SignIn.svg";
import Tables from "@/assets/svg/Tables.svg";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetOverlay, SheetTrigger } from "@/components/ui/sheet";

const HeaderSidebar = () => {
  const location = useLocation();
  const data = [
    { id: 0, src: Desktop, alt: 'desktop', primary: 'Dashboard', path: '/' },
    { id: 1, src: MarketPlace, alt: 'market place', primary: 'NFT Marketplace', path: '/market-place' },
    { id: 2, src: Tables, alt: 'tables', primary: 'Tables', path: '/tables' },
    { id: 3, src: Kanban, alt: 'kanban', primary: 'Kanban', path: '/kanban' },
    { id: 4, src: Profile, alt: 'profile', primary: 'Profile', path: '/profile' },
    { id: 5, src: SignIn, alt: 'signin', primary: 'Sign In', path: '/signin' },
  ];

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>

      <Sheet open={open} onClose={toggleDrawer(false)} className="!h-screen">
        <div className="flex justify-between items-center py-3 px-4">
          <SheetTrigger onClick={toggleDrawer(true)}>
            <IoMenuSharp className="text-[--logo-color] !text-2xl" />
          </SheetTrigger>
        </div>
        <SheetOverlay onClick={toggleDrawer(false)} />
        <SheetContent  side="left">
          <SheetClose onClick={toggleDrawer(false)}>
            <IoClose className="text-[--logo-color] text-2xl ml-2" />
          </SheetClose>
          <SheetHeader>
            <h3 className="Poppins700 text-[26px] text-[--logo-color]">
              HORIZON <span className="Poppins400">FREE</span>
            </h3>
          </SheetHeader>
          <ul>
            {data.map((list) => (
              <Link to={list.path} key={list.id}>
                <li className={`flex flex-row gap-8 py-3 ${location.pathname === list.path ? 'text-[--logo-color] border-r-4 border-r-[--divider-color]' : 'text-[--tab-color]'}`}>
                  <img src={list.src} alt={list.alt} />
                  <p className='text-base leading-[30px] Poppins500'>{list.primary}</p>
                </li>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderSidebar;
