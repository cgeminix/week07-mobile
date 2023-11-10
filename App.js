import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CafeScreen1 from "./components/CafeScreen1"
import CafeScreen2 from "./components/CafeScreen2"


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="CafeScreen1" component={CafeScreen1} />
        <Stack.Screen options={{ headerShown: false }} name="Shop near me" component={CafeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>

  );
  //return (<CafeScreen2/>)
}
