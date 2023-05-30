import React from 'react';
import {useNavigate } from 'react-router-dom';
import PanelMenu from "../PanelMenu/Start/PanelMenu";
import styles from './Games.module.css';
import home from '../../images/домой.png';


const Games = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.games}>
            <ul className={styles.change}>
                <li onClick={() => handleClick('/games/tictac')} className={styles.minig}>
                    крестики-нолики
                </li>
                <li className={styles.minig}>рыбалка</li>
                <li className={styles.minig}>слова</li>
            </ul>
            <img onClick={() => handleClick('/home')} className={styles.home} src={home} alt=""/>
            <PanelMenu />

        </div>
    );
};

export default Games;
