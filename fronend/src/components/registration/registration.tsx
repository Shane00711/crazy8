import { Button, styled, TextField, Link } from "@mui/material"
import { useState } from "react";
import { useHistory } from "react-router";
import { UserService } from "../../serivces/userService";
import { GlassCard } from "../glasscard/glasscard";
import hearts from "./../../heart.png";
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
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const options ={
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 1
    };
    function handleSubmit(val: any) {
        val.preventDefault();
        register();
    }
    
    const register = () => {
      UserService.signup({username, password, email})
      .then(res =>{
        if(res.status === 201){
          history.push("/start");
        }
          console.log(res);
      }).catch(() =>{
      });
    }

    return (
        <div className="reg_containers">
          <GlassCard options={options} header={<h1>Register</h1>} image={<img className="iconclass" src={hearts} alt="heart" />} para={<form onSubmit={handleSubmit}>
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
            </form>}
            anchor={<Link href="/login">Login</Link>}
          />
        </div>
    )
}