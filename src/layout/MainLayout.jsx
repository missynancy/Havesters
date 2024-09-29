import { Outlet } from 'react-router-dom'
import Index from '../components/Index'
const MainLayout = () => {
  return (
    <>
    <Index/>
    <Outlet/>
    </>
  )
}

export default MainLayout