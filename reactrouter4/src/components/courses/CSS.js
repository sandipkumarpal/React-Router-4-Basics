import React from 'react';
import Course from './Course';
import { CSSCourses } from '../../data/courses';

const CSS = () => {
  const courses = CSSCourses.map(course => (<Course
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

export default CSS;
