import React from 'react';

const Featured = ({ match }) => {
  const { fname } = match.params;
  const { lname } = match.params;
  const { topic } = match.params;
  return (
      <div className="main-content">
          <h2>Featured: {fname} {lname}</h2>
          <p>Introducing <strong>{fname} {lname}</strong>, a teacher who loves teaching
          courses about <strong>{topic}</strong> !
          </p>
      </div>
  );
};

export default Featured;
