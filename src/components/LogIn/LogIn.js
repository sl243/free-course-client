import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const LogIn = () => {
    const {userSignIn} = useContext(AuthContext);


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        userSignIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div>
            <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
                <h3>Login Your Account</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter Password" required />
                    </Form.Group>
                    <Button className='w-25 mx-auto' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='mt-2'>Don't have an account?
                        <Link to='/register'> Create an account</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default LogIn;