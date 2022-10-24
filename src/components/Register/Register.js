import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
                <h3>Create an Account</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Your Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control name='phone' type="text" placeholder="Enter Your Contact Number" required />
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

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label={<>Accept <Link to='/terms'>Terms and Condition</Link> </>} />
                    </Form.Group>

                    <Button
                        className='w-25 mx-auto'
                        variant="primary"
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
                        // onClick={handleGoogleSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-primary">
                        <FaGoogle></FaGoogle> Continue with Google
                    </Button>
                    <Button
                        // onClick={handleGithubSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-primary">
                        <FaGithub></FaGithub> Continue with Github
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;