import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const useAuthListener = () => {
    let currentUser = null;

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    if (error) {
        console.error(error);
        currentUser = null;
    }

    if (!loading) {
        if (user) {
            const { displayName, email, photoURL } = user;

            localStorage.setItem('authUser', JSON.stringify({ displayName, email, photoURL }));
            currentUser = { displayName, email, photoURL };
        } else {
            localStorage.removeItem('authUser');
            currentUser = null;
        }
    }

    return { user: currentUser, loading, error };
};

export default useAuthListener;
