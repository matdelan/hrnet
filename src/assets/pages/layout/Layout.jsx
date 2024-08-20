import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
}