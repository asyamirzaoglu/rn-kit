import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Homepage";
import SearchableSelectScreen from "./components/Searchable-Select-Modal/SearchableSelectScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen
          name="SearchableSelectScreen"
          component={SearchableSelectScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
