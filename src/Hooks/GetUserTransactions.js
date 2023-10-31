import { collection, onSnapshot, query, snapshotEqual, where } from "firebase/firestore"
import { useLayoutEffect, useState } from "react"
import { db } from "../Config/FirebaseConfig"
import { GetUserInfo } from "./GetUserInfo"



export const GetUserTransactions = () => {
  const [totalTransactions, setTotalTransactions] = useState(null);

  let unsubscribe;

  const transactionCollectionRef = collection(db, 'transactions');
  const {id} = GetUserInfo();

  const getTransactions = async()=>{
    try{
        const queryTransactions = query(transactionCollectionRef, where("UserID", "==", id) );

       unsubscribe =  onSnapshot(queryTransactions, (snapshot)=>{
            let docs = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const doc_id = doc.id;
                
                docs.push({...data, doc_id})
            });

            setTotalTransactions(docs)
        })
    }catch(err){
        console.error(err);
    }

    return () => unsubscribe();
  }

  useLayoutEffect(()=>{
    getTransactions();
  },[])

  return {totalTransactions}
}


