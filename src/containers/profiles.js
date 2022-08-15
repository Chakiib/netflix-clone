import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export const SelectProfileContainer = ({ user, setProfile }) => {
    const handleProfileSelect = () => {
        setProfile({
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    };

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo alt="Netflix" src="/images/misc/logo.svg" to={ROUTES.HOME} />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={handleProfileSelect}>
                        <Profiles.Picture src={user?.photoURL} />
                        <Profiles.Name>{user?.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
};
