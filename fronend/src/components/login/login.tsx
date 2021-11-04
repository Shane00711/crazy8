import { Button, TextField, styled, Link } from '@mui/material';
import { useState } from 'react';
import './login.scss';
import club from "./../../club.png";
import { UserService } from '../../serivces/userService';
import { useHistory } from 'react-router';
import { GlassCard } from '../glasscard/glasscard';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'red',
  },
  '& label': {
    color: '#ff000099',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
      color: 'red'
    },
    '& input': {
      color: 'red'
    },
    '&.Mui-focused input': {
      color: 'red'
    },
  },
  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }
});

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const options ={
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    };
    function handleChange(val: any) {
        val.preventDefault();
        setUsername(val.target.value);
    }
    function handlePasswordChange(val: any) {
        val.preventDefault();
        setPassword(val.target.value);
    }
    function handleSubmit(val: any) {
        val.preventDefault();
        sign_in();
    }
    const sign_in = () => {
        UserService.signin({username, password}).then(
            res => {
                if(res.status === 200) {
                    console.log(res);
                     history.push("/start");
                }
            }
        ).catch(() =>{})
    }

    return (
        <div className="containers">
           <GlassCard options={options} image={<img src={club} className="iconclass" alt="heart" />} header={<h1>Login</h1>} para={ <form onSubmit={handleSubmit}>
                <div className="txt">
                    <CssTextField id="custom-css-outlined-input" label="Username" variant="outlined" value={username} onChange={(e) =>handleChange(e)}/>
                </div>
                <div className="txt">
                    <CssTextField id="custom-css-outlined-input" label="Password" variant="outlined" type="password" value={password} onChange={(e) =>handlePasswordChange(e)}/>
                </div>
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" type="submit" value="Submit" style={{backgroundColor: "black"}}>Login</Button>
                </div>
            </form>}
            anchor={<Link href="/reg">Register</Link>}
            />
        </div>
    )
}
export default Login;

