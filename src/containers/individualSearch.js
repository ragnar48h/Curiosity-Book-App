import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import cheerio from 'react-native-cheerio';
import {PropTypes} from 'prop-types';
import DownloadPopUp from '../components/downloadPopup';
import DownloadFailed from '../components/downloadFailed';
import AsyncStorage from '@react-native-community/async-storage';
var RNFS = require('react-native-fs');
guidGenerator = () => {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + S4() + S4();
};
let stopSecondDownloadFailedPopUp = false;
export default class individualSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '481ed7d623dfad2c',
      number: this.props.number,
      downloadLink: this.props.downloadPageLink,
      downloadLinkReturned: '',
      imageLink: '',
      imageDownloaded: false,
      storageJSON: [],
      downloadPopUpVisible: false,
      downloadCompletePopUp: false,
      downloadFailedPopUp: false,
      jpgJobID: 1,
      pdfJobID: 1,
      downloadCancelled: false,
      // finished: false,
      // notesAvailable: false,
    };
    this.downloadLink = this.downloadLink.bind(this);
    this.generateDownloadLink = this.generateDownloadLink.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    // this. = this..bind(this);
    // guidGenerator();
  }
  deleteFiles = async () => {
    let filepath =
      `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
      `${this.state.uid}` +
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
      `${this.state.uid}` +
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
      await AsyncStorage.removeItem(this.state.uid, err => {
        if (err) {
          console.log(err);
        } else console.log('File Removed');
      });
    } catch (exception) {
      return false;
    }
  };
  cancelDownload = async () => {
    await this.setState({downloadPopUpVisible: false});
    await RNFS.stopDownload(this.state.jpgJobID);
    await RNFS.stopDownload(this.state.pdfJobID);
    await this.deleteFiles();
    await this.setState({downloadCancelled: true});
    await setTimeout(() => {
      this.setState({downloadCancelled: false});
    }, 5000);
  };
  generateStorageContent = async () => {
    await this.setState({
      storageJSON: {
        uid: this.state.uid,
        bookname: this.props.bookname,
        author: this.props.author,
        publication: this.props.publication,
        language: this.props.language,
        pages: this.props.pages,
        size: this.props.size,
        extension: this.props.extension,
        pdfLocation:
          'file://' +
          `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
          this.state.uid +
          '.pdf',
        imageLocation:
          'file://' +
          `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
          this.state.uid +
          '.jpg',
        finished: false,
        notesAvailable: false,
      },
    });
    this.storeData(this.state.storageJSON, this.state.uid);
    console.log('one' + this.getData(this.state.uid));
    // this.clearAll();
    this.getAllKeys();
    // this.clearAll();
    // console.log(JSON.stringify(this.state.storageJSON));
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
        console.log(result);
        console.log('three success');
      });
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };
  getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    console.log(keys);
  };
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }

    console.log('five Done.');
  };
  downloadLink = async link => {
    this.setState({downloadPopUpVisible: true});
    let UID = 'U' + guidGenerator().toString();
    await this.setState({uid: UID});
    console.log('oth ' + this.state.uid);
    await this.generateDownloadLink(link);
    this.generateStorageContent();
    await RNFS.downloadFile({
      fromUrl: this.state.downloadLinkReturned,
      toFile:
        `${RNFS.DocumentDirectoryPath}/Unread_Books/` + this.state.uid + '.pdf',
      progressInterval: 100,
      progressDivider: 10,
    })
      .promise.then(job => {
        console.log('pdf done ' + job);
        this.setState({pdfJobID: job.jobId});
      })
      .catch(err => {
        stopSecondDownloadFailedPopUp = true;
        this.setState({downloadFailedPopUp: true});
        setTimeout(() => {
          this.setState({downloadFailedPopUp: false});
        }, 5000);
        this.deleteFiles();
      });
    await RNFS.downloadFile({
      fromUrl: this.state.imageLink,
      toFile:
        `${RNFS.DocumentDirectoryPath}/Unread_Books/` + this.state.uid + '.jpg',
      progressInterval: 100,
      progressDivider: 10,
      begin: this._downloadFileBegin,
      progress: data => this._downloadFileProgress(data),
    })
      .promise.then(job => {
        this.setState({jpgJobID: job.jobId});
        this.setState({imageDownloaded: true});
        console.log('jpg done ' + job);
        this.setState({downloadPopUpVisible: false});
        this.setState({downloadCompletePopUp: true});
        setTimeout(() => {
          this.setState({downloadCompletePopUp: false});
        }, 5000);
        console.log(
          `${RNFS.DocumentDirectoryPath}/Unread_Books/` +
            this.state.uid +
            '.jpg',
        );
      })
      .catch(err => {
        if (!stopSecondDownloadFailedPopUp) {
          this.setState({downloadFailedPopUp: true});
          setTimeout(() => {
            this.setState({downloadFailedPopUp: false});
          }, 5000);
          this.deleteFiles();
        }
      });
  };
  _downloadFileBegin = () => {
    console.log('Download Begin');
  };
  _downloadFileProgress = data => {
    const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
    const text = `Progress ${percentage}%`;
    console.log(text);
    if (percentage == 100) console.log('Download Complete');
    //call another function here
  };
  generateDownloadLink = async () => {
    const response = await fetch(this.state.downloadLink);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    let realDownloadLink = $('h2')
      .parent()
      .attr('href')
      .toString();
    console.log(realDownloadLink);
    let imageLink = $('img').attr('src');
    let imageLink2 = 'https://libgen.lc/' + imageLink;
    this.setState({imageLink: imageLink2});
    console.log(this.state.imageLink.toString());
    this.setState({downloadLinkReturned: realDownloadLink});
    console.log(this.state.downloadLinkReturned.toString());
  };

  addToWishlist = () => {
    this.props.addToWishlistFunction();
  };
  dummy = () => {};
  render() {
    const {
      bookname,
      author,
      publication,
      language,
      pages,
      size,
      downloadPageLink,
      // number,
      extension,
    } = this.props;
    const imagePlaceholder = () => {
      if (this.state.number === 1) {
        return (
          <Image
            source={require('../../Assets/1.png')}
            style={{width: 120, height: 170, borderRadius: 15}}
          />
        );
      } else if (this.state.number === 2) {
        return (
          <Image
            source={require('../../Assets/2.png')}
            style={{width: 120, height: 170, borderRadius: 15}}
          />
        );
      } else if (this.state.number === 3) {
        return (
          <Image
            source={require('../../Assets/3.png')}
            style={{width: 120, height: 170, borderRadius: 15}}
          />
        );
      } else if (this.state.number === 4) {
        return (
          <Image
            source={require('../../Assets/4.png')}
            style={{
              width: 120,
              height: 170,
              borderRadius: 15,
            }}
          />
        );
      }
    };
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: '#e5e5e5',
            marginTop: 15,
            // marginBottom: 10,
            paddingBottom: 25,
          }}>
          <View>{imagePlaceholder()}</View>
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', opacity: 0.6}}>
              {bookname}
            </Text>
            <Text style={{opacity: 0.3, fontSize: 14}}>{author}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                justifyContent: 'space-between',
              }}>
              <Text style={{opacity: 0.45, fontSize: 12, width: '60%'}}>
                {/* Cambridge Press */}
                {publication}
              </Text>
              <Text
                style={{color: '#5abd8c', fontWeight: 'bold', fontSize: 12}}>
                {/* English */}
                {language}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                opacity: 0.5,
                marginTop: 10,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{pages}</Text>
                <Text style={{fontSize: 10}}>Pages</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{size}</Text>
                <Text style={{fontSize: 10}}>Size</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {extension}
                </Text>
                <Text style={{fontSize: 10}}>Extension</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#5abd8c', '#00ff81']}
                style={{elevation: 7, borderRadius: 10}}>
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                  }}
                  onPress={
                    this.downloadLink
                    /* this.setModalVisible(!this.state.modalVisible)*/
                  }
                  // onPressOut={() => {
                  //   this.setModalVisible(!this.state.modalVisible);
                  // }}
                >
                  <Text style={{color: 'white'}}>Download</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#ffffff', '#e5e5e5']}
                style={{elevation: 7, borderRadius: 10}}>
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                  }}
                  onPress={this.addToWishlist}>
                  <Text style={{opacity: 0.5}}>Add to Wishlist</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
        {this.state.downloadPopUpVisible ? (
          <DownloadPopUp
            text="Downloads will be saved in your Library "
            cancel="Cancel"
            cancelFunction={this.cancelDownload}
          />
        ) : (
          <View />
        )}
        {this.state.downloadCompletePopUp ? (
          <DownloadPopUp
            text="Download Complete"
            cancel=""
            cancelFunction={this.dummy}
          />
        ) : (
          <View />
        )}
        {this.state.downloadFailedPopUp ? (
          <DownloadFailed
            text="Download Failed"
            tryAgainFunction={this.downloadLink}
          />
        ) : (
          <View />
        )}
        {this.state.downloadCancelled ? (
          <DownloadFailed
            text="Download Cancelled"
            tryAgainFunction={this.downloadLink}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
individualSearch.propTypes = {
  bookname: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  downloadPageLink: PropTypes.string.isRequired,
  addToWishlistFunction: PropTypes.func.isRequired,
};
