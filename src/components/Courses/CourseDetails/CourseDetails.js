import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseCategory = useLoaderData();
    console.log(courseCategory)
    return (
        <div>
            <h3>Course Details {courseCategory.length}</h3>
            <h3>{courseCategory[0].title}</h3>
            <h3>{courseCategory[0].name}</h3>
            <h3>{courseCategory[0].duration}</h3>
        </div>
    );
};

export default CourseDetails;