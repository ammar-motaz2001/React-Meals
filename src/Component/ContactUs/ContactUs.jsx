import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>
    <div className="container mt-32">
    <h1 className='mb-3'>Contact Us</h1>

    <div className="row justify-content-center">
        <div className="col-md-6">
            <input type="text" className='form-control mb-3' placeholder='Email:' />
            <input type="text" className='form-control mb-3' placeholder='Password:' />
            <input type="text" className='form-control mb-3' placeholder='Age:' />
        </div>
        <div className="col-md-6">
            <textarea name="" className='form-control mb-3' placeholder='Your Message:' rows="5"></textarea>
            <Link to={'/message'}>
            <button className='btn btn-danger mb-3'>Send</button>
            </Link>
        </div>
    </div>
</div>


    </>
  )
}
