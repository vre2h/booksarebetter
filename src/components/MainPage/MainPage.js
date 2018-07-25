import React from 'react';
import MoviesContainer from '../../containers/MoviesContainer';
import NavBar from '../NavBar';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <NavBar />
        <MoviesContainer />
      </div>
    );
  }
}

export default MainPage;
