import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { logOut, requestMovies, updSearchField } from '../actions';

class NavBarContainer extends React.Component {
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
  }
)(NavBarContainer);

export default NavBarContainer;
