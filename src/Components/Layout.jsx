import Body from './Body'
import Header from "./Header";
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Offer from './Offer';
import Help from './Help';
import Signin from './Signin';
const Layout=()=>{
  return(
    <div className="layout_container">
    <Header/>
    <Outlet/>
    </div>
  )
}
 const approute=createBrowserRouter([
  {
path:'/',
element:<Layout/>,
children:[
  {
    path:'/',
    element:<Body/>
    },
  {
    path:'/offer',
    element:<Offer/>
    },
    {
      path:'/help',
      element:<Help/>
      },
      {
        path:'/signin',
        element:<Signin/>
        }
]
},

])
export default Layout;
export {approute}