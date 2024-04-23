import React, { useState } from 'react';
import './index.css';

export default function TikTakToe() {
    const [showModal, setShowModal] = useState(false);

    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const handleClick = (row, col) => {
        if (!winner && board[row][col] === '') {
            const newBoard = [...board];
            newBoard[row][col] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X'); // Chuyển lượt
            checkWinner(newBoard);
        }
    };

    const checkWinner = (board) => {
        const lines = [
            // Các hàng
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Các cột
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Đường chéo
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
                setWinner(board[a[0]][a[1]]);
                setShowModal(true);
                return;
            }
        }

        // Kiểm tra nếu toàn bộ bảng đã được chọn mà không có người chiến thắng
        let isBoardFull = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '') {
                    isBoardFull = false;
                    break;
                }
            }
        }
        if (isBoardFull) {
            setShowModal(true);
        }
    };

    const resetGame = () => {
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        setPlayer('X');
        setWinner(null);
    };

    const closeModal = () => {
        resetGame()
        setShowModal(false);
        if (winner) {
            resetGame(); // Reset trò chơi nếu có người chiến thắng
        }
    };

    return (
        <div>
            <div className='tittle'>
                <label id='title'>
                    Tik-Tac-Toe
                    {/* <label className='o'>o</label> <label className='x'>x</label> */}
                </label>
            </div>
            <div className='column'>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className='row'>
                        {row.map((cell, colIndex) => (
                            <div key={colIndex} className='box' onClick={() => handleClick(rowIndex, colIndex)}>
                                <label className={`${cell === 'X' ? 'x' : 'o'}`}>{cell}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='container'>
                <button onClick={resetGame}>Reset</button>
            </div>
            <div>
                {showModal && (
                    <div className='modal'>
                        <div className='modal-content'>
                            <span className='close' onClick={closeModal}>&times;</span>
                            {winner ? <p>Winner: {winner}</p> : <p>No winner</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
