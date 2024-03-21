import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import Profile from "@/assets/svg/Profile.svg";
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerOverlay, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Link, useLocation } from 'react-router-dom';
import Desktop from "@/assets/svg/Desktop.svg";
import Kanban from "@/assets/svg/Kanban.svg";
import MarketPlace from "@/assets/svg/MarketPlace.svg";
import SignIn from "@/assets/svg/SignIn.svg";
import Tables from "@/assets/svg/Tables.svg";

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

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="flex justify-between items-center py-3 px-4">
          <DrawerTrigger onClick={toggleDrawer(true)}> 
            <IoMenuSharp className="text-[--logo-color] !text-2xl" />
          </DrawerTrigger>
        </div>
        <DrawerOverlay onClick={toggleDrawer(false)} />
        <DrawerContent>
          <DrawerClose onClick={toggleDrawer(false)}>
            <IoClose className="text-[--logo-color] text-2xl ml-9" />
          </DrawerClose>
          <DrawerHeader>
            <h3 className="Poppins700 text-[26px] text-[--logo-color]">
              HORIZON <span className="Poppins400">FREE</span>
            </h3>
          </DrawerHeader>
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
        </DrawerContent>

      </Drawer>
    </div>
  );
};

export default HeaderSidebar;
