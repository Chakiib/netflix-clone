import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SingUp } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={ROUTES.HOME} element={<Home />} />
                <Route exact path={ROUTES.BROWSE} element={<Browse />} />
                <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
                <Route exact path={ROUTES.SIGN_UP} element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
