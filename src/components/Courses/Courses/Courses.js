import React from 'react';
import './Courses.css'
import {useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import CourseItems from '../CourseItems/CourseItems';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-3'>
                        <CourseCategory></CourseCategory>
                    </div>
                    <div className='col-9 course-container'>
                        {
                            courses.map(course => <CourseItems
                                key={course.id}
                                course={course}
                            ></CourseItems>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;