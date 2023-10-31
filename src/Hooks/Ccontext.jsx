import React, { createContext, useState } from 'react'


export const ShopContext = createContext(null)

export const Ccontext = ({children}) => {
    const [tracker, setTracker] = useState([]);

    const AddToTracker =(data)=>{
        setTracker(prevTracker => [...prevTracker, data])
    }

    const RemoveItem =(data)=>{
        setTracker(prevTracker => prevTracker.filter(item => item.id !== data.id))
    }

    const value = {AddToTracker, tracker, RemoveItem}

  return (
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
  )
}

