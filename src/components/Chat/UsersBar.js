import {useSelector} from 'react-redux';
import './usersBar.css';

const UsersBar = ({ users }) => {

    const background = useSelector((state) => state.backgroundColor);

    return(
        <ul className='users-bar' style={{background: background}}>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
    )
}
export default UsersBar;