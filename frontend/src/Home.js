import './Home.css'
import React, { useState, useEffect} from 'react'

function Home(){
    const [slideIndex, setIndex] = useState(1)

    // TODO: call api for the number of slides
    const length = 2
    var slides = {}
    for (let i = 1; i <= length; i++){
        slides[i] = require(`./images/slides/${i}.gif`)
    }

    const nextSlide = () => {
        if (slideIndex >= length){
            setIndex(1)
        }else{
            setIndex(slideIndex + 1)
        }
    }



    return (
        <span>
            <div className="container">
                <div className="header">
                    <div className="item"><i className="logo"></i></div>
                    <div className="item">Community</div>
                    <div className="item">Make your own</div>
                    <div className="item">FAQ</div>
                    <div className="item">
                        <i className="search-icon"></i>
                        <input id="search" type="text" placeholder="search for templates"></input>
                    </div>
                    <div className="item"><i className="profile"></i></div>
                </div>
            </div>

            
            <div className="container">
                <div className='slider'>
                    <div className='slide-item'>
                        <div className='caption'>
                            Make your first interative Menu today !
                        </div>
                        <p>
                            Try clicking the slide <b>on the left</b> to get a glimpse on how to use it
                        </p>

                        <button>Try it out !</button>
                    </div>
                    <div className='slide-item'>
                        <img src={slides[slideIndex]} onClick={nextSlide}/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='gallery'>
                    <h2>Menu templates</h2>
                    <div className='item'>
                        <div className='display' id="display1"></div>
                        <div className='caption'>A la carte</div>
                    </div>
                    <div className='item'>
                        <div className='display' id="display2"></div>
                        <div className='caption'>Seasonal</div>
                    </div>
                    <div className='item'>
                        <div className='display' id="display3"></div>
                        <div className='caption'>Charming</div>
                    </div>
                </div>
            </div>
        </span>
    )
}


export default Home