import { Button, Card, CardContent, CardMedia, TextField, styled, Link } from '@mui/material';
import { useState } from 'react';
import './login.scss';
import logo from './../../logo.svg';
import image  from "./../../cards.jpg"
import axios from 'axios';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
        // console.log(password, " ", username);
        sign_in();
    }
    const sign_in = () => {
        const _body = {
                "username" : "testuser",
                "password": "123456"
            };
        console.log(_body);
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            data: {
                 username : "testuser",
                password: "123456"
            }
        // })
        // ;
        // fetch("http://localhost:8080/api/auth/signin", {
        //     "method": "POST",
        //     "body": _body
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }
    return (
        <div className="containers">
            <h1>Login</h1>
            <Card className="card" variant="outlined">
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="txt">
                            <CssTextField id="custom-css-outlined-input" label="Username" variant="outlined" value={username} onChange={(e) =>handleChange(e)}/>
                        </div>
                        <div className="txt">
                            <CssTextField id="custom-css-outlined-input" label="Password" variant="outlined" value={password} onChange={(e) =>handlePasswordChange(e)}/>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Button variant="contained" type="submit" value="Submit" style={{backgroundColor: "black"}}>Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <Link href="/reg">I don't have a account. Register.</Link>
        </div>
    )
}
export default Login;

