import React from 'react';
import PropTypes from 'prop-types';

import './search-box.styles.css';

// export default class SearchBox extends Component {
//   render() {
//     const { placeholder, handleChange } = this.props;
//     return (
//       <input
//         className="search"
//         type="search"
//         placeholder={placeholder}
//         onChange={handleChange}
//       />
//     );
//   }
// }

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};
