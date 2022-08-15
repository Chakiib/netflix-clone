import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from './components';
import * as ROUTES from './constants/routes';
import { ProtectedRoute, PublicRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Browse, Home, SignIn, SingUp } from './pages';

const App = () => {
    const { user, loading } = useAuthListener();

    return loading ? (
        <Loading />
    ) : (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <PublicRoute user={user} loggedInPath={ROUTES.BROWSE}>
                            <SignIn />
                        </PublicRoute>
                    }
                    exact
                    path={ROUTES.SIGN_IN}
                />
                <Route
                    element={
                        <PublicRoute user={user} loggedInPath={ROUTES.BROWSE}>
                            <SingUp />
                        </PublicRoute>
                    }
                    exact
                    path={ROUTES.SIGN_UP}
                />
                <Route
                    element={
                        <ProtectedRoute user={user}>
                            <Browse />
                        </ProtectedRoute>
                    }
                    exact
                    path={ROUTES.BROWSE}
                />
                <Route
                    element={
                        <PublicRoute user={user} loggedInPath={ROUTES.BROWSE}>
                            <Home />
                        </PublicRoute>
                    }
                    exact
                    path={ROUTES.HOME}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
