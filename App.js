import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Bottomtab from "./screenTabs/bottomtab";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Bottomtab />
      </NavigationContainer>
    </PaperProvider>
  );
}
