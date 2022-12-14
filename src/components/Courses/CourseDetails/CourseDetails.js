import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { jsPDF } from "jspdf";

const CourseDetails = () => {
    const courseCategory = useLoaderData();

    const pdfGenerate = () => {
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [4, 2]
        });

        doc.text('React PDF Install e Error', 1, 1);
        doc.save("course.pdf");

    }

    return (
        <div>
            <Card id='pdf' className=" container mt-5 mb-5">
                <div className='d-flex justify-content-around align-items-center mt-3'>
                    <div>
                        <Card.Header><h2>{courseCategory[0].name}</h2></Card.Header>
                    </div>
                    <div>
                        <Button onClick={pdfGenerate} variant="success">Download</Button>
                    </div>
                </div>
                <Card.Body className='mt-3 mb-3'>
                    <Card.Title className='mb-3 fs-3'>{courseCategory[0].title}</Card.Title>
                    <Card.Img variant="top" style={{ height: '400px' }} src={courseCategory[0].image_url} />
                    <Card.Text className='mt-4 fs-5'>
                        {courseCategory[0].details}
                    </Card.Text>
                    <div className='d-flex justify-content-around align-items-center mt-3'>
                        <div>
                            <Card.Text><h4>Course Duration: {courseCategory[0].duration}</h4></Card.Text>
                        </div>
                        <div>
                            <Link to={`/checkout/${courseCategory[0].id}`}>
                                <Button variant="success">Get premium access</Button>
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;