import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const ModalScreen = ({ route, navigation }) => {
  const { url } = route.params;

  return <WebView style={styles.container} source={{ uri: url }} />;
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {},
});
