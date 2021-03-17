import {useSelector, useDispatch} from 'react-redux';
import {toggleDarkMode, setBackground} from '../../actions/actionsGenerator.js';
import {useState} from 'react';
import './usersBar.css';

const UsersBar = ({ users, comeBack }) => {

    const background = useSelector((state) => state.backgroundColor);
    const isDarkMode = useSelector((state) => state.isDarkMode);
    const dispatch = useDispatch();

    const [isPaletteVisible, setIsPaletteVisible] = useState(false);

    return(
        <ul className='users-bar' style={{background: background}}>
            
            <div className="come-back">
                <button onClick={comeBack}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            </div>


            <div className='users'>
                {users.map(user => <li key={user}>{user}</li>)}
            </div>


            <div className="settings">

                <button 
                style={{background: isDarkMode ? 'rgb(255, 208, 0)' : 'rgb(0, 255, 76)'}}
                onClick={() => dispatch(toggleDarkMode())} 
                className="dark-mode-button">
                    {isDarkMode ? (
                            <i className="fas fa-sun"></i>
                        ):(
                            <i className="fas fa-moon"></i>
                        )}
                </button>

                <button
                onClick={() => setIsPaletteVisible(!isPaletteVisible)}>
                    <i className="fas fa-palette"></i>
                </button>

                
                <div className="palette"
                style={{transform: isPaletteVisible ? 'scale(1)' : 'scale(0)'}}>
                    <button
                    style={{background: '#6693ff'}}
                    onClick={() => dispatch(setBackground('#6693ff'))}></button>
                    <button
                    style={{background: '#f4bf07'}}
                    onClick={() => dispatch(setBackground('#f4bf07'))}></button>
                    <button
                    style={{background: '#ff5722'}}
                    onClick={() => dispatch(setBackground('#ff5722'))}></button>
                    <button
                    style={{background: '#e91e63'}}
                    onClick={() => dispatch(setBackground('#e91e63'))}></button>
                    <button
                    style={{background: '#673ab7'}}
                    onClick={() => dispatch(setBackground('#673ab7'))}></button>
                </div>
            </div>
        </ul>
    )
}
export default UsersBar;