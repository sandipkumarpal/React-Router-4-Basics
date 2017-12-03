import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ match }) => {
  const { name } = match.params;
  const { topic } = match.params;
  return (
      <div className="main-content">
          <h2>Featured: {name}</h2>
          <p>Introducing <strong>{name}</strong>, a teacher who loves teaching
          courses about <strong>{topic}</strong> !
          </p>
      </div>
  );
};

Featured.defualtProps = {
  match: {},
};

Featured.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Featured;
