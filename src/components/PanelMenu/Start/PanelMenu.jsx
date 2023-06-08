import React, { useContext, useState, useEffect } from 'react';
import './PanelMenu.css';
import sleep from '../../../images/спать.png';
import eat from '../../../images/dog-bowl.png';
import walk from '../../../images/лапа.png';
import play from '../../../images/игра.png';
import { useNavigate } from 'react-router-dom';
import { BarWidthContext } from "../../Context/Context";
import Sleep from "../../Sleep/Sleep";

const PanelMenu = () => {
    const { energyLevel, setEnergyLevel } = useContext(BarWidthContext);
    const navigate = useNavigate();
    const [isSleeping, setIsSleeping] = useState(false); // Состояние для управления видимостью компонента Sleep

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
            console.log('rebeka'); // Вывод сообщения в консоль
        } else {
            navigate(path);
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
                    <li>
                        <img className="menu-image" src={walk} alt="" />
                        <span>гулять</span>
                    </li>
                    <li onClick={() => handleClick('/games')}>
                        <img className="menu-image" src={play} alt="" />
                        <span>играть</span>
                    </li>
                </ul>
            </nav>
            {isSleeping && <Sleep />} {/* Рендер компонента Sleep, если isSleeping равно true */}
        </div>
    );
};

export default PanelMenu;

