import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import DashRoot from './Root/DashRoot';
import ErrorPage from './Components/ErrorPage';
import Transactions from './Pages/Transactions';
import Settings from './Pages/Settings';
import { Ccontext } from './Hooks/Ccontext';

/* ||  */

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/dashboard",
    element: <DashRoot/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element:<Dashboard/>},
      {path:'/dashboard/transactions', element:<Transactions/>},
      {path:'/dashboard//settings', element:<Settings/>},
    ]
  },

]);

function App() {
  /* const total = count?.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice.price;
  }, 0); */


  return (
    <>
    <Ccontext>
      <RouterProvider router={router}/>
    </Ccontext>
    </>
  )
}

export default App
