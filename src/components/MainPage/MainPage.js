import React from 'react';
import MoviesContainer from '../../containers/MoviesContainer';
import NavBarContainer from '../../containers/NavBarContainer';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <React.Fragment>
        <NavBarContainer />
        <MoviesContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
