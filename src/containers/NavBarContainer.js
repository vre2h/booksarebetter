import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { logOut } from '../actions';
import { requestMovies } from '../actions';

class NavBarContainer extends React.Component {
  render() {
    const { changePathOnSearch, logOut, fetchData, ...rest } = this.props;
    return (
      <NavBar
        changePathOnSearch={changePathOnSearch}
        logOut={logOut}
        fetchData={fetchData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    genresById: state.moviesInfo.genresById,
  };
};

NavBarContainer = connect(
  mapStateToProps,
  {
    logOut,
    fetchData: requestMovies,
  }
)(NavBarContainer);

export default NavBarContainer;
