import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/actionsGenerator.js';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [validate, toValidate] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(validate){
            axios
                .post('https://academlo-chat.herokuapp.com/api/users/login', {email,password})
                .then(res => {
                    if(res.data.access){
                        dispatch(login({
                            token: res.data.user.token,
                            user: res.data.user.username
                        }));
                        setMessage(res.data.message);
                        history.push('/join')
                    } else {
                        setMessage(res.data.message);
                    }
                    toValidate(false);
                })
        }
    }, [validate, dispatch, email, password, history])

    return(
        <div>
            <label>
                email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label>
                password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button onClick={() => toValidate(true)}>Submit</button>
            <p>{message}</p>
            <button onClick={() => history.push('/signup')}>sign up</button>
        </div>
    )
}
export default Login;