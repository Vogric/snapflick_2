export type MovieOrTVShow = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title?: string;
  name?: string;
  origin_country?: Array<string>;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};
