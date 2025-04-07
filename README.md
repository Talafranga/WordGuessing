# Kelime Tahmin Oyunu

Bu proje, kelime tahmin etmeye dayalı interaktif bir web tabanlı oyundur. Farklı zorluk seviyelerinde Türkçe kelimeler içeren, kullanıcı dostu bir arayüze sahip bir uygulamadır.

## Live Demo

Oyunun canlı demosuna buradan erişebilirsiniz: [Kelime Tahmin Oyunu](https://talafranga.github.io/WordGuessing/)

## Oyun Hakkında

Kelime Tahmin Oyunu, kullanıcının belirli bir kelimeyi, ipucu olarak verilen anlamından yola çıkarak tahmin etmeye çalıştığı bir bulmaca oyunudur. Üç farklı zorluk seviyesinde (Kolay, Orta, Zor) kelimeler içerir.

## Nasıl Oynanır

1. Öncelikle bir zorluk seviyesi seçin: Kolay, Orta veya Zor
2. Ekranda kelimenin anlamı ve harf sayısı (boş kutular) gösterilir
3. Metin kutusuna tahmininizi yazın ve "Tahmin Et" düğmesine basın veya Enter tuşuna basın
4. Eğer tahmininiz doğruysa, tüm harfler ortaya çıkar ve tebrik mesajı görüntülenir
5. Eğer tahmininiz yanlışsa, yeniden deneyebilirsiniz
6. Zorlanırsanız, "Harf Alayım" düğmesine tıklayarak rastgele bir harf açığa çıkarabilirsiniz
7. "Yeni Oyun" düğmesi ile istediğiniz zaman yeni bir kelime ile oyuna başlayabilirsiniz

## Özellikler

- **Farklı Zorluk Seviyeleri**: Kolay, Orta ve Zor seviyelerde kelimeler
- **Gerçek Zamanlı Harf Görünümü**: Yazdıkça harfler kutularda anında görünür
- **İpucu Sistemi**: Zorlandığınızda rastgele bir harf açığa çıkarabilirsiniz
- **Skor Takibi**: Kelimeyi kaç denemede bulduğunuzu gösterir
- **Mobil Uyumlu Tasarım**: Her ekran boyutunda oynanabilir
- **Animasyonlar**: Kullanıcı deneyimini zenginleştiren görsel efektler

## Teknik Detaylar

Oyun şu teknolojilerle geliştirilmiştir:

- **HTML5**: Oyunun yapısal çerçevesi
- **CSS3**: Görsel tasarım ve animasyonlar
  - Flexbox düzeni
  - CSS animasyonları
  - Duyarlı (responsive) tasarım
- **JavaScript (ES6+)**: Oyun mantığı ve kullanıcı etkileşimi
  - DOM manipülasyonu
  - Asenkron veri yükleme (Fetch API)
  - Event listener'lar
  - Dinamik içerik oluşturma

### Dosya Yapısı

- `index.html`: Ana HTML dosyası
- `style.css`: Tüm stil tanımlamaları
- `script.js`: Oyun mantığı ve etkileşimler
- `easy-words.json`: Kolay seviye kelimeler
- `mid-words.json`: Orta seviye kelimeler
- `hard-words.json`: Zor seviye kelimeler
- `README.md`: Proje dokümantasyonu

### Veri Yapısı

Kelimeler, her zorluk seviyesi için ayrı JSON dosyalarında depolanır. Her kelime şu yapıdadır:

```json
{
  "word": "kelime",
  "meaning": "kelimenin anlamı"
}
```

## Kullanılan Programlama Yaklaşımları

- **Modüler Kod Yapısı**: Her işlev ayrı fonksiyonlarda organize edilmiştir
- **Asenkron Programlama**: Kelime verilerini yüklemek için async/await kullanılmıştır
- **Olay Tabanlı Programlama**: Kullanıcı etkileşimleri için event listener'lar kullanılmıştır
- **Hata Yönetimi**: try/catch blokları ile veri yükleme hataları ele alınmıştır
- **Responsive Tasarım**: Tüm cihazlarda çalışabilecek şekilde tasarlanmıştır
- **Animasyon ve Geçiş Efektleri**: CSS animasyonları ile kullanıcı deneyimi zenginleştirilmiştir

## Potansiyel Geliştirmeler

- Çoklu dil desteği
- Yüksek skor tablosu
- Zamana karşı oynama modu
- Çok oyunculu mod
- Sosyal medya paylaşım özellikleri
- Kelime kategorileri (hayvanlar, meslekler vb.)

## Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza indirin
2. Dosyaları bir web sunucusunda barındırın veya yerel bir sunucu kullanın
3. Tarayıcınızda `index.html` dosyasını açın
4. Oyunu oynamaya başlayın!

---

Kelime Tahmin Oyunu, JavaScript, HTML ve CSS becerilerini geliştirmek ve Türkçe kelime dağarcığını zenginleştirmek amacıyla oluşturulmuş eğitici bir projedir.

---

# Word Guessing Game

This project is an interactive web-based game focused on word guessing. It features a user-friendly interface with Turkish words at different difficulty levels.

## Live Demo

You can access the live demo of the game here: [Word Guessing Game](https://talafranga.github.io/WordGuessing/)

## About the Game

Word Guessing Game is a puzzle game where the user tries to guess a specific word based on its meaning provided as a clue. It includes words at three different difficulty levels (Easy, Medium, Hard).

## How to Play

1. First, select a difficulty level: Easy, Medium, or Hard
2. The meaning of the word and the number of letters (empty boxes) are displayed on the screen
3. Type your guess in the text box and press the "Guess" button or hit Enter
4. If your guess is correct, all letters will be revealed and a congratulation message will be displayed
5. If your guess is wrong, you can try again
6. If you're struggling, you can click the "Get a Letter" button to reveal a random letter
7. The "New Game" button allows you to start a new game with a different word at any time

## Features

- **Different Difficulty Levels**: Words at Easy, Medium, and Hard levels
- **Real-time Letter Display**: Letters appear in boxes instantly as you type
- **Hint System**: You can reveal a random letter when you're stuck
- **Score Tracking**: Shows how many attempts it took to find the word
- **Mobile-Friendly Design**: Playable on any screen size
- **Animations**: Visual effects that enhance the user experience

## Technical Details

The game was developed using these technologies:

- **HTML5**: Structural framework of the game
- **CSS3**: Visual design and animations
  - Flexbox layout
  - CSS animations
  - Responsive design
- **JavaScript (ES6+)**: Game logic and user interaction
  - DOM manipulation
  - Asynchronous data loading (Fetch API)
  - Event listeners
  - Dynamic content creation

### File Structure

- `index.html`: Main HTML file
- `style.css`: All style definitions
- `script.js`: Game logic and interactions
- `easy-words.json`: Easy level words
- `mid-words.json`: Medium level words
- `hard-words.json`: Hard level words
- `README.md`: Project documentation

### Data Structure

Words are stored in separate JSON files for each difficulty level. Each word has the following structure:

```json
{
  "word": "word",
  "meaning": "meaning of the word"
}
```

## Programming Approaches Used

- **Modular Code Structure**: Each function is organized in separate functions
- **Asynchronous Programming**: Async/await is used to load word data
- **Event-Driven Programming**: Event listeners are used for user interactions
- **Error Handling**: Try/catch blocks handle data loading errors
- **Responsive Design**: Designed to work on all devices
- **Animation and Transition Effects**: CSS animations enhance the user experience

## Potential Improvements

- Multi-language support
- High score table
- Time-based game mode
- Multiplayer mode
- Social media sharing features
- Word categories (animals, professions, etc.)

## Installation and Running

1. Download the project to your computer
2. Host the files on a web server or use a local server
3. Open the `index.html` file in your browser
4. Start playing the game!

---

Word Guessing Game is an educational project created to improve JavaScript, HTML, and CSS skills and to enrich Turkish vocabulary.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2023 Kelime Tahmin Oyunu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
