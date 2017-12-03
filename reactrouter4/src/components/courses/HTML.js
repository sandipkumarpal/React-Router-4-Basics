import React from 'react';
import Course from './Course';
import { HTMLCourses } from '../../data/courses';

const HTML = () => {
  const courses = HTMLCourses.map(course => (<Course
    title={course.title}
    desc={course.description}
    img={course.img_src}
    key={course.id}
  />));
  return (
      <div>
          <ul>
              {courses}
          </ul>
      </div>
  );
};

export default HTML;
