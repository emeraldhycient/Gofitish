import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import Productcard from "./component/productcard";
import Header from "./component/header";
import Search from "./component/search";

const Market = ({ navigation }) => {
  return (
    <SafeAreaView style={tw``}>
      <Header />
      <Search />
      <ScrollView style={tw`mb-36`}>
        <View style={tw`flex flex-row flex-wrap	`}>
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
          <Productcard navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({});
