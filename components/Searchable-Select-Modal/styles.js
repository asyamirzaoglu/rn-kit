import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const getStyles = (darkMode = false) => {
  const colors = {
    background: darkMode ? "#1e1e1e" : "#ffffff",
    border: darkMode ? "#444" : "#ccc",
    text: darkMode ? "#f0f0f0" : "#333",
    inputBorder: darkMode ? "#666" : "#b8b8b8",
    inputText: darkMode ? "#e0e0e0" : "#333",
    overlay: "rgba(0,0,0,0.4)",
    placeholder: darkMode ? "#aaa" : "#777",
    itemBorder: darkMode ? "#333" : "#e6e6e6",
    selectAllMiniText: darkMode ? "#f4d06f" : "#d4af37",
    selectedItemBorder: darkMode ? "#f4d06f" : "#d4af37",
  };

  return StyleSheet.create({
    selectButton: {
      width: width * 0.9,
      padding: 12,
      borderRadius: 8,
      backgroundColor: colors.background,
      borderColor: colors.border,
      borderWidth: 1,
      marginBottom: 15,
    },
    selectText: {
      fontSize: 16,
      color: colors.text,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: colors.overlay,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 100,
    },
    modalContainer: {
      width: width * 0.9,
      maxHeight: height * 0.7,
      backgroundColor: colors.background,
      borderRadius: 10,
      padding: 16,
      borderWidth: darkMode ? 1 : 0,
      borderColor: darkMode ? "#333" : undefined,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
      marginTop: 5,
      textAlign: "center",
      color: colors.text,
    },
    searchInput: {
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 6,
      padding: 10,
      marginBottom: 5,
      color: colors.inputText,
    },
    itemButton: {
      padding: 10,
    },
    selectedItem: {
      borderWidth: 1,
      borderColor: colors.selectedItemBorder,
      marginBottom: 5,
      borderRadius: 6,
    },
    itemText: {
      color: colors.text,
    },
    selectAllMiniButton: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 4,
      alignSelf: "flex-end",
    },
    selectAllMiniText: {
      color: colors.selectAllMiniText,
      fontSize: 12,
      fontWeight: "600",
    },
  });
};

export default getStyles;
