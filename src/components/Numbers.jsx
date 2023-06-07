import React, {useEffect, useState} from "react";
import styles from './Numbers.module.css'
import back from '../images/back.png'
import { useNavigate } from 'react-router-dom';

const Numbers = () => {
    const [secretNumber, setSecretNumber] = useState(null);
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 12;
    const [gameOver, setGameOver] = useState(false);

    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/games`);
    };

    useEffect(() => {
        generateSecretNumber();
    }, []);

    const generateSecretNumber = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setSecretNumber(number);
    };

    const handleGuessChange = (e) => {
        setGuess(e.target.value);
    };

    const handleGuessSubmit = (e) => {
        e.preventDefault();

        if (guess === '') {
            return;
        }

        const parsedGuess = parseInt(guess, 10);

        if (isNaN(parsedGuess)) {
            setFeedback('Введите число!');
            return;
        }

        setAttempts((prevAttempts) => prevAttempts + 1);

        if (parsedGuess === secretNumber) {
            setFeedback(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts + 1} попыток.`);
            setGameOver(true);
        } else if (parsedGuess < secretNumber) {
            setFeedback('Загаданное число больше!');
        } else {
            setFeedback('Загаданное число меньше!');
        }

        setGuess('');

        if (attempts === maxAttempts - 1) {
            setFeedback(`К сожалению, вы не угадали число ${secretNumber} за ${maxAttempts} попыток. Вы проиграли.`);
            setGameOver(true);
        }
    };

    const handlePlayAgain = () => {
        generateSecretNumber();
        setGuess('');
        setFeedback('');
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h2>Игра "Угадай число"</h2>
                <div className={styles.info}>
                    <p className={styles.feedback}>{feedback}</p>
                </div>
                {!gameOver && (
                    <form className={styles.form} onSubmit={handleGuessSubmit}>
                        <input className={styles.input} type="text" value={guess} onChange={handleGuessChange} />
                        <button className={styles.button} type="submit">Угадать</button>
                    </form>
                )}
                {gameOver && (
                    <button onClick={handlePlayAgain}>Играть снова</button>
                )}
                <img onClick={handleClick} className={styles.back} src={back} alt=""/>
            </div>
        </div>

    );
};

export default Numbers;