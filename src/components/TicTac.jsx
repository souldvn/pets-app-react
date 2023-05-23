import React, { useState, useEffect } from 'react';
import './TicTac.css'
import pet from '../images/pet.png'
import anot from '../images/anot.png'

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // Функция, которая проверяет, есть ли победитель на доске
        const calculateWinner = (squares) => {
            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }

            return null;
        };

        // Проверяем, есть ли победитель после каждого хода
        const winner = calculateWinner(board);
        if (winner) {
            setWinner(winner);
        } else if (!board.includes(null)) { // Если на доске нет пустых ячеек и нет победителя, объявляем ничью
            setWinner('Draw');
        }
    }, [board]);

    const handleCellClick = (index) => {
        if (board[index] || winner) return; // Если ячейка уже занята или игра закончилась, выходим из функции

        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const renderCell = (index) => {
        return (
            <div className="cell" key={index} onClick={() => handleCellClick(index)}>
                {!board[index] ? null : <img className='pet' src={board[index] === 'X' ? pet : anot} alt={board[index]} />}
            </div>
        );
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setPlayer('X');
        setWinner(null);
    };

    return (
        <div className="board">
            <div className='cells-wrapper'>
                {board.map((cell, index) => {
                    return renderCell(index);
                })}

            </div>
            <div className='result-container'>
                {winner && <p className='result'>{winner === 'Draw' ? 'Ничья' : `Победитель - ${winner}`}</p>}
                <button className='button' onClick={resetBoard}>Заново</button>
            </div>

        </div>
    );
};

export default TicTacToe;