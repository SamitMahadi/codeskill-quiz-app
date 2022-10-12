import React from "react";
import {EnvelopeIcon} from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizAnswers = ({question,correctAnswer,option}) => {
    const {question:qz, options, id} = question;
    const notify =()=>{
        if (correctAnswer === option ){
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
            <div>
                {
                    options.map(option =>
                  <p  onClick={notify} option= {option}  className='border-3 border-pink-500 p-3 hover:bg-pink-500 text-center text-white'> <input type="radio" name="Radio1" />{option} <ToastContainer/></p>
     


                    )
                }
            </div>
        </div>
    );
};

export default QuizAnswers;