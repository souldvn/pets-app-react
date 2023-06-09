import React from 'react';
import styles from './Walk.module.css'
import {useEffect, useState} from "react";

const Walk = () => {

    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Остановка таймера после 10 секунд
        setTimeout(() => {
            clearInterval(timer);
        }, 10000);

        // Очистка таймера при размонтировании компонента
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className ={styles.clock}>{count}сек</div>
        </div>
    );
};

export default Walk;