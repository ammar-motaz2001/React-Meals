import React from 'react'
import { createBrowserRouter,RouterProvider,BrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home'
// import Categories from './Component/Categories/Categories'
import { SidebarWithCta } from './Component/Sidebar/SidebarWithCta'
import Background from './Component/Background/Background'
// import Sidebar from './Component/Sidebar/Sidebar'
import Category from './Component/Category/Category'
import Idmeals from './Component/IdMeals/Idmeals'
import Ingredients from './Component/Ingredients/Ingredients'
import IngredientDetails from './Component/IngredientDetails/IngredientDetails'
import Area from './Component/Area/Area'
import AreaDetails from './Component/AreaDetails/AreaDetails'
import ContactUs from './Component/ContactUs/ContactUs'
import Message from './Component/Message/Message'
export default function App() {


  let routes=createBrowserRouter([
    {path:"/",element:<SidebarWithCta/>,children:[
      // {path:"/categories",element:<Categories/>},
      {path:"/Home",element:<Home/>},
      {path:`category/:id`,element:<Category/>},
      {path:`/ingredients`,element:<Ingredients/>},
      {path:'ingredentDetails/:id', element:<IngredientDetails/>},
      {path:'/Area', element:<Area/>},
      {path:'AreaDetails/:id',element:<AreaDetails/>},




    ]},

    {index:true,element:<Background/>},
    {path:'contact',element:<ContactUs/>},
    {path:'IdMeals/:id',element:<Idmeals/>},
    {path:'message',element:<Message/>}

   
  ])

  return (
    <>
     
{/* <div className='flex'> */}
<RouterProvider  router={routes} ></RouterProvider>
  {/* </div>     */}
    </>
  )
}
