import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";

const login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bentover.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.btn_container}>
          <Button
            mode="contained"
            style={[styles.btn, styles.btn1]}
            labelStyle={{ fontWeight: "700" }}
            onPress={() => console.log("Pressed")}
          >
            SignIn
          </Button>
          <Button
            mode="contained"
            style={[styles.btn, styles.btn2]}
            color="#000"
            labelStyle={{ color: "green", fontWeight: "700" }}
            onPress={() => console.log("Pressed")}
          >
            SignUp
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center",
        height: Dimensions.get("screen").height,
        width: "100%",
      },
      btn_container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 100,
      },
      btn: {
        width: 200,
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
      },
      btn1: {
        backgroundColor: "green",
      },
});
