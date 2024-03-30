import React, { useEffect, useState } from 'react'
import { Fade} from "react-awesome-reveal";
import img from '../../assets/images.jpg'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
export default function Ingredients() {
    let [dataCat,setData]=useState([])
    let [loading,setLoading]=useState(true)
   async function getIngredients(){
   try {
    let data= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
   let result=await data.json()
   console.log(result)
   setData(result.meals)
   setLoading(false)
   } catch (error) {
    console.log(error)
   }
    }

    useEffect(()=>{
        getIngredients()
    },[])
    if(loading) return <Loading/>
  return (
    <>
     <div key={7} className='grid grid-cols-1 peo md:grid-cols-2 w-full lg:grid-cols-2'>
        {dataCat.map(item=>{
          return <Fade>
            <div   className=' product p-3 wp-[200%]'> 
            <img src={img}className='w-full pr-8' alt="" />
            <p className='text-center fw-bold'>{item.strIngredient}</p>
            <Link to={`/ingredentDetails/${item.strIngredient}`}>
                <button className='btn btn-danger w-100'>See Related Meals</button>
            </Link>
          </div>
          </Fade>
        })}
      </div> 
    </>
  )
}
