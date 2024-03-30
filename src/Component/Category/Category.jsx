import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { Fade} from "react-awesome-reveal";

export default function Cagegory() {
    let [data,setData]=useState([])
    let [loading,setLoading]=useState(true)
    let param=useParams()
    console.log(param)
   async function getDetails(){
    try {
      let data= await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.id}`)
    let result= await data.json()
    console.log(result)
    setData(result.meals)
    setLoading(false)
    } catch (error) {
      console.log(error)
    }
    }
    useEffect(()=>{
      getDetails()
    },[])

    if(loading) return <Loading/>
  return (
    <>
      <div key={4} className='grid grid-cols-1 peo md:grid-cols-2 w-full lg:grid-cols-2'>
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
