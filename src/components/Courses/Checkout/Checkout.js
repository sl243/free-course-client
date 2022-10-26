import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();
    console.log(checkout)
    return (
        <div>
            <h2>Welcome to Access premium package</h2>
            <h3>Course Enrollment Successful</h3>
        </div>
    );
};

export default Checkout;