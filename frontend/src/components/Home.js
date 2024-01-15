import './style.css'
import React, { useState, useEffect} from 'react'
import { Header, Footer } from './layout'

function Home(){
    const [slideIndex, setIndex] = useState(1)

    // TODO: call api for the number of slides
    const length = 2
    var slides = {}
    for (let i = 1; i <= length; i++){
        slides[i] = require(`../images/slides/${i}.gif`)
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
            < Header/>
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

            <div className='container'>
                <div className='faq'>
                    <h2>FAQ</h2>
                    <div className='item'>
                        <div className='question'>blah blah blah blah blah blah? blah blahblah blahblah blahblah blah ?</div>
                        <div className='answer'> blah blahblah blahblah blahblah blahblah blahblah blah</div>
                    </div>
                    <div className='item'>
                        <div className='question'>blah blah blah blah blah blah? blah blahblah blahblah blahblah blah ?</div>
                        <div className='answer'>blah blahblah blahblah blahblah blahblah blahblah blah</div>
                    </div>
                    <div className='item'>
                        <div className='question'>blah blah blah blah blah blah? blah blahblah blahblah blahblah blah ?</div>
                        <div className='answer'>blah blahblah blahblah blahblah blahblah blahblah blah</div>
                    </div>
                    <div className='item'>
                        <div className='question'>blah blah blah blah blah blah? blah blahblah blahblah blahblah blah ?</div>
                        <div className='answer'>blah blahblah blahblah blahblah blahblah blahblah blah</div>
                    </div>
                    <div className='item'>
                        <div className='question'>blah blah blah blah blah blah? blah blahblah blahblah blahblah blah ?</div>
                        <div className='answer'>blah blahblah blahblah blahblah blahblah blahblah blah</div>
                    </div>
                </div>
            </div>

            <Footer />
        </span>
    )
}


export default Home