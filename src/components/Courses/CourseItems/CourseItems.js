import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseItems = ({ course }) => {
    const { name, image_url, course_id } = course;
    return (
        <div>
            <Card className="text-center mb-5">
                <Card.Header><h6>{name}</h6></Card.Header>
                <Card.Body>
                    <Card.Img variant="top" style={{ height: '200px' }} src={image_url} />
                    <Button className='mt-3' variant="primary">
                        <Link to={`/courseDetails/${course_id.id}`}>Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseItems;