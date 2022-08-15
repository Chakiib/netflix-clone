import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuthListener = () => {
    const auth = getAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                const { displayName, email, photoURL } = authUser;

                localStorage.setItem('authUser', JSON.stringify({ displayName, email, photoURL }));
                setUser({ displayName, email, photoURL });
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener;
    }, []);

    return { user };
};

export default useAuthListener;
