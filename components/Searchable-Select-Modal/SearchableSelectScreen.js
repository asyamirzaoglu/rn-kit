import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import SearchableSelectModal from "./SearchableSelectModal";
import { texts } from "./languageText";

export default function SearchableSelectScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [multiSelectedProducts, setMultiSelectedProducts] = useState([]);
  const [singleSelectedProduct, setSingleSelectedProduct] = useState([]);
  const [language, setLanguage] = useState("TR");
  const data = texts.DUMMY_DATA[language];
  return (
    <ScrollView style={{ flex: 1, paddingTop: 120, paddingHorizontal: 20 }}>
      <View style={styles.languageToggle}>
        {["TR", "EN"].map((lang) => (
          <TouchableOpacity
            key={lang}
            onPress={() => setLanguage(lang)}
            style={[
              styles.langButton,
              language === lang && styles.langButtonActive,
              lang === "TR"
                ? { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
                : { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
            ]}
          >
            <Text
              style={[
                styles.langButtonText,
                language === lang && styles.langButtonTextActive,
              ]}
            >
              {lang}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.descriptionText}>
          {texts.DESCRIPTION[language]}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.detailButtonText}>{texts.BUTTON[language]}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>{texts.LABEL.MULTIPLE[language]}</Text>
      <SearchableSelectModal
        type="Ürün"
        data={data}
        multiple={true}
        darkMode={false}
        onSelect={(items) => {
          console.log("Seçilen ürünler (Çoklu):", items);
          setMultiSelectedProducts(items);
        }}
        language={language}
      />
      <Text style={styles.label}>{texts.LABEL.SINGLE[language]}</Text>
      <SearchableSelectModal
        type="Ürün"
        data={data}
        multiple={false}
        darkMode={false}
        onSelect={(items) => {
          console.log("Seçilen ürünler (Tek):", items);
          setSingleSelectedProduct(items);
        }}
        language={language}
      />
      {multiSelectedProducts.length > 0 && (
        <Text style={styles.selectedInfo}>
          {`${texts.SELECTED.MULTIPLE[language]} ${multiSelectedProducts.join(
            ", "
          )}`}
        </Text>
      )}

      {singleSelectedProduct.length > 0 && (
        <Text style={styles.selectedInfo}>
          {`${texts.SELECTED.SINGLE[language]} ${singleSelectedProduct[0]}`}
        </Text>
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalText}>
                {texts.MODAL_EXPLANATION[language]}
              </Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.detailButtonText}>
                  {texts.CLOSE[language]}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  languageToggle: {
    position: "absolute",
    top: -40,
    right: 20,
    flexDirection: "row",
    backgroundColor: "#dddddd",
    borderRadius: 10,
    zIndex: 1000,
  },

  langButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "transparent",
  },
  langButtonActive: {
    backgroundColor: "#d4af37",
  },
  langButtonText: {
    fontSize: 14,
    color: "#444",
    fontWeight: "600",
  },
  langButtonTextActive: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 10,
    color: "#333",
  },
  detailButton: {
    backgroundColor: "#d4af37",
    padding: 10,
    borderRadius: 6,
    marginBottom: 40,
    alignSelf: "center",
  },
  detailButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    maxHeight: "85%",
    width: "100%",
  },
  modalText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  closeButton: {
    backgroundColor: "#ef4444",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  selectedInfo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
});
