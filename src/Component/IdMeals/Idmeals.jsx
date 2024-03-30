import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Idmeals() {
    let [loading,setLoading]=useState(true)
    let [dataFood,setDataFood]=useState([])
    let param=useParams()
    console.log(param.id)

   async function getDetailsForMeal(){
    try {
        let data= await  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`)
        let result=await data.json()
        console.log(result.meals)
        setDataFood(result.meals)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
   }

    useEffect(()=>{
        getDetailsForMeal()
    },[])

    if(loading) return <Loading/>
    
  return (
    <>
      <div className="container" key={5} >
        <div className="row" >
           {dataFood.map(item=>{
            return <div>
                     <div className="col-md-5">
                <img src={item.strMealThumb}  alt="" />
            </div>
            <div className="col-md-7">
                <h1>Instructions:</h1>
                <p className='mb-4'>{item.strInstructions}</p>
               

            </div>

           <div className='mt-5'>
            <h1>Ingredients:</h1>
      <div className='flex '>
      <p className='text-main text-xl pr-3'>{item.strIngredient1}</p>
            <p className='text-main pr-3 text-xl'>{item.strIngredient}</p>
            <p className='text-main pr-3 text-xl'>{item.strIngredient3}</p>
            <p className='text-main pr-3 text-xl'>{item.strIngredient4}</p>
            <p className='text-main pr-3 text-xl'>{item.strIngredient5}</p>
      </div>
            <h1 className='mt-5'>More Information:</h1>
            <div className='flex mb-4'>
                <a className='btn btn-danger text-white mr-3'  href={item.strYoutube}>Youtube</a>
                <a className='btn btn-danger text-white' href={item.strSource}>Source</a>
            </div>
           </div>

           <Link to={'/home'}>
            <a className='rounded-full bg-black text-white mt-3 p-2'><i className="fa-solid fa-backward"></i></a>
           </Link>
         
            <div>

            </div>
                
                 </div>
           })}
        </div>
        
      </div>
    </>
  )
}
