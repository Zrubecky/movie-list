import {Movie} from './Movie';

export interface ResponseMovie extends Omit<Movie, 'episode_number'> {
    episode_number: string;
}
