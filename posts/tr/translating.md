---
title: 'Dokümentasyonu çevirmek'
---

Axios'u mümkün olduğunca çok kişi için erişilebilir kılmak için bu dokümentasyonların tüm dillerde okunabilmesi önemlidir. İsteyen herkese her zaman minnettarız
belgelerin çevrilmesine yardımcı olmak için. Bu kılavuz, dokümentasyonları nasıl dilinize çevirebileceğiniz ile ilgili yönergeler bulunduruyor.
## Yapı

Her çeviri bir konfigürasyon `{dil-kısayolu}.lang.js` adında bir konfigürasyon dosyasından (örneğin: `en.lang.js`, `de.lang.js`) ve `posts/{language-shortcut}/*.md`de bulunan çevrilmiş dokümentasyon dosyalarından oluşur (örneğin: `posts/en`, `posts/de`). "{dil-kısayolu}", dilinizin [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) iki harfli koduyla değiştirilmelidir.

## Dilinizi yapılandırma

 - `en.lang.js` dosyasını kopyalayın.
 - `{dil-kısayolu}.lang.js` olarak yeniden adlandırın.
 - `display`ı kendi dilinizin adıyla değiştirin. Örneğin, Almanca çeviri yapıyorsanız, “Almanca” yerine “Deutsch” yazın.
 - Prefix'i `/{dil-kısayolu}/` olarak değiştirin.
 - `p` ve `t` alanlarındaki değerleri çevirin.
 - Sidebar'da `text` etiketli tüm özellikleri çevirin. **Not:** Bu dokümentasyonun en son sürümünden bu yana, sidebar'daki bağlantıların artık güncellenmesine gerek yoktur.

### Yapılandırmanın kaydedilmesi

Dilinizi yapılandırmayı ve yapılandırma dosyasındaki cümleleri ve bağlantıları çevirmeyi bitirdikten sonra, onu ana (root) yapılandırmaya kaydetmeniz gerekir. Bunu yapmak için `inert.config.js` dosyasını açın ve en üste aşağıdaki satırı ekleyin:

```js
const {dil-kısayolu}Config = require('./{language-shortcut}.config.js');
```

Elbette, `{dil-kısayolu}`nu doğru [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) koduyla (değişken adında da!) değiştirmeyi unutmayın.

Şimdi, `langs` sabitini (constant) arayın. Bu sabit (constant), `require` ifadenizin üzerinde bulunuyorsa, `require` ifadenizi onun üzerine taşıyın. `langs` listesine aşağıdaki nesneyi ekleyin:

```js
const langs = [
  ...
  {
    name: 'Dilinizi benzersiz şekilde tanımlayan bir ad, örneğin "İngilizce" veya "Almanca"',
    prefix: "Yapılandırma dosyasındakiyle aynı önek (prefix)",
    config: {dil-kısayolu}Config // Daha önce implemente ettiğiniz yapılandırma objesi
  }
  ...
];
```

Artık dosyaları çevirmeye başlayabilirsiniz. `posts/en` klasörünü `posts/{dil-kısayolu}` adında yeni bir klasör olarak kopyalayın ve tüm dosyaları çevirin (tabii ki dosya adlarını çevirmeyin).

Herhangi bir sorunla karşılaşırsanız, [issue oluşturmaktan](https://github.com/axios/axios-docs/issues/new/choose) çekinmeyin.
