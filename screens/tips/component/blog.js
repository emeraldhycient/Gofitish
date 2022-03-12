import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import Entypo from "react-native-vector-icons/Entypo";

const Blog = ({ navigation }) => {
  const [news, setnews] = useState([]);

  const getNews = () => {
    var options = {
      method: "GET",
      url: "https://live-fitness-and-health-news.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "live-fitness-and-health-news.p.rapidapi.com",
        "x-rapidapi-key": "f208687e5bmsh09d7ae5b67c7385p12eee7jsnb6715d041e02",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const newsdata = response.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 10);
        setnews(newsdata);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useLayoutEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={styles.title}> Latest Blog</Text>
      <ScrollView>
        {news ? (
          news.map((data, i) => (
            <View style={styles.Blog} key={i}>
              <View style={[styles.iconcontainer, styles.shadowProp]}>
                <Image
                  source={{ uri: "https://source.unsplash.com/random" }}
                  style={styles.icon}
                />
              </View>
              <View
                style={{
                  width: Dimensions.get("window").width,
                  paddingHorizontal: 15,
                  flexShrink: 1,
                  padding: 5,
                }}
              >
                <Text style={styles.source}>{data.source}</Text>
                <Text style={styles.desc}>{data.title}</Text>
                <TouchableOpacity>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      navigation.navigate("news", {
                        url: data.url,
                        title: data.title,
                      })
                    }
                  >
                    Read More <Entypo name="link" color="#694fad" size={20} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.Blog}>
            <View style={styles.iconcontainer}>
              <Image
                source={require("../../../assets/images/abs.png")}
                style={styles.icon}
              />
            </View>
          </View>
        )}
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
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 25,
    color: "#FFFFFF",
  },
  Blog: {
    height: 130,
    width: Dimensions.get("screen").width - 15,
    backgroundColor: "#202028",
    borderRadius: 8,
    marginHorizontal: 5,
    marginTop: 2,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconcontainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  source: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c4c4c4",
    width: Dimensions.get("screen").width - 50,
  },
  desc: {
    fontSize: 16,
    color: "#fafafa",
    marginVertical: 10,
    flexShrink: 1,
  },
  link: {
    fontSize: 15,
    color: "#c5c5c5",
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
