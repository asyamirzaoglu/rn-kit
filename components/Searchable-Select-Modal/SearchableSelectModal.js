import { useState, useMemo } from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import getStyles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function SearchableSelectModal({
  type,
  data,
  multiple = false,
  darkMode = false,
  onSelect = () => {},
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [buttonWidth, setButtonWidth] = useState(0);
  const styles = getStyles(darkMode);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  const toggleSelection = (item) => {
    if (multiple) {
      const newSelectedItems = selectedItems.includes(item)
        ? selectedItems.filter((i) => i !== item)
        : [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      onSelect(newSelectedItems);
    } else {
      setSelectedItems([item]);
      onSelect([item]);
      setSearchQuery("");
      setModalVisible(false);
    }
  };

  const renderButtonLabel = () => {
    if (selectedItems.length === 0) {
      return type ? `${type} seçiniz` : "Seçiniz";
    }

    const joined = selectedItems.join(", ");
    return joined.length > 0 ? joined : "Seçiniz";
  };

  const closeModal = () => {
    setModalVisible(false);
    setSearchQuery("");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible(true)}
        onLayout={(e) => setButtonWidth(e.nativeEvent.layout.width)}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.selectText, { width: buttonWidth - 30 }]}
        >
          {renderButtonLabel()}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>
                  {type ? `${type} Seçimi` : "Seçim"} Yap
                </Text>
                <TextInput
                  placeholder="Ara..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  style={styles.searchInput}
                  placeholderTextColor={darkMode ? "#aaa" : "#777"}
                />
                {multiple && (
                  <TouchableOpacity
                    style={styles.selectAllMiniButton}
                    onPress={() => {
                      const allSelected = selectedItems.length === data.length;
                      const newSelection = allSelected ? [] : data;
                      setSelectedItems(newSelection);
                      onSelect(newSelection);
                    }}
                  >
                    <Text style={styles.selectAllMiniText}>
                      {selectedItems.length === data.length
                        ? "Temizle"
                        : "Tümünü Seç"}
                    </Text>
                  </TouchableOpacity>
                )}
                <FlatList
                  data={filteredData}
                  keyExtractor={(item) => item}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      style={[
                        styles.itemButton,
                        selectedItems.includes(item) && styles.selectedItem,
                        {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                      ]}
                      onPress={() => toggleSelection(item)}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          selectedItems.includes(item) && { fontWeight: "800" },
                        ]}
                      >
                        {item}
                      </Text>
                      {selectedItems.includes(item) ? (
                        <Ionicons
                          name="checkbox-outline"
                          size={20}
                          color={darkMode ? "#f4d06f" : "#d4af37"}
                        />
                      ) : (
                        <Ionicons
                          name="square-outline"
                          size={20}
                          color={darkMode ? "#777" : "#bbb"}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
