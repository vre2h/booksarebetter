import React from 'react';
import { Button, Glyphicon, Label } from 'react-bootstrap';
import './styles.css';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { addFav, removeFav, isFav } = this.props;
    const toggler = isFav ? removeFav : addFav;

    toggler(id);
  }

  render() {
    const { movie, isFav, id } = this.props;
    const {
      poster_path,
      adult,
      budget,
      original_language,
      original_title,
      overview,
      release_date,
      runtime,
      status,
      tagline,
      genres,
      production_companies: productionCompanies,
      production_countries: productionCountries,
    } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;

    return (
      <div className="movie-page__wrapper">
        <div className="movie-page">
          <div className="movie-page__img">
            <img src={imgUrl} alt="Sorry, we can't upload.." />
            <div className="movie-page__status">
              <h3>
                <Label bsStyle="success">
                  {status}: {release_date}
                </Label>
              </h3>
            </div>
          </div>
          <div className="movie-page__desc">
            <div className="movie-page__top">
              <h1 className="movie-page__title">{original_title}</h1>
              <Button
                className="movie-page__fav"
                onClick={this.handleClick.bind(this, id)}
              >
                {isFav ? (
                  <React.Fragment>
                    Remove Favorite
                    <Glyphicon glyph="minus" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    Add Favorite
                    <Glyphicon glyph="star" />
                  </React.Fragment>
                )}
              </Button>
            </div>
            <div className="movie-page__tags">
              <h5 className="movie-page__lang movie-page__tag">
                <Label bsStyle="primary">{original_language}</Label>
              </h5>
              <h5 className="movie-page__rate movie-page__tag">
                <Label bsStyle="danger">{adult ? '18+' : '0+'}</Label>
              </h5>
              <h5 className="movie-page__budget movie-page__tag">
                <Label bsStyle="warning">$ {budget}</Label>
              </h5>
              <h5 className="movie-page__runtime movie-page__tag">
                <Label bsStyle="info">{runtime} mins</Label>
              </h5>
            </div>
            <div className="movie-page__genres">
              {genres &&
                genres.map(({ name, id }) => (
                  <span key={id} className="movie-page__genre">
                    <Label>{name}</Label>
                  </span>
                ))}
            </div>
            <div className="movie-page__tagline">{tagline}</div>
            <p className="movie-page__overview">{overview}</p>
            {productionCompanies && (
              <div className="movie-page__companies-wrapper">
                <h4>Companies:</h4>
                <div className="movie-page__companies">
                  {productionCompanies.map(({ id, logo_path: logoPath }) => (
                    <div key={id} className="movie-page__companie">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${logoPath}`}
                        alt="Sorry!"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="movie-page__countries">
              <h4>Countries:</h4>
              {productionCountries &&
                productionCountries.map(({ name }, id) => (
                  <p key={id} className="movie-page__country">
                    - {name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
