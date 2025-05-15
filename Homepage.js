import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { GradientButton } from "./components/GradientButton";
import { useNavigation } from "@react-navigation/native";

const { height: screenHeight } = Dimensions.get("screen");

export default function Homepage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>React Native Kit</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <GradientButton
          title="Searchable Select Modal"
          onPress={() => navigation.navigate("SearchableSelectScreen")}
        />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Made by Asya Mirzaoğlu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    ...(Platform.OS === "ios" ? { flex: 1 } : {}),
  },
  headerContainer: {
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#353535",
  },
  scrollContainer: {
    height: Platform.OS === "ios" ? screenHeight * 0.84 : screenHeight * 0.74,
    alignItems: "center",
  },
  footerContainer: {
    height: screenHeight * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "500",
    color: "#888",
  },
});
