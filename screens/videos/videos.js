import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Search from "./components/search";
import Videobanner from "./components/videobanner";

const Videos = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Search />
        <View>
          <Videobanner />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: 10000,
  },
});
