import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'

function Login({loginState, setloginState, setscrollState}){

    const logout = () => {
        if (loginState){
            setloginState(false)
            setscrollState(true)
        }

        document.body.style.overflow = 'visible';
    }

    return(
        <div className='login'>
            <div className='item'>
                <i className='logo'></i>
                <div className='info'>
                    <label for='username'>Username</label>
                    <input type='text' name='username' autocomplete="off"/>                
                </div>
                <div className='info'>
                    <label for='password'>Password</label>
                    <input type='password' name='password'/>
                </div>
                
                <div className='info'>
                    <button>Login</button>
                </div>
                <div className='info' style={{borderTop: '1.5px solid'}}>
                    <p>Don't have an account</p>
                    <a className='signup'>Create new one</a>
                </div>
                <i className='quit' onClick={logout}></i>
            </div>
        </div>
    )
}

export default Login;