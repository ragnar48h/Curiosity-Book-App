import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class individualBookPage extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../Assets/individualBookPage.png')}
          style={{width: '100%', height: 280}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15,
            }}>
            <TouchableOpacity>
              <FontAwesome5 name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="bars" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{marginTop: -100}}>
          <Image
            source={require('../../Assets/bookTemplate.png')}
            style={{width: 150, height: 220, alignSelf: 'center'}}
          />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', opacity: 0.6}}>
              The Heart Of Hell
            </Text>
            <Text style={{opacity: 0.3}}>Mitch Weiss - English</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              opacity: 0.5,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>234</Text>
              <Text style={{fontSize: 10}}>Pages</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>72 KB</Text>
              <Text style={{fontSize: 10}}>Size</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>PDF</Text>
              <Text style={{fontSize: 10}}>Extension</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#5abd8c',
              height: 50,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Read Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'transparent',
              height: 50,
              borderRadius: 20,
              borderColor: '#5abd8c',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
              Add to Read Books
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'transparent',
              height: 50,
              borderRadius: 20,
              borderColor: '#5abd8c',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
              Remove Book
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
