import styled from 'styled-components/native';

const WrapperView = styled.View`
  margin-bottom: 15px;
  background: #040C18;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

`;
const ContainerImage = styled.View`
  padding: 10px;
`;

const MovieImage = styled.Image`
  width: 100px;
  height: 130px;
  border-radius: 12px;
`;

const MovieTitle = styled.Text`
  font-size: 12px;
  color: snow;
  font-weight: bold;
`;

const MovieDetails = styled.View`
  display: flex;
  justify-content: center;
`;


const truncateTitle = (str) => {
    if (str.length >= 8) {
        return str.substring(0, 8) + '...';
    }

    return str;
};


export const Movie = ({item}) => {

    return (
        <WrapperView>
            <ContainerImage>
                <MovieImage source={{uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`}}/>
            </ContainerImage>
            <MovieDetails>
                <MovieTitle>{truncateTitle(item.original_title)}</MovieTitle>
            </MovieDetails>
        </WrapperView>
    );
};
