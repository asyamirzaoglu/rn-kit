import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const BUTTON_HEIGHT = width * 0.2;

export const GradientButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <LinearGradient
          colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.textWithShadow}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  gradient: {
    width: width * 0.95,
    height: BUTTON_HEIGHT,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textWithShadow: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
