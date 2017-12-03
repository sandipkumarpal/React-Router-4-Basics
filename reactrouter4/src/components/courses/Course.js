import React from 'react';
import PropTypes from 'prop-types';

const Course = props => (
    <li className="course media group">
        <img className="course-img" src={props.img} alt="course" />
        <div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </li>
);

Course.defualtProps = {
  img: '',
  title: '',
  desc: '',
};

Course.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Course;
