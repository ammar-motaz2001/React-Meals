import React from 'react';
import styles from './background.module.css'; // Import CSS module
import img from '../../assets/856bca25c1c2cbaf608d598f844c1a05.jpg'
import { Link } from 'react-router-dom';
export default function Background() {
  return <>
  <div style={{backgroundColor:"black" ,height:'100vh'}} className='flex flex-col-reverse justify-between items-center md:flex-row lg:flex-row xl:flex-row'>
    <div className='sm:text-center md:text-left'>
      <h1 className='text-white pl-5 fw-bold'>Hello In Restaurant</h1>
      <p className='ml-5 text-white'>Lorem amet consectetur adipisicing elit. Temporibus aperiam sit dolor corporis giat magnam ab!</p>
      <Link to={'./home'}>
      <div>
      <button className='btn btn-success ml-5 mt-4  mb-4 cursor-pointer'>Click To Explore</button>

      </div>
      </Link>

      <div className='ml-6 text-white'>
      <i class="fa-brands fa-facebook pr-3"></i>
      <i class="fa-brands fa-twitter pr-3"></i>
      <i class="fa-brands fa-linkedin pr-3"></i>
      </div>
      <div>

      </div>
    </div>

    <div className='sm:mt-4'>
        <img src={img} className='mr-32 sm:mr-2 mt-3 sm:mt-4 lg:mr-32' alt="" />
    </div>
  </div>
  </>
}
