import { Link } from 'react-router-dom'
import reactIcon from '../assets/react.svg'
export default function Dashboard() {
    return (
        <div>
            <label className='title'>
                Genzi&apos;s Games build with React
                <img className='icon' src={reactIcon} />
            </label>
            <div className='icon-container'>
                <Link to={"/tic-tac-toe"}>
                    <div className='container'>
                        <div className='icon-game'>
                            <span className='oo'>O</span>
                            <span className='xx'>X</span>
                        </div>
                    </div>
                </Link>
                <label>Tic Tac Toe</label>
            </div>
            <div className='icon-container'>
                <Link to={"/sudoku"}>
                    <div className='container'>
                        <div className='icon-game'>
                            <table className='icon-sudoku-table'>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td></td>
                                    <td>?</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </Link>
                <label>Sudoku</label>
            </div>
        </div>
    )
}