import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {user} = useContext(AuthContext)
    const checkout = useLoaderData();
    
    return (
        <div className='container text-center mt-5 mb-5 border rounded shadow-lg p-5 mx-auto bg-light'>
            <h1 className='text-danger'>Congratulations !!!</h1>
            <h3>{user.displayName}</h3>
            <h3>Your Premium Course Package: {checkout.name}</h3>
            <h3>Enrollment Successfully</h3>
        </div>
    );
};

export default Checkout;