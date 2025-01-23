import React from 'react'

function Navigation() {
  return (
    <div className='relative fixed'>
        <div className='flex items-center justify-end '>
            <div className='left'>
                <img src="/images/logo.gif" alt="" />
            </div>
            <div className='right text-white flex flex-col'>
                <button className='nav-button'>About</button>
                <button className='nav-button'>Work</button>
                <button className='nav-button'>Contact</button>
            </div>
        </div>
        <div>
            <div className='bleft'></div>
            <div className='bright'></div>
        </div>
    </div>
  )
}

export default Navigation