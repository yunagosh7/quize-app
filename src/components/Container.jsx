import React from 'react'
import { Options } from './Options';
import { Question } from './subcompents/Question';
import '../assets/styles/Container.css'


export const Container = () => {
  return (
    <div className='container'>
        <Question/>
        <Options/>
    </div>
  )
}
