import './Message.css';
import {useSelector} from 'react-redux';

const Message = ({ message }) => {
    const user = useSelector((state) => state.user);
    const background = useSelector((state) => state.backgroundColor);
    const isDarkMode = useSelector((state) => state.isDarkMode);
    const styleOwner = {
        background: isDarkMode ? '#201f1f': '#e0e0e0',
        color: isDarkMode ? 'white' : 'black',
        borderRadius: '0.5em 0 0.5em 0.5em',
    }
    const styleUsers = {
        background: background,
        borderRadius: '0 0.5em 0.5em 0.5em',
    }
    return(
        <div 
        className="speech-burbble"
        style={{justifyContent: message.user === user ? 'flex-end' : 'flex-start',
                color: message.user === user ? 'black' : 'white'}}>
            <div
            style={message.user === user ? styleOwner : styleUsers}>
                <div style={{display: message.user === user ? 'none' : 'block'}}>
                    {message.user}
                </div>
                {message.message}
            </div>
        </div>
    )
}
export default Message