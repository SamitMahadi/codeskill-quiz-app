import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAnswers from '../QuizAnswers/QuizAnswers';

const StartQuiz = () => {
    const qusetionAnswer = useLoaderData()
    const StartQuizData = qusetionAnswer.data
    const {id, name, questions} = StartQuizData;
    return (
        <div>
             {
                questions.map(question=> <QuizAnswers
                    question={question}
                ></QuizAnswers>)
            }
        </div>
    );
};

export default StartQuiz;