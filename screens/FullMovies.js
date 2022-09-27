import React from 'react';
import {ActivityIndicator, Alert, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import YoutubePlayer from 'react-native-youtube-iframe';

import {moviesService} from '../services/movies.service';

const MovieView = styled.View`
  background: black;
`;

const ImageView = styled.View`
  justify-content: center;
  align-items: center;
`;

const MovieImage = styled.Image`
  margin: 2% 5%;
  width: 200px;
  height: 300px;
  border-radius: 12px;
`;

const MovieTitle = styled.Text`
  text-align: center;
  color: snow;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
`;


const MovieText = styled.Text`
  color: snow;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 15px;
`;


export const FullMoviesScreen = ({route}) => {

    const {id} = route.params;
    const [isLoading, setIsLoading] = React.useState(true);
    const [movies, setMovie] = React.useState([]);
    const [trailers, setTrailers] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(true);
        moviesService.getById(id).then(({data}) => {
            setMovie(data);
        }).catch((err) => {
            console.log(err);
            Alert.alert('Error', `error`);
        })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    React.useEffect(() => {
        setIsLoading(true);
        moviesService.getVideo(id).then(({data}) => {
            setTrailers(data.results);
        }).catch((err) => {
            console.log(err);
            Alert.alert('Error', `error`);
        })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size='large'/>
                <Text style={{marginTop: 15, color:"snow"}}>Loading...</Text>
            </View>
        );
    }


    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
            <MovieView style={{padding: 20}}>
                <MovieTitle>{movies.original_title}</MovieTitle>
                <View>
                    <ImageView>
                        <MovieImage source={{uri: `https://image.tmdb.org/t/p/w200${movies.poster_path}`}}/>
                    </ImageView>
                    <View>
                        <MovieText>Movie rating: {movies.vote_average}</MovieText>
                        <MovieText>Popularity:{movies.popularity}</MovieText>
                        <MovieText>Budget:{movies.budget}</MovieText>
                        <MovieText>Overview: {movies.overview}</MovieText>
                        <MovieText>Release date: {movies.release_date}</MovieText>
                        <MovieText>Original language: {movies.original_language}</MovieText>
                    </View>
                </View>
                <View>
                    {trailers && trailers.length && <YoutubePlayer height={300} play={true} videoId={trailers[0].key}/>}
                </View>
            </MovieView>
        </ScrollView>
    );
};
