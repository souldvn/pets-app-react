import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styles from './StartLocation.module.css'
import cat from '../../images/котик.png'
import PanelMenu from "../PanelMenu/Start/PanelMenu";
import Interface from "../Interface/Interface";



const StartLocation = () => {

    const location = useLocation();
    const { barWidth } = queryString.parse(location.search);


    return (
        <div className={styles.wrapper}>
            <Interface barWidth={barWidth} setBarWidth={() =>{}}/>
            <img className={styles.mainpic} src={cat} alt=""/>
            <PanelMenu/>
        </div>
    );
};

export default StartLocation;
