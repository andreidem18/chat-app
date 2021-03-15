import './Message.css';
import {useSelector} from 'react-redux';

const Message = ({ message }) => {
    const user = useSelector((state) => state.user);
    const background = useSelector((state) => state.backgroundColor);
    const styleOwner = {
        background: '#e0e0e0',
        borderRadius: '0.5em 0 0.5em 0.5em',
        borderTopColor: '#e0e0e0',
        borderRightColor: '#e0e0e0',
        ':hover': {
            background: '#ff0000'
        }
    }
    const styleUsers = {
        background: background,
        borderRadius: '0 0.5em 0.5em 0.5em',
        borderTopColor: background,
        borderRightColor: background,
        ':after': {
            right: '100%',
            content: 'Hola'
        }
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