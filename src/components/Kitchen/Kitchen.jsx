import React from 'react';
import styles from './Kitchen.module.css'
import pet from '../../images/котик.png'
import KitchenPanel from "./KitchenPanel";
import Interface from "../Interface/Interface";

const Kitchen = () => {
    return (
        <div className={styles.wrapper}>
            <Interface/>
            <img className={styles.mainpic} src={pet} alt=''/>
            <KitchenPanel/>
        </div>
    );
};

export default Kitchen;