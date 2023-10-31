import React,{useContext} from 'react'
import ManData from './ManData'
import { GetUserTransactions } from '../Hooks/GetUserTransactions';

const TransHistory = () => {

  const {totalTransactions} = GetUserTransactions();

  return (
    <div className=" h-full relative">
      <div className=" border-b p-3 border-b-gray-100">
        <h1 className=" text-gray-800 font-bold text-center text-xl">
          Transaction History
        </h1>
      </div>

      <div className=" h-[73%] my-5 py-2 flex flex-col justify-start items-center space-y-3 overflow-y-auto">
        {totalTransactions?.sort(function(a, b){return b.dateCreated - a.dateCreated})?.slice(0, 5)?.map((item) => (
          <div
            id="toast-success" key={item.Uuid}
            className="flex items-center w-full max-w-xs p-4  text-gray-500 bg-white rounded-lg shadow "
            role="alert"
          >
            {item?.mode === "Income" ? (
              <div className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
            ) : (
              <div key={item.id} className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-red-500 bg-red-100 rounded-lg">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <span className="sr-only">Error icon</span>
              </div>
            )}
            <div className=" flex justify-between w-[90%]">
              <div className="ml-3 text-sm font-normal">{item?.title}</div>
              <div className="ml-3 text-sm font-bold">{item?.mode === 'Expenses' ? '-' :'+'} N{item?.amount}</div>
            </div>

            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 "
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className=" border-t p-2.5 border-b-gray-100">
        <ManData />
      </div>
    </div>
  );
}

export default TransHistory