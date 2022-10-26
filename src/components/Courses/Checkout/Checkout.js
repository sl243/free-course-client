import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();
    console.log(checkout)
    return (
        <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto bg-light'>
            <h2>Welcome to Access premium package</h2>
            <h3>Course Enrollment Successful</h3>
        </div>
    );
};

export default Checkout;