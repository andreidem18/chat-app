import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/actionsGenerator.js';
import {useHistory} from 'react-router-dom';
import { Button, Container, Form, Grid, Header, Label, Message, Segment, } from "semantic-ui-react";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [validate, toValidate] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(validate){
            axios
                .post('https://academlo-chat.herokuapp.com/api/users/login', {email,username: userName,password})
                .then(res => {
                    if(res.data.access){
                        dispatch(login({
                            token: res.data.user.token,
                            user: res.data.user.username
                        }));
                        setMessage(
                            <Message error header="Invalid Access" content={res.data.message} />
                        );
                        history.push('/join')
                    } else {
                        setMessage(res.data.message);
                    }
                    toValidate(false);
                })
        }
    }, [validate, dispatch, email, password, history, userName])

    return (
        <Container>
        <Segment basic padded="very" />
  
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              <Segment stacked raised padded="very" color="red">
                <Header as="h2" textAlign="center" color="red">
                  Chat App
                  <Header.Subheader>
                  Sign up to join the chat rooms
                  </Header.Subheader>
                </Header>
  
                <Form error>
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Input
                    fluid
                    label="Password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
  
                  <Button
                    animated="fade"
                    color="google plus"
                    onClick={() => toValidate(true)}
                  >
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>Now!</Button.Content>
                  </Button>
  
                  <Button
                    color="blue"
                    floated="right"
                    onClick={() => history.push("/")}
                  >
                    Login
                  </Button>
                </Form>
  
                <Label attached="top right" color="red">
                  Sign up
                </Label>
              </Segment>
              {message}
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
  
        </Container>

        // <label>
        //   email
        //   <input
        //     type="email"
        //     value={email}
        //     onChange={(e) => setEmail(e.target.value)}
        //     required
        //   />
        // </label>
        // <label>
        //   User name
        //   <input
        //     type="text"
        //     value={userName}
        //     onChange={(e) => setUserName(e.target.value)}
        //     required
        //   />
        // </label>
        // <label>
        //   password
        //   <input
        //     type="password"
        //     value={password}
        //     onChange={(e) => setPassword(e.target.value)}
        //     required
        //   />
        // </label>
        // <button onClick={() => toValidate(true)}>Submit</button>
        // <p>{message}</p>
        // <button onClick={() => history.push("/")}>Log in</button>
    );
}
export default SignUp;