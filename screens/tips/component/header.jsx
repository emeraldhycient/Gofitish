import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={[styles.header, styles.shadowProp]}>
        <TouchableOpacity>
          <View style={styles.humancontainer}>
            <Image
              source={require("../../../assets/images/human.png")}
              style={styles.human}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Fontisto name="bell" size={23} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: "#ff7f56",
    borderBottomWidth: 2,
  },
  humancontainer: {
    backgroundColor: "#cacaca",
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  human: {
    height: 40,
    width: 40,
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
