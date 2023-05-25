import React from 'react';
import './Interface.css'
import coin from '../../images/монетка.png'

const Interface = () => {
    return (

        <div className="interface">
            <div className='emotional'>
                <ul className="progress">
                    <li>
                        <span>настроение</span>
                        <div className='progress-bar'>
                            <div className="success"></div>
                        </div>
                    </li>
                    <li>
                        <span>сытость</span>
                        <div className='progress-bar'>
                            <div className="success"></div>
                        </div>
                    </li>
                    <li>
                        <span>энергия</span>
                        <div className='progress-bar'>
                            <div className="success"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="money">
                <img className='coin' src={coin} alt=''/>
                <span>144</span>
            </div>
        </div>
    );
};

export default Interface;