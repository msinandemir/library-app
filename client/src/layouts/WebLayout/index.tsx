import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function WebLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default WebLayout