import { Card, CardMedia, CardContent, Button, styled, TextField, Link } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { UserService } from "../../serivces/userService";
import { Popup } from "../popup/popup";
import image  from "./../../cards.jpg"
import "./registration.scss";

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
export const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userRegisterResponse, setUserRegisterResponse] = useState<AxiosResponse>();
  
    function handleSubmit(val: any) {
        val.preventDefault();
        register();
    }
    
    const register = () => {
      UserService.signup({username, password, email})
      .then(res =>{
          console.log(res);
      }).catch(() =>{
      });
    }

    return (
        <div className="reg_containers">
            <h1>Register</h1>
            <Card className="card_reg" variant="outlined">
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="txt">
                            <CssTextField id="custom-css-outlined-input" label="Username" variant="outlined" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                        </div>
                        <div className="txt">
                            <CssTextField id="custom-css-outlined-input" label="Email" variant="outlined" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div className="txt">
                            <CssTextField id="custom-css-outlined-input" label="Password" variant="outlined" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Button variant="contained" type="submit" value="Submit" style={{backgroundColor: "red"}}>Sign Up</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <Link href="/login">I Already have an account. Login.</Link>
        </div>
    )
}