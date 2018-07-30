import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { logOut, requestMovies, updSearchField, cleanStore } from '../actions';
import PropTypes from 'prop-types';

class NavBarContainer extends React.Component {
  static propTypes = {
    genresById: PropTypes.object,
    search: PropTypes.string.isRequired,
    logOut: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    updSearchField: PropTypes.func.isRequired,
  };

  render() {
    const { changePathOnSearch, logOut, fetchData, ...rest } = this.props;

    return (
      <NavBar
        changePathOnSearch={changePathOnSearch}
        logOut={logOut}
        fetchData={fetchData}
        updSearchField={updSearchField}
        {...rest}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    genresById: state.moviesInfo.genresById,
    search: state.search,
  };
};

NavBarContainer = connect(
  mapStateToProps,
  {
    logOut,
    fetchData: requestMovies,
    updSearchField,
    cleanStore,
  }
)(NavBarContainer);

export default NavBarContainer;
