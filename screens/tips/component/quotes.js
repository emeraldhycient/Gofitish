import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

const Quotes = () => {
  const { REACT_APP_quotesUrl, REACT_APP_quotesapi } = process.env;

  const [allquote, setallquote] = useState([]);

  const getQuotes = (pagination) => {
    var options = {
      method: "GET",
      url: "https://bodybuilding-quotes1.p.rapidapi.com/quotes",
      params: { page: "1" },
      headers: {
        "x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
        "x-rapidapi-key": "f208687e5bmsh09d7ae5b67c7385p12eee7jsnb6715d041e02",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (response.status === 200) {
          setallquote(response.data);
        } else {
          console.log("somethibng occured");
        }
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    getQuotes();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Fitness Quotes</Text>
      <ScrollView horizontal>
        {allquote ? (
          allquote.map((qte, i) => (
            <TouchableOpacity key={i}>
              <View style={[styles.quotes, styles.shadowProp]} key={i}>
                <View style={styles.iconcontainer}>
                  <MaterialCommunityIcons
                    name="comment-quote-outline"
                    size={30}
                    color="green"
                  />
                </View>
                <Text style={styles.desc}>{qte.quote}</Text>
                <Text style={styles.author}>--- {qte.author}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.quotes}></View>
        )}
      </ScrollView>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 25,
    color: "#fff",
  },
  quotes: {
    height: 200,
    width: Dimensions.get("screen").width - 40,
    backgroundColor: "#000",
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  iconcontainer: {
    backgroundColor: "#cacaca",
    height: 40,
    width: 40,
    marginLeft: 5,
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
  desc: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
    color: "#f4f4f4",
  },
  author: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ff7f56",
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
