import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        width: '1000px',
        height: '1000px',
      }}
    >
            
    </div>
  );
};

Display.propTypes = {
  backgroundColor: PropTypes.string.isRewuired,
};

export default Display;
