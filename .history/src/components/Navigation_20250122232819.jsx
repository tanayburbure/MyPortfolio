import React from 'react'

function Navigation() {
    return (
        <div className='relative fixed flex flex-col'>
            <div className='flex items-center justify-between '>
                <div className='left'>
                    <img src="/images/logo.gif" alt="" />
                </div>
                <div className='right text-white flex flex-col'>
                    <button className='nav-button'>About</button>
                    <button className='nav-button'>Work</button>
                    <button className='nav-button'>Contact</button>
                </div>
            </div>
            <div className='flex items-center justify-between text-white'>
                <div className='bleft '>
                    <div className='social-media-icons text-xl flex space-x-4'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className='bright'>
                    <button>sound on/off</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation