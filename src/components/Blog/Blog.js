import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mb-5 border rounded shadow-lg p-5 mx-auto bg-light'>
            <div>
                <h2>What is CORS ?</h2>
                <p className='fs-4'>
                    CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by by passing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                </p>
                <p className='fs-4'>
                    In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                </p>
                <p className='fs-4'>
                    Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.
                </p>
            </div>
            <hr></hr>
            <div>
                <h2>Why are you using firebase?</h2>
                <p className='fs-4'>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
            </div>
            <div>
                <h2>What other options do you have to implement authentication?</h2>
                <p className='fs-4'>
                    Authentication methods include something users know, something users have and something users are. Not every authentication type is created equal to protect the network, however; these authentication methods range from offering basic protection to stronger security.
                </p>
                <h4>Password-based authentication:</h4>
                <p className='fs-4'>
                    Password-based authentication is the easiest authentication type for adversaries to abuse. People often reuse passwords and create guessable passwords with dictionary words and publicly available personal info.
                </p>
                <h4>Two-factor/multifactor authentication:</h4>
                <p className='fs-4'>
                    Two-factor authentication (2FA) requires users provide at least one additional authentication factor beyond a password. MFA requires two or more factors.
                </p>
                <h4>Biometric authentication:</h4>
                <p className='fs-4'>
                    Biometrics uses something the user is. It relies less on an easily stolen secret to verify users own an account. Biometric identifiers are unique, making it more difficult to hack accounts using them.
                </p>
                <h4>Single sign-on:</h4>
                <p className='fs-4'>
                    Single sign-on (SSO) enables an employee to use a single set of credentials to access multiple applications or websites. The user has an account with an identity provider (IdP) that is a trusted source for the application (service provider). The service provider doesn't save the password.
                </p>
                <h4> Token-based authentication:</h4>
                <p className='fs-4'>
                    Token authentication enables users to log in to accounts using a physical device, such as a smartphone, security key or smart card. It can be used as part of MFA or to provide a passwordless experience. With token-based authentication, users verify credentials once for a predetermined time period to reduce constant logins.
                </p>
            </div>
            <hr></hr>
            <div>
                <h2>How does the private route work in react?</h2>
                <p className='fs-4'>
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
                <p className='fs-4'>
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </p>
            </div>
            <hr></hr>
            <div>
                <h2>What is Node?</h2>
                <p className='fs-4'>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                </p>
                <h2>How does Node work?</h2>
                <p className='fs-4'>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
                <p className='fs-4'>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </p>

            </div>
        </div>
    );
};

export default Blog;