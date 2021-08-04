
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from 'react-native';

const DetailsScreen = ( { route, navigation } ) => {
  const { email, password, hasil, bilPertama, bilKedua } = route.params
  // if (hasill %==0){
  //   (+hasil, 'Bilangan Ganjil')
  // }else{
  //   ('Bilangan Genap')
  // }
  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <Text>Halloo</Text>
      <Text>{ email }</Text>
      <Text>{ bilPertama }</Text>
      <Text>{ bilKedua }</Text>
      <Text>{ hasil }</Text>
      <Text>{ hasil % 2 === 0 ? 'Adalah Bilangan Genap' : 'Adalah Bilangan Ganjil' }</Text>
      <View style={ styles.line }></View>
      <Button
        title="Back to Kalkulator"
        onPress={ () => navigation.navigate( 'Kalkulator' ) }
      />
      <Button
        title="Back to Home Screen"
        onPress={ () => navigation.navigate( 'Home' ) }
      />
    </View>
  );
}

const styles = StyleSheet.create( {
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  inputText: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18
  },
  line: {
    height: 2,
    backgroundColor: "white",
    marginVertical: 20
  }

} )


export default DetailsScreen;