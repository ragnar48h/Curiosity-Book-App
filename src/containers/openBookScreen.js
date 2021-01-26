import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
var RNFS = require('react-native-fs');
export default class openBookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.navigation.getParam('id', 'NO'),
      data: [],
      inFinishedBooks: false,
    };
    this.setData();
    this.isFinishedFunction();
  }
  toggleFinishedUnfinishedBooks = async () => {
    let key = 'FINISHED' + this.state.key;
    let data = true;
    if ((await this.getData(key)) === null) {
      this.storeData(data, key);
      await this.setState({inFinishedBooks: false});
    } else {
      await AsyncStorage.removeItem(key).catch(err => {
        console.log(err);
      });
      await this.setState({inFinishedBooks: true});
    }
  };
  isFinishedFunction = async () => {
    let key = 'FINISHED' + this.state.key;
    if ((await this.getData(key)) === null) {
      await this.setState({inFinishedBooks: false});
    } else {
      await this.setState({inFinishedBooks: true});
    }
    // await AsyncStorage.removeItem(key);
  };
  setData = async () => {
    this.setState({data: await this.getData(this.state.key)});
  };
  storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue, err => {
        if (err) {
          console.log('two an error');
          throw err;
        }
        console.log('two success');
      });
    } catch (e) {
      console.log(e);
    }
  };
  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key, (err, result) => {
        if (err) {
          console.log('three an error');
          throw err;
        }
      });
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };
  deleteFiles = async () => {
    let filepath =
      `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
      `${this.state.data.uid}` +
      `.pdf`;
    await RNFS.exists(filepath).then(result => {
      console.log('file exists: ', result);
      if (result) {
        return (
          RNFS.unlink(filepath)
            .then(() => {
              console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch(err => {
              console.log(err.message);
            })
        );
      }
    });
    filepath =
      `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
      `${this.state.data.uid}` +
      `.jpg`;
    await RNFS.exists(filepath).then(result => {
      console.log('file exists: ', result);
      if (result) {
        return (
          RNFS.unlink(filepath)
            .then(() => {
              console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch(err => {
              console.log(err.message);
            })
        );
      }
    });
    try {
      await AsyncStorage.removeItem(this.state.data.uid, err => {
        if (err) {
          console.log(err);
        } else console.log('File Removed');
      });
    } catch (exception) {
      return false;
    }
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={{flex: 1}}>
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
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="bars" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{marginTop: -100}}>
            <Image
              source={{uri: this.state.data.imageLocation}}
              style={{
                width: 150,
                height: 220,
                alignSelf: 'center',
                borderRadius: 20,
              }}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  opacity: 0.6,
                  width: '60%',
                  textAlign: 'center',
                }}>
                {this.state.data.bookname}
              </Text>
              <Text style={{opacity: 0.3, width: '60%', textAlign: 'center'}}>
                {this.state.data.author} - {this.state.data.language}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                opacity: 0.5,
                marginTop: 10,
                marginBottom: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  {this.state.data.pages}
                </Text>
                <Text style={{fontSize: 10}}>Pages</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  {this.state.data.size}
                </Text>
                <Text style={{fontSize: 10}}>Size</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  {this.state.data.extension}
                </Text>
                <Text style={{fontSize: 10}}>Extension</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Pdf', {
                    pdfLink: this.state.data.pdfLocation,
                    uid: this.state.key,
                  });
                  console.log(this.state.data.pdfLocation);
                }}>
                <View
                  style={{
                    width: '90%',
                    backgroundColor: '#5abd8c',
                    paddingVertical: 15,
                    borderRadius: 25,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Read Now
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleFinishedUnfinishedBooks}>
                <View
                  style={{
                    width: '90%',
                    borderColor: '#5abd8c',
                    borderWidth: 2,
                    paddingVertical: 13,
                    borderRadius: 25,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 20,
                  }}>
                  {this.state.inFinishedBooks ? (
                    <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
                      Mark as Unfinished
                    </Text>
                  ) : (
                    <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
                      Mark as Finished
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.deleteFiles}>
                <View
                  style={{
                    width: '90%',
                    borderColor: '#5abd8c',
                    borderWidth: 2,
                    paddingVertical: 13,
                    borderRadius: 25,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
                    Remove Book
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <ImageBackground
          source={require('../../Assets/bottomTab.png')}
          style={{width: '100%', paddingVertical: 30}}
          resizeMode="stretch">
          <TouchableOpacity>
            <View
              style={{
                width: '70%',
                marginBottom: -10,
                backgroundColor: '#5abd8c',
                paddingVertical: 10,
                borderRadius: 20,
                alignItems: 'center',
                alignSelf: 'center',
                elevation: 5,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Open Notes
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
