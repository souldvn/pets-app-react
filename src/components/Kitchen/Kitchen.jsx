import React, {useState, useEffect} from 'react';
import styles from './Kitchen.module.css';
import pet from '../../images/котик.png';
import KitchenPanel from './KitchenPanel';
import Interface from '../Interface/Interface';
import home from '../../images/домой.png';
import { useNavigate } from 'react-router-dom';

const Kitchen = () => {

    const   [barWidth, setBarWidth] = useState(localStorage.getItem('barWidth') || '50%')


    useEffect(() =>{
        localStorage.setItem('barWidth', barWidth)
    },[barWidth])



    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/home?barWidth=${barWidth}`);
    };

    return (
        <div className={styles.wrapper}>
            <Interface barWidth={barWidth} setBarWidth={setBarWidth} />
            <img className={styles.mainpic} src={pet} alt="" />
            <div onClick={() => handleClick('/home')} className={styles.home}>
                <img src={home} alt="" />
            </div>
            <KitchenPanel setBarWidth={setBarWidth} barWidth={barWidth}
            />
        </div>
    );
};

export default Kitchen;
