const Tablar = (konu) => {
  const topicD = document.createElement("div");
  topicD.classList.add("topics");

  konu.forEach((e) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = e;
    topicD.append(tabDiv);
  });
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
};

const tabEkleyici = (secici) => {
  const tab = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/konular")
    .then((res) => {
      console.log(res.data);
      for (let key in res.data.konular) {
        for (let i = 0; i < res.data.konular[key].length; i++) {
          tab.appendChild(Tablar(res.data.konular[key][i]));
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Tablar, tabEkleyici };
