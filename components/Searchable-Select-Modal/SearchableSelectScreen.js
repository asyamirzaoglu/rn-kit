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

const DUMMY_DATA_TR = [
  "Dizüstü Bilgisayar",
  "Bluetooth Kulaklık",
  "USB-C Şarj Kablosu",
  "Kablosuz Mouse",
  "Akıllı Telefon",
  "Masa Lambası",
  "Ofis Sandalyesi",
  "Notebook Soğutucu",
  "Harici Hard Disk",
  "Web Kamera",
  "Yazıcı",
  "Klavye",
  "Powerbank",
  "Monitör",
  "HDMI Kablo",
  "Wi-Fi Router",
  "Taşınabilir Projektör",
  "Tablet",
  "Masaüstü Bilgisayar",
  "Akıllı Saat",
  "Barkod Okuyucu",
  "Ethernet Switch",
  "Termos",
  "Çoklu Priz",
  "Laptop Standı",
];

const DUMMY_DATA_EN = [
  "Laptop",
  "Bluetooth Headset",
  "USB-C Charging Cable",
  "Wireless Mouse",
  "Smartphone",
  "Desk Lamp",
  "Office Chair",
  "Notebook Cooler",
  "External Hard Drive",
  "Webcam",
  "Printer",
  "Keyboard",
  "Power Bank",
  "Monitor",
  "HDMI Cable",
  "Wi-Fi Router",
  "Portable Projector",
  "Tablet",
  "Desktop Computer",
  "Smartwatch",
  "Barcode Scanner",
  "Ethernet Switch",
  "Thermos",
  "Power Strip",
  "Laptop Stand",
];

export default function SearchableSelectScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [multiSelectedProducts, setMultiSelectedProducts] = useState([]);
  const [singleSelectedProduct, setSingleSelectedProduct] = useState([]);
  const [language, setLanguage] = useState("TR");
  const isTR = language === "TR";
  const data = isTR ? DUMMY_DATA_TR : DUMMY_DATA_EN;
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
          {isTR
            ? ` Aşağıda yer alan içerisinde ürün seçiniz yazılı butonlar, aslında Expo'nun mevcut dropdown ve autocomplete bileşenlerinin büyük veri setlerinde kullanışlı olmaması ve görüntü olarak çok ilkel kalması sebebiyle oluşturulmuş bir modalı tetikliyor. Bu modal, daha gelişmiş bir seçim deneyimi sunmak için kullanılabilir. Kapatmak için modal dışındaki herhangi bir alana tıklamak yeterlidir.`
            : `The button below labeled "Select Product" actually triggers a modal, created because Expo’s built-in dropdown and autocomplete components are not useful with large datasets and look quite basic. This modal can be used to offer a more advanced selection experience. To close it, simply tap anywhere outside the modal.`}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.detailButtonText}>
          {isTR
            ? `Bileşen Detayını Görmek İçin Tıkla`
            : `Click to View Component Details`}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>
        {isTR
          ? "Multiple Değeri True Olan Örnek (Çoklu Seçim):"
          : 'Example with Multiple Set to "True" (Multi):'}
      </Text>
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
      <Text style={styles.label}>
        {isTR
          ? "Multiple Değeri False Olan Örnek (Tek Seçim):"
          : 'Example with Multiple Set to "False" (Single):'}
      </Text>
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
          {isTR
            ? `Seçilen (çoklu): ${multiSelectedProducts.join(", ")}`
            : `Selected (multiple): ${multiSelectedProducts.join(", ")}`}
        </Text>
      )}

      {singleSelectedProduct.length > 0 && (
        <Text style={styles.selectedInfo}>
          {isTR
            ? `Seçilen (tekli): ${singleSelectedProduct[0]}`
            : `Selected (single): ${singleSelectedProduct[0]}`}
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
                {isTR ? (
                  <>
                    <Text style={styles.boldText}>SearchableSelectModal</Text>{" "}
                    bileşeni içine altı adet property (özellik) gönderiyoruz:
                    {"\n\n"}
                    <Text style={styles.boldText}>•) type:</Text> Buton üzerinde
                    gösterilecek metni belirtir. Bu metin, kullanıcıya ne tür
                    veriler arasından seçim yapacağını belirtmek için
                    kullanılır. Örneğin: "Ürün", "Kategori", "Şehir" vb.{"\n\n"}
                    <Text style={styles.boldText}>•) data:</Text> Seçim
                    yapılabilecek veri listesini içeren bir dizidir. Bu dizi,
                    modal içinde arama ve listeleme işlemleri için kullanılır.{" "}
                    {"\n\n"}
                    <Text style={styles.boldText}>•) multiple:</Text>{" "}
                    Kullanıcının tekli mi yoksa çoklu seçim mi yapabileceğini
                    belirler. Eğer "true" olarak ayarlanırsa çoklu seçim
                    yapılabilir. "false" olduğunda yalnızca bir seçim
                    yapılabilir. {"\n\n"}
                    <Text style={styles.boldText}>•) darkMode:</Text> Bileşenin
                    açık (light) veya koyu (dark) tema görünümünde olup
                    olmayacağını belirtir. Varsayılan değeri açık temadır.
                    {"\n\n"}
                    <Text style={styles.boldText}>•) onSelect:</Text> Bu,
                    kullanıcı seçim yaptığında tetiklenen bir geri çağırma
                    (callback) fonksiyonudur. Seçilen item'lar bu fonksiyon
                    üzerinden dışarıya iletilir. Bu sayede seçim sonuçları
                    ekranın başka yerlerinde işlenebilir. Ben bu örnekte
                    "console.log()" ile yazdırdım ve bileşenlerin altında
                    kullanıcıya gösterdim ama geliştirici isterse tabloya
                    ekleyebilir, filtreleme işlemlerinde kullanabilir ya da
                    başka fonksiyonlara aktarabilir.{"\n\n"}
                    <Text style={styles.boldText}>•) language:</Text> Bileşenin
                    dili bu özellik üzerinden belirlenir. Bu örnekte, sayfanın
                    sağ üst köşesinde bulunan radio button (TR / EN) ile seçilen
                    dil, `language` prop'u üzerinden bileşene gönderilmektedir.
                    Böylece modal içerisindeki metinler otomatik olarak seçilen
                    dile göre güncellenir. Ancak geliştirici isterse bu değeri
                    manuel olarak "EN", "TR" şeklinde doğrudan verebilir veya
                    kendi ihtiyacına göre yeni dil seçenekleri ekleyebilir. Bu
                    özellik bileşeni çok dilli uygulamalara entegre etmek için
                    oldukça esneklik sağlar.
                  </>
                ) : (
                  <>
                    <Text style={styles.boldText}>SearchableSelectModal</Text>{" "}
                    component accepts six properties:{"\n\n"}
                    <Text style={styles.boldText}>•) type:</Text> Specifies the
                    text displayed on the button. This text helps the user
                    understand what kind of data they are selecting from. For
                    example: "Product", "Category", "City", etc.{"\n\n"}
                    <Text style={styles.boldText}>•) data:</Text> An array
                    containing the list of selectable data. This array is used
                    for search and listing inside the modal.{"\n\n"}
                    <Text style={styles.boldText}>•) multiple:</Text> Determines
                    whether the user can make a single or multiple selection. If
                    set to "true", multiple selection is allowed. If set to
                    "false", only one item can be selected.{"\n\n"}
                    <Text style={styles.boldText}>•) darkMode:</Text> Indicates
                    whether the component should appear in light or dark theme.
                    Default is light.{"\n\n"}
                    <Text style={styles.boldText}>•) onSelect:</Text> This is a
                    callback function triggered when the user makes a selection.
                    The selected items are passed out through this function.
                    This way, selection results can be processed elsewhere on
                    the screen. In this example, I used "console.log()" and
                    displayed the result under the component, but a developer
                    can also use it in a table, apply filters, or pass it to
                    other functions.{"\n\n"}
                    <Text style={styles.boldText}>•) language:</Text> The
                    language of the component is determined by this property. In
                    this example, the selected language is passed to the
                    component via the radio buttons (TR / EN) located at the top
                    right of the screen. This way, the texts inside the modal
                    are automatically updated based on the selected language.
                    However, developers can also manually set this value as "EN"
                    or "TR", or add new language options according to their
                    needs. This property provides great flexibility for
                    integrating the component into multilingual applications.
                  </>
                )}
              </Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.detailButtonText}>
                  {isTR ? "Kapat" : "Close"}
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
    marginTop: 20,
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
