import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
export default class Notes extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 15,
          width: 110,
        }}>
        <Image
          resizeMode="stretch"
          source={require('../../Assets/bookCoverExample.png')}
          style={{width: 110, height: 160, borderRadius: 20}}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 8,
            textAlign: 'left',
          }}>
          Learning Three.js
        </Text>
        <Text style={{fontSize: 10, opacity: 0.5, textAlign: 'left'}}>
          by Joe Dirkson
        </Text>
      </View> 
    );
  }
}
