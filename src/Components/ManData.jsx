import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { UserTransactions } from '../Hooks/UserTransactions';

const ManData = () => {
    const [toogle, setToogle] = useState(false)

    const {addTransaction} = UserTransactions()
    
    const [data, setData] = useState({Uuid:uuidv4(), title:'', amount:0, mode:'Income'})

    const onTypeChange =(e)=>{
        setData(prevData => ({...prevData, [e.target.name]:e.target.value }))
    }

    const OnSave =(e)=>{
        e.preventDefault()
        addTransaction(data)
        setToogle(false)
        setData({Uuid:uuidv4(), title:'', amount:0, mode:'Income'})
    }
    
  return (
<>
<div className='flex justify-center items-center space-x-2'>
    <h5 className=' text-gray-500 text-sm'>Missing a Transaction?</h5>
    <button onClick={()=> setToogle(!toogle)}  
        className={"block text-white bg-[#00b0ff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"} type="button">
        Add New
    </button>
</div>


{toogle && <div  
className={`fixed top-0 flex justify-center items-center left-0 right-0 z-50 w-full bg-gray-800 bg-opacity-60 p-4 overflow-x-hidden overflow-y-auto md:overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full`} >
    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={()=> setToogle(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add an Expense</h3>
                <form onSubmit={(e)=> OnSave(e)} className="space-y-6" action="#">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input value={data.title} onChange={(e)=> onTypeChange(e)} type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter text" required/>
                    </div>
                    <div>
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input value={data.amount} onChange={(e)=> onTypeChange(e)} type="number" name="amount" placeholder="figure in naira" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>  
                        <label htmlFor="mode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select value={data.mode} onChange={(e)=> onTypeChange(e)} id="mode" name='mode' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Income">Income</option>
                        <option value="Expenses">Expenses</option>
                        </select>
                    </div>
                    <button type="submit" 
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Lets Go</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 


}
</>


  )
}

export default ManData