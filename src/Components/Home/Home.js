import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'



const Home = () => {
   const loaderData = useLoaderData()
    const quizData = loaderData.data
    return (
 <div>
    
    <h1 className=' pt-52 text-6xl text-center font-bold text-white underline decoration-wavy bg-scroll decoration-pink-500'>Welcome To Code-Skillz</h1>
    {quizData.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz}
          ></Quiz>
        ))}
 </div>


    );
};

export default Home;