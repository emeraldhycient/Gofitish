import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  return (
    <View>
      <Text style={styles.title}> Latest Blog</Text>
      <ScrollView>
        <View style={styles.Blog}>
          <View style={styles.iconcontainer}>
            <Image
              source={require("../../../assets/images/abs.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.Blog}>
          <View style={styles.iconcontainer}>
            <Image
              source={require("../../../assets/images/lift.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.Blog}>
          <View style={styles.iconcontainer}>
            <Image
              source={require("../../../assets/images/abs.png")}
              style={styles.icon}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    flex: 1,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
    color: "#FFFFFF",
  },
  Blog: {
    height: 200,
    width: Dimensions.get("screen").width - 15,
    backgroundColor: "#04293A",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
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
});
