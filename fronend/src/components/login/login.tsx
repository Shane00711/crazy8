import { useState } from 'react';
import './login.scss';
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
        console.log("Username: ",username, " Password: ", password);
    }
    return (
        <div className="containers">
            <h1>Login</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label>
                        Username: 
                        <input type="text" value={username} onChange={(e) =>handleChange(e)} />
                    </label>
                    <label>
                        Password: 
                        <input type="text" value={password} onChange={(e) =>handlePasswordChange(e)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {username}
            </div>
        </div>
    )
}
export default Login;

