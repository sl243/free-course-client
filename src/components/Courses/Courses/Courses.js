import React, { useEffect, useState } from 'react';
import './Courses.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className='container mt-5'>
                <div className='course-body row mb-5'>
                    <div className='course-body-title col-3 mt-5 border rounded shadow-lg bg-light'>
                        <h3 className='text-center mb-3 mt-5'>Course Categories</h3>
                        {
                            categories.map(category => <p key={category.id}>
                                <Link to={`/courseDetails/${category.id}`} >
                                    <Button className='category-button fs-6 w-100' variant="outline-success">{category.name}</Button>
                                </Link>
                            </p>)
                        }
                    </div>
                    <div className='col-9 course-container'>
                        {
                            categories.map(card => <Card className="text-center container mt-5">
                                <Card.Header className='mt-3'>
                                    <h4>
                                        {card.name}
                                    </h4>
                                </Card.Header>
                                <Card.Body>
                                <Card.Img variant="top" style={{ height: '100px' }} src={card.image_url} />
                                    <Card.Text>
                                        <Link to={`/courseDetails/${card.id}`} >
                                            <Button className='fs-6 mt-3' variant="success">Details</Button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;