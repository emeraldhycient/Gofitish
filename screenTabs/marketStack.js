import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Market from "../screens/market/market";
import ProductDetails from "../screens/market/productdetails";

const Stack = createNativeStackNavigator();

const MarketStack = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen
        name="list"
        options={{ headerShown: false }}
        component={Market}
      />
      <Stack.Screen
        name="productdetails"
        component={ProductDetails}
        options={({ route }) => ({ title: route.params.productname })}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default MarketStack;
