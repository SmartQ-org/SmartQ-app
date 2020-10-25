import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import './SignUpPage.css';
import fire from '../../firebase';

const SignUpPage = (props) => {

    const location = useLocation()
    let history = useHistory();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [organization, setOrganization] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    useEffect(() => {
        setEmail(location.state.email)
        authListener()
    }, []);

    const handleFirstName = event => {
        setFirstName(event.target.value)
    }

    const handleLastName = event => {
        setLastName(event.target.value)
    }

    const handleOrganization = event => {
        setOrganization(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSignUp = async(event) => {
        event.preventDefault()
        await clearErrors()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                        setEmailError(err.message)
                        break
                    case "auth/invalid-email":
                        setEmailError(err.message)
                        break
                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break
                    default:
                        setEmailError(err.message)
                    }
                console.log(err.code, err.message)
            })
    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const authListener = () => {
        fire
            .auth()
            .onAuthStateChanged(user => {
                if(user){
                    fire.auth().signOut()
                    history.push('/login')
                } 
            })
    }

    return (
        <div className='signup-container'>
            <div className='signup-container-size'>
                <h1 className='header'>Sign Up</h1>
                <Form>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" onChange={handleFirstName} />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" onChange={handleLastName} />
                    </Form.Group>
                    <Form.Group controlId="formOrganization">
                        <Form.Label>Name of your organization</Form.Label>
                        <Form.Control type="text" placeholder="Name of organization" onChange={handleOrganization} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder={email} onChange={handleEmail} />
                    </Form.Group>
                    <p style={{color:"red"}}>{emailError}</p>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                    </Form.Group>
                    <p style={{color:"red"}}>{passwordError}</p>
                    <Button variant="primary" type="submit" onClick={handleSignUp}>
                        Create account
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignUpPage;