import React from 'react'

interface Props {
  open: boolean,
}

const Hamburger = (props: Props) => {
  return (
    <div className="group/hamburger flex flex-col justify-center items-center">
        <span className={`bg-slate-600 group-hover/hamburger:bg-yellow-500 block transition-all duration-300 h-0.5 w-5 rounded-sm ${props.open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
        </span>
        <span className={`bg-slate-600 group-hover/hamburger:bg-yellow-500 block transition-all duration-300 h-0.5 w-5 rounded-sm my-0.5 ${props.open ?  'opacity-0' : 'opacity-100'}`}>
        </span>
        <span className={`bg-slate-600 group-hover/hamburger:bg-yellow-500 block transition-all duration-300 h-0.5 w-5 rounded-sm ${props.open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
        </span>    
    </div>
  )
}

export default Hamburger