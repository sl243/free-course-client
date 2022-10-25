import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CourseCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3>Course Category: {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courseDetails/${category.id}`} >
                            <Button className='fs-6' variant="outline-success">{category.name}</Button>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;