import React from "react";
import {EnvelopeIcon} from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizAnswers = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;
    const notify =()=>{
        if (correctAnswer===options){
            toast('Correct Answer')
        }
        else{
            toast('Wrong Answer')
        }
    }
 return (
        <div className='m-20 border-4 bg-slate-900 p-3 my-3 '>
             <EnvelopeIcon  className="h-6 w-6 text-pink-500"/>
            
            <h5 className='mb-4 text-2xl font-medium text-center text-white'>Question: {qz}</h5>
            <div onClick={notify}>
                {
                    options.map(option =>
                <p   option= {option} className='border-3 border-blue-300 p-3 hover:bg-pink-500 text-center text-white'> <input type="radio" name="Radio1" /> {option}</p>
     


                    )
                }
            </div>
        </div>
    );
};

export default QuizAnswers;