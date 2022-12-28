import { Button, TextField, styled, Link } from '@mui/material';
import { useState } from 'react';
import './login.scss';
import club from "./../../club.png";
import { UserService } from '../../serivces/userService';
import { useHistory } from 'react-router';
import { GlassCard } from '../glasscard/glasscard';
import { useSnackbar } from 'notistack';

const Login = () => {
    const history = useHistory();
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const options ={
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    };
    function handleChange(event: any) {
        const {name, value} = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));   }
    
    function handleSubmit(val: any) {
        val.preventDefault();
        sign_in();
    }
    const sign_in = () => {
        const user = {
            username: state.username,
            password: state.password
        }
        // check if user data is valid
        if (user.username === "" || user.password === "") {
            enqueueSnackbar("Please fill in all fields", {variant: 'error'});
            return;
        }
        UserService.signin(user).then(
            res => {
                if(res.status === 200) {
                    console.log(res);
                    enqueueSnackbar("Login Successful", {variant: 'success'});
                    history.push("/start");
                }
                if (res.status === 401) {
                     enqueueSnackbar("Invalid Credentials", {variant: 'error'});
                }
            }
        ).catch(() =>{})
    }

    return (
        <div className="containers">
           <GlassCard options={options} image={<img src={club} className="iconclass" alt="heart" />} header={<h1>Login</h1>} para={ <form onSubmit={handleSubmit}>
                <div className="txt">
                    <TextField id="outline-basic" label="Username" name="username" variant="outlined" color="info" value={state.username} onChange={handleChange} required/>
                </div>
                <div className="txt">
                    <TextField id="outline-basic" label="Password" name="password" variant="outlined" type="password" value={state.password} onChange={handleChange} required/>
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

