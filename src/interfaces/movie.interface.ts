import { DirectoryInterface } from './directory.interface';

export interface MovieInterface {
    _id: string;
    title: string;
    imdb_score: number;
    category: string;
    year: number;
    country: string;
    director_id: string;
}

export interface MovieResponseInterface {
    _id: string;
    title: string;
    imdb_score: number;
    category: string;
    year: number;
    country: string;
    director_id?: string;
    director: DirectoryInterface;
}
