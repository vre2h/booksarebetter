import React from 'react';
import MoviesContainer from '../../containers/MoviesContainer';
import NavBarContainer from '../../containers/NavBarContainer';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchData('popular', 1, undefined, this.props.genresById);
  }

  render() {
    const { changePathOnSearch } = this.props;
    return (
      <React.Fragment>
        <NavBarContainer changePathOnSearch={changePathOnSearch} />
        <MoviesContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
