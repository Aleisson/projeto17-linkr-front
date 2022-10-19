import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";

function SignUp () {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');

    return (
        <Content>
            <Left>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Left>
            <Right>
                <Form>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="password" required value={password}/>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="username" required value={username} />
                    <input onChange={(e) => setPictureUrl(e.target.value)} placeholder="picture url" required value={pictureUrl}/>

                    <button>Sign Up</button>

                    <h3>Switch back to log in</h3>
                </Form>

            </Right>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 952px;

`;

const Left = styled.div`
    background-color: #151515;
    width: 70%;

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 106px;
        margin-top: 301px;
        margin-left: 144px;
    }
    h2{
        font-family: 'Oswald', sans-serif;
        color: #FFFFFF;
        font-size: 43px;
        margin-left: 144px;
        width: 442px;
    }
`;

const Right = styled.div`
    background-color: #333333;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 429px;
        height: 65px;
        border-radius: 6px;
        margin-top: 13px;
        border: none;
        display: flex;
    }

    button {
        width: 429px;
        height: 65px;
        border: none;
        border-radius: 6px;
        margin-top: 13px;
        background-color: #1877F2;
        font-family: 'Oswald', sans-serif;
        font-size: 27px;
        color: #FFFFFF;
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

export default SignUp