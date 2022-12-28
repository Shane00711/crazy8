import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import hearts from "./../../heart.png";
import club from "./../../clubs.svg";
import "./landing.style.css"
export const Landing = () => {
    const history = useHistory();
    return (
        <div className="landing">
            <div className='login'>
                <div>
                <img src={hearts} className="iconclass invert" alt="club" />
                </div>
                <div>
                <Button variant="contained" onClick={()=>history.push('/login')}>Login (Already known)</Button>
                </div>
            </div>
            <div className='register'>
                <div>
                <img src={club} className="iconclass" alt="club" />
                </div>
                <Button variant="contained" onClick={()=>history.push('/reg')}>Register (New Player)</Button>
                
            </div>
        </div>
    )
}