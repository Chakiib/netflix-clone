import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';
import { firestore } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firestore }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>
);
