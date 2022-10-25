import { useNavigate, Link } from 'react-router-dom';
import STYLES from './styles/signinstyles';
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
        localStorage.clear();
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
            localStorage.setItem("token", JSON.stringify(res.data))
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

                    <button disabled={disableButton} onClick={logar}>Sign In</button>

                    <Link to="/signup"><h3>First time? Create an account!</h3></Link>
                </STYLES.Form>

            </STYLES.Gray>
        </STYLES.Content>
    )
}

export default SignIn
