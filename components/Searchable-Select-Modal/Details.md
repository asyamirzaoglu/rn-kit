# 🔍 Searchable Select Modal

## 🇹🇷 Türkçe

**Searchable Select Modal**, büyük veri setlerinde arama ve seçim yapılmasını kolaylaştıran, modern ve kullanıcı dostu bir React Native bileşenidir.

Bu bileşen, klasik dropdown çözümlerinin eksikliklerini kapatır. React Native'in varsayılan `Picker` ya da basit autocomplete çözümleri; estetikten uzak, sınırlı seçenek sunan ve kullanıcı deneyimini zayıflatabilen yapılar sunar. Ayrıca genellikle inputun altında açılan dropdownlar ekranın düzenini bozar ve alttaki içeriği kaydırır. **Searchable Select Modal** ise sayfa yapısını bozmadan, tam ekran bir modal içinde çalışır.

### 🎯 Ne Yapar?

- Tıklanabilir bir butonla açılan modal sunar.  
- Modal içinde arama yapılabilir ve liste filtrelenebilir.  
- Tekli ya da çoklu seçim yapılabilir.  
- Tüm renk ve stil ayarları `styles.js` dosyasında tanımlıdır ve özelleştirilebilir.  

🔗 [Stil dosyasını görüntüle](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/styles.js)  
🔗 [Ana bileşeni incele](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/SearchableSelectModal.js)  
🔗 [Örnek kullanımı gör](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/SearchableSelectScreen.js)

### ⚙️ Props (Özellikler)

| Prop        | Açıklama |
|-------------|----------|
| `type`      | Buton üzerinde görünen etikettir. Örneğin: "Kategori", "Şehir", "Ürün" gibi. |
| `data`      | Seçim yapılacak veri listesini içeren dizi. |
| `multiple`  | Çoklu seçim yapılmasını sağlar (`true`), tekli seçim yapılmasını sağlar (`false`). |
| `darkMode`  | Temayı belirler. Koyu mod için `true`, açık mod için `false`. Varsayılan: `false`. |
| `onSelect`  | Kullanıcı seçim yaptığında çalışan fonksiyondur. Seçilen veriler bu fonksiyonla dışarı aktarılır. |
| `language`  | Modal içeriğinin dilini belirler. Örneğin "TR" veya "EN". Sayfa üzerinden dinamik olarak gönderilebilir veya sabit bir değer atanabilir. |

### 🔧 Kullanım Şekli / Usage
<p align="center">
  <img src="https://github.com/user-attachments/assets/eeab94ea-e033-4806-a186-4556f0ae4357" />
</p>

Bu bileşen, geliştirme sürecini hızlandırmakla kalmaz, aynı zamanda kullanıcıya estetik ve sezgisel bir deneyim sunar.

### 💫 Örnek Kod Çıktısı / Sample Code Output
Aşağıda **SearchableSelectScreen()** bileşeninin çıktısı bulunmaktadır.

![seachable-select-screen](https://github.com/user-attachments/assets/7181ece7-da0e-47db-a204-799448cf1193)

Aşağıda **SearchableSelectModal()** bileşeninin çıktısı bulunmaktadır.

![searchable-select-modal-mobile](https://github.com/user-attachments/assets/17715d93-d6c4-433e-8fc2-9aa2203b3578)

---

## 🇬🇧 English

**Searchable Select Modal** is a modern and user-friendly React Native component that simplifies search and selection in large datasets.

This component solves a common problem in mobile development: default dropdowns or pickers in React Native often look outdated and break the page layout by pushing other elements. They’re also limited in features and flexibility. In contrast, **Searchable Select Modal** opens as a full-screen modal, keeping your UI structure clean and intact.

### 🎯 What It Does

- Opens a full-screen modal triggered by a button.  
- Allows searching and filtering through a list.  
- Supports both single and multiple selection.  
- All styles and colors are customizable via a separate `styles.js` file.

🔗 [View the style file](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/styles.js)  
🔗 [Check the main component](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/SearchableSelectModal.js)  
🔗 [See example usage](https://github.com/asyamirzaoglu/rn-kit/blob/master/components/Searchable-Select-Modal/SearchableSelectScreen.js)

### ⚙️ Props

| Prop        | Description |
|-------------|-------------|
| `type`      | The label displayed on the button. For example: "City", "Category", "Product", etc. |
| `data`      | The array of items to be listed and selected. |
| `multiple`  | Enables multiple selection if `true`, single selection if `false`. |
| `darkMode`  | Sets the theme. Use `true` for dark mode, `false` for light mode. Default is `false`. |
| `onSelect`  | A callback function that returns the selected items. You can log them, filter other views, or use them in any logic. |
| `language`  | Defines the language of the modal content. For example, "TR" or "EN". It can be passed dynamically or set manually based on app needs. |

This component not only accelerates development but also improves the end-user experience with a clean and intuitive interface.
