import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import Pdf from 'react-native-pdf';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var RNFS = require('react-native-fs');
var topBarIsHidden = true;
var bottomBarIsHidden = true;
var takingNotes = true;
var data = [
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
var noteData = '';
// var selected = [];
export default class pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNo: '',
      totalNoOfPages: '',
      continousPageView: false,
      changeViewModeIcon: 'files-o',
      animatedHeight: new Animated.Value(60),
      bookmarked: false,
      modalVisible: false,
      setPageNumber: 1,
      bounceValue: new Animated.Value(0),
      bottomBounceValue: new Animated.Value(0),
      makeNotesPopup: false,
      inFocusAnnotation: 'Take Note',
      outFocusAnnotation: 'Highlight',
      tagSelectionData: data,
      sourceUri: this.props.navigation.getParam('pdfLink', 'NO'),
      topic: '',
      note: '',
      selectionData: [],
      // takingNotes
    };
    // this.notesExists();
  }
  setNotesFunction = async () => {
    let uid = this.props.navigation.getParam('uid', 'NO');
    let filepath = `${RNFS.DocumentDirectoryPath}/Unread_Books/` + uid + `.txt`;
    await this.noteDataGenerator();
    if (!(await this.notesExists())) {
      await this.makeNoteFile(noteData);
    } else {
      await this.addNotes(noteData);
    }
    // console.log(!(await this.notesExists()));
    RNFS.readFile(filepath, 'utf8')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  notesExists = async () => {
    let uid = this.props.navigation.getParam('uid', 'NO');
    let filepath = `${RNFS.DocumentDirectoryPath}/Unread_Books/` + uid + `.txt`;
    let returnVariable = null;
    await RNFS.exists(filepath)
      .then(res => {
        returnVariable = res;
        // console.log(returnVariable);
      })
      .catch(err => {
        console.log(err);
      });
    return returnVariable;
  };
  makeNoteFile = data => {
    let uid = this.props.navigation.getParam('uid', 'NO');
    let filepath = `${RNFS.DocumentDirectoryPath}/Unread_Books/` + uid + `.txt`;
    RNFS.writeFile(filepath, data, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  addNotes = data => {
    let uid = this.props.navigation.getParam('uid', 'NO');
    let filepath = `${RNFS.DocumentDirectoryPath}/Unread_Books/` + uid + `.txt`;
    RNFS.appendFile(filepath, data, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  noteDataGenerator = async () => {
    await this.getSelectedItems();
    let notes = {
      topic: this.state.topic,
      note: this.state.note,
      isNote: takingNotes,
      tags: this.state.selectionData,
      pageNumber: this.state.currentPageNo,
    };
    let stringNotes = JSON.stringify(notes) + '$';
    this.clearSelectId();
    await this.setState({selectionData: []});
    noteData = stringNotes;
  };
  clearSelectId = () => {
    let tagSelectionData = [...this.state.tagSelectionData];
    for (let data of tagSelectionData) {
      data.selected = null;
    }
  };
  onPressHandler(id) {
    let tagSelectionData = [...this.state.tagSelectionData];
    for (let data of tagSelectionData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({tagSelectionData});
  }

  getSelectedItems() {
    let selectionData = [];
    let data = [...this.state.tagSelectionData];
    for (let i of data) {
      if (i.selected == true) {
        selectionData.push(i.id);
      }
    }

    this.setState({selectionData});
  }
  _toggleSubview(values) {
    var toValue = -100;
    if (topBarIsHidden) {
      toValue = 0;
    }
    Animated.spring(values, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start();
    topBarIsHidden = !topBarIsHidden;
    this._toggleSubviewBottom(this.state.bottomBounceValue);
  }
  _toggleSubviewBottom = values => {
    var toValue = 100;
    if (bottomBarIsHidden) {
      toValue = 0;
    }
    Animated.spring(values, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start();
    bottomBarIsHidden = !bottomBarIsHidden;
  };
  changeViewMode = () => {
    if (!this.state.continousPageView)
      this.setState({continousPageView: true, changeViewModeIcon: 'file-o'});
    else
      this.setState({continousPageView: false, changeViewModeIcon: 'files-o'});
  };
  bookmarkAnimation(values) {
    if (!this.state.bookmarked) {
      Animated.spring(values, {
        toValue: 80,
        friction: 3,
        tension: 40,
      }).start();
      this.setState({bookmarked: true});
    } else {
      Animated.spring(values, {
        toValue: 60,
        friction: 3,
        tension: 40,
      }).start();
      this.setState({bookmarked: false});
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setNotesPopupVisible(visible) {
    this.setState({makeNotesPopup: visible});
  }

  render() {
    const source = {
      uri: this.state.sourceUri,
      // 'file:///data/user/0/com.airbnb/files/Unread_Books/ae8e28750588f8d0.pdf',
    };
    // ~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* ~~~~~TOP BAR START~~~~~ */}
        <Animated.View
          style={{
            zIndex: 10,
            flexDirection: 'row',
            position: 'absolute',
            marginLeft: 10,
            marginTop: 5,
            transform: [{translateY: this.state.bounceValue}],
          }}>
          {/* ~~~~~BACK BUTTON~~~~~ */}
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#5abd8c', '#00ff81']}
            style={{
              height: 40,
              width: 40,
              zIndex: 10,
              borderRadius: 10,
              marginRight: 15,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
          </LinearGradient>
          {/* ~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~ */}
          {/* ~~~~~CHANGE VIEW MODE~~~~~ */}
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#5abd8c', '#00ff81']}
            style={{
              height: 40,
              marginRight: 15,
              width: 40,
              zIndex: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={this.changeViewMode}>
              <FontAwesome
                name={this.state.changeViewModeIcon}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </LinearGradient>
          {/* ~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~ */}
          {/* ~~~~CURRENT PAGE NUMBER~~~~~ */}
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#5abd8c', '#00ff81']}
            style={{
              height: 40,
              width: 40,
              zIndex: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {this.state.currentPageNo}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          {/* ~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~ */}
        </Animated.View>
        {/* ~~~~~TOP BAR END~~~~~ */}
        {/* ~~~~~BOOKMARK BUTTON~~~~~ */}
        <Animated.View
          style={{
            zIndex: 10,
            height: 40,
            position: 'absolute',
            right: 0,
            transform: [{translateY: this.state.bounceValue}],
          }}>
          <TouchableOpacity
            style={{
              zIndex: 10,
              marginRight: 15,
            }}
            onPress={() => this.bookmarkAnimation(this.state.animatedHeight)}>
            <Animated.Image
              source={require('../../Assets/bookmark.png')}
              style={{width: 20, height: this.state.animatedHeight, zIndex: 10}}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </Animated.View>
        {/* ~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~ */}
        {/* ~~~~~Add Notes Button~~~~~ */}
        <Animated.View
          style={{
            zIndex: 10,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: [{translateY: this.state.bottomBounceValue}],
          }}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#5abd8c', '#00ff81']}
            style={{
              marginRight: 15,
              marginBottom: 15,
              height: 45,
              width: 45,
              zIndex: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 45,
                width: 45,
              }}
              onPress={() => {
                this.setNotesPopupVisible(!this.state.makeNotesPopup);
              }}>
              <FontAwesome name="pencil" size={20} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
        {/* ~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~ */}
        <Pdf
          source={source}
          ref={pdf => {
            this.pdf = pdf;
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            this.setState({totalNoOfPages: `${numberOfPages}`.toString()});
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            this.setState({currentPageNo: `${page}`.toString()});
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          onPageSingleTap={() => {
            this._toggleSubview(this.state.bounceValue);
          }}
          //   page={5}
          enablePaging={this.state.continousPageView}
          enableAnnotationRendering={true}
          style={{
            // flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
        {/* ~~~~~POP UP MODAL~~~~~ */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
            //   Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width * 0.8,
                backgroundColor: '#fff',
                //   height: 300,
                paddingVertical: 15,
                borderRadius: 10,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{color: '#5abd8c', fontWeight: 'bold', fontSize: 20}}>
                Go to Page
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    height: 40,
                    width: '70%',
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: '#e1e1e1',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="search" />
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Type page number..."
                    placeholderTextColor="black"
                    onChangeText={val => this.setState({setPageNumber: val})}
                    style={{
                      opacity: 0.7,
                      marginLeft: 5,
                      width: '100%',
                      backgroundColor: 'transparent',
                    }}
                  />
                </View>
                <Text style={{fontWeight: 'bold', marginLeft: 15}}>
                  (1 - {this.state.totalNoOfPages})
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    borderColor: '#5abd8c',
                    borderWidth: 2,
                    borderRadius: 15,
                    width: 70,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  colors={['#5abd8c', '#00ff81']}
                  style={{
                    width: 70,
                    borderRadius: 15,
                    marginLeft: 15,
                    paddingVertical: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.pdf.setPage(parseInt(this.state.setPageNumber, 10));
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Go</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </Modal>
        {/* ~~~~~END~~~~~ */}
        {/* ~~~~~MAKE NOTES POPUP~~~~~ */}
        <Modal
          animationType="slide-up"
          transparent={true}
          visible={this.state.makeNotesPopup}
          onRequestClose={() => {
            this.setNotesPopupVisible(!this.state.makeNotesPopup);
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: Dimensions.get('window').width,
                backgroundColor: '#fff',
                // height: 300,
                paddingVertical: 15,
                borderRadius: 10,
                paddingHorizontal: 15,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    colors={['#5abd8c', '#00ff81']}
                    style={{height: 40, width: 5, borderRadius: 10}}
                  />
                  <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => {
                      if (takingNotes) {
                        this.setState({
                          inFocusAnnotation: 'Highlight',
                          outFocusAnnotation: 'Take Note',
                        });
                      } else {
                        this.setState({
                          inFocusAnnotation: 'Take Note',
                          outFocusAnnotation: 'Highlight',
                        });
                      }
                      takingNotes = !takingNotes;
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      {this.state.inFocusAnnotation}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        opacity: 0.5,
                      }}>
                      {this.state.outFocusAnnotation}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      borderColor: '#cd5050',
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}
                    onPress={() => {
                      this.setNotesPopupVisible(!this.state.makeNotesPopup);
                    }}>
                    <FontAwesome name="close" size={15} color="#cd5050" />
                  </TouchableOpacity>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    colors={['#5abd8c', '#00ff81']}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                    }}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 30,
                        width: 30,
                      }}
                      onPress={() => {
                        this.setNotesFunction();
                        this.setNotesPopupVisible(!this.state.makeNotesPopup);
                      }}>
                      <FontAwesome name="send" size={13} color="white" />
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
              <View
                style={{
                  // height: 30,
                  width: '100%',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 10,
                  backgroundColor: '#f0f0f0',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#e1e1e1',
                }}>
                <TextInput
                  placeholder={'Add Topic...'}
                  placeholderTextColor="#666"
                  onChangeText={val => this.setState({topic: val})}
                  style={{
                    // marginTop: -10,
                    opacity: 0.7,
                    fontWeight: 'bold',
                    marginLeft: 5,
                    width: '100%',
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
              <View
                style={{
                  height: 80,
                  width: '100%',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginVertical: 10,
                  backgroundColor: '#f0f0f0',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#e1e1e1',
                }}>
                <TextInput
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  placeholder={`${this.state.inFocusAnnotation}` + '...'}
                  placeholderTextColor="#666"
                  onChangeText={val => this.setState({note: val})}
                  style={{
                    opacity: 0.7,
                    fontWeight: 'bold',
                    marginLeft: 5,
                    width: '100%',
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
              <FlatList
                data={this.state.tagSelectionData}
                horizontal={true}
                extraData={this.state}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: item.selected == true ? '#5abd8c' : '#666',
                      borderWidth: 2,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                    onPress={() => this.onPressHandler(item.id)}>
                    <Text
                      style={{
                        color: item.selected == true ? '#5abd8c' : '#666',
                        fontWeight: 'bold',
                      }}>
                      {item.tag}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                extraData={this.state}
              />
              {/* <TouchableOpacity onPress={() => this.getSelectedItems()}>
                <Text>Print Selection</Text>
              </TouchableOpacity>
              {this.state.selectionData.length > 0 && (
                <Text>{this.state.selectionData.toString()}</Text>
              )} */}
            </View>
          </View>
        </Modal>
        {/* ~~~~~END~~~~~~ */}
      </View>
    );
  }
}
