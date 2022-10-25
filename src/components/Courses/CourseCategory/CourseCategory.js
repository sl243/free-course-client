import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then( data => setCategories(data))
    },[])

    return (
        <div>
            <h3>Course Category: {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='fs-4' to={`/courseitems/${category.id}`} >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;