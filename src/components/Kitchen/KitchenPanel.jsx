import React from 'react';
import styles from './KitchenPanel.module.css'
import meet from '../../images/meet.png'
import milk from '../../images/milk.png'
import fish from '../../images/fish.png'
import vege from '../../images/veget.png'

const PanelMenu = () =>  {
    return (
        <div className={styles.menu}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <img  src={meet} alt=''/>
                        <span>мясо</span>
                    </li>
                    <li>
                        <img src={milk} alt=''/>
                        <span>молоко</span>
                    </li>
                    <li>
                        <img  src={fish} alt=''/>
                        <span>рыба</span>
                    </li>
                    <li>
                        <img  src={vege} alt=''/>
                        <span>овощи</span>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default PanelMenu;