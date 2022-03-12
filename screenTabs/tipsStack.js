import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tip from "../screens/tips/tips";
import ModalScreen from "../screens/tips/component/modal";

const Stack = createNativeStackNavigator();

const TipsStack = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen name="Tip" component={Tip} />
      <Stack.Screen name="news" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default TipsStack;
