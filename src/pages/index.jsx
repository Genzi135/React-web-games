import { Link } from 'react-router-dom'
import reactIcon from '../assets/react.svg'
export default function Dashboard() {
    return (
        <div>
            <label className='title'>
                Genzi&apos;s Games build with React
                <img className='icon' src={reactIcon} />
            </label>
            <Link to={"/tic-tac-toe"}>
                <div className='container'>
                    <div className='icon-game'>
                        <span className='oo'>O</span>
                        <span className='xx'>X</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}