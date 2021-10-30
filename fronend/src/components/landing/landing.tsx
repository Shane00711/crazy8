import { Button } from '@mui/material';
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
                <Button variant="contained" className="login_btn" onClick={()=>history.push('/login')}>Login (Already known)</Button>
            </div>
             <div className="col m5">
                <Button variant="contained" className="reg_btn" onClick={()=>history.push('/reg')}>Register (New Player)</Button>
            </div>
        </div>
    )
}