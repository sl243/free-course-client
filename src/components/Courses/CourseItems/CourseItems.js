import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseItems = ({ course }) => {
    const {name, image_url,} = course;
    return (
        <Card className="text-center mb-5">
            <Card.Header><h3>{name}</h3></Card.Header>
            <Card.Body>
                <Card.Img variant="top" style={{height: '300px'}} src={image_url} />
                <Button className='mt-3' variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseItems;