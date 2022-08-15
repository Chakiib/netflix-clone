import { Container, Item, List, Name, Picture, Title } from './styles/profiles';

const Profiles = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

export default Profiles;

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ onClick, children, ...restProps }) {
    return (
        <Item {...restProps} onClick={onClick}>
            {children}
        </Item>
    );
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};