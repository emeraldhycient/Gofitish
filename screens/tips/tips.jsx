import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./component/header";
import Quotes from "./component/quotes";
import Excercise from "./component/excercise";
import Blog from "./component/blog";

const Tip = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Excercise />
        <Quotes />
        <Blog />
      </ScrollView>
    </View>
  );
};

export default Tip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
