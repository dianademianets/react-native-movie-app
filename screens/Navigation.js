import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from 'expo-blur';

import {MoviesScreen} from './Movies';
import {HomeScreen} from './Home';
import {FullMoviesScreen} from './FullMovies';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MoviesStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} options={{
                title: 'Home', headerStyle: {
                    backgroundColor: '#040C18',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>

            <HomeStack.Screen name='Movies' component={MoviesScreen} options={{
                title: 'Movies', headerStyle: {
                    backgroundColor: '#040C18',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>

            <HomeStack.Screen name='FullMovies' component={FullMoviesScreen} options={{
                title: 'Details', headerStyle: {
                    backgroundColor: '#040C18',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
        </HomeStack.Navigator>
    );
}

function MoviesStackScreen() {
    return (
        <MoviesStack.Navigator>
            <MoviesStack.Screen name='Movies' component={MoviesScreen} options={{
                title: 'Movies', headerStyle: {
                    backgroundColor: '#040C18',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <MoviesStack.Screen name='Home' component={HomeScreen} options={{
                title: 'Home', headerStyle: {
                    backgroundColor: '#040C18',
                }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <MoviesStack.Screen name='FullMovies' component={FullMoviesScreen}
                                options={{
                                    title: 'Details', headerStyle: {
                                        backgroundColor: '#040C18',
                                    }, headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}/>
        </MoviesStack.Navigator>
    );
}

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator  barStyle={{backgroundColor: '#040C18'}}  screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Movies') {
                        iconName = focused ? 'film' : 'film-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'blue',
            })}
            >
                <Tab.Screen name='Home' component={HomeStackScreen} options={{
                    headerShown: false
                }}/>
                <Tab.Screen name='Movies' component={MoviesStackScreen} options={{
                    headerShown: false
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
