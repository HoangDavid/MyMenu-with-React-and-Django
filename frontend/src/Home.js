import './Home.css'
import React, { useState, useEffect} from 'react'

function Home(){
    const [slideIndex, setIndex] = useState(1)
    const [curSlide, setSlide] = useState(require(`./images/slides/${slideIndex}.gif`))

    // TODO: call api for the number of slides
    const length = 6

    const nextSlide = () => {
        if (slideIndex + 1  > length){
            alert("end of slide")
        }
        else{
            setIndex(slideIndex + 1)
            setSlide(require(`./images/slides/${slideIndex}.jpg`))
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
                        <img src={curSlide} onClick={nextSlide}/>
                    </div>
                </div>
            </div>
        </span>
    )
}


export default Home