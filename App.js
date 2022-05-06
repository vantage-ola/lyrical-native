import { StyleSheet, View, Text } from 'react-native';
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
      <Grid header={searchTerm}></Grid>
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