import React from 'react';
import './PanelMenu.css'
import sleep from '../../../images/спать.png'
import eat from '../../../images/dog-bowl.png'
import walk from '../../../images/лапа.png'
import play from '../../../images/игра.png'

 const PanelMenu = () =>  {
        return (
            <div className="menu">
                <nav className='navigation'>
                    <ul>
                        <li>
                            <img className='menu-image' src={sleep} alt=''/>
                            <span>спать</span>
                        </li>
                        <li>
                            <img className='menu-image' src={eat} alt=''/>
                            <span>кормить</span>
                        </li>
                        <li>
                            <img className='menu-image' src={walk} alt=''/>
                            <span>гулять</span>
                        </li>
                        <li>
                            <img className='menu-image' src={play} alt=''/>
                            <span>играть</span>
                        </li>
                    </ul>
                </nav>
            </div>
        );

}

export default PanelMenu;