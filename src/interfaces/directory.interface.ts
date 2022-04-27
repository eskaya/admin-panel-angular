import { MovieInterface } from './movie.interface';

export interface DirectoryInterface {
    _id: string;
    name: string;
    surname: string;
    bio: string;
    movies: MovieInterface[];
}
