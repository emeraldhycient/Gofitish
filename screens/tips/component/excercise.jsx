import { StyleSheet, Text, View, ScrollView, Dimensions,Image } from "react-native";
import React from "react";

const Excercise = () => {
  return (
    <View>
      <Text style={styles.title}> Excercise Suggestion</Text>
      <ScrollView horizontal>
        <View style={styles.excercise}>
             <View style={styles.iconcontainer}>
                 <Image source={require("../../../assets/images/abs.png")} style={styles.icon}/>
             </View>
        </View>
        <View style={styles.excercise}>
        <View style={styles.iconcontainer}>
                 <Image source={require("../../../assets/images/lift.png")} style={styles.icon}/>
             </View>
        </View>
        <View style={styles.excercise}>
        <View style={styles.iconcontainer}>
                 <Image source={require("../../../assets/images/abs.png")} style={styles.icon}/>
             </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Excercise;

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
  excercise: {
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
    marginLeft:20,
    marginTop:10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding:5
  },
  icon: {
    height: 30,
    width: 30,
  },
});
