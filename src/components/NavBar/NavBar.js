import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import './styles.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value.trim();
    const { changePathOnSearch, fetchData, genresById } = this.props;

    if (value !== '') {
      // change url
      changePathOnSearch(`search/${value}`);

      // fetch movies action
      fetchData('search', undefined, e.target.value, genresById);
    } else {
      changePathOnSearch('');
      fetchData('popular', undefined, undefined, genresById);
    }
  }

  render() {
    const { logOut, search } = this.props;

    return (
      <div className="nav-bar">
        <Link to="/">
          <div className="nav-bar__title">Books are better</div>
        </Link>
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
