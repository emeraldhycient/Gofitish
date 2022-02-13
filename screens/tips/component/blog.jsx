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
import Entypo from "react-native-vector-icons/Entypo";

const Blog = () => {
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
        setnews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useLayoutEffect(() => {
    getNews();
  }, []);

  return (
    <View>
      <Text style={styles.title}> Latest Blog</Text>
      <ScrollView>
        {news ? (
          news.map((data, i) => (
            <View style={styles.Blog} key={i}>
              <View style={styles.iconcontainer}>
                <Image
                  source={require("../../../assets/images/abs.png")}
                  style={styles.icon}
                />
              </View>
              <View>
                <Text style={styles.source}>{data.source}</Text>
                <Text style={styles.desc}>{data.title}</Text>
                <Text style={styles.link}>
                  Read More <Entypo name="link" color="yellow" size={20} />
                </Text>
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
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 15,
    color: "#FFFFFF",
  },
  Blog: {
    height: 110,
    width: Dimensions.get("screen").width - 15,
    backgroundColor: "#04293A",
    borderRadius: 8,
    marginHorizontal: 5,
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  iconcontainer: {
    backgroundColor: "#cacaca",
    height: 40,
    width: 40,
    marginRight: 10,
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
  source: {
    fontSize: 16,
    fontWeight: "bold",
    color: "yellow",
    width: Dimensions.get("screen").width - 50,
  },
  desc: {
    fontSize: 16,
    color: "#fafafa",
    marginVertical: 10,
  },
  link: {
    fontSize: 15,
    color: "#c5c5c5",
  },
});
