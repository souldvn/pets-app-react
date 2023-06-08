import React, {useState, useEffect} from 'react';
import styles from './Sleep.module.css'

const Sleep = () => {
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
        <div className={styles.sleep}>
            <div className={styles.clock}>{count}сек</div>
        </div>
    );
};

export default Sleep;