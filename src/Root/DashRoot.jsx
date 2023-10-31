import React from 'react'
import { Navigate, Outlet, useMatches } from 'react-router-dom'
import MobileNav from '../Components/MobileNav';
import SideNav from '../Components/SideNav';
import TransHistory from '../Components/TransHistory';
import { GetUserInfo } from '../Hooks/GetUserInfo';


const DashRoot = () => {
  const {isAuth} = GetUserInfo();

  if(isAuth !== true){
   return <Navigate to={'/'}/>
  };

  const location = useMatches()[1].pathname;

  return (
    <div className="relative w-full h-screen">
        
        <MobileNav />

      <div className=" bg-[#F1F6F9] flex-wrap md:flex-nowrap h-full py-5 top-20 flex p-3 relative  ">
        <div className=" p-3 hidden md:block h-[85%] bg-white  fixed md:w-1/6 ">
            <SideNav/>
        </div>

        <div className={`${location === '/dashboard/transactions' ? " md:w-[83%] bg-white rounded-lg":"md:w-[60%] h-[90%]"}  w-full  z-0 md:ml-[18%] `}>
          <Outlet />
        </div>

        <div className={`${location === '/dashboard/transactions' ? " hidden w-0": "md:w-[23%] w-full ml-5 h-[90%]  bg-white"} `}>
            <TransHistory/>    
        </div>
      </div>
    </div>
  );
}

export default DashRoot
