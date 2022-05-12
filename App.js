import { StyleSheet, View, Text, Image } from 'react-native';
//import StartScreen from './components/StartScreen'; 
import SearchBar from './components/SearchBar';
import Thumb from './components/Thumb';
import Grid from './components/Grid';

import { useLyricFetch } from './hooks/useLyricFetch';

export default function App() {

  const {state, loading, searchTerm, setSearchTerm, error} = useLyricFetch();
  console.log(state)
  
  return (
    <View style={styles.default}>
      <SearchBar  setSearchTerm={setSearchTerm}/>
      {state.search ? (
        <Grid header={searchTerm}>
        {state.search.map(result => (
          <View key={result.result.id}>

            <Image style={{width: 400, height: 300 }}source={{ uri: `${result.result.header_image_url}` }}/>
            <Text>{result.result.title} </Text>
            
          </View>

      ))}
      </Grid>
      ): null}

    </View>
  );
}
;

const styles = StyleSheet.create({
  default:  {
    flex: 1,    
    backgroundColor: 'rgb(19, 19, 19)',
    fontFamily: 'Lato'
    
  }

});