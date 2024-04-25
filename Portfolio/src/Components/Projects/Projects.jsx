import React from 'react'
import "./projects.css"

function Projects() {
    return (
        <>
            <div className="project-area">

                <div className="p-container">
                    <div className="p1"></div>
                    <a href='https://doodle-jump-talha.vercel.app/' target='_blank'>
                        <button className='play'> Play</button>
                    </a>
                    <div className="light2"></div>

                </div>

                <div className="p-container">
                    <div className="p2"></div>
                    <a href='https://flappy-bird-talha.vercel.app' target='_blank'>
                        <button className='play'> Play</button>
                    </a>
                    <div className="light"></div>
                </div>

                <div className="p-container">
                    <div className="p3"></div>
                    <a href='https://currency-converter-talha.vercel.app/' target='_blank'>
                        <button className='play'> Play</button>
                    </a>
                    <div className="light2"></div>
                    
                </div>
            </div>

            <div className="warning"></div>
        </>
    )
}

export default Projects
