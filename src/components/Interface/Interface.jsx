import React, { useContext, useEffect } from 'react';
import styles from './Interface.module.css';
import coin from '../../images/монетка.png';
import { BarWidthContext } from '../Context/Context';

const Interface = () => {
    const { barWidth, updateBarWidth, energyLevel, setEnergyLevel, emotional, setEmotional } = useContext(BarWidthContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateBarWidth((prevWidth) => {
                const newWidth = parseFloat(prevWidth) - 0.05;
                const clampedWidth = clampValue(newWidth, 1, 100);
                return `${clampedWidth}%`;
            });

            setEnergyLevel((prevEnergyLevel) => {
                const newEnergyLevel = prevEnergyLevel - 0.05;
                return clampValue(newEnergyLevel, 1, 100);
            });
            setEmotional((prevEmotional) => {
                const newEmotional = prevEmotional -0.05;
                return clampValue(newEmotional, 1, 100);
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [updateBarWidth, setEnergyLevel, setEmotional]);

    const clampValue = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    };


    const colorEnergy =
        barWidth <= '30%'
            ? 'red'
            : barWidth <= '70%'
                ? 'orange '
                : '';


    const colorSatiety =
        barWidth <= '30%'
            ? 'red'
            : barWidth <= '70%'
                ? 'orange'
                : '';

    console.log(barWidth);
    console.log('energy',energyLevel);
    console.log('emotional', emotional);

    return (
        <div className={styles.interface}>
            <div className={styles.emotional}>
                <ul className={styles.progress}>
                    <li>
                        <span>настроение</span>
                        <div className={styles.progress_bar_emotional}>
                            <div style={{ width: `${emotional}%`}} className={styles.success_emotional}></div>
                        </div>
                    </li>
                    <li>
                        <span>сытость</span>
                        <div className={styles.progress_bar_satiety}>
                            <div
                                style={{ width: `${barWidth}`, background: colorSatiety }}
                                className={styles.success_satiety}
                            ></div>
                        </div>
                    </li>
                    <li>
                        <span>энергия</span>
                        <div className={styles.progress_bar_energy}>
                            <div
                                style={{ width: `${energyLevel}%`, background: colorEnergy }}
                                className={styles.success_energy}
                            ></div>
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