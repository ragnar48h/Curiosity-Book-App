import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {PropTypes} from 'prop-types';
export default class downloadPopup extends Component {
  constructor(props) {
    super(props);
    this.cancelDownload = this.cancelDownload.bind(this);
  }
  cancelDownload = () => {
    this.props.cancelFunction();
  };
  render() {
    const {text, cancel} = this.props;
    return (
      <View style={{alignSelf: 'center', width: '90%'}}>
        <View
          style={{
            backgroundColor: '#303030',
            padding: 5,
            borderRadius: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <LottieView
              source={require('../../Assets/download.json')}
              autoPlay
              loop
              style={{
                height: 35,
                width: 35,
              }}
            />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
              {text}
            </Text>
            <TouchableOpacity onPress={this.cancelDownload}>
              <Text style={{color: '#5abd8c', fontWeight: 'bold'}}>
                {cancel}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
downloadPopup.propTypes = {
  text: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  cancelFunction: PropTypes.func.isRequired,
};
