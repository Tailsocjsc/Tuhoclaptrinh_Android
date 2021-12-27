import React,{useEffect} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return <WebView source={{uri: 'https://tuhoclaptrinh.edu.vn/'}} />;
};

export default App;
