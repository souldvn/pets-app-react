import React from 'react';

import styles from './StartLocation.module.css';
import cat from '../../images/котик.png';
import PanelMenu from '../PanelMenu/Start/PanelMenu';
import Interface from '../Interface/Interface';


const StartLocation = () => {




    return (
        <div className={styles.wrapper}>
            <Interface />
            <img className={styles.mainpic} src={cat} alt="" />
            <PanelMenu />
        </div>
    );
};

export default StartLocation;
