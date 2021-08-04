import React from 'react'

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

const HomeScreen = ( { navigation } ) => {
  const [ email, setEmail ] = React.useState( '' )
  const [ password, setPassword ] = React.useState( '' )

  const checkEmailAndPassword = () => {
    if ( email === '' || password === '' ) {
      // Alert.alert( email === '' ? 'Email Harus Diisi' : 'Password Harus Diisi' )
      Alert.alert( `${ email === '' ? 'Email' : 'Password' } Harus Diisi` )
    } else {
      setEmail( "" ),
        setPassword( "" )
      navigation.navigate( 'Details', {
        email: email,
        password: password
      } )
    }
  }

  return (
    <SafeAreaView>
      <View>
        <View style={ styles.inputText }></View>
        <TextInput
          placeholder='Email'
          style={ styles.inputText }
          value={ email }
          onChangeText={ setEmail }
        />
        <TextInput
          placeholder='Password'
          style={ styles.inputText }
          value={ password }
          onChangeText={ setPassword }
          secureTextEntry
        />
        <Button title='Kirim Data'
          onPress={ () => checkEmailAndPassword() } />
      </View>
      <View style={ styles.line }></View>
      <Button title='Kalkulator'
        onPress={ () => navigation.navigate( 'Kalkulator' ) } />
    </SafeAreaView>
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


export default HomeScreen;