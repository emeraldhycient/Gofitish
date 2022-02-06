import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Quotes = () => {
  return (
    <View>
      <Text style={styles.title}>Fitness Quotes</Text>
      <ScrollView horizontal>
        <View style={styles.quotes}>
          <View style={styles.iconcontainer}>
            <MaterialCommunityIcons name="comment-quote-outline" size={30} color="green" />
          </View>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ullam animi cum autem culpa reiciendis voluptatem ipsa eum deserunt, numquam quidem commodi. Asperiores illo porro incidunt vero, qui doloribus molestiae?</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
  },
  quotes: {
    height: 200,
    width: Dimensions.get("screen").width - 30,
    backgroundColor: "grey",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
  },
  iconcontainer: {
    backgroundColor: "#cacaca",
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    height: 30,
    width: 30,
  },
  desc:{
      fontSize: 18,
      marginHorizontal:15,
      marginTop:15,
      color:'#fafafa'
  },
});
