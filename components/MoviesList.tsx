import {FC} from 'react';
import {FlatList, Text, View, Image, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {Movie} from '../types/Movie';

interface ListProps {
    style?: StyleProp<ViewStyle>;
    movies: Movie[];
}

interface ItemProps {
    title: string;
    poster: string;
    episodeNumber: number;
}

const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#64748b',
        marginVertical: 30,
        overflow: 'hidden',
    },
    poster: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
    },
    descriptionContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

const Item: FC<ItemProps> = ({title, poster, episodeNumber}) => {
    return (
        <View style={itemStyles.container}>
            <Image source={{uri: `https://raw.githubusercontent.com/Package/Star-Wars-Express/master/public/images/${poster}`}} style={itemStyles.poster} />

            <View style={itemStyles.descriptionContainer}>
                <Text style={itemStyles.title}>{title}</Text>

                <Text>Episode: {episodeNumber}</Text>
            </View>
        </View>
    );
};

const MoviesList: FC<ListProps> = ({movies, style}) => {
    return (
        <View style={style}>
            <FlatList data={movies} renderItem={({item}) => <Item title={item.title} poster={item.poster} episodeNumber={item.episode_number} />} keyExtractor={(item) => item.title} />
        </View>
    );
};

export default MoviesList;
