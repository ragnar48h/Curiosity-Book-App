import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {PropTypes} from 'prop-types';
export default class downloadFailed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  tryAgainFunction = () => {
    this.props.tryAgainFunction();
  };
  render() {
    const {text} = this.props;
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
              source={require('../../Assets/failed.json')}
              autoPlay
              loop
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
              {text}
            </Text>
            <TouchableOpacity onPress={this.tryAgainFunction}>
              <Text style={{color: '#cd5050', fontWeight: 'bold'}}>
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
downloadFailed.propTypes = {
  text: PropTypes.string.isRequired,
  tryAgainFunction: PropTypes.func.isRequired,
};
