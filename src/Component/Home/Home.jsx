import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { JackInTheBox} from "react-awesome-reveal";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
export default function home() {
  let [dataCat,setDataCat]=useState([])
  let [loader,setLoading]=useState(true)
  async function  getData(){
    try {
      let data= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      let result=await data.json()
      console.log(result)
      setDataCat(result.categories)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  if(loader) return <Loading/>
  return (
    <>
      <div className='grid grid-cols-1 peo md:grid-cols-2 w-full lg:grid-cols-2'>
        {dataCat.map(item=>{
          return <JackInTheBox key={item.idCategory}>
            <div   className=' product p-3 wp-[200%]'> 
            <img src={item.strCategoryThumb} className='w-full pr-8' alt="" />
            <p className='text-center fw-bold'>{item.strCategory}</p>
            <Link to={`/category/${item.strCategory}`}>
            <button  className='btn btn-danger w-100'>See Categories</button>
            </Link>
          </div>
          </JackInTheBox>
        })}
      </div>
    </>
  )
}
