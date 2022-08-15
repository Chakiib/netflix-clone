import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { FirebaseContext } from '../context/firebase';

const SignIn = () => {
    const navigate = useNavigate();
    const { auth } = useContext(FirebaseContext);

    const [emailAdress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const isInvalid = !emailAdress || !password;

    const handleSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailAdress, password)
            .then(() => {
                navigate(ROUTES.BROWSE, { replace: true });
            })
            .catch((error) => {
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            onChange={({ target }) => setEmailAddress(target.value)}
                            placeholder="Email or phone number"
                            required
                            value={emailAdress}
                        />
                        <Form.Input
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={`/${ROUTES.SIGN_UP}`}>Sign up now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default SignIn;
