import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({children, ...props}) => {
    const isAllowed = useSelector((state) => state.access)
    return(
        <Route {...props} render={() => isAllowed ? (children) : <Redirect to='/'/>}/>
    )
}

export default ProtectedRoute;