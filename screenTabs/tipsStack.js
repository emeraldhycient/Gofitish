import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tip from "../screens/tips/tips";
import ModalScreen from "../screens/tips/component/modal";

const Stack = createNativeStackNavigator();

const TipsStack = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen
        name="Tip"
        options={{ headerShown: false }}
        component={Tip}
      />
      <Stack.Screen
        name="news"
        component={ModalScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default TipsStack;
