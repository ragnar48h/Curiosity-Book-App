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
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
var RNFS = require('react-native-fs');
var tagData = [
  {tag: 'Quote', id: 1},
  {tag: 'Contradictory Claim', id: 2},
  {tag: 'Tip', id: 3},
  {tag: 'Fact', id: 4},
  {tag: 'Further Reading', id: 5},
  {tag: 'Factual Example', id: 6},
  {tag: 'Personal Insight', id: 7},
  {tag: 'Myth Buster', id: 8},
  {tag: 'Definition', id: 9},
];
export default class individualNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: true,
      key: this.props.navigation.getParam('id', 'NO'),
      data: [],
      combinedData: [],
      annotationData: [],
      combinedTagData: [],
    };
    this.setData();
    this.processCombinedNoteData();

    this.processCombinedNoteData = this.processCombinedNoteData.bind(this);
    this.processNoteData = this.processNoteData.bind(this);
    this.processCombinedHighlightData = this.processCombinedHighlightData.bind(
      this,
    );
    this.processHighlightData = this.processHighlightData.bind(this);
    this.getNotesData = this.getNotesData.bind(this);
    this.setData = this.setData.bind(this);
    this.getData = this.getData.bind(this);
  }
  processCombinedNoteData = async () => {
    let noteData = await this.getNotesData();
    let numberOfNotes = noteData.toString().split('$').length - 1;
    let jsonData = [];
    for (let index = 0; index < numberOfNotes; index++) {
      jsonData.push(JSON.parse(noteData.toString().split('$')[index]));
    }
    // console.log('This is note data');
    // console.log(noteData);
    // console.log(numberOfNotes);
    this.processNoteData(jsonData, numberOfNotes);
    // this.processHighlightData(jsonData, numberOfNotes);
  };
  processNoteData = async (jsonData, numberOfNotes) => {
    let noteData = [];
    for (let index = 0; index < numberOfNotes; index++) {
      if (jsonData[index].isNote === true) {
        noteData.push(jsonData[index]);
      }
    }
    console.log(noteData);
    await this.setState({annotationData: noteData});
  };
  processCombinedHighlightData = async () => {
    let noteData = await this.getNotesData();
    let numberOfNotes = noteData.toString().split('$').length - 1;
    let jsonData = [];
    for (let index = 0; index < numberOfNotes; index++) {
      jsonData.push(JSON.parse(noteData.toString().split('$')[index]));
    }
    // console.log(numberOfNotes);
    // this.processNoteData(jsonData, numberOfNotes);
    this.processHighlightData(jsonData, numberOfNotes);
    this.setTagData(jsonData, numberOfNotes);
  };
  processHighlightData = async (jsonData, numberOfNotes) => {
    let highlightData = [];
    for (let index = 0; index < numberOfNotes; index++) {
      if (jsonData[index].isNote === false) {
        highlightData.push(jsonData[index]);
      }
    }
    // console.log(highlightData);
    await this.setState({annotationData: highlightData});
  };
  getNotesData = async () => {
    let returnData = '';
    let filepath =
      `${RNFS.DocumentDirectoryPath}/Unread_Books/` + this.state.key + `.txt`;
    await RNFS.readFile(filepath, 'utf8')
      .then(result => {
        // console.log(JSON.parse(result.toString().split('$')[0]));
        // console.log(result);
        returnData = result;
      })
      .catch(err => {
        console.log(err);
      });
    return returnData;
  };
  setData = async () => {
    this.setState({data: await this.getData(this.state.key)});
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
          <View />
        </View>
        {/* Notes/Highlights */}
        <View
          style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#5abd8c', '#00ff81']}
            style={{height: 60, width: 5, borderRadius: 10}}
          />

          {this.state.notes ? (
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Notes</Text>
              <TouchableOpacity
                onPress={async () => {
                  await this.setState({notes: false});
                  await this.processCombinedHighlightData();
                }}>
                <Text style={{opacity: 0.5, fontWeight: 'bold'}}>
                  Highlights
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Highlights</Text>
              <TouchableOpacity
                onPress={async () => {
                  await this.setState({notes: true});
                  await this.processCombinedNoteData();
                }}>
                <Text style={{opacity: 0.5, fontWeight: 'bold'}}>Notes</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <FlatList
          data={this.state.annotationData}
          // horizontal={true}
          extraData={this.state}
          // showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                marginTop: 20,
                backgroundColor: '#e5e5e5',
                borderRadius: 20,
                width: '95%',
                alignSelf: 'center',
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 15,
              }}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                {item.topic}
              </Text>
              <Text style={{opacity: 0.5, marginTop: 2, marginBottom: 10}}>
                {item.note}
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {console.log(tagData[item.tags[0] - 1].tag)}
                {item.tags[0] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[0] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[1] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[1] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[2] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[2] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[3] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[3] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[4] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[4] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[5] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[5] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[6] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[6] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[7] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[7] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
                {item.tags[8] !== undefined ? (
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: '#5abd8c',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: '#5abd8c',
                        fontWeight: 'bold',
                      }}>
                      {tagData[item.tags[8] - 1].tag}
                    </Text>
                  </View>
                ) : (
                  <View />
                )}
              </ScrollView>
              <View
                style={{
                  alignSelf: 'flex-end',
                }}>
                {item.pageNumber == undefined ? (
                  <Text style={{fontSize: 10, opacity: 0.3}}>
                    Page Number not set.
                  </Text>
                ) : (
                  <Text style={{fontSize: 10, opacity: 0.3}}>
                    Page {item.pageNumber}
                  </Text>
                )}
              </View>
            </View>
          )}
          extraData={this.state}
        />
        <View style={{marginTop: 20}} />
      </ScrollView>
    );
  }
}
