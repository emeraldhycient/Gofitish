import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const Excercise = () => {
  const equips = [
    "assisted",
    "band",
    "barbell",
    "body%20weight",
    "bosu%20ball",
    "cable",
    "dumbbell",
    "elliptical%20machine",
    "ez%20barbell",
    "hammer",
    "kettlebell",
    "leverage%20machine",
    "medicine%20ball",
    "olympic%20barbell",
    "resistance%20band",
    "roller",
    "rope",
    "skierg%20machine",
    "sled%20machine",
    "smith%20machine",
    "stability%20ball",
    "stationary%20bike",
    "stepmill%20machine",
    "tire",
    "trap%20bar",
    "upper%20body%20ergometer",
    "weighted",
    "wheel%20roller",
  ];

  const [excersies, setexcersies] = useState([]);

  const genrand = () => {
    return Math.floor(Math.random() * equips.length);
  };

  const getExcercise = () => {
    const num = genrand();
    var options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${equips[num]}`,
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "f208687e5bmsh09d7ae5b67c7385p12eee7jsnb6715d041e02",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setexcersies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useLayoutEffect(() => {
    getExcercise();
  }, []);

  return (
    <View>
      <Text style={styles.title}> Excercise Suggestion</Text>
      <ScrollView horizontal>
        {excersies ? (
          excersies.map((ex, i) => (
            <TouchableOpacity key={i}>
              <View style={styles.excercise}>
                <View style={styles.iconcontainer}>
                  <Image
                    source={{ uri: ex.gifUrl }}
                    style={styles.icon}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.desc}>Name: {ex.name}</Text>
                  <Text style={styles.desc}>Bodypart: {ex.bodyPart}</Text>
                  <Text style={styles.desc}>Equipment: {ex.equipment}</Text>
                  <Text style={styles.desc}>Target: {ex.target}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.excercise}></View>
        )}
      </ScrollView>
    </View>
  );
};

export default Excercise;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
    color: "yellow",
  },
  excercise: {
    height: 300,
    width: Dimensions.get("screen").width - 30,
    backgroundColor: "#04293A",
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 10,
  },
  iconcontainer: {
    backgroundColor: "#cacaca",
    height: 150,
    width: Dimensions.get("screen").width - 30,
    marginTop: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 150,
    width: Dimensions.get("screen").width - 32,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  desc: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
    color: "#fafafa",
  },
});
