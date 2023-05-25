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
                            спать
                        </li>
                        <li>
                            <img className='menu-image' src={eat} alt=''/>
                            кормить
                        </li>
                        <li>
                            <img className='menu-image' src={walk} alt=''/>
                            гулять
                        </li>
                        <li>
                            <img className='menu-image' src={play} alt=''/>
                            играть
                        </li>
                    </ul>
                </nav>
            </div>
        );

}

export default PanelMenu;