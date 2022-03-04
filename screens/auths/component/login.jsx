import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

const Login = ({ toggle_login_modal, toggle_signup_modal }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={{ color: "#fff", fontWeight: "800", fontSize: 32 }}>
          Welcome Back Champ
        </Text>
        <View style={styles.dot}></View>
      </View>
      <View>
        <TextInput
          label="Email"
          style={styles.inputstyle}
          left={<TextInput.Icon name="email" color="#ff7f56" />}
          theme={{
            colors: {
              placeholder: "white",
              text: "white",
              primary: "white",
              underlineColor: "#043b30",
              background: "#000",
            },
          }}
        />
        <TextInput
          label="Password"
          secureTextEntry
          style={styles.inputstyle}
          outlineColor="#fff"
          activeOutlineColor="#fff"
          left={<TextInput.Icon name="key" color="#ff7f56" />}
          theme={{
            colors: {
              placeholder: "white",
              text: "white",
              primary: "white",
              underlineColor: "#043b30",
              background: "#000",
            },
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={(e) => {
            toggle_login_modal();
            toggle_signup_modal();
          }}
        >
          <Text style={{ color: "#f6f6f6", fontWeight: "800" }}>SignUp</Text>
        </TouchableOpacity>
        <Text style={{ color: "#ff7f56", fontWeight: "600" }}>
          forgot password ?
        </Text>
      </View>

      <View style={styles.btn_container}>
        <Button
          mode="contained"
          style={[styles.btn, styles.btn1]}
          labelStyle={{ fontWeight: "700" }}
          onPress={() => console.log("Pressed")}
        >
          SignIn
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#000",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "red",
    borderRadius: 100,
  },
  inputstyle: {
    marginBottom: 10,
    color: "#fff",
  },
  btn_container: {
    justifyContent: "center",
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
});
