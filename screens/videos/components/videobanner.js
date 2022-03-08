import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Videobanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://source.unsplash.com/random" }}
        style={{ height: 200, width: 200, borderRadius: 7 }}
      />
    </View>
  );
};

export default Videobanner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
