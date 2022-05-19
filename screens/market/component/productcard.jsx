import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";

const Productcard = ({ navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("productdetails", {
          productid: 34,
          productname: "Product Name longer something",
        })
      }
      style={[
        tw`bg-white shadow rounded-3xl h-fit mx-auto my-2`,
        { width: "45%" },
      ]}
    >
      <View style={tw`bg-slate-900 rounded-3xl h-28 mb-2 shadow`}>
        <Image
          source={require("../../../assets/shoe.jpeg")}
          style={tw`h-28 w-full rounded-2xl`}
        />
      </View>
      <View style={tw`px-3 py-1`}>
        <Text style={tw`text-lg text-slate-900  leading-none	`}>
          Product Name longer something
        </Text>
        <Text
          style={tw`text-purple-400 bg-slate-900 p-1 w-30 mt-2 rounded-full text-center mx-auto`}
        >
          $10.00
        </Text>
      </View>
    </Pressable>
  );
};

export default Productcard;
