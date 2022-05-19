import { StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <TextInput
        placeholder="Search tools"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        outlineColor="grey"
        activeOutlineColor="#694fad"
        placeholderTextColor="white"
        right={<TextInput.Icon name="filter" color="#694fad" />}
        style={[styles.input, styles.shadowProp]}
        theme={{
          colors: {
            text: "white",
          },
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "#212922",
    paddingBottom: 5,
  },
  input: {
    marginBottom: 2,
    marginHorizontal: 3,
    height: 50,
    backgroundColor: "#131324",
  },
  shadowProp: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    elevation: 6,
  },
});
