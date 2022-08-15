import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { FirebseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';
import { firestore } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <FirebseContext.Provider value={{ firestore }}>
            <GlobalStyles />
            <App />
        </FirebseContext.Provider>
    </React.StrictMode>
);
