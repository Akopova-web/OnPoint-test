import React from 'react';
import { Home } from './Home';


export const MainScreen = () => {
    return (
        <div className="main-screen">
            <Home />
            <div className="main-screen__textbox"> 
                <h3>Привет,</h3>
                <p>Это <strong>не</strong> коммерческое задание</p>
            </div>
            <button>Что дальше?</button>
        </div>
    )
}