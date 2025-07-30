// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="tarih">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

function newsBuilder(newsItem) {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article");
  const newsTittle = document.createElement("h2");
  const newsDate = document.createElement("p");
  newsDate.classList.add("date");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");
  const button = document.createElement("button");
  articleDiv.append(
    newsTittle,
    newsDate,
    paragraph1,
    paragraph2,
    paragraph3,
    button
  );
  button.classList.add("expandButton");
  button.textContent = "+";
  button.addEventListener("click", () => articleDiv.classList.toggle("isOpen"));

  newsTittle.textContent = newsItem.baslik;
  newsDate.textContent = newsItem.tarih;
  paragraph1.textContent = newsItem.ilkParagraf;
  paragraph2.textContent = newsItem.ikinciParagraf;
  paragraph3.textContent = newsItem.ucuncuParagraf;

  return articleDiv;
}

newsData.forEach((news) => {
  document.querySelector(".articleList").appendChild(newsBuilder(news));
});
