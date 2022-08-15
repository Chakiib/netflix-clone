import { useEffect, useState } from 'react';
import { Header, Loading } from '../components';
import { useAuthListener } from '../hooks';
import { SelectProfileContainer } from './profiles';

export const BrowseContainer = ({ slides }) => {
    const { user } = useAuthListener();

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const handleLoading = () => {
        if (loading) return <Loading src={user.photoURL} />;

        return <Loading.ReleaseBody />;
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
            {handleLoading()}

            <Header background src="joker1"></Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
};
