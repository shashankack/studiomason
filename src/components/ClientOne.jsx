import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"

const ClientOne = ({props}) => {



  
  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>

      <div className='client-one-col2'>
         <img src= {props[0].image1} className='vase1' />
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {props[0].image2} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {props[0].image3} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {props[0].image4} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {props[0].image5} /> 
        </div>
       </div>

      </div>
    </div>
  )
}

export default ClientOne
