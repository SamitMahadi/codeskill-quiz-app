import React from "react";
import { BeakerIcon } from '@heroicons/react/24/solid'


const QuizAnswers = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;



    
    return (
        <div className='m-20 border-4 bg-slate-900 p-3 my-3 '>
             <BeakerIcon className="h-6 w-6 text-blue-500"/>
            
            <h5 className='mb-4 text-2xl font-medium text-center text-white'>Quiz: {qz}</h5>
            <div >
                {
                    options.map(option =>
                <li option= {option} className='border-3 border-blue-300 p-3 hover:bg-slate-400 text-center text-white'> {option}</li>
      


                    )
                }
            </div>
        </div>
    );
};

export default QuizAnswers;