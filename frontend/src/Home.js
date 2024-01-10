import './Home.css'
import React from 'react'

function Home(){



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
                <img src='images/slides/1.jpg' alt='1'/>
            </div>
        </span>
    )
}


export default Home