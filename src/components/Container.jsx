import { useState, useEffect } from 'react'
import { Options } from './Options';
import { Question } from './subcompents/Question';
import '../assets/styles/Container.css'
import { fetchQuestions } from '../functions/functions';


export const Container = () => {
 
  const [questions, setQuestions] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchQuestions(setQuestions);
  }, []);


  return (
    <div className='container'>
        
        {questions != null ? (
          <>
            <Question question={questions[count].question} />
            <Options options={questions[count]} />
          </>          
        ) : ''}

    </div>
  )
}
