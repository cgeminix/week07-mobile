import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CafeScreen1 from "./components/CafeScreen1"
import CafeScreen2 from "./components/CafeScreen2"
import CafeScreen3 from "./components/CafeScreen3"
import CafeScreen4 from "./components/CafeScreen4"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="CafeScreen1" component={CafeScreen1} />
        <Stack.Screen options={{ headerShown: false }} name="CafeScreen2" component={CafeScreen2} />
        <Stack.Screen options={{ headerShown: false }} name="CafeScreen3" component={CafeScreen3} />
      </Stack.Navigator>
    </NavigationContainer>

  );
  //return (<CafeScreen4/>)
}