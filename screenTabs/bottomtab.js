import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Gettingstarted from "../screens/auths/gettingstarted";
import Tip from "../screens/tips/tips";
import Videos from "../screens/videos/videos";

const Tab = createMaterialBottomTabNavigator();

const Bottomtab = () => (
  <Tab.Navigator
    initialRouteName="tips"
    barStyle={{ backgroundColor: "#694fad", paddingBottom: 3 }}
  >
    <Tab.Screen
      name="Videos"
      component={Videos}
      options={{
        tabBarLabel: "Videos",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="video-image" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Tips"
      component={Tip}
      options={{
        tabBarLabel: "Tips",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="view-dashboard-variant"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Market"
      component={Tip}
      options={{
        tabBarLabel: "Market",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="cart-arrow-up"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Bottomtab;
