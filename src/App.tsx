import {createBrowserRouter} from 'react-router-dom'
import Admin from './pages/admin'
import Home from './pages/home'
import Login from './pages/login'
import Networks from './pages/networks'
import { Private } from './routes/private'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin/networks',
    element: <Networks/>
  }

])

export {router}