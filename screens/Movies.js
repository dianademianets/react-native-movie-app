import React from 'react';
import {
    Alert,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity, Button, ScrollView, TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Movie} from '../components/Movie';
import {moviesService} from '../services/movies.service';

const InputView = styled.View`
  border: 1px solid white;
  border-radius: 10px;
  background: #040C18;
  margin: 10px 20px;
  padding: 10px 20px;
  flex-direction: row;
  column-gap: 10px;
`;

const MoviesView = styled.View`
  background: black;
  padding: 10px 20px 30px;
`;

const MoviesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
`;


export const MoviesScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [movies, setMovies] = React.useState([]);
    const [text, setText] = React.useState('');

    const fetchPosts = () => {
        setIsLoading(true);
        moviesService.getAllPage(pageNumber).then(({data}) => {
            setMovies(data.results);
        })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', `error`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    React.useEffect(fetchPosts, [pageNumber]);

    const fetchMovie = () => {
        setIsLoading(true);
        moviesService.getSearchResponse(text, pageNumber).then(({data}) => {
            setMovies(data.results);
            console.log(data.results)
        })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', `error`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    React.useEffect(fetchMovie, [text, pageNumber]);

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

    const handlePrevious = () => {
        pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
    };

    const handleNext = () => {
        pageNumber >= 32241 ? setPageNumber(32241) : setPageNumber(pageNumber + 1);
    };

    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
            <MoviesView>
                <InputView>
                    <View style={{width: '10%'}}>
                        <Ionicons name={'search'} size={20} color={'snow'}/>
                    </View>
                    <TextInput
                        placeholder={'Search...'}
                        onSubmitEditing={(value) => setText(value.nativeEvent.text)}
                        style={{color: 'snow', width: '88%'}}/>
                </InputView>

                <View>

                    <MoviesContainer>
                        {
                            movies.map((item) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('FullMovies', {id: item.id})}>
                                    <Movie key={item.id} item={item}/>
                                </TouchableOpacity>
                            ))}
                    </MoviesContainer>

                    <ButtonView>
                        <Button
                            title='previous'
                            onPress={() =>
                                handlePrevious(pageNumber)
                            }
                        />
                        <Button
                            title='next'
                            onPress={() =>
                                handleNext(pageNumber)
                            }
                        />
                    </ButtonView>
                </View>
            </MoviesView>
        </ScrollView>

    );
};
