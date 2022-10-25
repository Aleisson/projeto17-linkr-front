import { useNavigate, Link } from 'react-router-dom';
import STYLES from './styles/signupstyles';
import { useState } from "react";
import axios from 'axios';
import routes from '../backendroutes';

function SignUp () {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [disableButton, setDisableButton] = useState(false)

    function cadastrar (e) {
        e.preventDefault();
        
        const body = {
            email,
            password,
            username,
            pictureUrl
        }

        if (email !== '' && password !== '' && username !== '' && pictureUrl !== '') {
            setDisableButton(true)
            let response = axios.post(routes.SIGN_UP, body)
            
            response.then(() => {
                navigate("/")
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
        <STYLES.Content>
            <STYLES.Black>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </STYLES.Black>
            <STYLES.Gray>
                <STYLES.Form>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="password" required value={password} type="password"/>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="username" required value={username} />
                    <input onChange={(e) => setPictureUrl(e.target.value)} placeholder="picture url" required value={pictureUrl}/>

                    <button disabled={disableButton} onClick={cadastrar}>Sign Up</button>

                    <Link to="/"><h3>Switch back to log in</h3></Link>
                </STYLES.Form>

            </STYLES.Gray>
        </STYLES.Content>
    )
}

export default SignUp
