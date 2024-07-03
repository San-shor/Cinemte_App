export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetails {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  status: string;
  origin_country: [];
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  vote_average: number;
  runtime: number;
  popularity: number;
  genres: [{ id: string; name: string }];
}
