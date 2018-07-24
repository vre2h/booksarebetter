import React from 'react';
import MoviesContainer from '../../containers/MoviesContainer';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <MoviesContainer />;
  }
}

export default MainPage;
