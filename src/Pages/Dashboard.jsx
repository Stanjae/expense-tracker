import React, { useContext } from 'react'
import { GetUserTransactions } from '../Hooks/GetUserTransactions'
import { GetUserInfo } from '../Hooks/GetUserInfo'
import { Navigate } from 'react-router-dom'
import { Cchart } from '../Components/Cchart'



const Dashboard = () => {

    const {totalTransactions} = GetUserTransactions()

    const tIncome = totalTransactions?.filter(item => item.mode === 'Income')?.reduce((accumulator, currentPrice) => {
        return accumulator + Number(currentPrice.amount);
      }, 0) || '0.00';

      const Texpense = totalTransactions?.filter(item => item.mode === 'Expenses')?.reduce((accumulator, currentPrice) => {
        return accumulator + Number(currentPrice.amount);
      }, 0) || '0.00';

      const Bal = (tIncome - Texpense).toFixed(2) || '0.00';

      const {isAuth} = GetUserInfo();

      if(isAuth !== true){
       return <Navigate to={'/'}/>
      };
    

  return (
    <div className=' px-4'>
        <div className=' grid grid-cols-3 justify-center items-center gap-6  pb-2'>
        <div className=' sm:col-span-1 col-span-3'>
            <div className=" sm:p-6 p-4 bg-white border border-gray-200 rounded-lg shadow ">
            <svg className="w-7 h-7 text-gray-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span>Total Income</span>
            <a href="#">
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">N {tIncome }</h5>
            </a>

            </div>
        </div>

        <div className=' sm:col-span-1 col-span-3'>
            <div className=" sm:p-6 p-4 bg-white border border-gray-200 rounded-lg shadow ">
            <svg className="w-7 h-7 text-gray-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
                <span>Expenses</span>
                    <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-red-700">N {Texpense}</h5>
            </div>
        </div>

        <div className=' sm:col-span-1 col-span-3'>
            <div className="sm:p-6 p-4  bg-white border border-gray-200 rounded-lg shadow ">
            <svg className="w-7 h-7 text-gray-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
                <span>Available Bal</span>
                    <h5 
                    className={` ${Bal > 0 ? "text-green-700":"text-red-700"} mb-2 text-xl lg:text-2xl font-semibold tracking-tight`}>
                    {Bal < 0 ? `- N ${Bal  * -1}`: `N ${Bal}` }
                    </h5>
            </div>
        </div>
        

        </div>

        <div className=' flex justify-center items-center bg-white py-5 px-14 shadow my-5 rounded-lg'>
            {/* Chart */}
          <Cchart/> 
        </div>
    </div>
    
  )
}

export default Dashboard
