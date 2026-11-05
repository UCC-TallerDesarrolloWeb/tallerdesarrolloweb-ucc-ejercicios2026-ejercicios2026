import { useState } from "react";
import "../src/styles/login.scss";

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        if(username == "admin" && password == "admin"){
            console.log("Login OK")
        }
        else{
            console.log("Login Incorrecto")
        }
        }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} value={username} required/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
export default login;