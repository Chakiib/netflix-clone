import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../lib/firebase.prod';

const useContent = (target) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const targetCollectionRef = collection(firestore, target);
        const getQuerySnapshot = async () => await getDocs(targetCollectionRef);

        getQuerySnapshot()
            .then((querySnapshot) => {
                const allContent = querySnapshot.docs.map((item) => ({
                    ...item.data(),
                    docId: item.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    return { [target]: content };
};

export default useContent;
