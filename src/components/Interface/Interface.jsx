import React, { useContext, useEffect } from 'react';
import styles from './Interface.module.css';
import coin from '../../images/монетка.png';
import {BarWidthContext} from "../Context/Context";

const Interface = () => {
    const { barWidth, updateBarWidth } = useContext(BarWidthContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateBarWidth((prevWidth) => {
                const newWidth = parseFloat(prevWidth) - 0.05;
                return `${newWidth}%`;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [updateBarWidth]);

    const color = barWidth <= '30%' ? 'red' : barWidth <= '70%' ? 'orange' : '';

    console.log(barWidth)

    return (
        <div className={styles.interface}>
            <div className={styles.emotional}>
                <ul className={styles.progress}>
                    <li>
                        <span>настроение</span>
                        <div className={styles.progress_bar}>
                            <div className={styles.success}></div>
                        </div>
                    </li>
                    <li>
                        <span>сытость</span>
                        <div className={styles.progress_bar}>
                            <div style={{ width: `${barWidth}`, background: color}} className={styles.success}></div>
                        </div>
                    </li>
                    <li>
                        <span>энергия</span>
                        <div className={styles.progress_bar}>
                            <div className={styles.success}></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.money}>
                <img className={styles.coin} src={coin} alt="" />
                <span>144</span>
            </div>
        </div>
    );
};

export default Interface;
