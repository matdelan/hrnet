import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from '../pages/pageerror/PageError'
import Index from '../pages/index/Index'
import './routes.css'
import Layout from '../pages/layout/Layout'

/**
 * Router : page available 
 *
 * @category Router
 * @component
 * @returns { React.Component } A React component
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <PageError/>,
    children: [
      {
        path: '',
        element: <Index/>,
      }
    ]
  }
])

function Router() {
  return <RouterProvider router={router}/>
}

export default Router