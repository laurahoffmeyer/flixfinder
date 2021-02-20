export interface Movie {
    title: string,
    id: number,
    overview: string,
    release_date: string,
    vote_average: number,
    genre_ids: number[],
    backdrop_path: string,
    poster_path: string,
    watchlist: boolean
}