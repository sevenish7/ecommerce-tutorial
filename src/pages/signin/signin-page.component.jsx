import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-page.styles.scss';

const SignInPage = () => (
    <div className  = 'signin-page'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInPage;