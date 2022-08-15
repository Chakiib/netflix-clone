import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export const ProtectedRoute = ({ user, redirectPath = ROUTES.SIGN_IN, children }) => {
    if (!user) return <Navigate to={redirectPath} />;

    if (user) return children;

    return null;
};

export const PublicRoute = ({ user, loggedInPath, children }) => {
    if (!user) return children;

    if (user) return loggedInPath ? <Navigate to={loggedInPath} /> : children;

    return null;
};
