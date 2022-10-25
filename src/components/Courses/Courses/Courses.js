import React from 'react';
import {useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import CourseItems from '../CourseItems/CourseItems';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-4'>
                        <CourseCategory></CourseCategory>
                    </div>
                    <div className='col-8'>
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