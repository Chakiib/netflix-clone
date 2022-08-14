import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export const HeaderContainer = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo alt="Netflix" src="/images/misc/logo.svg" to={ROUTES.HOME} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
};
