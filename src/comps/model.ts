export type MovieOrTVShow = {
  adult?: boolean;
  backdrop_path: string;
  first_air_date?: string;
  genre_ids: Array<number>;
  id: number;
  name?: string;
  origin_country?: Array<string>;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};
