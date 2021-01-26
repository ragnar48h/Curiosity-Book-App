import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
var RNFS = require('react-native-fs');
let keys = [];
let data = [];
export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mount: false,
    };
    this.mountIssue();
    this.getDataFromKeys();
  }
  componentDidMount() {
    if (this.state.mount) {
      this.didFocusListener = this.props.navigation.addListener(
        'didFocus',
        async () => {
          data = [];
          await this.setState({data: []});
          await this.getDataFromKeys();
          console.log('did focus');
        },
      );
    }
  }
  componentWillUnmount() {
    if (this.state.mount) {
      this.didFocusListener.remove();
    }
  }
  mountIssue = async () => {
    this.setState({mount: true});
  };
  getDataFromKeys = async () => {
    await this.getAllKeys();
    data = [];
    await this.setState({data: []});
    for (let index = 0; index < keys.length; index++) {
      let filepath =
        `${RNFS.DocumentDirectoryPath}/Unread_Books/` + keys[index] + `.txt`;
      console.log(await this.notesExists(filepath));
      if (await this.notesExists(filepath)) {
        data.push(await this.getData(keys[index]));
      }
    }
    await this.setState({data: data});
    console.log('DATA: ' + JSON.stringify(data));
  };
  getAllKeys = async () => {
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
  };
  notesExists = async filepath => {
    let returnVariable = null;
    await RNFS.exists(filepath)
      .then(res => {
        returnVariable = res;
      })
      .catch(err => {
        console.log(err);
      });
    return returnVariable;
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

  render() {
    return (
      <View
        onStartShouldSetResponderCapture={() => {
          this.setState({enableScrollViewScroll: true});
        }}
        style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Image
            resizeMode="stretch"
            source={require('../../Assets/homeScreenGreenCircle.png')}
            style={{
              height: 486,
              width: 486,
              zIndex: -2,
              marginLeft: -45,
              marginTop: -274,
            }}
          />
          <View style={{marginTop: -210}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 15,
              }}>
              <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
                Notes
              </Text>
              <FontAwesome5 name="bars" size={25} color="white" />
            </View>
          </View>
          <View>
            {0 ? (
              <View />
            ) : (
              <View
                style={{marginTop: 20, marginBottom: 20, alignSelf: 'center'}}>
                <Image
                  source={require('../../Assets/openingScreenNil.png')}
                  style={{height: 190, width: 200, alignSelf: 'center'}}
                  resizeMode="stretch"
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 22, color: '#5abd8c'}}>
                  Add Notes or Highlights ...
                </Text>
              </View>
            )}
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              My Notes and Highlights
            </Text>
            <View
              style={{
                flex: 1,
                marginHorizontal: 30,
              }}>
              <FlatList
                data={this.state.data}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 20,
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      colors={['#5abd8c', '#00ff81']}
                      style={{
                        height: 170,
                        width: 8,
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    />
                    <TouchableOpacity
                      style={{width: 120}}
                      onPress={() => {
                        this.props.navigation.navigate('IndividualNotes', {
                          id: item.uid,
                        });
                      }}>
                      <Image
                        source={{uri: `${item.imageLocation}`}}
                        style={{width: 120, height: 170, borderRadius: 15}}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'bold',
                          marginTop: 5,
                        }}>
                        {console.log('flat' + item.bookname)}
                        {item.bookname}
                      </Text>
                      <Text style={{fontSize: 10, opacity: 0.5, marginTop: 3}}>
                        by {item.author}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
