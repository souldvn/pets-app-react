import React from 'react';
import styles from './Kitchen.module.css'
import pet from '../../images/котик.png'
import KitchenPanel from "./KitchenPanel";
import Interface from "../Interface/Interface";
import home from '../../images/домой.png'
import {useNavigate} from "react-router-dom";

const Kitchen = () => {

    const navigate = useNavigate()

    const handleClick = (path) =>{
        navigate(path)
    }

    return (
        <div className={styles.wrapper}>
            <Interface/>
            <img className={styles.mainpic} src={pet} alt=''/>
            <div onClick={() => handleClick('/')} className={styles.home}>
                <img  src={home} alt=''/>
            </div>

            <KitchenPanel/>
        </div>
    );
};

export default Kitchen;