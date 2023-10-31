import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../Config/FirebaseConfig"


export const SignInWithGoogle = async()=>{
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    const Userdetails ={
        id: result?.user?.uid,
        name:result?.user?.displayName,
        profileImage : result?.user?.photoURL,
        isAuth: true
    }
    localStorage.setItem('auth', JSON.stringify(Userdetails));
}

export const SignOutWithGoogle = async()=>{
    await signOut(auth)
    localStorage.clear('auth');
}