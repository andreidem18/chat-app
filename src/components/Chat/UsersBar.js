import {useSelector} from 'react-redux';
import './usersBar.css';

const UsersBar = ({ users, comeBack }) => {

    const background = useSelector((state) => state.backgroundColor);

    return(
        <ul className='users-bar' style={{background: background}}>
            
            <button onClick={comeBack}>
              <i className="fas fa-chevron-left"></i>
            </button>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
    )
}
export default UsersBar;