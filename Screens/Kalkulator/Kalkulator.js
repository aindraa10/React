
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

const KalkulatorScreen = ( { navigation } ) => {
  const [ bilPertama, setBilaPertama ] = React.useState( 0 )
  const [ bilKedua, setBilaKedua ] = React.useState( 0 )


  const hasilTambah = () => {
    const hasil = parseInt( bilPertama ) + parseInt( bilKedua )
    navigateToDetails( hasil )
  }
  const hasilKurang = () => {
    const hasil = parseInt( bilPertama ) - parseInt( bilKedua )
    // Alert.alert( `${ hasil }` )
    navigateToDetails( hasil )
  }
  const hasilKali = () => {
    const hasil = parseInt( bilPertama ) * parseInt( bilKedua )
    // Alert.alert( `${ hasil }` )
    navigateToDetails( hasil )
  }
  const hasilBagi = () => {
    const hasil = parseInt( bilPertama ) / parseInt( bilKedua )
    // Alert.alert( `${ hasil }` )
    navigateToDetails( hasil )
  }

  const navigateToDetails = ( hasil ) => {
    if ( bilPertama === 0 || bilKedua === 0 || isNaN( hasil ) || typeof hasil === 'string' ) {

      Alert.alert( 'Isi atuh bos' )
    } else {
      navigation.navigate( 'Details', {
        hasil: hasil,
      } )
      setBilaPertama( "" );
      setBilaKedua( "" );
    }
  }


  return (
    <View>
      <View style={ styles.inputText }></View>
      <TextInput placeholder='Bilangan Pertama'
        value={ bilPertama }
        onChangeText={ setBilaPertama }
        style={ styles.inputText }
      />
      <TextInput placeholder='Bilangan Kedua'
        value={ bilKedua }
        onChangeText={ setBilaKedua }
        style={ styles.inputText }
      />
      <View style={ styles.line }></View>
      <Button title='Tambah' onPress={ hasilTambah } />
      <Button title='Kurang' onPress={ hasilKurang } />
      <Button title='Kali' onPress={ hasilKali } />
      <Button title='Bagi' onPress={ hasilBagi } />
      <View style={ styles.line }></View>
      <Button
        title="Back to Home Screen"
        onPress={ () => navigation.goBack() }
      />

    </View >
  )

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


export default KalkulatorScreen;