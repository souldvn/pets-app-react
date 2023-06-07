import React, { useState, useEffect } from 'react';
import './TicTac.css';
import pet from '../images/pet.png';
import anot from '../images/anot.png';
import back from '../images/back.png'
import {useNavigate} from "react-router-dom";


const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/games`)
    }

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

        const calculateWinner = (squares) => {
            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
            return null;
        };

        const isBoardFull = (squares) => {
            return squares.every((cell) => cell !== null);
        };

        const makeAIMove = () => {
            let availableMoves = [];

            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    availableMoves.push(i);
                }
            }

            if (availableMoves.length > 0) {
                let bestMove = null;
                let currentPlayer = player;

                // Check for a winning move
                for (let i = 0; i < availableMoves.length; i++) {
                    const move = availableMoves[i];
                    const newBoard = [...board];
                    newBoard[move] = currentPlayer;

                    if (calculateWinner(newBoard) === currentPlayer) {
                        bestMove = move;
                        break;
                    }
                }

                if (bestMove === null) {
                    // Check for a defensive move
                    currentPlayer = player === 'X' ? 'O' : 'X';

                    for (let i = 0; i < availableMoves.length; i++) {
                        const move = availableMoves[i];
                        const newBoard = [...board];
                        newBoard[move] = currentPlayer;

                        if (calculateWinner(newBoard) === currentPlayer) {
                            bestMove = move;
                            break;
                        }
                    }
                }

                if (bestMove === null) {
                    // No winning or defensive move, select a random move
                    const randomIndex = Math.floor(Math.random() * availableMoves.length);
                    bestMove = availableMoves[randomIndex];
                }

                setTimeout(() => {
                    const newBoard = [...board];
                    newBoard[bestMove] = 'O';
                    setBoard(newBoard);
                    setPlayer('X');
                }, 500);
            }
        };

        const checkGameStatus = () => {
            const currentWinner = calculateWinner(board);

            if (currentWinner) {
                setWinner(currentWinner);
            } else if (isBoardFull(board)) {
                setWinner('Draw');
            } else if (player === 'O') {
                makeAIMove();
            }
        };

        checkGameStatus();
    }, [board, player]);

    const handleCellClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);
        setPlayer('O');
    };

    const renderCell = (index) => {
        return (
            <div className="cell" key={index} onClick={() => handleCellClick(index)}>
                {!board[index] ? null : <img className="pet" src={board[index] === 'X' ? pet : anot} alt={board[index]} />}
            </div>
        );
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setPlayer('X');
        setWinner(null);
    };

    return (
        <div className="ulala">
            <div className="board">
                <div className="cells-wrapper">{board.map((cell, index) => renderCell(index))}</div>
            </div>
            <div className="result-container">
                {winner && <p className="result">{winner === 'Draw' ? 'Ничья' : `Победитель - ${winner}`}</p>}
                <button className="button" onClick={resetBoard}>
                    Заново
                </button>
                <img className="backButton" src={back} onClick={handleClick} alt=""/>
            </div>
        </div>
    );
};

export default TicTacToe;





