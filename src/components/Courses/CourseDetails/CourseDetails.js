import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const courseCategory = useLoaderData();
    console.log(courseCategory)
    return (
        <div>
            <Card className=" container mt-5 mb-5">
                <div className='d-flex justify-content-around align-items-center mt-3'>
                    <div>
                        <Card.Header><h2>{courseCategory[0].name}</h2></Card.Header>
                    </div>
                    <div>
                        <Button variant="primary">Download</Button>
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
                            <Button variant="primary">Get Enroll</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;