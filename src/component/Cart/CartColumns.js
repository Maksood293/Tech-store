import React from 'react';

export default function CartColumns() {
    return (
        <div className='container-fluid d-none d-lg-block text-center'>
            <div className='row'>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>Product</p>
           </div>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>name of Product</p>
           </div>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>Price</p>
           </div>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>quantity</p>
           </div>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>remove</p>
           </div>
           <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase'>total</p>
           </div>
            </div>
           
        </div>
    )
}
