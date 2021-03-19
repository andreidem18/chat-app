import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProtectedRoute from "./components/protectedRoute.js"
import Chat from './components/Chat/Chat.js';
import Join from './components/Join/Join.js';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/chat">
          <Chat/>
        </ProtectedRoute>
        <ProtectedRoute path="/join">
          <Join/>
        </ProtectedRoute>
        <Route path="/signup" component={SignUp}/>
        <Route path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

