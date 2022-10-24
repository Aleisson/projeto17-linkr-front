import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useState } from "react";
import axios from "axios";
import routes from '../backendroutes';
import TokenContext from '../contexts/TokenContext';

function SignIn () {
    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(false)

    function logar (e) {
        e.preventDefault();
        setDisableButton(true)
        const body = {
            email,
            password
        }

        if (email !== '' && password !== '') {
            let response = axios.post(routes.SIGN_IN, body)
            response.then((res)=> {
            setToken(res.data)
            navigate("/timeline")
            setDisableButton(false)
        })
            response.catch(res => {
                alert(res.response.data)
                setDisableButton(false)
            })
        } else {
            alert("Preencha todos os campos!")
        }

        
    }

    return (
        <Content>
            <Black>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Black>
            <Gray>
                <Form>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="password" required value={password} type="password"/>

                    <button disabled={disableButton} onClick={logar}>Sign In</button>

                    <Link to="/signup"><h3>First time? Create an account!</h3></Link>
                </Form>

            </Gray>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 952px;

    @media (max-width: 475px) {
        height: 667px;

    }

`;

const Black = styled.div`
    background-color: #151515;
    width: 70%;

    @media (max-height: 1200) {
        height: 100%;
    }

    @media (max-width: 475px) {
        position: fixed;
        top: 0%;

        width: 100%;
        height: 30%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 106px;
        margin-top: 301px;
        margin-left: 144px;

        @media (max-width: 900px) {
        font-size: 80px;
        margin-left: 104px;
    }

        @media (max-width: 475px) {
        font-size: 76px;
        margin: unset;
    }
    }
    h2{
        font-family: 'Oswald', sans-serif;
        color: #FFFFFF;
        font-size: 43px;
        margin-left: 144px;
        width: 442px;

        @media (max-width: 900px) {
        font-size: 38px;
        margin-left: 104px;
    }

        @media (max-width: 700px) {
            width: 320px;
            font-size: 35px;
        }

        @media (max-width: 475px) {
        font-size: 23px;
        margin: unset;
        width: 237px;
        text-align: center;
    }
    }

`;

const Gray = styled.div`
    background-color: #333333;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 475px) {
        position: fixed;
        bottom: 0%;

        width: 375px;
        height: 70%;

        justify-content: unset;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 475px) {
        margin-top: 40px;
    }

    input {
        width: 90%;
        height: 65px;
        border-radius: 6px;
        margin-top: 13px;
        border: none;
        display: flex;

        @media (max-width: 475px) {
            width: 330px;
            height: 55px;
        }
    }

    button {
        width: 90%;
        height: 65px;
        border: none;
        border-radius: 6px;
        margin-top: 13px;
        background-color: #1877F2;
        font-family: 'Oswald', sans-serif;
        font-size: 27px;
        color: #FFFFFF;


        @media (max-width: 475px) {
            width: 330px;
            height: 55px;
        }
    }

    input::placeholder {
        font-family: 'Oswald', sans-serif;
        font-size: 27px;
        color: #9F9F9F;
        padding-left: 10px;
    }

    h3 {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: #FFFFFF;
        text-decoration: underline;
        margin-top: 10px;
    }
`;

export default SignIn
