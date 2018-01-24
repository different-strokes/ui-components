import React, { Component } from 'react';
import PropTypes from 'prop-types';

class {{ componentName }} extends Component {
  render() {
    return (
      <div>
        <p>This is {{ componentName }}</p>
      </div>
    );
  }
}

{{ componentName }}.propTypes = {};

{{ componentName }}.defaultProps = {};

export default {{ componentName }};