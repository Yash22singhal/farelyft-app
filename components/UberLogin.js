import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

const UberLogin = ({ isVisible, onClose, onLoginSuccess }) => {
  // Define the OAuth URL
  const authUrl = `https://login.uber.com/oauth/v2/authorize?client_id=<your-client-id>&response_type=code&redirect_uri=<your-redirect-uri>&scope=<scopes>`;

  const handleRedirect = (url) => {
    // Check if the URL contains the authorization code
    if (url.includes('your-redirect-uri')) {
      const code = extractAuthCode(url);
      onLoginSuccess(code);  // Pass the code to the parent component
      onClose();  // Close the modal after successful login
    }
  };

  const extractAuthCode = (url) => {
    // Extract the authorization code from the URL
    const code = url.split('code=')[1];
    return code;
  };

  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <WebView
          source={{ uri: authUrl }}
          onNavigationStateChange={(navState) => handleRedirect(navState.url)}
          startInLoadingState
        />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UberLogin;
