import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { logo, id,name, total } = quiz
    return (
       
    

    <div className='p-10 '>  
        
        < div className=' overflow-hidden shadow-lg bg-slate-900 rounded-lg'>
          <img className='w-full' src={logo} alt="" />
          <div className='px-6 py-4'>
            <div className='font-bold text-3xl mb-2 text-white'>{name}</div>
            <p className='text-white text-base'>
              Total Question:{total}
            </p>
     </div>
          <div className='px-6 pt-4 pb-4'>
          <Link to= {`/quiz/${id}`} className='inline-flex items-center justify-center w-full h-12 px-6 mb-20 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-pink-500 hover:bg-pink-700 focus:shadow-outline focus:outline-none'>Start Practice</Link>
          </div>
         </div>
 </div>

          

    )
  }

export default Quiz;