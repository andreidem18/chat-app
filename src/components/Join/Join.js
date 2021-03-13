import {useDispatch} from 'react-redux';
import {addRoom, logOut} from '../../actions/actionsGenerator';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const Join = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [room, setRoom] = useState('');

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
        <label>
          Room
          <input type="text" 
            value={room} 
            onChange={(e) => setRoom(e.target.value)}/>
        </label>
        <button onClick={handleRoom}>
          Get into
        </button>
        <button onClick={handleLogOut}>
          log out
        </button>    
    </>
  )
}

export default Join;