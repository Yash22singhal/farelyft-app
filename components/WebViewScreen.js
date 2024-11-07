import React from 'react';
import { WebView } from 'react-native-webview';
import Header from './Header'
import Footer from './Footer';

const WebViewScreen = ({ route }) => {
  const { url } = route.params; // Get the URL passed from the HomeScreen

  return (
    <>
    <Header />
    <WebView source={{ uri: url }} style={{ flex: 1 }} />
    <Footer />
    </>
);
};

export default WebViewScreen;
