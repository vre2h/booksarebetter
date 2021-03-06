import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesContainer from '../../containers/MoviesContainer';
import NavBarContainer from '../../containers/NavBarContainer';
import MoviesSearchContainer from '../../containers/MoviesSearchContainer';
import MoviePageContainer from '../../containers/MoviePageContainer';
import FavoritesContainer from '../../containers/FavoritesContainer';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  static propTypes = {
    changePathOnSearch: PropTypes.func.isRequired,
  };

  render() {
    const { changePathOnSearch } = this.props;

    return (
      <React.Fragment>
        <NavBarContainer changePathOnSearch={changePathOnSearch} />
        <Switch>
          <Route exact path="/movies/" component={MoviesContainer} />
          <Route
            path="/movies/favorites"
            render={() => <FavoritesContainer />}
          />
          <Route
            path="/movies/search/"
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
