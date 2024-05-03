import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffe from './Components/UpdateCoffe';
import SingIn from './Components/SingIn/SingIn';
import SingUp from './Components/SingUp/SingUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import User from './Components/Users/User';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import User_2 from './Components/User2/User_2';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: '/',
        element : <Home></Home>,
        loader : ()=> fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        
      },
      {
        path: '/singIn',
        element: <SingIn></SingIn>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/user',
        element: <User></User>,
        loader : ()=> fetch('http://localhost:5000/user')
      },
      {
        path: '/user2',
        element: <User_2></User_2>
      }

    ]
  },
]);


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<QueryClientProvider client={queryClient}>
      
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
      
    </QueryClientProvider>
   
  </React.StrictMode>,
)
