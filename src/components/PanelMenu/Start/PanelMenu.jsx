import React, { useContext, useState, useEffect } from 'react';
import styles from './PanelMenu.module.css';
import sleep from '../../../images/спать.png';
import eat from '../../../images/dog-bowl.png';
import walk from '../../../images/лапа.png';
import play from '../../../images/игра.png';
import { useNavigate } from 'react-router-dom';
import { BarWidthContext } from "../../Context/Context";
import Sleep from "../../Sleep/Sleep";
import Walk from "../../Walk/Walk";
import WarningWalk from "../../Warning/WarningWalk";
import WarningSleep from "../../Warning/WarningSleep";

const PanelMenu = () => {
    const { energyLevel, setEnergyLevel, emotional, setEmotional } = useContext(BarWidthContext);
    const navigate = useNavigate();
    const [isSleeping, setIsSleeping] = useState(false); // Состояние для управления видимостью компонента Sleep
    const [isWalking, setIsWalking] = useState(false);

    const [isWalkingHard, setIsWalkingHard] = useState(false)
    const [isSleepingHard, setIsSleepingHard] = useState(false)


    const handleClick = (path) => {
        if (path === '/sleep' && energyLevel <= 65) {
            navigate('/sleep');
            setIsSleeping(true); // Установка состояния isSleeping в true для открытия компонента Sleep
            setTimeout(() => {
                setEnergyLevel(100);
                navigate('/home')
                setTimeout(() => {
                    setIsSleeping(false); // Установка состояния isSleeping в false для закрытия компонента Sleep
                }, 500); // Дополнительная задержка в 0.5 секунды перед закрытием компонента Sleep
            }, 10000);
        } else if (path === '/sleep' && energyLevel > 65) {
            console.log('rebeka');
            setIsSleepingHard(true)

            setTimeout(() =>{
                setIsSleepingHard(false)
            },[2000])
            return;// Вывод сообщения в консоль
        }
        if (path === '/walk' && emotional <= 65) {
            navigate('/walk');
            setIsWalking(true); // Установка состояния isSleeping в true для открытия компонента Sleep
            setTimeout(() => {
                setEmotional(100);
                navigate('/home')
                setTimeout(() => {
                    setIsWalking(false); // Установка состояния isSleeping в false для закрытия компонента Sleep
                }, 500); // Дополнительная задержка в 0.5 секунды перед закрытием компонента Sleep
            }, 10000);
        } else if (path === '/walk' && emotional > 65) {
            console.log('chlen');

                setIsWalkingHard(true)

            setTimeout(() =>{
                setIsWalkingHard(false)
            },[2000])


        }
        if(path ==='/kitchen'){
            navigate('/kitchen')
        } else if (path=== '/games'){
            navigate('/games')
        }
    };

    useEffect(() => {
        if (energyLevel >= 50) {
            setIsSleeping(false);
        }
    }, [energyLevel]);

    return (
        <div className={styles.menu}>
            <nav className={styles.navigation}>
                <ul>
                    <li onClick={() => handleClick('/sleep')} className={energyLevel <= 50 ? 'active' : ''}>
                        <img className="menu-image" src={sleep} alt="" />
                        <span>спать</span>
                    </li>
                    <li onClick={() => handleClick('/kitchen')}>
                        <img className="menu-image" src={eat} alt="" />
                        <span>кормить</span>
                    </li>
                    <li onClick={() => handleClick('/walk')} className={emotional <= 50 ? 'active' : ''}>
                        <img className="menu-image" src={walk} alt="" />
                        <span>гулять</span>
                    </li>
                    <li onClick={() => handleClick('/games')}>
                        <img className="menu-image" src={play} alt="" />
                        <span>играть</span>
                    </li>
                </ul>
            </nav>
            {isSleeping && <Sleep />}
            {isWalking && <Walk />}
            {isWalkingHard && <WarningWalk/>}
            {isSleepingHard && <WarningSleep/>}
        </div>
    );
};

export default PanelMenu;
