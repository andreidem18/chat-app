import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {setRoom} from '../../actions/actionsGenerator';
import {useHistory} from 'react-router-dom';

const Join = () => {

  const {register, handleSubmit} = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setRoom({
      room: data.room,
      user: data.user
    }))
    history.push('/chat');
  }
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Room
        <input name="room" ref={register}/>
      </label>
      <label>
        User
        <input name="user" ref={register}/>
      </label>
      <button>Get into</button>
    </form>
  )
}

export default Join;