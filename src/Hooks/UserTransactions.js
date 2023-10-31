import {addDoc, collection, deleteDoc, doc, serverTimestamp} from 'firebase/firestore'
import { db } from '../Config/FirebaseConfig'
import { GetUserInfo } from './GetUserInfo'



export const UserTransactions = () => {
  const transactionCollectionRef = collection(db, 'transactions')
  const {id} = GetUserInfo();

  const addTransaction = async(data)=>{
    try{
        await addDoc(transactionCollectionRef, {...data, UserID: id,  dateCreated: serverTimestamp()})
    }catch(err){
    console.log(err)
  }
}

  return {addTransaction}
}


export const DelTransactions = () => {
  const {id} = GetUserInfo();

  const deleteTransaction = async(doc_id)=>{
    const transactionCollectionRef = doc(db, 'transactions', doc_id)
    try{
        await deleteDoc(transactionCollectionRef)
    }catch(err){
    console.log(err)
  }
}

  return {deleteTransaction}
}

