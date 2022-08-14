import { Background, ButtonLink, Container, Logo } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = ({ background = true, children, ...restProps }) => {
    return background ? <Background {...restProps}>{children}</Background> : children;
};

export default Header;

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButton({ to, children, ...restProps }) {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    );
};
