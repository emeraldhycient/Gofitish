import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const Videobanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://source.unsplash.com/random" }}
        style={{
          height: 200,
          width: 200,
          borderRadius: 7,
        }}
      />
      <View style={styles.title}>
        <Text style={{ color: "#c4c4c4", fontSize: 16, fontWeight: "600" }}>
          roller skate exercsie
        </Text>
      </View>
    </View>
  );
};

export default Videobanner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: "relative",
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    height: 200,
    width: 200,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
