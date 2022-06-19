import React from 'react'
import {BsCheck} from 'react-icons/bs'
import cn from 'classNames'

const Chek = ({isCompleted}) => {
  return (
    <div 
    className={cn(
      'border-3 rouned-lg border-pink-900 w-6 h-6 
    mr-3 flex items-center justify-center', 
    {
      'bg-pink-900' : isCompleted,
    }
    )} 
    >
    {isCompleted && <BsCheck size={24} 
    className='text-gray-900'/>
        }
    </div>
  )
}

export default Chek