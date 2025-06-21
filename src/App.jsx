import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

export default function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
