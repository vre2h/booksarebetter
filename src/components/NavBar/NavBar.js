import React from 'react';
import { FormControl } from 'react-bootstrap';
import './styles.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value.trim();
    if (value !== '') {
      // this.props.changePathOnSearch(value);
      this.props.fetchData(
        'search',
        undefined,
        e.target.value,
        this.props.genresById
      );
    } else {
      this.props.fetchData(
        'popular',
        undefined,
        undefined,
        this.props.genresById
      );
    }
  }

  render() {
    const { logOut } = this.props;
    return (
      <div className="nav-bar">
        <div className="nav-bar__title">Books are better</div>
        <FormControl
          bsClass="nav-bar__search"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <button onClick={logOut} className="nav-bar__logout">
          Log Out
        </button>
      </div>
    );
  }
}

export default NavBar;
