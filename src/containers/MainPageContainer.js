import React from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import { requestMovies } from '../actions';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextValue) {
    this.props.history.push(`/${nextValue}`);
  }

  render() {
    const { fetchData, genresById, ...rest } = this.props;
    return (
      <MainPage
        changePathOnSearch={this.handleChange}
        fetchData={fetchData}
        genresById={genresById}
        {...rest}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    genresById: state.moviesInfo.genresById,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: (...arg) => dispatch(requestMovies(...arg)),
});

MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);

export default MainPageContainer;
