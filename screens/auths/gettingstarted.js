import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Modal,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import Login from "./component/login";
import SignUp from "./component/signup";

const Gettingstarted = () => {
  const [loginmodal, setloginmodal] = useState(false);
  const [signupmodal, setsignupmodal] = useState(false);
  const toggle_login_modal = () => {
    setloginmodal((prevstate) => !prevstate);
  };
  const toggle_signup_modal = () => {
    setsignupmodal((prevstate) => !prevstate);
  };

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
            onPress={() => toggle_login_modal()}
          >
            SignIn
          </Button>
          <Button
            mode="contained"
            style={[styles.btn, styles.btn2]}
            color="#000"
            labelStyle={{ color: "#fff", fontWeight: "700" }}
            onPress={() => toggle_signup_modal()}
          >
            SignUp
          </Button>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={loginmodal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            toggle_login_modal();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Login
                toggle_login_modal={toggle_login_modal}
                toggle_signup_modal={toggle_signup_modal}
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={signupmodal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            toggle_signup_modal();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <SignUp
                toggle_login_modal={toggle_login_modal}
                toggle_signup_modal={toggle_signup_modal}
              />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default Gettingstarted;

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
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
  },
  btn1: {
    backgroundColor: "red",
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
  },
  modalView: {
    borderTopLeftRadius: 100,
    height: Dimensions.get("screen").height / 1.8,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView2: {
    borderTopLeftRadius: 100,
    height: Dimensions.get("screen").height / 1.6,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
