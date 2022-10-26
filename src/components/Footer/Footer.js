import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-light border footer navbar-fixed-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-4 mt-5'>
                        <h3>Code Map IT</h3>
                        <p><FaLocationArrow></FaLocationArrow> 31/1/C, Samsunnahar complex, floor - 5-A,<br></br> Segunbagicha, Topkhana Road, Dhaka-1000</p>
                        <p><FaEnvelope></FaEnvelope> Support: codemapit@gmail.com</p>
                        <p><FaPhoneAlt></FaPhoneAlt> (Available : 10:00am to 07:00pm)</p>
                    </div>
                    <div className='footer-link col-sm-12 col-lg-4 mt-5 text-decoration-none'>
                        <p className='text-center'><Link>Home</Link></p>
                        <p className='text-center' ><Link>About Us</Link></p>
                        <p className='text-center'><Link>Contact Us</Link></p>
                        <p className='text-center'><Link>Terms and Condition</Link></p>
                    </div>
                    <div className='col-sm-12 col-lg-4 mt-5'>
                        <h3 className='text-center'>Follow us</h3>
                        <div className='mt-5 d-flex justify-content-around' >
                            <><FaFacebook></FaFacebook></>
                            <><FaTwitterSquare></FaTwitterSquare></>
                            <><FaInstagramSquare></FaInstagramSquare></>
                            <><FaLinkedinIn></FaLinkedinIn></>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className='text-center mt-3 mb-3'>Copyright © 2022 code map IT</p>
            </div>
        </div>
    );
};

export default Footer;