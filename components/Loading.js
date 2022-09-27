import {Text, ActivityIndicator} from 'react-native';

const LoadingView = styled.View`
  background: black;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
    return (
        <LoadingView>
            <ActivityIndicator size='large'/>
            <Text style={{marginTop: 15}}>Loading...</Text>
        </LoadingView>
    );
};
