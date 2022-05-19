import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import Feather from "react-native-vector-icons/Feather";

const ProductDetails = ({ route, navigation }) => {
  const { productid, productname } = route.params;

  return (
    <View>
      <ScrollView>
        <Image source={require("../../assets/shoe.jpeg")} style={styles.img} />
        <ScrollView
          style={[
            tw`bg-gray-100 rounded-t-3xl w-full h-full -mt-4 px-4 pt-4 pb-56`,
            styles.mainView,
          ]}
        >
          <Text style={tw`text-slate-900 font-bold text-xl`}>
            {productname} elit Cumque elit. Cumque
          </Text>
          <View style={tw`w-full flex flex-row justify-end items-center py-2`}>
            <Text
              style={tw`text-slate-900 font-bold text-sm text-yellow-400 rounded-lg  p-2 shadow-sm`}
            >
              3.2 Reviews
            </Text>
          </View>
          <Text style={tw`text-slate-900 font-bold text-lg`}>Description</Text>
          <Text style={tw`text-[#a7abab] font-bold text-base`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            voluptatem reprehenderit, eius nostrum, aut totam blanditiis ipsa
            iste natus, veniam fugit dolorum eaque officia quaerat. Similique
            voluptatum sed earum eligendi. Itaque modi alias aut suscipit optio
            dolore consectetur laudantium debitis iure veniam illum ea mollitia
            magnam atque nihil nulla temporibus et minus, hic, voluptatem
            sapiente! Odio dolorem ducimus deserunt blanditiis.
          </Text>
          <View style={tw`w-full flex flex-row justify-end items-center py-2`}>
            <Image
              source={require("../../assets/shoe.jpeg")}
              style={[
                tw`border border-gray-200 rounded-lg mx-auto`,
                { width: "24%", height: 120 },
              ]}
            />
            <Image
              source={require("../../assets/shoe.jpeg")}
              style={[
                tw`border border-gray-200 rounded-lg mx-auto`,
                { width: "24%", height: 120 },
              ]}
            />
            <Image
              source={require("../../assets/shoe.jpeg")}
              style={[
                tw`border border-gray-200 rounded-lg mx-auto`,
                { width: "24%", height: 120 },
              ]}
            />
            <Image
              source={require("../../assets/shoe.jpeg")}
              style={[
                tw`border border-gray-200 rounded-lg mx-auto`,
                { width: "24%", height: 120 },
              ]}
            />
          </View>
        </ScrollView>
      </ScrollView>
      <View
        style={tw`flex justify-between items-center flex-row py-3 px-4 bg-white shadow rounded-t-3xl`}
      >
        <View style={tw`flex flex-row items-end`}>
          <Text style={tw`text-purple-500 font-bold text-lg`}>$</Text>
          <Text style={tw`text-4xl font-bold`}>{productid}3</Text>
        </View>
        <View
          style={tw`bg-slate-900 w-44 h-12 rounded-lg flex justify-center items-center`}
        >
          <Text style={tw`text-white text-lg font-bold`}>
            <Feather name="check-circle" size={20} color="white" />
            Buy now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 3.5,
  },
  mainView: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2.1,
  },
});
