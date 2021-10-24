import { useHistory } from 'react-router';
import './landing.css';
export const Landing = () => {
    const history = useHistory();

    return (
        <div className="container">
            <div className="col">
                <h1>Welcome to Crazy 8</h1>
                <h2>The game were the winner takes all.</h2>
            </div>
            <div className="col">
                <button className="login_btn" onClick={()=>history.push('/login')}>Login (Already known)</button>
            </div>
             <div className="col">
                <button className="reg_btn" onClick={()=>history.push('/reg')}>Register (New Player)</button>
            </div>
        </div>
    )
}