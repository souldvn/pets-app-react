import React, { useContext } from 'react';
import styles from './Kitchen.module.css';
import pet from '../../images/котик.png';
import KitchenPanel from './KitchenPanel';
import Interface from '../Interface/Interface';
import home from '../../images/домой.png';
import { useNavigate } from 'react-router-dom';
import {BarWidthContext} from "../Context/Context";

const Kitchen = () => {
    const navigate = useNavigate();
    const { barWidth, updateBarWidth } = useContext(BarWidthContext);

    const handleClick = () => {
        navigate(`/home?barWidth=${barWidth}`);
    };

    return (
        <div className={styles.wrapper}>
            <Interface barWidth={barWidth} setBarWidth={updateBarWidth} />
            <img className={styles.mainpic} src={pet} alt="" />
            <div onClick={handleClick} className={styles.home}>
                <img src={home} alt="" />
            </div>
            <KitchenPanel setBarWidth={updateBarWidth} barWidth={barWidth} />
        </div>
    );
};

export default Kitchen;

