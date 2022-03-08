import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import Search from "./components/search";
import Videobanner from "./components/videobanner";

const Videos = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Search />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Text style={styles.litteheader}>All</Text>
          <Text style={styles.litteheader}>Yoga</Text>
          <Text style={styles.litteheader}>Push up</Text>
          <Text style={styles.litteheader}>Workout</Text>
        </View>
        <View style={{ height: 1000 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 100,
                paddingBottom: 400,
              }}
            >
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
              <Videobanner />
            </View>
          </ScrollView>
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
  litteheader: {
    color: "#fff",
    fontWeight: "bold",
  },
});
