import { StyleSheet, View } from 'react-native';
//import StartScreen from './components/StartScreen'; 
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.default}>
      <SearchBar />
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