import {StatusBar} from 'expo-status-bar';
import {FC, useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View, Alert} from 'react-native';
import MoviesList from './components/MoviesList';
import {Movie} from './types/Movie';
import {ResponseMovie} from './types/MoviesResponse';
import {SortOrder} from './types/SortOrder';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    list: {
        flex: 1,
    },
    footer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#cbd5e1',
        borderStyle: 'solid',
        borderTopWidth: 1,
    },
});

const App: FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [moviesOrder, setMoviesOrder] = useState<SortOrder>(SortOrder.ASC);

    const sortMovies = (moviesToSort: Movie[], order: SortOrder) => {
        return [...moviesToSort].sort((a, b) => {
            if (order === SortOrder.ASC) {
                return a.episode_number - b.episode_number;
            }

            return b.episode_number - a.episode_number;
        });
    };

    const fetchMovies = async () => {
        const response = await fetch('https://raw.githubusercontent.com/Package/Star-Wars-Express/master/movies.json');

        if (!response.ok) {
            return Alert.alert('Error', 'Movies could not have been loaded. Please try again later.');
        }

        const moviesList: {movies: ResponseMovie[]} = await response.json();

        const hydratedMovies = moviesList.movies.map((movie) => ({...movie, episode_number: parseInt(movie.episode_number, 10)}));

        return setMovies(sortMovies(hydratedMovies, SortOrder.ASC));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        setMovies(sortMovies(movies, moviesOrder));
    }, [moviesOrder]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{padding: 20, flex: 1}}>
                <Text style={styles.title}>Movie List</Text>

                <MoviesList movies={movies} style={styles.list} />
            </View>
            <View style={styles.footer}>
                <Text style={{fontSize: 20, marginRight: 5}}>Order:</Text>
                <Button title={moviesOrder === SortOrder.ASC ? 'Ascending' : 'Descending'} onPress={() => setMoviesOrder((order) => (order === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC))} />
            </View>
            <StatusBar />
        </SafeAreaView>
    );
};

export default App;
