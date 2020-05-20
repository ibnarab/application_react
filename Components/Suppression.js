import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Suppression extends React.Component {

  render(){
    return(
      <View style={{ marginTop:20 }}>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression premiere reunion'
          onPress={this.deleteRow.bind(this, id)}/>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression deuxieme reunion'
          onPress={this.deleteRow.bind(this, id)}/>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression troisieme reunion'
          onPress={this.deleteRow.bind(this, id)}/>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression quatrieme reunion'
          onPress={this.deleteRow.bind(this, id)}/>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression cinquieme reunion'
          onPress={this.deleteRow.bind(this, id)}/>
          <Button style={[styles.textinput,{ marginLeft:10}]}
          title='Suppression sixieme reunion'
          onPress={this.deleteRow.bind(this, id)}/>
      </View>

    )
  }

}

const styles = {
  textinput: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
}

export default Suppression
