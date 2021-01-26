import React, {Component} from 'react';
import {Text, ScrollView, View, Image, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Notes from './Notes';
import Search from './search';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
var RNFS = require('react-native-fs');
let keys = [];
let data = [];
let dataForFinishedBooks = [];
// let realData = [];
class openingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentBooksAvailable: false,
      readBooksAvailable: false,
      unreadBooksAvailable: false,
      wishlistAvailable: false,
      realData: [],
      realDataForFinishedBooks: [],
      mount: false,
    };
    this.mountIssue();
    this.makeAppFolders();
    this.checkIfBooksAvailable();
    this.getDataFromKeys();
    // this.getAllKeys();
    // this.getData(keys[0]);
  }
  componentDidMount() {
    if (this.state.mount) {
      this.didFocusListener = this.props.navigation.addListener(
        'didFocus',
        () => {
          data = [];
          this.getDataFromKeys();
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
  makeAppFolders = async () => {
    var unreadBooksFolderAvailable = false;
    await RNFS.exists(RNFS.DocumentDirectoryPath + '/Unread_Books').then(
      result => {
        unreadBooksFolderAvailable = result;
      },
    );
    if (!unreadBooksFolderAvailable) {
      RNFS.mkdir(RNFS.DocumentDirectoryPath + '/Unread_Books')
        .then(result => {
          console.log('Made Unread Books Folder', result);
        })
        .catch(err => {
          console.warn('Unread Books Folder exists', err);
        });
    }
  };
  checkIfBooksAvailable = async () => {
    await this.getAllKeys();
    console.log('We have keys: ');
    console.log(keys);
    for (let index = 0; index < keys.length; index++) {
      let word = keys[index];
      // console.log(keys[index]);
      if (word[0] === 'R') this.setState({readBooksAvailable: true});
      else if (word[0] === 'W') this.setState({wishlistAvailable: true});
      else if (word[0] === 'U') this.setState({unreadBooksAvailable: true});
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
  getAllKeys = async () => {
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
  };
  getDataFromKeys = async () => {
    await this.getAllKeys();
    for (let index = 0; index < keys.length; index++) {
      let word = keys[index];
      console.log(word[0]);
      if (word[0] === 'U') {
        data.push(await this.getData(keys[index]));
      }
      // if (word[0] === 'R') {
      // dataForFinishedBooks.push(await this.getData(keys[index]));
      // console.log(dataForFinishedBooks);
      // } // await this.setState({
      //   realData: data[index],
      // });
    }
    // await this.setState({realDataForFinishedBooks: dataForFinishedBooks});
    // console.log(this.state.realDataForFinishedBooks.imageLocation);
    console.log('DATA: ' + JSON.stringify(data));
    // console.log('yo ' + JSON.stringify(this.state.realData));
    //
    // var path = RNFS.DocumentDirectoryPath + '/test.txt';

    // write the file
    // RNFS.writeFile(
    //   path,
    //   '{lorem:"good",ipsum:"verygood"}${lorem:"toogood",ipsum:"reallyverygood"}${"lorem":"toogoo213d","ipsum":"reallyv13erygood"}',
    //   'utf8',
    // )
    //   .then(success => {
    //     console.log('FILE WRITTEN!');
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    // RNFS.appendFile(path, '${lorem:"21",ipsum:"3113"}', 'utf8')
    //   .then(success => {
    //     console.log('FILE WRITTEN!');
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    // RNFS.readFile(path, 'utf8')
    //   .then(result => {
    //     // console.log(JSON.parse(result.toString().split('$')[2]));
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // let filepath = `${
    //   RNFS.DocumentDirectoryPath
    // }/Unread_Books/U92e1d340906dc873.pdf`;
    // await RNFS.exists(filepath).then(result => {
    //   console.log('file photo exists: ', result);
    // });
    // this.getAllKeys();
    // console.log('real' + realData);

    // let filepath = `${
    //   RNFS.DocumentDirectoryPath
    // }/Unread_Books/U92e1d340906dc873.jpg`;
    // await RNFS.exists(filepath).then(result => {
    //   console.log('file exists: ', result);
    //   if (result) {
    //     return (
    //       RNFS.unlink(filepath)
    //         .then(() => {
    //           console.log('FILE DELETED');
    //         })
    //         // `unlink` will throw an error, if the item to unlink does not exist
    //         .catch(err => {
    //           console.log(err.message);
    //         })
    //     );
    //   }
    // });
    // try {
    //   await AsyncStorage.removeItem('Ube15860eadbbd1e0', err => {
    //     if (err) {
    //       console.log(err);
    //     } else console.log('File Removed');
    //   });
    // } catch (exception) {
    //   return false;
    // }
  };
  render() {
    return (
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
              Library
            </Text>
            <FontAwesome5 name="bars" size={25} color="white" />
          </View>
          <View>
            {this.state.recentBooksAvailable ? (
              <View />
            ) : (
              <View
                style={{marginTop: 20, marginBottom: 20, alignSelf: 'center'}}>
                <Image
                  source={require('../../Assets/openingScreenNil.png')}
                  style={{height: 190, width: 200}}
                  resizeMode="stretch"
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 22, color: '#5abd8c'}}>
                  Search for Books...
                </Text>
              </View>
            )}
          </View>
          <View style={{marginBottom: 30}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>Bookshelf</Text>
              <FontAwesome5
                name="plus"
                size={25}
                style={{color: '#666666'}}
                onPress={() => {
                  this.props.navigation.navigate('Search');
                }}
              />
            </View>
            {this.state.unreadBooksAvailable ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    marginTop: 20,
                    height: 130,
                    width: 160,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    backgroundColor: '#5abd8c',
                  }}
                />
                <View
                  style={{
                    marginLeft: -160,
                    marginRight: 15,
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <FlatList
                    data={data}
                    horizontal={true}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{width: 120, marginLeft: 20}}
                        onPress={() => {
                          this.props.navigation.navigate('OpenBook', {
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
                          {/* {console.log('flat' + item.bookname)} */}
                          {item.bookname}
                        </Text>
                        <Text
                          style={{fontSize: 10, opacity: 0.5, marginTop: 3}}>
                          by {item.author}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            ) : (
              <View style={{alignSelf: 'center', marginTop: 20}}>
                <Image
                  source={require('../../Assets/nothingFound.png')}
                  style={{height: 120, width: 150}}
                  resizeMode="stretch"
                />
              </View>
            )}
          </View>
          {/* <View style={{marginBottom: 30}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Finished Books
              </Text>
              <FontAwesome5 name="bars" size={25} />
            </View>
            {this.state.readBooksAvailable ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    marginTop: 20,
                    height: 130,
                    width: 160,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    backgroundColor: '#5abd8c',
                  }}
                />
                <View
                  style={{
                    marginLeft: -160,
                    marginRight: 15,
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <FlatList
                    data={this.state.realDataForFinishedBooks}
                    horizontal={true}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{width: 120, marginLeft: 20}}
                        onPress={() => {
                          this.props.navigation.navigate('OpenBook', {
                            id: item.uid,
                          });
                        }}>
                        <Image
                          source={{uri: `${item.imageLocation.toString()}`}}
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
                        <Text
                          style={{fontSize: 10, opacity: 0.5, marginTop: 3}}>
                          by {item.author}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            ) : (
              <View style={{alignSelf: 'center', marginTop: 20}}>
                <Image
                  source={require('../../Assets/nothingFound.png')}
                  style={{height: 120, width: 150}}
                  resizeMode="stretch"
                />
              </View>
            )}
          </View> */}
          {/* <View style={{marginBottom: 30}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Imported Docs
              </Text>
              <FontAwesome5 name="bars" size={25} />
            </View>
            {this.state.wishlistAvailable ? (
              <View />
            ) : (
              <View style={{alignSelf: 'center', marginTop: 20}}>
                <Image
                  source={require('../../Assets/nothingFound.png')}
                  style={{height: 120, width: 150}}
                  resizeMode="stretch"
                />
              </View>
            )}
          </View> */}
        </View>
      </ScrollView>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Home: openingScreen,
    Search: {screen: Search},
    Notes: {screen: Notes},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = FontAwesome5;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Notes') {
          iconName = 'pen-nib';
        }

        return (
          <IconComponent
            name={iconName}
            size={15}
            color={tintColor}
            style={{marginBottom: -15}}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#afdfc7',
      style: {
        backgroundColor: '#5abd8c',
        paddingBottom: 20,
        height: 75,
      },
      showIcon: true,
    },
  },
);

export default createAppContainer(TabNavigator);
