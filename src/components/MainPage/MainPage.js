import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesContainer from '../../containers/MoviesContainer';
import NavBarContainer from '../../containers/NavBarContainer';
import MoviesSearchContainer from '../../containers/MoviesSearchContainer';
import MoviePageContainer from '../../containers/MoviePageContainer';

class MainPage extends React.Component {
  render() {
    const { changePathOnSearch } = this.props;

    return (
      <React.Fragment>
        <NavBarContainer changePathOnSearch={changePathOnSearch} />
        <Switch>
          <Route exact path="/movies" component={MoviesContainer} />
          <Route
            path="/movies/search/:searcher"
            render={props => <MoviesSearchContainer {...props} />}
          />
          <Route
            path="/movies/movie/:id"
            render={props => <MoviePageContainer {...props} />}
          />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MainPage;
