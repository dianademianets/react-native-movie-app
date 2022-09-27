import React from 'react';
import {ActivityIndicator, Alert, RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import {moviesService} from '../services/movies.service';
import {Movie} from '../components/Movie';

const HomeContainer = styled.View`
  background: black;
`;

const HomeView = styled.View`
  margin: 20px 0 30px 10px;
`;

const HomeTitle = styled.Text`
  margin: 10px;
  text-align: center;
  color: snow;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export const  HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [moviesPopular, setMoviesPopular] = React.useState([]);
    const [moviesRated, setMoviesRated] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const fetchPopularMovie = () => {
        setIsLoading(true);
        moviesService.getPopularMovie().then(({data}) => {
            setMoviesPopular(data.results);
        })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', `error`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const fetchRatedMovie = () => {
        setIsLoading(true);
        moviesService.getRatedMovie().then(({data}) => {
            setMoviesRated(data.results);
        })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', `error`);
            })
            .finally(() => {
                setIsLoading(false);
            });

    };
    React.useEffect(fetchPopularMovie, []);
    React.useEffect(fetchRatedMovie, []);


    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size='large'/>
                <Text style={{marginTop: 15}}>Loading...</Text>
            </View>
        );
    }

    return (
        <HomeContainer>
            <HomeView>
                <HomeTitle>What's Popular Movies</HomeTitle>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }>
                    {
                        moviesPopular.map((item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullMovies', {id: item.id})}>
                                <Movie key={item.id} item={item}/>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
                <HomeTitle>What's Rated Movies</HomeTitle>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }>

                    {
                        moviesRated.map((item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullMovies', {id: item.id})}>
                                <Movie key={item.id} item={item}/>
                            </TouchableOpacity>
                        ))}
                </ScrollView>

            </HomeView>
        </HomeContainer>
    );
};

