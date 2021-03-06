import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      medium_cover_image
      id
      title
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      language
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;