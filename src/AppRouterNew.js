import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './page/Home'
import Contact from './page/Contact'
import NotFound from './page/NotFound'
import Product from './page/Product'
import About from './page/About'
import Private from './page/Private'


const userRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path:'about', element: <About />},
      { path:'contact', element: <Contact />},
      { path:'private', element: <Private />},
      { path:'product/:id', element: <Product />},
      { path:'*', element: <NotFound />},
    ]
  }
])
const guestRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path:'about', element: <About />},
      { path:'contact', element: <Contact />},
      { path:'product/:id', element: <Product />},
      { path:'*', element: <NotFound />},
    ]
  }
])

function AppRouterNew() {
  const isLogin = false
  return (
    <RouterProvider router={ isLogin? userRouter : guestRouter} />
  )
}

export default AppRouterNew
