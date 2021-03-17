import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../actions/actionsGenerator.js";
import { useHistory } from "react-router-dom";
import { Button, Container, Form, Grid, Header, Label, Message, Segment } from "semantic-ui-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [validate, toValidate] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (validate) {
      axios
        .post("https://academlo-chat.herokuapp.com/api/users/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.access) {
            dispatch(
              login({
                token: res.data.user.token,
                user: res.data.user.username,
              })
            );
            setMessage(res.data.message);
            history.push("/join");
          } else {
            setMessage(
              <Message
                error
                header="Invalid Access"
                content={res.data.message}
              />
            );
          }
          toValidate(false);
        });
    }
  }, [validate, dispatch, email, password, history]);

  return (
    <Container>
      <Segment basic padded="very" only="computer" />

      <Grid stackable>
        <Grid.Row>
          <Grid.Column only="computer" width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Segment stacked raised padded="very" color="blue">
              <Header as="h2" textAlign="center" color="blue">
                Chat App
                <Header.Subheader>
                  Login to enter the chat rooms
                </Header.Subheader>
              </Header>

              <Form error>
                <Form.Input fluid label="Email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Form.Input fluid label="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                
                <Button animated="fade" color="linkedin" onClick={() => toValidate(true)}>
                  <Button.Content visible>Submit</Button.Content>
                  <Button.Content hidden>Now!</Button.Content>
                </Button>
                
                <Button color="google plus" floated="right" onClick={() => history.push("/signup")}>Sign up</Button>
              </Form>

              <Label attached="top right" color="blue">
                Login
              </Label>
            </Segment>
            {message}
          </Grid.Column>
          <Grid.Column only="computer" width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default Login;
