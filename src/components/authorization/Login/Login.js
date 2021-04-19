import React, { useContext, useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import './Login.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../../contexts/AuthContext';

const Login = () => {

    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const auth = useContext(AuthContext);

    const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
        let data = {
        email: loginData.email,
        password: loginData.password,
        };
        try {
            const response = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'auth/login',
                data,
                config
            );

            if (response.status === 200) {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('username', response.data.username);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expiration', expirationDate.toISOString());
                auth.login();
                history.push('/posts');
            }

        } catch (err) {
            console.log(err.response.data.errors);
        }
      };



    return (
        <Container component="main" maxWidth="xs">
            <div className="headContainer">
                <h1>LogIn friends!</h1>
                <form className="formLogin">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        type="password"
                        margin="normal"
                        required
                        fullWidth
                        id="loginPassword"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        onChange={handleChange}
                    />
                    <Button
                    type="Submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    endIcon={<SendOutlined/>}
                    onClick={handleSubmit}
                    >Log In </Button>
                    
                </form>
            </div>
        </Container>
    );
};


export default Login;

