// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={[styles.textinput, { marginBottom: 10 }]} placeholder='Titre du film'/>
        <Button style={{ height: 50 }} title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  main_container: {
    flex: 1,
    marginTop: 20
  },
})

export default Search
