import { StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <TextInput
        placeholder="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        outlineColor="#ccc"
        activeOutlineColor="#ff7f56"
        right={<TextInput.Icon name="filter" />}
        style={[styles.input, styles.shadowProp]}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "#202028",
  },
  input: {
    marginBottom: 2,
  },
  shadowProp: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
