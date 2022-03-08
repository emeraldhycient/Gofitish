import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Gettingstarted from "./screens/auths/gettingstarted";
import Tip from "./screens/tips/tips";
import Videos from "./screens/videos/videos";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="tips" component={Tip} />
          <Tab.Screen name="Videos" component={Videos} />
          <Tab.Screen name="market" component={Tip} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
