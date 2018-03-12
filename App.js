//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

//export default class App extends React.Component {
//  render() {
  //  return (
  //    <View style={styles.container}>
//        <Text>Open up App.js to start working on your app!</Text>
//        <Text>Changes you make will automatically reload.</Text>
//        <Text>Shake your phone to open the developer menu.</Text>
//      </View>
//    );
//  }
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: 'yellow',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      tinggi:0,
      lebar:0,
      volume:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#B9F6CA'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#F8BBD0'}}>
            <TextInput style = {{height: 30}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 30}}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 30}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Proses"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#EEEEEE'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.panjang} {"\n"}
              Lebar =  {this.state.lebar} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
