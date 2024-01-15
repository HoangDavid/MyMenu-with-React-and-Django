import './style.css'
import React, { useState, useEffect} from 'react'
import Login from './login/login'

export function Header(){
    const [loginState, setloginState] = useState(false)
    const [scrollState, setscrollState] = useState(false)

    const log = () => {
        if (!loginState){
            setloginState(true)
            setscrollState(false)
        }

        document.body.style.overflow = scrollState ? 'visible' : 'hidden';
    }

    return(
        <span>
            {loginState && <Login loginState={loginState} setloginState={setloginState} setscrollState={setscrollState}/>}
            <div className="container">
                    <div className="header">
                        <div className="item"><i className="logo"></i></div>
                        <div className="item">Community</div>
                        <div className="item">Make your own</div>
                        <div className="item">FAQ</div>
                        <div className="item">
                            <i className="search-icon"></i>
                            <input id="search" type="text" placeholder="search for templates" autocomplete="off"></input>
                        </div>
                        <div className="item" onClick={log}><i className="profile"></i></div>
                    </div>
                </div>
            </span>
    )
}


export function Footer(){
    return(
        <div className='container'>
        <div className='footer'>
            <p>TODO: This is for other things: fuding, sending contacts, sending requests when encounter web issues</p>
        </div>
    </div>
    )
}
