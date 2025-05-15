export const texts = {
  BUTTON: {
    TR: "Bileşen Detayını Görmek İçin Tıkla",
    EN: "Click to View Component Details",
  },
  LABEL: {
    MULTIPLE: {
      TR: "Multiple Değeri True Olan Örnek (Çoklu Seçim):",
      EN: 'Example with Multiple Set to "True" (Multi):',
    },
    SINGLE: {
      TR: "Multiple Değeri False Olan Örnek (Tek Seçim):",
      EN: 'Example with Multiple Set to "False" (Single):',
    },
  },
  SELECTED: {
    MULTIPLE: {
      TR: "Seçilen (çoklu):",
      EN: "Selected (multiple):",
    },
    SINGLE: {
      TR: "Seçilen (tekli):",
      EN: "Selected (single):",
    },
  },
  CLOSE: {
    TR: "Kapat",
    EN: "Close",
  },
  DESCRIPTION: {
    TR: `Aşağıda yer alan içerisinde ürün seçiniz yazılı butonlar, aslında Expo'nun mevcut dropdown ve autocomplete bileşenlerinin büyük veri setlerinde kullanışlı olmaması ve görüntü olarak çok ilkel kalması sebebiyle oluşturulmuş bir modalı tetikliyor. Bu modal, daha gelişmiş bir seçim deneyimi sunmak için kullanılabilir. Kapatmak için modal dışındaki herhangi bir alana tıklamak yeterlidir.`,
    EN: `The button below labeled "Select Product" actually triggers a modal, created because Expo’s built-in dropdown and autocomplete components are not useful with large datasets and look quite basic. This modal can be used to offer a more advanced selection experience. To close it, simply tap anywhere outside the modal.`,
  },
  MODAL_EXPLANATION: {
    TR: `SearchableSelectModal bileşeni içine altı adet property (özellik) gönderiyoruz:

•) type: Buton üzerinde gösterilecek metni belirtir. Bu metin, kullanıcıya ne tür veriler arasından seçim yapacağını belirtmek için kullanılır. Örneğin: "Ürün", "Kategori", "Şehir" vb.

•) data: Seçim yapılabilecek veri listesini içeren bir dizidir. Bu dizi, modal içinde arama ve listeleme işlemleri için kullanılır.

•) multiple: Kullanıcının tekli mi yoksa çoklu seçim mi yapabileceğini belirler. Eğer "true" olarak ayarlanırsa çoklu seçim yapılabilir. "false" olduğunda yalnızca bir seçim yapılabilir.

•) darkMode: Bileşenin açık (light) veya koyu (dark) tema görünümünde olup olmayacağını belirtir. Varsayılan değeri açık temadır.

•) onSelect: Bu, kullanıcı seçim yaptığında tetiklenen bir geri çağırma (callback) fonksiyonudur. Seçilen item'lar bu fonksiyon üzerinden dışarıya iletilir.

•) language: Bileşenin dili bu özellik üzerinden belirlenir. Bu özellik bileşeni çok dilli uygulamalara entegre etmek için oldukça esneklik sağlar.
`,
    EN: `SearchableSelectModal component accepts six properties:

•) type: Specifies the text displayed on the button. This text helps the user understand what kind of data they are selecting from.

•) data: An array containing the list of selectable data. Used for search and listing inside the modal.

•) multiple: Determines whether the user can make a single or multiple selection. true allows multi-select, false allows single-select.

•) darkMode: Indicates whether the component should appear in light or dark theme. Default is light.

•) onSelect: A callback function triggered when the user makes a selection. Selected items are returned via this function.

•) language: Determines the language of the component. This helps support multilingual apps with ease.
`,
  },
  DUMMY_DATA: {
    TR: [
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
    ],
    EN: [
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
    ],
  },
};
