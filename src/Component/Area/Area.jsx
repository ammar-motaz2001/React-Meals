import React, { useEffect, useState } from 'react'
import { Fade} from "react-awesome-reveal";
import img from '../../assets/red_house.v1700567996.png'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Area() {
    let [dataCat,setData]=useState([])
    let [loading,setLoading]=useState(true)
    async function getArea(){
    try {
        let data= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    let result=await data.json()
    console.log(result)
    setData(result.meals)
    setLoading(false)
    } catch (error) {
        console.log(error)
    }
     }
 
     useEffect(()=>{
         getArea()
     },[])

     if(loading) return <Loading/>
   return (
     <>
      <div key={2} className='grid grid-cols-1 peo md:grid-cols-2 w-full lg:grid-cols-2'>
         {dataCat.map(item=>{
           return <Fade>
             <div   className=' product p-3 wp-[200%]'> 
             <img src={img}className='w-full pr-8' alt="" />
             <p className='text-center fw-bold'>{item.strArea}</p>
             <Link to={`/AreaDetails/${item.strArea}`}>
                 <button className='btn btn-danger w-100'>See Related Meals</button>
             </Link>
           </div>
           </Fade>
         })}
       </div> 
     </>
   )
        }
