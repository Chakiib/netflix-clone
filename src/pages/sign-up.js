import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

const SignUp = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const [firstName, setFirstName] = useState('');
    const [emailAdress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const isInvalid = !firstName || !emailAdress || !password;

    const handleSignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailAdress, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    navigate(ROUTES.BROWSE, { replace: true });
                });
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
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

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            onChange={({ target }) => setFirstName(target.value)}
                            placeholder="First Name"
                            required
                            value={firstName}
                        />
                        <Form.Input
                            onChange={({ target }) => setEmailAddress(target.value)}
                            placeholder="Email"
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
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
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

export default SignUp;
