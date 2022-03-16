import React ,{useState} from 'react';
import {
    Link
  } from 'react-router-dom';
  
const Login = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");

    const handleOnChange = (event) =>{
        setName(event.target.value);
    }
    const handlePswd = (even) =>{
        setPswd(even.target.value);
    }

    if(name.length === 0 && pswd.length === 0){
        var val = "btn disabled";
    }
    else{
        val ="simle";
    }
    return (
        <div className="main-login">
            <div className="login">
                <form>
                    <label className="login-label" htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="text" name="txt" placeholder="User Name" value ={name}  onChange={handleOnChange} required />
                    <input type="password" name="pswd" placeholder="Password" value={pswd} onChange={handlePswd} required />
                    <div className="social">
                        <a href="/"><i className="fab fa-facebook-square"></i></a>
                        <a href="/"><i className='bx bxl-google'></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-twitter-square"></i></a>
                    </div>
                    <button  className={`${val}`} > <Link  to="/user">login</Link></button>
                </form>
            </div>
        </div>
    );
}

export default Login;