// This is a just a placeholder component. This is what should be shown after the user successfully logins in/signs up.
// We haven't discussed what should be here so I left as is for now.

import React from 'react';
import { useHistory } from "react-router-dom";
import fire from '../firebase';
import { Button } from 'react-bootstrap';

export default function TestComponent() {
    let history = useHistory();

    const handleLogout = () => {
        fire.auth().signOut()
        history.push('/login')
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1> Awesome hidden content </h1>
            <Button variant="primary" type="submit" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}