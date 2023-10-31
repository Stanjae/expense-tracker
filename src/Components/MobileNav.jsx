import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/expense.png'
import {Link, useMatches, useNavigate } from 'react-router-dom'
import { GetUserInfo } from '../Hooks/GetUserInfo'
import { SignInWithGoogle, SignOutWithGoogle} from '../Hooks/useSigninOut'

const navigation = [
  {
      name:'Dashboard',
      icon:<svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
   </svg>,
      url:'/dashboard/'

  },
  {
      name:'Transactions',
      icon:  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
   </svg> 
      ,
      url:'/dashboard/transactions'

  },
  {
      name:'Settings',
      icon:  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
      <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
    </svg>,
      url:'/dashboard/settings'

  }
]

const MobileNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    
    const param = useMatches()[0].pathname

    const SignInWithGoog = async()=>{
      try{
        await SignInWithGoogle();
        navigate('/dashboard');
      }catch(err){
        console.log(err);
        alert('Not connected to the Internet!')
      }
       
    }

    const SignOutWithGoog = async()=>{
      try{
        await SignOutWithGoogle();
        navigate('/');
      }catch(err){
        console.log(err);
      }
       
    }

    const {name, profileImage,isAuth} = GetUserInfo()

    const DashNav = navigation.map((item) => (
      <Link
        key={item.name}
        to={item.url}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {item.name}
      </Link>
    ));

  return (
    <header
      className={
        " z-40" +
        (param === "/"
          ? " top-0"
          : " fixed w-full h-20 bg-white shadow")
      }
    >
      <nav
        className=" flex items-center pt-5 justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1  ">
          <a href="/" className="-m-1.5 p-1.5">
            <div className=" flex justify-start space-x-3 items-center">
              <img className="h-9 w-9 z-50" src={Logo} alt="" />
              <span className=" font-bold text-xl">Expenso</span>
            </div>
          </a>
        </div>
        <div className="flex z-50 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {!isAuth ?
          <button onClick={SignInWithGoog} className=" z-50 text-sm font-semibold leading-6 text-gray-900">
            Log in with Google <span aria-hidden="true">&rarr;</span>
          </button>
          :
          <Link to='/dashboard'>
          <div className="flex z-50 items-center space-x-4">
            <img
              className="w-10 z-50  h-10 rounded-full"
              src={profileImage }
            />
            <div className="font-medium dark:text-white">
              <div>{name}</div>
            </div>
          </div>
          </Link>
        }
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Expenso</span>
              <img className="h-10 w-10" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {isAuth ? DashNav:''}
              </div>
              <div className="py-6">
              {isAuth ?
                (<button onClick={SignOutWithGoog}
                  className="-mx-3 w-full block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  LogOut
                </button>)
              :
              (<button onClick={SignInWithGoog}
                  className="-mx-3 w-full block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>)
              }
                
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default MobileNav
