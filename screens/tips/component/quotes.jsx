import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";

const Quotes = () => {
  return (
    <View>
      <Text style={styles.title}>Fitness Quotes</Text>
      <ScrollView horizontal>
        <View style={styles.quotes}></View>
      </ScrollView>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
  },
  title:{
      fontSize:21,
      fontWeight:'bold',
      marginLeft: 20,
      marginVertical:10

  },
  quotes: {
    height: 200,
    width: Dimensions.get("screen").width - 30,
    backgroundColor: "grey",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
