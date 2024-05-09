import { useEffect, useState } from 'react';
import './index.css';

export default function Sudoku() {
    const [level, setLevel] = useState('Easy');
    const [timer, setTimer] = useState('01:11');
    const [sudokuGrid, setSudokuGrid] = useState([]);

    function onCellChange(e, rowIndex, colIndex) {
        const value = e.target.value.trim();
        const newValue = value.length > 1 ? value.charAt(value.length - 1) : value;
        const updatedGrid = [...sudokuGrid];
        updatedGrid[rowIndex][colIndex] = parseInt(newValue) || 0;
        setSudokuGrid(updatedGrid);
    }

    useEffect(() => {
        const initialGrid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
        setSudokuGrid(initialGrid);
    }, []);

    useEffect(() => {
        if (level === 'Easy') {
            setTimer('02:00');
        } else if (level === 'Medium') {
            setTimer('05:00');
        } else if (level === 'Hard') {
            setTimer('10:00');
        }
    }, [level]);

    return (
        <div id='container-game'>
            <div id='title-container'>
                <label id='title-sudoku'>Sudoku</label>
            </div>
            <div id='level-container'>
                <label id='level'>Level: <label id='level-level'>{level}</label></label>
                <label id='level'>Timer: <label id='timer'>{timer}</label></label>
            </div>
            <div className='sudoku-grid'>
                {[0, 1, 2].map(boxRow => (
                    <div key={boxRow} className='sudoku-box'>
                        {[0, 1, 2].map(boxCol => (
                            <div key={boxCol} className='sudoku-box-row'>
                                {[0, 1, 2].map(cellRow => (
                                    <div key={cellRow} className='sudoku-row'>
                                        {[0, 1, 2].map(cellCol => (
                                            <div key={cellCol} className='sudoku-cell'>
                                                <input
                                                    type='text'
                                                    maxLength='1'
                                                    onKeyDown={(e) => {
                                                        const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
                                                        if (!allowedKeys.includes(e.key)) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    onChange={(e) => onCellChange(e, boxRow * 3 + cellRow, boxCol * 3 + cellCol)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='button-container'>
                <div>
                    <button>Check</button>
                </div>
                <div>
                    <button>Solve</button>
                </div>
                <div>
                    <button>Reset</button>
                </div>
            </div>
            <div className='level-container'>
                <div className='btn-con'>
                    <button onClick={() => setLevel('Easy')} className='level-button'>Easy</button>
                </div>
                <div className='btn-con'>
                    <button onClick={() => setLevel('Medium')} className='level-button'>Medium</button>
                </div>
                <div className='btn-con'>
                    <button onClick={() => setLevel('Hard')} className='level-button'>Hard</button>
                </div>
            </div>
            <div id='rules'>
                <div id='listKey'>
                    Key allows
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => {
                        return (
                            <div className='key-container' key={index}><div className='key'>
                                {e + 1}
                            </div></div>
                        )
                    })}
                    <div className='key-container'>
                        <div className='key'>Backspace</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
