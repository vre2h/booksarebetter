import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import './styles.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    changePathOnSearch: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    updSearchField: PropTypes.func.isRequired,
  };

  handleChange(e) {
    const value = e.target.value.trim();
    const {
      changePathOnSearch,
      fetchData,
      genresById,
      updSearchField,
    } = this.props;

    updSearchField(e.target.value);

    const throttled = throttle(
      () => fetchData('search', undefined, e.target.value, genresById),
      300
    );

    if (value !== '') {
      // change url
      changePathOnSearch(`movies/search?key=${value}`);
      // fetch movies action
      throttled();
    } else {
      changePathOnSearch('movies');
    }
  }

  render() {
    const { logOut, search } = this.props;

    return (
      <div className="nav-bar">
        <Link to="/movies/">
          <div className="nav-bar__title">Books are better</div>
        </Link>
        <div className="nav-bar__items">
          <Link to="/movies/favorites">
            <div className="nav-bar__item">Favorites</div>
          </Link>
        </div>
        <FormControl
          bsClass="nav-bar__search"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
          value={search}
        />
        <button onClick={logOut} className="nav-bar__logout">
          Log Out
        </button>
      </div>
    );
  }
}

export default NavBar;
