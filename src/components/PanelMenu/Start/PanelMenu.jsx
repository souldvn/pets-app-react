import React, { useContext, useState, useEffect } from 'react';
import './PanelMenu.css';
import sleep from '../../../images/спать.png';
import eat from '../../../images/dog-bowl.png';
import walk from '../../../images/лапа.png';
import play from '../../../images/игра.png';
import { useNavigate } from 'react-router-dom';
import { BarWidthContext } from "../../Context/Context";
import Sleep from "../../Sleep/Sleep";
import Walk from "../../Walk/Walk";

const PanelMenu = () => {
    const { energyLevel, setEnergyLevel, emotional, setEmotional } = useContext(BarWidthContext);
    const navigate = useNavigate();
    const [isSleeping, setIsSleeping] = useState(false); // Состояние для управления видимостью компонента Sleep
    const [isWalking, setIsWalking] = useState(false);

    const handleClick = (path) => {
        if (path === '/sleep' && energyLevel <= 50) {
            navigate('/sleep');
            setIsSleeping(true); // Установка состояния isSleeping в true для открытия компонента Sleep
            setTimeout(() => {
                setEnergyLevel(100);
                navigate('/home')
                setTimeout(() => {
                    setIsSleeping(false); // Установка состояния isSleeping в false для закрытия компонента Sleep
                }, 500); // Дополнительная задержка в 0.5 секунды перед закрытием компонента Sleep
            }, 10000);
        } else if (path === '/sleep' && energyLevel > 50) {
            console.log('rebeka');
            return;// Вывод сообщения в консоль
        }
        if (path === '/walk' && emotional <= 50) {
            navigate('/walk');
            setIsWalking(true); // Установка состояния isSleeping в true для открытия компонента Sleep
            setTimeout(() => {
                setEmotional(100);
                navigate('/home')
                setTimeout(() => {
                    setIsWalking(false); // Установка состояния isSleeping в false для закрытия компонента Sleep
                }, 500); // Дополнительная задержка в 0.5 секунды перед закрытием компонента Sleep
            }, 10000);
        } else if (path === '/walk' && energyLevel > 50) {
            console.log('chlen');
            return// Вывод сообщения в консоль
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
        <div className="menu">
            <nav className="navigation">
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
            {isWalking && <Walk />}{/* Рендер компонента Sleep, если isSleeping равно true */}
        </div>
    );
};

export default PanelMenu;
