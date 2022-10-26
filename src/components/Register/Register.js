import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const {userRegister, signInGoogle, signInGithub, emailVerification} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState();
    // const [errorPassword, setErrorPassword] = useState('');

    // user account create
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL)

         // password validation
         
        // if (!/[a-z]/.test(password)) {
        //     setErrorPassword("Your password must contain at least one letter.");
        //     return;
        // }
        // if (!/[0-9]/.test(password)) {
        //     setErrorPassword("Your password must contain at least one digit.");
        //     return;
        // }
        // if (!/(?=.*[A-Z])/.test(password)) {
        //     setErrorPassword("Your password must contain at least one Uppercase.");
        //     return;
        // }
        // if (password.length < 8) {
        //     setErrorPassword("Your password must be at least 8 characters");
        //     return; 
        // }

        userRegister(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            handleEmailVerification();
            toast.success('Please Verify Your Email Address')
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    // Google Sign in
    const handleGoogleSignIn = () => {
        signInGoogle()
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => {
            console.error(error)
        })
    }

    // Github Sign in
    const handleGithubSignIn = () => {
        signInGithub()
        .then ( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => {
            console.error(error)
        })
    }

     // User Email Verification
     const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // Terms and condition accepted button diasabel
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }



    return (
        <div>
            <div className='mt-5 mb-5 border rounded shadow-lg p-5 w-50 mx-auto bg-light'>
                <h3>Create an Account</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Your Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photoURL' type="photoURL" placeholder="Enter Phot url" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger" controlId="formBasicPassword">
                       {error}
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger" controlId="formBasicPassword">
                       {/* {errorPassword} */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            label={<>Accept <Link to='/terms'>Terms and Condition</Link> </>} />
                    </Form.Group>

                    <Button
                        disabled={!accepted}
                        className='w-25 mx-auto'
                        variant="success"
                        type="submit">
                        Create an Account
                    </Button>

                    <p className='mt-2'>Already have an account ?
                        <Link to='/login'> Login</Link>
                    </p>
                </Form>
                <div className='w-50 mx-auto'>
                    <p>----------------------- Or ------------------------</p>
                    <Button
                        onClick={handleGoogleSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-success">
                        <FaGoogle></FaGoogle> Continue with Google
                    </Button>
                    <Button
                        onClick={handleGithubSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-success">
                        <FaGithub></FaGithub> Continue with Github
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;