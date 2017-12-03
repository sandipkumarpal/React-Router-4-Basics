import React from 'react';

import Course from './Course';

function CourseContainer(props) {
  const courses = props.data.map(course => (<Course
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
}

export default CourseContainer;
