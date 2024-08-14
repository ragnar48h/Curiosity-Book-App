import React, {Component} from 'react';
import cheerio from 'react-native-cheerio';
import DownloadPopUp from '../components/downloadPopup';
import {
  Animated,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import IndividualSearch from '../containers/individualSearch';
// import GLOBAL from '../global';
let arr = [];
let downloadLinkArray = [];
let downloadPageLinkArray = [];
// var bottomBarIsHidden = GLOBAL.downloadPopUpHidden;
const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'Permission to store files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can read files');
    } else {
      console.log('Read permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
const requestWritePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'Permission to store files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can write');
    } else {
      console.log('Write permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: true,
      searchQuery: '',
      loading: false,
      bottomBounceValue: new Animated.Value(100),
    };
    requestStoragePermission();
    requestWritePermission();
    this.onChangeText = this.onChangeText.bind(this);
    this.search = this.search.bind(this);
    this.cancel = this.cancel.bind(this);
    this.searchCheerio = this.searchCheerio.bind(this);
    // this.generateDownloadLink = this.generateDownloadLink.bind(this);
    this.searchQueryPreprocessor = this.searchQueryPreprocessor.bind(this);
  }
  // _toggleSubviewBottom = values => {
  //   var toValue = 100;
  //   if (GLOBAL.downloadPopUpHidden) {
  //     toValue = 0;
  //   }
  //   Animated.spring(values, {
  //     toValue: toValue,
  //     velocity: 3,
  //     tension: 2,
  //     friction: 8,
  //   }).start();
  //   // bottomBarIsHidden = !bottomBarIsHidden;
  //   // let variable = GLOBAL.downloadPopUpHidden;
  //   GLOBAL.downloadPopUpHidden = !GLOBAL.downloadPopUpHidden;
  // };
  searchCheerio = async SearchString => {
    const searchURL = SearchString;
    const response = await fetch(searchURL);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    let filesFound = $('tr')
      .eq(1)
      .children()
      .eq(0)
      .text();

    let numberOfItemsFound;
    parseInt(filesFound.split(' ')[0]) > 25
      ? (numberOfItemsFound = 25)
      : (numberOfItemsFound = parseInt(filesFound.split(' ')[0]));
    console.log(numberOfItemsFound);

    //~~~~~~~~~~~~~~ Setting all parameters into an array ~~~~~~~~~~
    for (let index = 0; index < numberOfItemsFound; index++) {
      // ~~~~~~~~~~~~~~~ bookName Preprocessed ~~~~~~~~~~~~~~~~
      let bookProcess = $('tr')
        .eq(3 + index)
        .children()
        .eq(2)
        .text();
      let bookNameProcessed = bookProcess.substring(
        0,
        bookProcess.lastIndexOf(' '),
      );
      bookNameProcessed = bookNameProcessed.substring(
        0,
        bookNameProcessed.lastIndexOf(' '),
      );
      
      downloadPageLinkArray[index] = $("---DM to know key---")
        .eq(index)
        .attr('href');

      // ~~~~~~~~ Generate Download Links ~~~~~~~~~~~~~~
      // await this.generateDownloadLink(index, downloadPageLink);

      // ~~~~~~~~ The object consisting of all download information ~~~~~~~~~~~~~~
      arr.push({
        bookName: bookNameProcessed,
        author: $('tr')
          .eq(3 + index)
          .children()
          .eq(1)
          .text(),
        publication: $('tr')
          .eq(3 + index)
          .children()
          .eq(3)
          .text(),
        language: $('tr')
          .eq(3 + index)
          .children()
          .eq(6)
          .text(),
        numberOfPages: $('tr')
          .eq(3 + index)
          .children()
          .eq(5)
          .text()
          .split('[')[0],
        size: $('tr')
          .eq(3 + index)
          .children()
          .eq(7)
          .text()
          .toUpperCase(),
        extension: $('tr')
          .eq(3 + index)
          .children()
          .eq(8)
          .text()
          .toUpperCase(),
        indexNumber: index,
        downloadPageLink: downloadPageLinkArray[index],
      });
    }
    console.log(arr[0]);
    this.setState({loading: false});
  };

  // ~~~~~~~~~~~ Generating download link function ~~~~~~~~~~~
  // generateDownloadLink = async (index, link) => {
  //   const response = await fetch(link);
  //   const htmlString = await response.text();
  //   const $ = cheerio.load(htmlString);
  //   downloadLinkArray[index] = $('h2')
  //     .parent()
  //     .attr('href')
  //     .toString();
  //   console.log(downloadLinkArray[index]);
  // };
  searchQueryPreprocessor = () => {
    let searchString = this.state.searchQuery;
    searchString = searchString.replace(/\s/g, '+');
    let returnSearchString =
      "https://libgen.is/search.php?req=&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def";
    returnSearchString = returnSearchString..replace("req=", `req=${searchString}`);;
    console.log(returnSearchString);
    return returnSearchString;
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  search = () => {
    if (this.state.searchQuery.length < 2) {
      alert('Duh');
    } else {
      this.setState({search: false, loading: true});
      let returnSearchString = this.searchQueryPreprocessor();
      this.searchCheerio(returnSearchString);
    }
    // this._toggleSubviewBottom(this.state.bottomBounceValue);
    // console.log(GLOBAL.downloadPopUpHidden);
  };
  cancel = () => {
    this.setState({search: true});
  };
  flushFunction = () => {
    arr = [];
    // this.setState({searchQuery: ''});
  };
  // downloadLinkGenration = (index,link) =>{
  //   generateDownloadLink(index,link);
  //   console.log(downloadLinkArray[index]);
  // };
  dummy = () => {};
  render() {
    // GLOBAL.downloadPopUpHidden = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: '80%',
              marginTop: 15,
              marginLeft: 7,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: '#e1e1e1',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5 name="search" />
            <TextInput
              placeholder="Search something..."
              placeholderTextColor="black"
              onChangeText={val => this.onChangeText('searchQuery', val)}
              style={{
                opacity: 0.7,
                marginLeft: 5,
                width: '100%',
                backgroundColor: 'transparent',
              }}
            />
          </View>
          <TouchableOpacity>
            {this.state.search ? (
              <TouchableOpacity
                onPress={() => this.search()}
                onPressIn={Keyboard.dismiss}
                onPressOut={this.flushFunction}>
                <Text
                  style={{
                    marginTop: 15,
                    marginLeft: 10,
                    fontSize: 15,
                    opacity: 0.7,
                    fontWeight: 'bold',
                  }}>
                  Search
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.cancel();
                }}
                onPressIn={Keyboard.dismiss}
                onPressOut={this.flushFunction}>
                <Text
                  style={{
                    marginTop: 15,
                    marginLeft: 10,
                    fontSize: 15,
                    opacity: 0.7,
                    fontWeight: 'bold',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
        {this.state.loading ? (
          <LottieView
            source={require('../../Assets/loading.json')}
            autoPlay
            loop
            style={{
              height: 200,
              marginTop: '30%',
              alignSelf: 'center',
            }}
          />
        ) : (
          <FlatList
            data={arr}
            renderItem={({item}) => (
              <IndividualSearch
                bookname={item.bookName}
                author={item.author}
                publication={item.publication}
                language={item.language}
                pages={item.numberOfPages}
                size={item.size}
                extension={item.extension}
                number={(item.indexNumber % 4) + 1}
                index={item.indexNumber}
                downloadPageLink={item.downloadPageLink}
                addToWishlistFunction={this.dummy}
              />
            )}
          />
        )}
      </View>
    );
  }
}
