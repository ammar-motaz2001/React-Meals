import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Fade} from "react-awesome-reveal";
import Loading from '../Loading/Loading';

export default function IngredientDetails() {
    let[data,setData]=useState([])
    let [loading,setLoading]=useState(true)
    let para =useParams()
    console.log(para.id)

    async function getIngredients(){
      try {
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${para.id}`)
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
     <div key={6} className='grid grid-cols-1 peo md:grid-cols-2 w-full lg:grid-cols-2'>
        {data.map(item=>{
          return <Fade>

<div   className=' product p-3 wp-[200%]'> 
            <img src={item.strMealThumb} className='w-full pr-8' alt="" />
            <p className='text-center fw-bold'>{item.strMeal}</p>
            <Link to={`/IdMeals/${item.idMeal}`} >
            <button className='btn btn-danger w-100'>More Details</button>
            </Link>
          </div>
          </Fade>
        
        })}
      </div> 
    </>
  )
}
