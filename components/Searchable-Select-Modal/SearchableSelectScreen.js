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

const DUMMY_DATA = [
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

export default function SearchableSelectScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [multiSelectedProducts, setMultiSelectedProducts] = useState([]);
  const [singleSelectedProduct, setSingleSelectedProduct] = useState([]);

  return (
    <ScrollView style={{ flex: 1, paddingTop: 80, paddingHorizontal: 20 }}>
      <View style={styles.card}>
        <Text style={styles.descriptionText}>
          Aşağıda yer alan içerisinde ürün seçiniz yazılı butonlar, aslında
          Expo'nun mevcut dropdown ve autocomplete bileşenlerinin büyük veri
          setlerinde kullanışlı olmaması ve görüntü olarak çok ilkel kalması
          sebebiyle oluşturulmuş bir modalı tetikliyor. Bu modal, daha gelişmiş
          bir seçim deneyimi sunmak için kullanılabilir. Kapatmak için modal
          dışındaki herhangi bir alana tıklamak yeterlidir.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.detailButtonText}>
          Bileşen Detayını Görmek İçin Tıkla
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>
        Multiple Değeri True Olan Örnek (Çoklu Seçim):
      </Text>
      <SearchableSelectModal
        type="Ürün"
        data={DUMMY_DATA}
        multiple={true}
        darkMode={false}
        onSelect={(items) => {
          console.log("Seçilen ürünler (Çoklu):", items);
          setMultiSelectedProducts(items);
        }}
      />
      <Text style={styles.label}>
        Multiple Değeri False Olan Örnek (Tek Seçim):
      </Text>
      <SearchableSelectModal
        type="Ürün"
        data={DUMMY_DATA}
        multiple={false}
        darkMode={false}
        onSelect={(items) => {
          console.log("Seçilen ürünler (Tek):", items);
          setSingleSelectedProduct(items);
        }}
      />
      {multiSelectedProducts.length > 0 && (
        <Text style={styles.selectedInfo}>
          Seçilen (çoklu): {multiSelectedProducts.join(", ")}
        </Text>
      )}

      {singleSelectedProduct.length > 0 && (
        <Text style={styles.selectedInfo}>
          Seçilen (tekli): {singleSelectedProduct[0]}
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
                <Text style={styles.boldText}>SearchableSelectModal</Text>{" "}
                bileşeni içine beş adet property (özellik) gönderiyoruz:{" "}
                {"\n\n"}
                <Text style={styles.boldText}>type:</Text> Buton üzerinde
                gösterilecek metni belirtir. Bu metin, kullanıcıya ne tür
                veriler arasından seçim yapacağını belirtmek için kullanılır.
                Örneğin: "Ürün", "Kategori", "Şehir" vb.
                {"\n\n"}
                <Text style={styles.boldText}>data:</Text> Seçim yapılabilecek
                veri listesini içeren bir dizidir. Bu dizi, modal içinde arama
                ve listeleme işlemleri için kullanılır. {"\n\n"}
                <Text style={styles.boldText}>multiple:</Text> Kullanıcının
                tekli mi yoksa çoklu seçim mi yapabileceğini belirler. Eğer
                "true" olarak ayarlanırsa çoklu seçim yapılabilir. "false"
                olduğunda yalnızca bir seçim yapılabilir. {"\n\n"}
                <Text style={styles.boldText}>darkMode:</Text> Bileşenin açık
                (light) veya koyu (dark) tema görünümünde olup olmayacağını
                belirtir. Varsayılan değeri açık temadır. {"\n\n"}
                <Text style={styles.boldText}>onSelect:</Text> Bu, kullanıcı
                seçim yaptığında tetiklenen bir geri çağırma (callback)
                fonksiyonudur. Seçilen item'lar bu fonksiyon üzerinden dışarıya
                iletilir. Bu sayede seçim sonuçları ekranın başka yerlerinde
                işlenebilir. Ben bu örnekte "console.log()" ile yazdırdım ve
                bileşenlerin altında kullanıcıya gösterdim ama geliştirici isterse
                tabloya ekleyebilir, filtreleme işlemlerinde kullanabilir ya da
                başka fonksiyonlara aktarabilir.
              </Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.detailButtonText}>Kapat</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
