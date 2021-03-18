import './join.css'
import {useDispatch} from 'react-redux';
import {addRoom, logOut} from '../../actions/actionsGenerator';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import { Button, Container, Form, Grid, Header, Label, Segment, } from "semantic-ui-react";

const Join = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [room, setRoom] = useState('');
  const background = useSelector((state) => state.backgroundColor);

  const handleRoom = () => {
    if(room){
      dispatch(addRoom(room));
      history.push('/chat');
    }
  }
  const handleLogOut = () => {
    history.push('/');
    dispatch(logOut());
  }
  
  return(
    <>
        <div className="body2">
        <label>
          Roomooo
          <input type="text" 
            value={room} 
            onChange={(e) => setRoom(e.target.value)}/>
        </label>
        <button onClick={handleRoom} style={{background: background}}>
          Get into
        </button>
        <button onClick={handleLogOut}>
          log out
        </button>   

      <div>
        <Container>
        <Segment basic padded="very" />
  
        <Grid stackable>
          <Grid.Row>
            <Grid.Column only='computer' width={4}></Grid.Column>
            <Grid.Column width={8}>
              <Segment stacked raised padded="very">
                <Header as="h2" textAlign="center" style={{color: "#0794D5"}}>
                  Join to Room
                  <Header.Subheader>
                  Enter your data and the name of the room to access
                  </Header.Subheader>
                </Header>
  
                <Form error>
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={""}
                    onChange={""}
                    required
                  />
                  <Form.Input
                    fluid
                    label="Password"
                    placeholder="Password"
                    type="password"
                    value={""}
                    onChange={""}
                    required
                  />
                  <Form.Input
                    fluid
                    label="Room"
                    placeholder="Enter the room name"
                    type="password"
                    value={""}
                    onChange={""}
                    required
                  />
                  <Button
                    animated="fade"
                    color="google plus"
                    onClick={""}
                  >
                    <Button.Content visible >Get into</Button.Content>
                    <Button.Content hidden>Now!</Button.Content>
                  </Button>
  
                  <Button
                    color="blue"
                    floated="right"
                    onClick={() => history.push("/")}
                  >
                    log out
                  </Button>
                </Form>
                <div style={{padding: "20px", textAlign:"center"}} >
                <a href="#/signup">Create an account</a>
                </div>
  
                <Label attached="top right" style={{background: "#0794D5", color: "white"}}>
                  Join
                </Label>
              </Segment>
              {""}
            </Grid.Column>
            <Grid.Column only='computer' width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
  
        </Container>
        </div>
        </div>
    </>
  )
}

export default Join;