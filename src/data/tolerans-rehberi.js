// Blog: "Lazer Kesim Toleransları" için kapsamlı teknik rehber gövdesi (ham HTML).
// blog.js, post.bodyHtml varsa bu HTML'i doğrudan render eder.
export const toleransRehberiHtml = `<!-- WOLFSE teknik rehber: WordPress yazı gövdesi. Tema H1 başlığını ayrıca üretir. -->
<div class="wolfse-technical-guide">
<p>Bir metal parçanın teknik resimde doğru görünmesi, üretimde aynı doğrulukla ortaya çıkacağı anlamına gelmez. Sacın kendi kalınlık toleransı, lazer ışınının oluşturduğu kesim aralığı, ısı girdisi, parça geometrisi, büküm sırasında oluşan geri yaylanma, kaynak deformasyonu, talaşlı işlem bağlama hataları ve ölçüm yönteminin belirsizliği; parçanın gerçek ölçülerini birlikte etkiler. Bu nedenle <strong>lazer kesim toleransı</strong> tek bir rakamdan ibaret değildir. Doğru tolerans, parçanın fonksiyonuna, malzemesine, kalınlığına, boyutuna, üretim rotasına ve kontrol yöntemine göre belirlenir.</p>
<p>Bu rehber; yalnızca sac lazer kesimini değil, metal imalat zincirinin tamamını ele alır. Fiber lazer, boru-profil lazeri, plazma, oksijen kesim, su jeti ve testere ile kesim; CNC abkant büküm, silindir büküm ve presle şekillendirme; frezeleme, tornalama, delme, raybalama, taşlama ve kaynaklı montaj toleransları aynı çerçevede açıklanır. Amaç, tasarımcı ile üretici arasında ortak bir teknik dil kurmak, gereksiz dar toleransların maliyetini azaltmak ve gerçekten kritik ölçüleri güvence altına almaktır.</p>
<blockquote>
<p><strong>Önemli not:</strong> Bu sayfadaki sayısal aralıklar ön tasarım ve teklif hazırlığı için pratik başlangıç değerleridir. Evrensel makine garantisi değildir. Nihai tolerans; malzeme sertifikası, sac kalitesi, parça ölçüsü, geometri, adet, makine kapasitesi, fikstürleme ve kontrol planı incelendikten sonra teklif veya kalite dokümanında teyit edilmelidir.</p>
</blockquote>
<h2 id="icindekiler">İçindekiler</h2>
<ol>
<li>Tolerans nedir ve neden gereklidir?</li>
<li>Ölçü toleransı ile geometrik tolerans arasındaki fark</li>
<li>Tolerans seçiminde kullanılan temel standartlar</li>
<li>Lazer kesim toleranslarını etkileyen faktörler</li>
<li>Sac fiber lazer kesimde pratik tolerans aralıkları</li>
<li>Delik, kanal, köşe ve küçük detayların tasarımı</li>
<li>Boru ve profil lazer kesim toleransları</li>
<li>Plazma, oksijen, su jeti ve testere kesim toleransları</li>
<li>CNC abkant büküm ve şekillendirme toleransları</li>
<li>Silindir büküm, presleme ve delme toleransları</li>
<li>CNC freze, torna, delik ve taşlama toleransları</li>
<li>Geçmeler, yüzey pürüzlülüğü ve kenar şartları</li>
<li>Kaynaklı imalat ve montaj toleransları</li>
<li>Tolerans yığılması nasıl hesaplanır?</li>
<li>Teknik resimde toleranslar nasıl belirtilmelidir?</li>
<li>Ölçüm, kontrol ve kabul kuralları</li>
<li>Malzemeye göre tolerans davranışı</li>
<li>Toleransın maliyet ve termin üzerindeki etkisi</li>
<li>Üretilebilirlik kontrol listesi</li>
<li>Sık sorulan sorular</li>
</ol>
<h2 id="1-tolerans-nedir">1. Tolerans Nedir?</h2>
<p>Tolerans, nominal bir ölçünün kabul edilebilir alt ve üst sınırları arasındaki aralıktır. Teknik resimde 100 ±0,20 mm olarak belirtilen bir ölçü, 99,80 mm ile 100,20 mm arasında kabul edilir. Burada 100 mm nominal ölçü, ±0,20 mm ise izin verilen iki yönlü sapmadır. Aynı ölçü 100 +0,30/−0,00 mm biçiminde tek yönlü de tanımlanabilir. Bu durumda parçanın 100 mm'den küçük olması kabul edilmez, ancak 100,30 mm'ye kadar büyük olmasına izin verilir.</p>
<p>Toleransın temel amacı "mümkün olan en hassas parçayı" üretmek değildir. Amaç, parçanın işlevini yerine getireceği yeterli hassaslığı tanımlamaktır. Bir makine muhafazasının dış konturunda ±0,50 mm yeterliyken, rulman yatağında mikrometre seviyesinde ölçü ve geometrik kontrol gerekebilir. Her iki bölgeye de aynı dar toleransı vermek teknik olarak gereksiz, ekonomik olarak zararlıdır.</p>
<p>Toleranslar aşağıdaki işlevleri yerine getirir:</p>
<ul>
<li>Parçaların birbirine takılmasını ve montajın tekrarlanabilir olmasını sağlar.</li>
<li>Hareketli elemanlarda gerekli boşluk veya sıkılığı oluşturur.</li>
<li>Sızdırmazlık, yataklama, hizalama ve konumlandırma şartlarını güvence altına alır.</li>
<li>Seri üretimde kabul-red sınırlarını objektif hale getirir.</li>
<li>Üreticiye uygun proses, makine, takım ve kontrol yöntemini seçme imkânı verir.</li>
<li>Gereksiz hassasiyet taleplerini önleyerek maliyeti azaltır.</li>
</ul>
<p>Bir toleransın doğru olup olmadığı yalnızca üretilebilirlikle değerlendirilmez. Parçanın fonksiyonu, montaj sırası, servis koşulları, sıcaklık değişimi, kaplama kalınlığı, kaynak sonrası gerilim ve ölçüm erişimi de değerlendirilmelidir.</p>
<h2 id="2-olcu-toleransi-ile-geometrik-tolerans-arasindaki-fark">2. Ölçü Toleransı ile Geometrik Tolerans Arasındaki Fark</h2>
<p>Metal imalatta en sık yapılan hatalardan biri, bütün kalite beklentilerini yalnızca artı-eksi ölçülerle ifade etmektir. Oysa bir parçanın uzunluğu doğru olduğu halde eğri, burulmuş, konumu kaçmış veya yüzeyi paralel olmayabilir. Bu nedenle ölçü toleransları ve geometrik toleranslar ayrı kavramlardır.</p>
<h3 id="2-1-boyutsal-tolerans">2.1 Boyutsal tolerans</h3>
<p>Boyutsal tolerans; uzunluk, genişlik, çap, yarıçap, kalınlık veya açı gibi büyüklüklerin sınırlarını belirler. Örnekler:</p>
<ul>
<li>250 ±0,30 mm dış ölçü</li>
<li>Ø20 H7 delik</li>
<li>90° ±0,5° büküm açısı</li>
<li>R5 ±0,50 mm yarıçap</li>
</ul>
<h3 id="2-2-geometrik-tolerans">2.2 Geometrik tolerans</h3>
<p>Geometrik tolerans; biçim, yön, konum ve salgı özelliklerini kontrol eder. En yaygın karakteristikler şunlardır:</p>
<ul>
<li>Doğrusallık</li>
<li>Düzlemsellik</li>
<li>Dairesellik</li>
<li>Silindiriklik</li>
<li>Paralellik</li>
<li>Diklik</li>
<li>Açısallık</li>
<li>Gerçek konum</li>
<li>Eşmerkezlilik veya koaksiyellik gereksinimi</li>
<li>Profil toleransı</li>
<li>Dairesel ve toplam salgı</li>
</ul>
<p>Örneğin dört montaj deliğinin çapı tek tek doğru olabilir, fakat deliklerin birbirine göre konumu hatalıysa parça monte olmaz. Bu durumda her deliğe dar çap toleransı vermek yerine, uygun çap toleransı ile birlikte bir datum sistemine bağlı gerçek konum toleransı tanımlamak daha doğrudur.</p>
<h3 id="2-3-datum-neden-onemlidir">2.3 Datum neden önemlidir?</h3>
<p>Datum, ölçüm ve montaj için teorik referans oluşturan yüzey, eksen veya düzlemdir. Sac parçalarda tipik bir datum sistemi şu şekilde kurulabilir:</p>
<ul>
<li>Datum A: parçanın ana oturma yüzeyi</li>
<li>Datum B: ana uzun kenar</li>
<li>Datum C: ikinci yönü belirleyen kısa kenar veya bir referans deliği</li>
</ul>
<p>Bu sistem olmadan "delik konumu"nun nereden ölçüleceği belirsiz kalır. Teknik resimde yalnızca zincir ölçülendirme kullanılması, ölçülerin birikmesine ve kontrol sonuçlarının üretici ile müşteri arasında farklı yorumlanmasına yol açabilir.</p>
<h2 id="3-tolerans-seciminde-kullanilan-temel-standartlar">3. Tolerans Seçiminde Kullanılan Temel Standartlar</h2>
<p>Metal parçaların toleranslandırılmasında tek bir standart bütün soruları çözmez. Kesim yüzeyi, genel ölçüler, geometrik şartlar, kaynaklı yapı, yüzey pürüzlülüğü ve ölçüm kabulü farklı standart aileleriyle ele alınır.</p>
<h3 id="3-1-iso-2768-1-genel-boyutsal-toleranslar">3.1 ISO 2768-1: Genel boyutsal toleranslar</h3>
<p>ISO 2768-1, teknik resimde tek tek tolerans yazılmamış doğrusal ve açısal ölçüler için genel tolerans sınıfları tanımlar. İnce, orta, kaba ve çok kaba seviyelere karşılık gelen sınıflar; üretim yöntemine ve işlevsel gereksinime göre seçilir. Standart, her ölçünün yanına ayrı tolerans yazmak yerine antet veya teknik not bölümünde genel bir sınıf belirtilmesini kolaylaştırır.</p>
<p>Ancak genel tolerans notu, kritik ölçülerin yerine geçmez. Montaj deliği, yatak yüzeyi, sızdırmazlık kenarı, referans pimi, büküm sonrası fonksiyonel yükseklik veya kaynaklı montajın bağlantı noktası gibi ölçüler ayrıca toleranslandırılmalıdır.</p>
<h3 id="3-2-iso-22081-genel-geometrik-sartlar">3.2 ISO 22081: Genel geometrik şartlar</h3>
<p>Eski teknik resimlerde sık görülen ISO 2768-2 artık güncel geometrik genel tolerans standardı olarak kullanılmamalıdır. Genel geometrik özelliklerin ve genel boyut şartlarının tanımlanması için ISO 22081 yaklaşımı dikkate alınmalıdır. Bu geçiş önemlidir; çünkü yalnızca "ISO 2768-mK" gibi alışkanlıkla yazılmış bir not, güncel GPS sistemi içinde beklenen açıklığı her zaman sağlamaz.</p>
<h3 id="3-3-iso-9013-termal-kesim-kalitesinin-siniflandirilmasi">3.3 ISO 9013: Termal kesim kalitesinin sınıflandırılması</h3>
<p>ISO 9013; alevle kesim, plazma kesim ve lazer kesimle elde edilen termal kesim yüzeylerini geometrik ürün şartları ve kalite toleransları açısından sınıflandırır. Standart, kesim yüzeyinin diklik veya açısallık sapması, yüzey profili ve ilgili kalite özellikleri için ortak bir dil sağlar. Lazer kesim için standardın kapsadığı kalınlık aralığı ile modern makinelerin ticari kesim kapasitesi aynı şey değildir; tasarımda ve sözleşmede hangi kapsamın uygulanacağı ayrıca belirtilmelidir.</p>
<h3 id="3-4-iso-1101-ve-iso-5459-geometrik-tolerans-ve-datum-sistemi">3.4 ISO 1101 ve ISO 5459: Geometrik tolerans ve datum sistemi</h3>
<p>ISO 1101, geometrik tolerans sembollerinin ve yorum kurallarının temelini oluşturur. Datumların kurulması ve datum sistemlerinin tanımlanması için ISO 5459 yaklaşımı kullanılır. Özellikle delik grupları, kaynaklı montaj bağlantıları, işlenmiş referans yüzeyleri ve fikstürleme noktalarında bu standartlar kritik önem taşır.</p>
<h3 id="3-5-iso-286-delik-mil-gecmeleri">3.5 ISO 286: Delik-mil geçmeleri</h3>
<p>ISO 286 sistemi; H7, h6, g6, H8 gibi delik ve mil tolerans bölgelerini tanımlar. Bu kodlar lazer kesilmiş ham deliklere otomatik olarak uygulanmamalıdır. Örneğin Ø20 H7 istenen bir deliğin çoğu durumda lazerle nominale yakın ön kesilmesi, ardından delme, raybalama veya boralama ile tamamlanması gerekir.</p>
<h3 id="3-6-iso-13920-kaynakli-konstruksiyon-toleranslari">3.6 ISO 13920: Kaynaklı konstrüksiyon toleransları</h3>
<p>ISO 13920, kaynaklı konstrüksiyonlarda uzunluk, açı, şekil ve konum için genel tolerans sınıfları tanımlar. Kaynaklı imalatın ısı girdisi, çekme ve burulma etkileri nedeniyle kesilmiş tekil parçadan farklı değerlendirilmesi gerekir. Kaynaklı montajın fonksiyonel ölçüleri, işlenmiş referansları ve son kontrol yöntemi teknik resimde açıkça belirtilmelidir.</p>
<h3 id="3-7-iso-21920-ve-iso-13715-yuzey-ve-kenar-sartlari">3.7 ISO 21920 ve ISO 13715: Yüzey ve kenar şartları</h3>
<p>ISO 21920 serisi, profil yöntemiyle yüzey dokusunun teknik dokümantasyonda gösterilmesini ele alır. ISO 13715 ise şekli kesin tanımlanmamış kenarların, çapak ve kenar kırma şartlarının belirtilmesine yardımcı olur. "Tüm çapakları al" notu tek başına yeterli olmayabilir; keskin kenarın korunacağı, kırılacağı veya belirli pah/radyusla işleneceği bölgeler ayrılmalıdır.</p>
<h3 id="3-8-iso-1-ve-iso-14253-1-olcum-sicakligi-ve-kabul-karari">3.8 ISO 1 ve ISO 14253-1: Ölçüm sıcaklığı ve kabul kararı</h3>
<p>Boyutsal ve geometrik özelliklerin standart referans sıcaklığı ISO 1 kapsamında ele alınır. Hassas parçalar sıcak kesimden hemen sonra veya farklı sıcaklıktaki ortamlarda ölçülürse sonuçlar değişebilir. ISO 14253-1 ise ölçüm belirsizliğini dikkate alarak uygunluk ve uygunsuzluk kararlarının nasıl verileceğine ilişkin çerçeve sunar.</p>
<h2 id="4-neden-tek-bir-lazer-kesim-toleransi-yoktur">4. Neden Tek Bir "Lazer Kesim Toleransı" Yoktur?</h2>
<p>Bir lazer kesim makinesinin eksen konumlandırma hassasiyeti, üretilen parçanın toplam toleransına eşit değildir. Makine kataloğundaki pozisyonlama değeri; sacın dalgalanmasını, malzeme kalınlık değişimini, termal genleşmeyi, kesim aralığını, nozül durumunu, gaz kalitesini, kontur yönünü, parça düşmesini veya ölçüm yöntemini kapsamaz.</p>
<p>Gerçek parça toleransı aşağıdaki bileşenlerin toplam etkisidir:</p>
<ol>
<li><strong>Malzeme kalınlığı ve kalite sınıfı:</strong> Aynı nominal kalınlıktaki iki sacın gerçek kalınlığı ve düzlemselliği farklı olabilir.</li>
<li><strong>Malzeme türü:</strong> Karbon çeliği, paslanmaz, alüminyum, bakır ve pirinç lazer enerjisini farklı şekilde soğurur ve farklı ısıl davranış gösterir.</li>
<li><strong>Kesim gazı:</strong> Oksijen, azot veya basınçlı hava kullanımı; hız, yüzey rengi, oksit tabakası ve çapak davranışını değiştirir.</li>
<li><strong>Sac kalınlığı:</strong> Kalınlık arttıkça kesim konikliği, alt kenar çapak riski ve ısı girdisi genellikle artar.</li>
<li><strong>Parça boyutu:</strong> Büyük konturlarda termal genleşme, sac gerilimi ve referanslama etkileri daha görünür olur.</li>
<li><strong>Geometri:</strong> Dar köprüler, küçük delikler, uzun ince şeritler, keskin iç köşeler ve yoğun delik dizileri deformasyon riskini artırır.</li>
<li><strong>Yerleşim planı:</strong> Parçaların levha üzerindeki yönü, ortak kesim kullanımı, kesim sırası ve mikro bağlantılar ölçü kararlılığını etkiler.</li>
<li><strong>Makine ve optik durumu:</strong> Odak, nozül merkezleme, koruyucu cam, tabla temizliği ve kalibrasyon kaliteyi doğrudan etkiler.</li>
<li><strong>Sonraki prosesler:</strong> Çapak alma, taşlama, büküm, kaynak, galvaniz veya boya ölçüyü değiştirebilir.</li>
<li><strong>Kontrol yöntemi:</strong> Kumpas, mikrometre, yükseklik mastarı, optik ölçüm, CMM veya lazer tarama farklı belirsizliklere sahiptir.</li>
</ol>
<p>Bu nedenle doğru soru "Lazeriniz kaç mikron kesiyor?" değil; "Bu malzeme, kalınlık, geometri ve kontrol planında hangi özellikleri hangi toleransla garanti edebilirsiniz?" olmalıdır.</p>
<h2 id="5-sac-fiber-lazer-kesimde-pratik-tolerans-araliklari">5. Sac Fiber Lazer Kesimde Pratik Tolerans Aralıkları</h2>
<p>Aşağıdaki tablo, iyi durumdaki modern bir fiber lazer sistemiyle, uygun kalite sac üzerinde, normal parça geometrilerinde ve standart atölye kontrolüyle çalışırken ön tasarım için kullanılabilecek genel aralıkları gösterir. Değerler proses garantisi değildir; özellikle çok büyük parçalar, uzun ince geometriler, küçük delikler, yüksek yansıtıcılı malzemeler ve kalın levhalar ayrıca değerlendirilmelidir.</p>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Sac kalınlığı</th>
  <th style="text-align:right">Dış kontur için pratik başlangıç aralığı</th>
  <th style="text-align:right">Delik/kanal konumu için başlangıç aralığı</th>
  <th style="text-align:right">Tipik kerf değerlendirmesi</th>
  <th>Tasarım notu</th>
</tr>
</thead>
<tbody>
<tr>
  <td>0,5–3 mm</td>
  <td style="text-align:right">±0,10–0,20 mm</td>
  <td style="text-align:right">±0,15–0,25 mm</td>
  <td style="text-align:right">Yaklaşık 0,08–0,20 mm</td>
  <td>İnce ve uzun parçalar ısıyla eğilebilir</td>
</tr>
<tr>
  <td>&gt;3–6 mm</td>
  <td style="text-align:right">±0,15–0,25 mm</td>
  <td style="text-align:right">±0,20–0,30 mm</td>
  <td style="text-align:right">Yaklaşık 0,10–0,25 mm</td>
  <td>Küçük deliklerde çapak ve koniklik kontrol edilmeli</td>
</tr>
<tr>
  <td>&gt;6–12 mm</td>
  <td style="text-align:right">±0,20–0,35 mm</td>
  <td style="text-align:right">±0,25–0,40 mm</td>
  <td style="text-align:right">Yaklaşık 0,15–0,35 mm</td>
  <td>Kritik delikler sonradan işlenebilir bırakılmalı</td>
</tr>
<tr>
  <td>&gt;12–20 mm</td>
  <td style="text-align:right">±0,30–0,50 mm</td>
  <td style="text-align:right">±0,35–0,60 mm</td>
  <td style="text-align:right">Yaklaşık 0,20–0,45 mm</td>
  <td>Isı girdisi ve alt kenar kalitesi önem kazanır</td>
</tr>
<tr>
  <td>&gt;20–32 mm</td>
  <td style="text-align:right">±0,50–0,80 mm</td>
  <td style="text-align:right">±0,60–1,00 mm</td>
  <td style="text-align:right">Yaklaşık 0,30–0,60 mm</td>
  <td>Proses denemesi ve kalite numunesi önerilir</td>
</tr>
</tbody>
</table></div>
<p>Kerf, lazer ışınının malzemeden uzaklaştırdığı kesim aralığıdır. CAM yazılımı, nominal konturun elde edilmesi için ışın merkezini geometriye göre ofsetler. Ancak kerf değeri sabit değildir; malzeme, kalınlık, güç, odak, hız ve gaz parametreleriyle değişir. Tasarımcının DXF içinde elle "kerf payı" vermesi çoğu durumda doğru değildir. Dosya nominal geometriyle hazırlanmalı, proses telafisi üretici tarafından yapılmalıdır.</p>
<h3 id="5-1-buyuk-parcalarda-tolerans">5.1 Büyük parçalarda tolerans</h3>
<p>100 mm uzunluğundaki bir kontur ile 3.000 mm uzunluğundaki bir konturun aynı mutlak toleransla değerlendirilmesi gerçekçi olmayabilir. Büyük parçalar şu etkilerden daha fazla etkilenir:</p>
<ul>
<li>Levhanın başlangıç düzlemsizliği</li>
<li>Kesim boyunca biriken ısı</li>
<li>Tabla desteklerinin durumu</li>
<li>Sac iç gerilmelerinin serbest kalması</li>
<li>Parçanın kaldırılması ve istiflenmesi</li>
<li>Ortam ile parça sıcaklığı arasındaki fark</li>
</ul>
<p>Uzunluğu 1.000 mm'yi aşan kritik parçalar için yalnızca dış boy toleransı değil, düzlemsellik ve doğrusallık şartı da verilmelidir. Parça daha sonra bükülecek veya kaynaklanacaksa, son fonksiyonel ölçünün hangi proses aşamasında kontrol edileceği belirtilmelidir.</p>
<h3 id="5-2-ince-ve-uzun-geometriler">5.2 İnce ve uzun geometriler</h3>
<p>Genişliğine göre çok uzun şeritler, C biçimli çerçeveler, açık ağızlı halkalar ve yoğun yarıklı paneller kesim sonrası iç gerilme nedeniyle açılabilir veya kapanabilir. Bu davranış makine eksen hassasiyetinden bağımsızdır. Aşağıdaki önlemler kullanılabilir:</p>
<ul>
<li>Geometriyi mümkünse simetrik hale getirmek</li>
<li>Kesim sırasını ısıyı dağıtacak şekilde düzenlemek</li>
<li>Mikro bağlantı kullanmak</li>
<li>Kritik konturu en son kesmek</li>
<li>Parçayı levha üzerinde soğumaya bırakmak</li>
<li>Gerilim giderilmiş veya daha düzgün sac seçmek</li>
<li>Nihai kritik yüzeyi ikinci bir işlemle tamamlamak</li>
</ul>
<h3 id="5-3-kesim-yuzeyi-ile-dis-olcu-ayni-sey-degildir">5.3 Kesim yüzeyi ile dış ölçü aynı şey değildir</h3>
<p>Bir parçanın dış ölçüsü tolerans içinde olsa bile kesim yüzeyinde çizgilenme, alt kenarda çapak, lokal oyuk, giriş izi veya diklik sapması bulunabilir. Bu nedenle kalite beklentisi iki ayrı başlıkta yazılmalıdır:</p>
<ol>
<li>Boyutsal ve geometrik kabul şartları</li>
<li>Kesim yüzeyi ve kenar kalite şartları</li>
</ol>
<p>Görsel parçalar, boya öncesi yüzeyler, kaynak ağzı oluşturulan kenarlar ve sızdırmazlık amacı taşıyan yüzeyler için kenar kalitesi ayrıca tarif edilmelidir.</p>
<h2 id="6-delik-kanal-kose-ve-kucuk-detaylarin-tasarimi">6. Delik, Kanal, Köşe ve Küçük Detayların Tasarımı</h2>
<p>Lazer kesimde dış kontur genellikle en kararlı özelliklerden biridir. Küçük delikler ve dar kanallar ise ışının giriş-çıkışı, eriyik tahliyesi ve ısı yoğunluğu nedeniyle daha zor kontrol edilir.</p>
<h3 id="6-1-minimum-delik-capi">6.1 Minimum delik çapı</h3>
<p>Genel ön tasarım kuralı olarak delik çapının sac kalınlığından küçük seçilmemesi önerilir. İnce karbon çeliğinde uygun parametrelerle daha küçük delikler mümkün olabilir; kalın paslanmaz veya alüminyumda ise delik çapının 1,2–1,5 kat kalınlığa çıkarılması daha güvenli olabilir.</p>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Uygulama</th>
  <th>Ön tasarım önerisi</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Standart cıvata geçiş deliği</td>
  <td>Çap ≥ sac kalınlığı; montaj boşluğu ayrıca bırakılmalı</td>
</tr>
<tr>
  <td>Kalın levhada temiz delik</td>
  <td>Çap ≥ 1,2 × sac kalınlığı tercih edilebilir</td>
</tr>
<tr>
  <td>Hassas pim veya rulman deliği</td>
  <td>Lazerle ön delik + talaşlı son işlem</td>
</tr>
<tr>
  <td>Diş açılacak delik</td>
  <td>Uygun matkap çapına yakın ön kesim veya doğrudan delme</td>
</tr>
<tr>
  <td>Görsel küçük perforasyon</td>
  <td>Numune kesimiyle yüzey ve deformasyon teyidi</td>
</tr>
</tbody>
</table></div>
<p>Lazerle kesilmiş bir delikte üst ve alt çap aynı olmayabilir. Kalınlık boyunca koniklik, giriş noktası izi ve alt kenar çapakları oluşabilir. Bu nedenle çap toleransından daha kritik olan fonksiyonlarda delik, rayba veya boralama payıyla hazırlanmalıdır.</p>
<h3 id="6-2-delikler-arasi-ve-delik-kenar-mesafesi">6.2 Delikler arası ve delik-kenar mesafesi</h3>
<p>Delik kenarı ile parça dış kenarı arasında çok az et bırakılması, kesim sırasında ısının bu dar bölgede yoğunlaşmasına neden olur. Aynı risk birbirine çok yakın deliklerde de görülür. Ön tasarımda şu yaklaşım kullanılabilir:</p>
<ul>
<li>Delik kenarı ile dış kenar arasındaki net et mesafesi en az sac kalınlığı kadar olmalıdır.</li>
<li>Yük taşıyan bölgelerde veya büküme yakın deliklerde bu mesafe artırılmalıdır.</li>
<li>Çok sayıda küçük deliğin bulunduğu panellerde ısı dağılımı ve düzlemsellik ayrıca incelenmelidir.</li>
</ul>
<h3 id="6-3-dar-kanallar-ve-kopruler">6.3 Dar kanallar ve köprüler</h3>
<p>Kanal genişliğinin sac kalınlığından küçük olması, özellikle kalın levhada stabil eriyik tahliyesini zorlaştırır. Uzun dar kanallar ısı nedeniyle kapanabilir, dalgalanabilir veya alt yüzeyde çapak bırakabilir. Geçme tırnaklarında yalnızca nominal genişlik değil, montaj boşluğu ve kaplama payı da düşünülmelidir.</p>
<p>Örneğin 3 mm kalınlığında iki boyalı parçanın tırnak-kanal sistemiyle birleştirilmesi planlanıyorsa, kanalı tam 3,00 mm tasarlamak doğru değildir. Sacın gerçek kalınlığı, kesim yüzeyi, boya kalınlığı ve montaj açısı hesaba katılmalıdır. Prototip veya kupon testi yapılması en güvenli yöntemdir.</p>
<h3 id="6-4-ic-koseler">6.4 İç köşeler</h3>
<p>Lazer kesim, frezeye göre çok küçük iç köşeler oluşturabilir; ancak sıfır yarıçaplı matematiksel köşe fiziksel olarak mevcut değildir. Işın çapı ve hareket dinamiği küçük bir köşe radyusu oluşturur. İç köşeye kare bir parça oturacaksa rahatlama deliği, dog-bone detayı veya uygun montaj boşluğu kullanılabilir.</p>
<h3 id="6-5-giris-izi-ve-mikro-baglanti">6.5 Giriş izi ve mikro bağlantı</h3>
<p>Lazer ışını kontura çoğu zaman parça dışından bir giriş hareketiyle başlar. Küçük kapalı konturlarda giriş izi yüzeye yaklaşabilir. Görsel veya sızdırmazlık açısından kritik kenarlarda giriş noktasının yeri teknik resim veya üretim notunda belirtilmelidir.</p>
<p>Mikro bağlantı, kesilen parçanın tabla içine düşmesini veya kafa hareketi sırasında kalkmasını önler. Ancak koparıldığı yerde lokal bir çıkıntı bırakır. "Çapaksız parça" talebi varsa mikro bağlantı noktalarının taşlanıp taşlanmayacağı, hangi yüzeyde izin verildiği ve kenar kırma şartı netleştirilmelidir.</p>
<h2 id="7-boru-ve-profil-lazer-kesim-toleranslari">7. Boru ve Profil Lazer Kesim Toleransları</h2>
<p>Boru ve profil lazer kesimi, düz sac kesiminden farklı hata kaynaklarına sahiptir. Hammadde profilin doğruluğu, köşe radyusları, kaynak dikişi, ovalite, burulma, et kalınlığı ve aynaya bağlama durumu nihai parçayı etkiler.</p>
<p>Ön tasarım için kullanılabilecek genel aralıklar şöyledir:</p>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Özellik</th>
  <th style="text-align:right">Standart proje için başlangıç aralığı</th>
  <th>Kritik not</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Profil toplam kesim boyu</td>
  <td style="text-align:right">±0,50–1,50 mm</td>
  <td>Boy ve kesit büyüdükçe sapma artabilir</td>
</tr>
<tr>
  <td>Eksen boyunca delik/kanal konumu</td>
  <td style="text-align:right">±0,30–0,80 mm</td>
  <td>Profil doğruluğu ve bağlama etkili</td>
</tr>
<tr>
  <td>Çevresel/rotasyonel konum</td>
  <td style="text-align:right">±0,3–1,0°</td>
  <td>Kesit burulması ayrıca dikkate alınmalı</td>
</tr>
<tr>
  <td>Gönye kesim açısı</td>
  <td style="text-align:right">±0,5–1,0°</td>
  <td>Kesim boyu ve kesit ölçüsüne bağlı</td>
</tr>
<tr>
  <td>Karşılıklı yüzlerde özellik hizası</td>
  <td style="text-align:right">±0,50–1,00 mm</td>
  <td>Kaynak dikişi ve kesit deformasyonu etkili</td>
</tr>
</tbody>
</table></div>
<p>Boru üzerinde karşılıklı deliklerin tam eş eksenli olması gerekiyorsa yalnızca iki ayrı çap ölçüsü vermek yeterli değildir. Deliklerin ortak ekseni, profil datumları ve konum toleransı tanımlanmalıdır. Kaynaklı borularda dikişin yönü montaj veya görünüş açısından önemliyse teknik resimde belirtilmelidir.</p>
<p>Profil lazeriyle hazırlanan geçme ve kilitleme detaylarında, katalog profil ölçüsüne güvenilmemelidir. Örneğin 40 × 40 × 2 mm kutu profilin gerçek dış ölçüsü, köşe radyusu ve et kalınlığı partiye göre değişebilir. Geçme tasarımı gerçek numuneyle doğrulanmalı veya yeterli boşluk bırakılmalıdır.</p>
<h2 id="8-diger-kesim-yontemlerinde-toleranslar">8. Diğer Kesim Yöntemlerinde Toleranslar</h2>
<p>Lazer her parça için en uygun yöntem değildir. Çok kalın levha, ısıya hassas malzeme, düşük hassasiyetli büyük konstrüksiyon veya kaba ön kesim ihtiyaçlarında farklı yöntemler tercih edilir.</p>
<h3 id="8-1-plazma-kesim">8.1 Plazma kesim</h3>
<p>Plazma kesim, özellikle orta ve kalın karbon çeliğinde yüksek hız ve ekonomik maliyet sağlar. Ancak lazerle karşılaştırıldığında kerf daha geniş, kesim yüzeyi açısallığı daha yüksek ve küçük detay kabiliyeti daha sınırlıdır.</p>
<p>Pratik başlangıç aralıkları:</p>
<ul>
<li>Orta kalınlıklarda dış kontur: yaklaşık ±0,50–1,00 mm</li>
<li>Büyük veya kalın parçalarda: yaklaşık ±1,00–2,00 mm</li>
<li>Delik çapı ve konumu: dış konturdan daha geniş tolerans gerektirebilir</li>
<li>Kesim yüzeyi açısallığı ve çapak: ayrıca kabul kriteriyle tanımlanmalı</li>
</ul>
<p>Cıvatalı konstrüksiyon deliklerinde plazma yalnızca kaba delik açma için kullanılabilir; hassas bağlantılarda delme veya raybalama gerekebilir.</p>
<h3 id="8-2-oksijenle-alev-kesim">8.2 Oksijenle alev kesim</h3>
<p>Oksijen kesim, kalın karbon çeliği levhalarda yaygındır. Isı girdisi yüksek olduğu için parça deformasyonu, kesim yüzeyi çizgilenmesi, üst kenar yuvarlanması ve alt kenar cürufu dikkate alınmalıdır.</p>
<p>Pratik başlangıç yaklaşımı:</p>
<ul>
<li>Orta büyüklükte konturlar: yaklaşık ±1,00–2,00 mm</li>
<li>Çok büyük veya çok kalın parçalar: yaklaşık ±2,00–3,00 mm veya proje teyidi</li>
<li>Talaşlı işlenecek kenarlar: yeterli işleme payı bırakılmalı</li>
<li>Kaynak ağzı: açı, kök payı ve yüzey temizliği ayrıca kontrol edilmeli</li>
</ul>
<p>Alev kesilmiş bir yüzeyi doğrudan hassas referans olarak kullanmak çoğu durumda uygun değildir. Makine gövdesi, yatak plakası veya şasi bağlantısı gibi fonksiyonel yüzeyler sonradan frezelenebilir.</p>
<h3 id="8-3-su-jeti-kesim">8.3 Su jeti kesim</h3>
<p>Su jeti kesim, belirgin bir ısıdan etkilenmiş bölge oluşturmadan metal, plastik, kompozit ve taş gibi malzemeleri kesebilir. Tolerans; kesim hızına, malzeme kalınlığına, nozüle, abrasif akışına ve yüzey kalite sınıfına bağlıdır.</p>
<p>Genel uygulamalarda ±0,10–0,50 mm aralığı mümkün olabilir. Ancak kalın malzemede kesim yüzeyinin alt kısmında sapma ve çizgilenme artabilir. Hassasiyet yükseldikçe kesim hızı düşer ve maliyet artar.</p>
<h3 id="8-4-serit-testere-ve-daire-testere">8.4 Şerit testere ve daire testere</h3>
<p>Testere ile kesimde boy toleransı kadar kesim yüzeyinin gönyesi de önemlidir. Profil doğruluğu, mengene basıncı, bıçak durumu ve kesit büyüklüğü sonucu etkiler.</p>
<ul>
<li>Küçük ve rijit kesitlerde boy: yaklaşık ±0,30–0,80 mm</li>
<li>Büyük profillerde boy: yaklaşık ±0,50–1,50 mm</li>
<li>Gönye açısı: yaklaşık ±0,5–1,0°</li>
<li>Talaşlı işlem öncesi kesim: yüzey başına yeterli pay bırakılmalı</li>
</ul>
<p>Kesim yöntemi seçilirken yalnızca nominal hassasiyet değil, toplam üretim rotası değerlendirilmelidir. Lazerle pahalı biçimde hassas kesilen bir yüzey daha sonra kaynakla bozulacaksa, ilk operasyondaki dar tolerans anlamını kaybedebilir.</p>
<h2 id="9-cnc-abkant-bukum-ve-sekillendirme-toleranslari">9. CNC Abkant Büküm ve Şekillendirme Toleransları</h2>
<p>Büküm toleransı, lazer kesilmiş düz parçanın toleransından bağımsız düşünülemez. Açılım ölçüsü doğru olsa bile malzemenin akma dayanımı, hadde yönü, gerçek kalınlığı, kalıp açıklığı, zımba yarıçapı ve geri yaylanma miktarı büküm sonucunu değiştirir. Bu nedenle bükümlü parçada kritik ölçü çoğu zaman açılım değil, büküm sonrası oluşan fonksiyonel yükseklik, açı veya delik konumudur.</p>
<h3 id="9-1-bukum-acisi-icin-pratik-araliklar">9.1 Büküm açısı için pratik aralıklar</h3>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Büküm tipi</th>
  <th style="text-align:right">Ön tasarım için tipik açı toleransı</th>
  <th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Standart hava büküm</td>
  <td style="text-align:right">±1,0°</td>
  <td>Malzeme partisi ve geri yaylanma etkili</td>
</tr>
<tr>
  <td>Kontrollü seri büküm</td>
  <td style="text-align:right">±0,5°</td>
  <td>Uygun takım, numune ve proses ayarı gerekir</td>
</tr>
<tr>
  <td>Uzun veya kalın parça</td>
  <td style="text-align:right">±1,0–1,5°</td>
  <td>Pres sehimi ve açı dağılımı kontrol edilmeli</td>
</tr>
<tr>
  <td>Çok dar açı toleransı</td>
  <td style="text-align:right">Proje bazında</td>
  <td>Açı ölçüm yöntemi ve kabul noktaları tanımlanmalı</td>
</tr>
</tbody>
</table></div>
<p>Bir bükümün farklı noktalarında farklı açı ölçülebilir. Uzun parçanın ortasında ve uçlarında pres sehimi, takım aşınması veya malzeme değişimi nedeniyle fark oluşabilir. Bu nedenle "90° ±0,5°" şartı verildiğinde ölçümün hangi kesitlerde yapılacağı da düşünülmelidir.</p>
<h3 id="9-2-flans-ve-toplam-yukseklik-toleransi">9.2 Flanş ve toplam yükseklik toleransı</h3>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Büküm sonrası ölçü</th>
  <th style="text-align:right">Pratik başlangıç aralığı</th>
</tr>
</thead>
<tbody>
<tr>
  <td>0–100 mm flanş</td>
  <td style="text-align:right">±0,50 mm</td>
</tr>
<tr>
  <td>&gt;100–500 mm fonksiyonel ölçü</td>
  <td style="text-align:right">±0,75–1,00 mm</td>
</tr>
<tr>
  <td>&gt;500–1.000 mm ölçü</td>
  <td style="text-align:right">±1,00–1,50 mm</td>
</tr>
<tr>
  <td>1.000 mm üzeri büyük parça</td>
  <td style="text-align:right">±1,50–2,50 mm veya proje teyidi</td>
</tr>
</tbody>
</table></div>
<p>Bu değerler tek bükümlü, erişilebilir ve normal geometriler için başlangıç yaklaşımıdır. Çok bükümlü kutu parçalarda her bükümün açısal ve boyutsal sapması toplam ölçüye yansır. Dar tolerans istenen bir toplam yükseklik, ara flanşların tamamına gereksiz tolerans dağıtmak yerine doğrudan nihai fonksiyonel ölçü olarak tanımlanmalıdır.</p>
<h3 id="9-3-k-faktoru-ve-bukum-payi">9.3 K-faktörü ve büküm payı</h3>
<p>Büküm sırasında sacın iç yüzeyi basınç, dış yüzeyi çekme etkisi altındadır. İki bölge arasında uzunluğu teorik olarak değişmeyen nötr eksen bulunur. K-faktörü, nötr eksenin sac kalınlığı içindeki konumunu ifade etmek için kullanılır. Açılım boyu hesabı; malzeme, kalınlık, iç yarıçap, takım ve büküm yöntemine bağlıdır.</p>
<p>Tasarım yazılımındaki varsayılan K-faktörünün doğrudan üretime gönderilmesi risklidir. En güvenilir yaklaşım, üreticinin kullandığı takım kombinasyonu için deneysel büküm tablosu veya ölçülmüş büküm düşümü değerlerini kullanmaktır. STEP model, düz açılım DXF ve PDF teknik resim birlikte gönderildiğinde üretici model ile açılım arasındaki tutarlılığı kontrol edebilir.</p>
<h3 id="9-4-geri-yaylanma">9.4 Geri yaylanma</h3>
<p>Yük kaldırıldığında metalin bir miktar eski şekline dönmesine geri yaylanma denir. Yüksek dayanımlı çelikler, paslanmaz çelikler ve alüminyum alaşımları karbon çeliğine göre farklı geri yaylanma davranışı gösterir. Aynı nominal malzemenin farklı parti veya hadde koşullarında bile fark görülebilir.</p>
<p>Geri yaylanma şu yöntemlerle yönetilir:</p>
<ul>
<li>Fazla bükme ile açı telafisi</li>
<li>Uygun V kalıp açıklığı ve zımba yarıçapı</li>
<li>Açı ölçüm ve düzeltme sistemi</li>
<li>İlk parça onayı</li>
<li>Malzeme parti takibi</li>
<li>Seri üretimde periyodik ölçüm</li>
</ul>
<h3 id="9-5-ic-bukum-yaricapi">9.5 İç büküm yarıçapı</h3>
<p>Teknik resimde iç yarıçapın yalnızca estetik bir detay olduğu düşünülmemelidir. Çok küçük yarıçap dış liflerde çatlamaya, kaplama hasarına veya yüksek tonaj ihtiyacına yol açabilir. İç yarıçap; malzeme sünekliği, kalınlık, hadde yönü ve takım geometrisiyle uyumlu seçilmelidir.</p>
<p>Ön tasarımda yumuşak çelik için kalınlığa yakın bir iç yarıçap çoğu standart uygulamada başlangıç kabulü olabilir. Paslanmaz, alüminyum ve yüksek dayanımlı çeliklerde daha büyük yarıçap gerekebilir. Nihai değer malzeme sınıfına ve üreticinin takım setine göre teyit edilmelidir.</p>
<h3 id="9-6-deliklerin-bukume-uzakligi">9.6 Deliklerin büküme uzaklığı</h3>
<p>Büküm hattına çok yakın delik, kanal veya kabartma şekil değiştirebilir. Delik ovalleşebilir, kenara doğru çekilebilir veya büküm bölgesinde yırtılma oluşabilir. Güvenli mesafe; kalınlık, iç yarıçap ve kalıp açıklığına bağlıdır.</p>
<p>Genel yaklaşım olarak delik kenarı ile teorik büküm çizgisi arasında en az iç yarıçap + yaklaşık 2–3 sac kalınlığı kadar mesafe bırakılması yararlı bir başlangıçtır. Daha yakın özellikler gerekiyorsa rahatlatma kesisi, sonraki operasyonla delme veya özel takım düşünülmelidir.</p>
<h3 id="9-7-bukum-rahatlatmalari">9.7 Büküm rahatlatmaları</h3>
<p>Kutu köşelerinde veya bir bükümün diğerini kestiği bölgelerde uygun rahatlatma yoksa yırtılma, bindirme veya malzeme kabarması oluşabilir. Rahatlatmanın genişliği genellikle sac kalınlığına yakın veya biraz büyük; derinliği ise büküm bölgesini tamamen serbest bırakacak düzeyde olmalıdır. Görsel ürünlerde rahatlatma şekli kaynak ve taşlama sonrası görünüşe göre tasarlanmalıdır.</p>
<h2 id="10-silindir-bukum-presleme-ve-delme-toleranslari">10. Silindir Büküm, Presleme ve Delme Toleransları</h2>
<h3 id="10-1-silindir-bukum">10.1 Silindir büküm</h3>
<p>Silindirle kıvırılan saclarda çap veya yarıçap toleransı; malzeme yaylanması, levha boyu, kalınlık, silindir geometrisi ve uç düz bölgelerden etkilenir. Tam daire, açık yay ve konik parça farklı proseslerdir.</p>
<p>Pratik başlangıç olarak:</p>
<ul>
<li>Standart silindirik parçalarda çap toleransı yaklaşık nominal çapın ±%1–2'si olabilir.</li>
<li>Hassas halka veya montaj yüzeyinde numune, şablon veya punta fikstürü gerekebilir.</li>
<li>Uçlarda kalan düz bölge ayrıca tanımlanmalıdır.</li>
<li>Kaynak sonrası dairesellik, kaynak öncesi yarıçaptan farklı olabilir.</li>
</ul>
<p>Çapın tek noktadan ölçülmesi daireselliği garanti etmez. Kritik silindirik parçalarda minimum-maksimum çap, dairesellik, eksen doğruluğu ve kaynak birleşim bölgesi ayrı değerlendirilmelidir.</p>
<h3 id="10-2-presle-sekillendirme-ve-derin-cekme">10.2 Presle şekillendirme ve derin çekme</h3>
<p>Preslenmiş parçalar elastik geri dönüş, sac akışı, kalıp aşınması ve anizotropi nedeniyle karmaşık tolerans davranışı gösterir. Prototip büküm değerleri seri kalıp üretimine doğrudan taşınmamalıdır. Derin çekme parçalarında duvar incelmesi, flanş dalgalanması ve trim hattı konumu kontrol planının parçası olmalıdır.</p>
<p>Seri pres parçası tasarımında şu özellikler ayrı tanımlanabilir:</p>
<ul>
<li>Trim konturu</li>
<li>Delik ve slot konumu</li>
<li>Yüzey profili</li>
<li>Flanş açısı</li>
<li>Parça yüksekliği</li>
<li>Yaylanma sonrası serbest şekil</li>
<li>Fikstüre oturmuş kontrollü şekil</li>
</ul>
<h3 id="10-3-cnc-punch-ve-mekanik-delme">10.3 CNC punch ve mekanik delme</h3>
<p>Punch ile delmede kalıp boşluğu, takım aşınması ve sac malzemesi çapak yüksekliğini ve delik ölçüsünü etkiler. Delik çapı çoğu zaman zımba ölçüsüne yakın, kesilen dış parça ise kalıp açıklığına bağlı oluşur. Hassas deliklerde son işlem gerekebilir.</p>
<h2 id="11-cnc-talasli-isleme-toleranslari">11. CNC Talaşlı İşleme Toleransları</h2>
<p>Lazer kesim ve büküm, birçok parçayı montaja hazır hale getirebilir; ancak yataklama, sızdırmazlık, hassas geçme, diş, eksen veya referans yüzeyi gereken bölgelerde talaşlı imalat kullanılır. "CNC işlendi" ifadesi tek başına tolerans garantisi değildir. Makine tipi, bağlama, takım boyu, malzeme, parça rijitliği, ölçüm yöntemi ve çevre koşulları sonucu belirler.</p>
<h3 id="11-1-genel-isleme-seviyeleri">11.1 Genel işleme seviyeleri</h3>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>İşlem seviyesi</th>
  <th style="text-align:right">Pratik boyutsal başlangıç aralığı</th>
  <th>Tipik kullanım</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Kaba işleme</td>
  <td style="text-align:right">±0,20–0,50 mm</td>
  <td>Kaynaklı gövde ön işleme, stok kaldırma</td>
</tr>
<tr>
  <td>Genel CNC işleme</td>
  <td style="text-align:right">±0,10 mm</td>
  <td>Standart makine parçaları</td>
</tr>
<tr>
  <td>Kontrollü hassas işleme</td>
  <td style="text-align:right">±0,05 mm</td>
  <td>Montaj yüzeyleri, delik grupları</td>
</tr>
<tr>
  <td>Hassas işleme</td>
  <td style="text-align:right">±0,01–0,02 mm</td>
  <td>Uygun parça ve prosesle özel özellikler</td>
</tr>
<tr>
  <td>Taşlama/hassas son işlem</td>
  <td style="text-align:right">±0,005–0,01 mm</td>
  <td>Mil, yatak, mastar niteliğindeki yüzeyler</td>
</tr>
</tbody>
</table></div>
<p>Bu tablo, her ölçünün aynı toleransla üretileceği anlamına gelmez. 20 mm'lik rijit bir parçadaki ±0,02 mm ile 2.000 mm'lik kaynaklı gövdedeki ±0,02 mm aynı zorlukta değildir. Büyük parçalar için sıcaklık, makine hacmi, bağlama ve ölçüm cihazı ayrıca değerlendirilmelidir.</p>
<h3 id="11-2-frezeleme-toleranslari">11.2 Frezeleme toleransları</h3>
<p>Frezelemede dış ölçüler, cepler, kanallar, düzlemsellik, paralellik ve delik konumları kontrol edilir. Uzun ince parçalar mengene veya bağlama kuvvetiyle elastik şekil değiştirebilir; parça söküldüğünde ölçü değişebilir. Kaynaklı gövdelerde iç gerilim işleme sırasında serbest kalabilir.</p>
<p>İyi tasarım uygulamaları:</p>
<ul>
<li>Kritik yüzeyleri aynı bağlamada işlemek</li>
<li>Datum yüzeylerini açıkça tanımlamak</li>
<li>Çok ince duvarlardan kaçınmak</li>
<li>Takım erişimini kontrol etmek</li>
<li>Derin ceplerde köşe radyusu bırakmak</li>
<li>İşleme payını kesim yöntemine ve kaynak deformasyonuna göre belirlemek</li>
</ul>
<h3 id="11-3-tornalama-toleranslari">11.3 Tornalama toleransları</h3>
<p>Tornalamada çap, eş eksenlilik, omuz konumu, salgı ve yüzey pürüzlülüğü önemlidir. Uzun ince miller kesme kuvvetiyle esneyebilir. Parçanın iki punta arasında, ayna ile veya yatak destekli işlenmesi toleransı etkiler.</p>
<p>Hassas rulman veya keçenin çalışacağı mil çapında yalnızca çap toleransı değil, dairesellik, silindiriklik, salgı ve yüzey dokusu da tanımlanmalıdır. Örneğin h6 kodu boyut bölgesini verir; ancak yüzeyin fonksiyonunu tek başına bütünüyle açıklamaz.</p>
<h3 id="11-4-delme-raybalama-ve-boralama">11.4 Delme, raybalama ve boralama</h3>
<p>Standart matkapla açılan deliğin çapı ve konumu, hassas geçme için yeterli olmayabilir. İşlem seçimi fonksiyona göre yapılır:</p>
<ul>
<li><strong>Delme:</strong> Genel cıvata delikleri ve ön delik</li>
<li><strong>Havşa/havşa başı:</strong> Bağlantı elemanının oturma yüzeyi</li>
<li><strong>Raybalama:</strong> Hassas çap ve iyi yüzey</li>
<li><strong>Boralama:</strong> Çap, konum ve eksen kontrolü</li>
<li><strong>Honlama:</strong> Çok iyi yüzey ve silindiriklik</li>
</ul>
<p>Lazer kesilmiş ön delik, talaşlı işlem süresini azaltabilir; ancak sertleşmiş kenar, oksit tabakası veya düzensiz pay takım ömrünü etkileyebilir. İşleme payı çevresel olarak yeterli ve dengeli bırakılmalıdır.</p>
<h3 id="11-5-dis-toleranslari">11.5 Diş toleransları</h3>
<p>İç ve dış dişlerde yalnızca nominal çap ve adım değil, tolerans sınıfı, diş derinliği, kör delik taban boşluğu, giriş pahı ve kaplama sonrası ölçü düşünülmelidir. Galvaniz, boya veya sert kaplama diş fonksiyonunu bozabilir. Kaplama yapılacak parçalar için maskeleme veya kaplama öncesi/sonrası diş stratejisi belirlenmelidir.</p>
<h2 id="12-gecmeler-yuzey-puruzlulugu-ve-kenar-sartlari">12. Geçmeler, Yüzey Pürüzlülüğü ve Kenar Şartları</h2>
<h3 id="12-1-bosluklu-gecis-ve-siki-gecmeler">12.1 Boşluklu, geçiş ve sıkı geçmeler</h3>
<p>Delik-mil bağlantıları genel olarak üç grupta değerlendirilir:</p>
<ul>
<li><strong>Boşluklu geçme:</strong> Montaj kolaydır, parçalar serbest hareket edebilir.</li>
<li><strong>Geçiş geçmesi:</strong> Küçük boşluk veya küçük sıkılık oluşabilir.</li>
<li><strong>Sıkı geçme:</strong> Presleme veya ısıl montaj gerekir.</li>
</ul>
<p>Geçme seçimi yük, hareket, sökülebilirlik, sıcaklık ve malzemeye göre yapılmalıdır. Lazer kesilmiş bir deliğe doğrudan H7 yazmak yerine, üretim rotası "lazer ön kesim + boralama H7" biçiminde düşünülmelidir.</p>
<h3 id="12-2-yuzey-puruzlulugu">12.2 Yüzey pürüzlülüğü</h3>
<p>Boyut toleransı ile yüzey pürüzlülüğü birbirinden farklıdır. Bir yüzey ölçü içinde olabilir ancak çok kaba olduğu için keçeyi aşındırabilir veya sızdırmazlık sağlayamayabilir. Ra, Rz ve diğer profil parametreleri fonksiyona göre seçilir.</p>
<p>Genel bir yaklaşım olarak:</p>
<ul>
<li>Kaba frezelenmiş yüzeylerde daha yüksek Ra değerleri kabul edilebilir.</li>
<li>Standart işlenmiş montaj yüzeylerinde orta seviye pürüzlülük kullanılabilir.</li>
<li>Keçe, yatak, hidrolik veya sızdırmazlık yüzeylerinde proses ve yön şartı ayrıca tanımlanmalıdır.</li>
<li>Görsel yüzeylerde yalnızca Ra değeri değil, takım izi yönü ve görünüş standardı önemlidir.</li>
</ul>
<p>Yüzey pürüzlülüğünü gereksiz biçimde düşürmek ek paso, düşük ilerleme, özel takım ve daha uzun kontrol süresi yaratır.</p>
<h3 id="12-3-capak-ve-kenar-kirma">12.3 Çapak ve kenar kırma</h3>
<p>"Çapaksız" ifadesi ölçülebilir bir şart değildir. Çapak yüksekliği, elle hissedilebilirlik, keskinlik ve kenar kırma miktarı farklı yorumlanabilir. Daha iyi bir teknik not şu unsurları içermelidir:</p>
<ul>
<li>Fonksiyonel olmayan keskin kenarlar kırılacaktır.</li>
<li>İzin verilen maksimum çapak veya kenar çıkıntısı belirtilecektir.</li>
<li>Boyanacak kenarlarda kaplama sürekliliği için minimum kenar yumuşatma istenebilir.</li>
<li>Kaynak yapılacak kenarlar taşlama ile yuvarlatılmayacaksa belirtilmelidir.</li>
<li>Sızdırmazlık veya elektriksel temas kenarları ayrı işaretlenecektir.</li>
</ul>
<h2 id="13-kaynakli-imalat-ve-montaj-toleranslari">13. Kaynaklı İmalat ve Montaj Toleransları</h2>
<p>Kaynak, parçaları birleştirirken lokal ve toplam ısı girdisi oluşturur. Kaynak metali katılaşırken çekilir; bu çekme açısal deformasyon, eğilme, burulma ve boy kısalması yaratabilir. Lazerle ±0,20 mm kesilmiş iki parçanın kaynak sonrası montajda aynı hassasiyeti koruması beklenmemelidir.</p>
<p>Kaynaklı bir ürün için tolerans planı üç aşamada kurulmalıdır:</p>
<ol>
<li>Tekil kesilmiş ve bükülmüş parçaların toleransları</li>
<li>Kaynaklı montajın genel ölçü ve geometrisi</li>
<li>Kaynak sonrası işlenecek fonksiyonel yüzeyler</li>
</ol>
<h3 id="13-1-deformasyonu-azaltma-yontemleri">13.1 Deformasyonu azaltma yöntemleri</h3>
<ul>
<li>Simetrik kaynak sırası</li>
<li>Atlamalı veya dengeli paso düzeni</li>
<li>Uygun fikstür ve puntalama</li>
<li>Isı girdisinin kontrolü</li>
<li>Kaynak ağzı ve kök aralığının doğru hazırlanması</li>
<li>Ön eğme veya kontrollü ters deformasyon</li>
<li>Gerektiğinde gerilim giderme</li>
<li>Son işlem için yeterli işleme payı</li>
</ul>
<h3 id="13-2-kaynakli-yapida-datum-secimi">13.2 Kaynaklı yapıda datum seçimi</h3>
<p>Kaynaklı gövdelerde tüm ölçüleri ham sac kenarlarından vermek yerine, fonksiyonel montaj yüzeyleri datum yapılmalıdır. İşlenecek bir taban yüzeyi Datum A, iki montaj deliğinin ekseni Datum B ve C olarak kullanılabilir. Böylece üretim ve ölçüm, ürünün gerçek montaj mantığına göre yapılır.</p>
<h3 id="13-3-kaynak-sonrasi-isleme">13.3 Kaynak sonrası işleme</h3>
<p>Redüktör tabanı, rulman yatağı, flanş yüzeyi, lineer kızak oturma yüzeyi veya sızdırmazlık düzlemi gibi bölgeler kaynak sonrasında birlikte işlenmelidir. Kaynaktan önce hassas işlenen yüzeyler deformasyonla tolerans dışına çıkabilir. İşleme sırası teknik resim ve proses planında açık olmalıdır.</p>
<h2 id="14-tolerans-yigilmasi-nasil-hesaplanir">14. Tolerans Yığılması Nasıl Hesaplanır?</h2>
<p>Bir montaj ölçüsü birden fazla parçanın ve prosesin birleşiminden oluşuyorsa, her bir tolerans toplam sonuca katkıda bulunur. Buna tolerans yığılması denir. Özellikle bükümlü kutular, kaynaklı şasiler, ara burçlu bağlantılar ve çok delikli montajlarda dikkate alınmalıdır.</p>
<p>Basit bir örnekte üç ölçü sırasıyla 50 ±0,20 mm, 30 ±0,10 mm ve 20 ±0,15 mm ise en kötü durum yaklaşımında toplam nominal ölçü 100 mm, toplam tolerans ise ±0,45 mm olur. Bütün sapmaların aynı yönde oluşma ihtimali düşük olsa da montaj güvenliği için en kötü durum analizi kritik ürünlerde gereklidir.</p>
<p>İstatistiksel yöntemler seri üretimde daha gerçekçi dağılımlar sunabilir; ancak bunun için proses yeterlilik verisi gerekir. Cpk, ortalama kayma ve ölçüm sistemi bilinmeden yalnızca teorik kareler toplamı yöntemiyle güvence verilmemelidir.</p>
<p>Tolerans yığılmasını azaltmak için:</p>
<ul>
<li>Zincir ölçülendirme yerine ortak datumdan ölçülendirme kullanın.</li>
<li>Fonksiyonel son ölçüyü doğrudan toleranslandırın.</li>
<li>Gereksiz ara ölçüleri referans ölçü yapın.</li>
<li>Montajda ayar payı, slot veya şim imkânı bırakın.</li>
<li>Kritik özellikleri aynı operasyonda veya aynı bağlamada üretin.</li>
<li>Kaynak sonrası işleme ile ortak referans oluşturun.</li>
</ul>
<h2 id="15-teknik-resimde-toleranslar-nasil-belirtilmelidir">15. Teknik Resimde Toleranslar Nasıl Belirtilmelidir?</h2>
<p>İyi bir teknik resim üreticinin tahmin yapmasını engeller. Yalnızca DXF göndermek, parçanın konturunu tarif eder; malzeme, kalınlık, kritik ölçü, kenar şartı, yüzey, büküm yönü ve kontrol gereksinimini tanımlamaz.</p>
<h3 id="15-1-gonderilmesi-gereken-dosyalar">15.1 Gönderilmesi gereken dosyalar</h3>
<ul>
<li>Kesim geometrisi için DXF veya DWG</li>
<li>Bükümlü ve montajlı parça için STEP/STP 3B model</li>
<li>Ölçü, tolerans ve teknik notlar için PDF resim</li>
<li>Malzeme standardı ve kalite sınıfı</li>
<li>Nominal kalınlık</li>
<li>Adet ve parti yapısı</li>
<li>Yüzey işlemi ve kaplama isteği</li>
<li>Kontrol raporu veya sertifika talebi</li>
</ul>
<h3 id="15-2-antet-ve-genel-notlar">15.2 Antet ve genel notlar</h3>
<p>Teknik resimde aşağıdaki bilgiler bulunmalıdır:</p>
<ul>
<li>Ölçü birimi</li>
<li>Projeksiyon yöntemi</li>
<li>Genel boyutsal tolerans standardı ve sınıfı</li>
<li>Genel geometrik şartın nasıl uygulanacağı</li>
<li>Çapak ve keskin kenar notu</li>
<li>Yüzey işleminden önce veya sonra geçerli ölçüler</li>
<li>Kaynak standardı ve genel kaynak toleransı</li>
<li>Revizyon numarası</li>
<li>Kritik karakteristik işaretleri</li>
</ul>
<p>"ISO 2768" yazmak tek başına yeterli değildir; bölüm, sınıf ve kapsam anlaşılır olmalıdır. Güncel olmayan standart notları, müşteri çiziminden otomatik kopyalanmadan önce kontrol edilmelidir.</p>
<h3 id="15-3-kritik-olculeri-secme-yontemi">15.3 Kritik ölçüleri seçme yöntemi</h3>
<p>Her ölçüyü kritik yapmak yerine şu sorular sorulmalıdır:</p>
<ol>
<li>Bu ölçü montajı engeller mi?</li>
<li>Hareket, sızdırmazlık veya yük aktarımı etkilenir mi?</li>
<li>Ölçü tolerans dışına çıkarsa güvenlik riski oluşur mu?</li>
<li>Sonraki proses bu ölçüyü değiştirecek mi?</li>
<li>Ölçü gerçek üretim ortamında güvenilir biçimde kontrol edilebilir mi?</li>
<li>Daha geniş tolerans aynı fonksiyonu karşılar mı?</li>
</ol>
<p>Cevap "hayır" ise genel tolerans yeterli olabilir. Cevap "evet" ise bireysel tolerans, geometrik kontrol, datum ve ölçüm yöntemi tanımlanmalıdır.</p>
<h3 id="15-4-referans-olculer">15.4 Referans ölçüler</h3>
<p>Yalnızca bilgi amaçlı verilen, doğrudan üretim kabulü için kullanılmayan ölçüler referans olarak işaretlenmelidir. Aynı geometrinin hem zincir ölçülerle hem toplam ölçüyle aşırı tanımlanması çelişki yaratabilir. Matematiksel olarak birbiriyle tutarsız toleranslar üreticiyi belirsizliğe iter.</p>
<h3 id="15-5-kaplama-payi">15.5 Kaplama payı</h3>
<p>Toz boya, yaş boya, galvaniz, nikel, krom veya diğer kaplamalar parça ölçüsünü değiştirir. Dar geçmelerde, dişlerde, pim deliklerinde ve elektriksel temas yüzeylerinde kaplama stratejisi belirtilmelidir. "Ölçüler kaplama sonrası geçerlidir" veya "işaretli yüzeyler maskelenecektir" gibi notlar kullanılabilir.</p>
<h2 id="16-olcum-kontrol-ve-kabul-kurallari">16. Ölçüm, Kontrol ve Kabul Kuralları</h2>
<p>Bir toleransın anlamlı olabilmesi için ölçülebilir olması gerekir. 3 metre uzunluğundaki kaynaklı bir gövdeye ±0,10 mm tolerans verip yalnızca 150 mm kumpasla kontrol planlamak teknik olarak tutarsızdır.</p>
<h3 id="16-1-olcum-cihazi-secimi">16.1 Ölçüm cihazı seçimi</h3>
<div class="wolfse-table-wrap"><table><thead>
<tr>
  <th>Özellik</th>
  <th>Uygun olabilecek kontrol araçları</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Genel dış ölçü</td>
  <td>Kumpas, çelik cetvel, şerit metre, yükseklik mastarı</td>
</tr>
<tr>
  <td>Kalınlık</td>
  <td>Mikrometre, ultrasonik kalınlık ölçer</td>
</tr>
<tr>
  <td>Delik çapı</td>
  <td>İç çap komparatörü, pim mastar, üç nokta mikrometre</td>
</tr>
<tr>
  <td>Delik konumu</td>
  <td>Yükseklik mastarı, optik ölçüm, CMM</td>
</tr>
<tr>
  <td>Düzlemsellik</td>
  <td>Granit tabla, komparatör, lazer ölçüm, CMM</td>
</tr>
<tr>
  <td>Büküm açısı</td>
  <td>Açıölçer, dijital inklinometre, şablon</td>
</tr>
<tr>
  <td>Büyük kaynaklı yapı</td>
  <td>Lazer tracker, total station, ölçüm kolu veya uygun fikstür</td>
</tr>
<tr>
  <td>Yüzey pürüzlülüğü</td>
  <td>Profilometre</td>
</tr>
</tbody>
</table></div>
<p>Genel bir ölçüm prensibi olarak cihazın çözünürlüğü ve toplam belirsizliği, kontrol edilen toleransa göre yeterli olmalıdır. Çok dar toleranslarda yalnızca cihaz ekranındaki basamak sayısına güvenilmemeli; kalibrasyon, tekrarlanabilirlik, operatör ve sıcaklık etkisi dikkate alınmalıdır.</p>
<h3 id="16-2-parca-sicakligi">16.2 Parça sıcaklığı</h3>
<p>Kesimden, kaynak veya talaşlı işlemden çıkan sıcak parça genleşmiş olabilir. Özellikle uzun çelik ve alüminyum parçalarda birkaç derecelik sıcaklık farkı ölçü sonucunu etkiler. Hassas kabul ölçümleri, parça ile ölçüm ortamı dengelendikten sonra yapılmalıdır.</p>
<h3 id="16-3-ilk-parca-ve-seri-kontrol">16.3 İlk parça ve seri kontrol</h3>
<p>Prototip veya yeni revizyonda ilk parça onayı yapılması, seri üretimde hatanın çoğalmasını önler. Kontrol planı şu seviyelerden oluşabilir:</p>
<ul>
<li>İlk parçada tüm kritik ölçüler</li>
<li>Seri içinde belirlenmiş frekansta kritik ölçüler</li>
<li>Son parçada proses kapanış kontrolü</li>
<li>Parti bazında malzeme ve yüzey doğrulaması</li>
<li>Gerekirse ölçüm raporu ve izlenebilirlik</li>
</ul>
<h3 id="16-4-olcum-belirsizligi-ve-sinirdaki-degerler">16.4 Ölçüm belirsizliği ve sınırdaki değerler</h3>
<p>Ölçülen değer tolerans sınırına çok yakınsa, cihazın ve yöntemin belirsizliği karar üzerinde etkili olur. "Ekranda sınır içinde göründü" yaklaşımı her zaman yeterli değildir. Kritik ürünlerde kabul kuralı, müşteri şartnamesi ve kalite planında önceden tanımlanmalıdır.</p>
<h2 id="17-malzemeye-gore-tolerans-davranisi">17. Malzemeye Göre Tolerans Davranışı</h2>
<h3 id="17-1-karbon-celigi">17.1 Karbon çeliği</h3>
<p>Karbon çeliği, lazer kesim ve bükümde yaygın ve öngörülebilir bir malzemedir. Ancak sıcak haddelenmiş sacın tufalı, düzlemsizliği ve iç gerilimi; soğuk haddelenmiş saca göre farklı sonuç verebilir. Kalın levhalarda malzeme partisinin kimyasal bileşimi ve yüzey durumu kesim kalitesini etkiler.</p>
<h3 id="17-2-paslanmaz-celik">17.2 Paslanmaz çelik</h3>
<p>Paslanmaz çelik genellikle azotla oksitsiz kesilebilir. Geri yaylanması karbon çeliğinden farklıdır ve yüzey koruma filmi, çizilme kontrolü ve ısı renklenmesi önem taşır. Hassas bükümlerde malzeme yönü ve parti değişimi dikkate alınmalıdır.</p>
<h3 id="17-3-aluminyum">17.3 Alüminyum</h3>
<p>Alüminyumun ısıl genleşme katsayısı çelikten yüksektir. Düşük rijitlikli ince parçalar taşıma ve bağlama sırasında kolay şekil değiştirebilir. Bazı alaşımlar büküme daha uygunken bazıları çatlamaya yatkındır. Yüzey çizikleri ve takım izleri görsel ürünlerde ayrıca kontrol edilmelidir.</p>
<h3 id="17-4-yuksek-dayanimli-celik">17.4 Yüksek dayanımlı çelik</h3>
<p>Yüksek dayanımlı çeliklerde geri yaylanma, minimum büküm yarıçapı ve kesilmiş kenarın çatlak davranışı daha kritik olabilir. Tasarım, yalnızca kalınlığa göre değil malzemenin mekanik özelliklerine göre yapılmalıdır.</p>
<h3 id="17-5-galvanizli-ve-kaplamali-sac">17.5 Galvanizli ve kaplamalı sac</h3>
<p>Kaplama kalınlığı, lazer dumanı, kenar görünümü ve kaynak hazırlığı üzerinde etkilidir. Büküm sırasında kaplama çatlayabilir veya takım yüzeyinde iz oluşturabilir. Elektriksel temas ve korozyon gereksinimleri üretim notunda belirtilmelidir.</p>
<h2 id="18-toleransin-maliyet-ve-termin-uzerindeki-etkisi">18. Toleransın Maliyet ve Termin Üzerindeki Etkisi</h2>
<p>Tolerans daraldıkça maliyet genellikle doğrusal değil, basamaklı biçimde artar. Bir ölçünün ±0,50 mm'den ±0,20 mm'ye düşürülmesi aynı proses içinde küçük bir ayarla mümkün olabilir. ±0,20 mm'den ±0,02 mm'ye düşürülmesi ise lazer yerine talaşlı işlem, özel fikstür, iklim kontrollü ölçüm ve yüzde yüz kontrol gerektirebilir.</p>
<p>Dar tolerans şu maliyetleri oluşturabilir:</p>
<ul>
<li>Daha hassas veya yavaş proses</li>
<li>Ek işleme operasyonu</li>
<li>Özel takım ve fikstür</li>
<li>İlk parça ve proses ayar süresi</li>
<li>Daha yüksek kontrol sıklığı</li>
<li>CMM veya özel mastar ihtiyacı</li>
<li>Daha yüksek red ve yeniden işleme riski</li>
<li>Seçilmiş malzeme veya gerilim giderme</li>
<li>Daha uzun termin</li>
</ul>
<p>En ekonomik tasarım, bütün ölçüleri geniş bırakmak değil; fonksiyonel ölçüleri doğru seçip geri kalanını uygun genel toleransa bağlamaktır.</p>
<h2 id="19-uretilebilirlik-kontrol-listesi">19. Üretilebilirlik Kontrol Listesi</h2>
<p>Teklif istemeden önce aşağıdaki listeyi kontrol edin:</p>
<ul class="wolfse-check-list">
<li>Malzeme standardı ve kalite sınıfı yazıldı mı?</li>
<li>Sac veya profil kalınlığı belirtildi mi?</li>
<li>DXF/DWG nominal geometriyle ve 1:1 ölçekte hazır mı?</li>
<li>STEP model ile PDF resim aynı revizyon mu?</li>
<li>Kritik ölçüler açıkça seçildi mi?</li>
<li>Datum sistemi montaj fonksiyonuna uygun mu?</li>
<li>Delikler büküm hattından yeterince uzak mı?</li>
<li>Küçük delik ve dar kanallar kalınlıkla uyumlu mu?</li>
<li>İç köşelerde montaj rahatlığı var mı?</li>
<li>Geçme bölgelerinde boya veya kaplama payı düşünüldü mü?</li>
<li>Kaynak sonrası değişecek ölçüler tanımlandı mı?</li>
<li>İşlenecek yüzeylerde yeterli pay var mı?</li>
<li>Çapak ve kenar kırma şartı ölçülebilir mi?</li>
<li>Yüzey pürüzlülüğü yalnızca gerekli bölgelere verildi mi?</li>
<li>Kontrol yöntemi toleransla uyumlu mu?</li>
<li>Adet, paketleme ve raporlama isteği belirtildi mi?</li>
</ul>
<h2 id="20-sik-sorulan-sorular">20. Sık Sorulan Sorular</h2>
<h3 id="lazer-kesim-toleransi-kac-mm-dir">Lazer kesim toleransı kaç mm'dir?</h3>
<p>Tek bir sabit değer yoktur. İnce ve normal geometrili saclarda dış kontur için yaklaşık ±0,10–0,20 mm seviyeleri mümkün olabilirken, kalın ve büyük parçalarda tolerans ±0,50 mm veya daha geniş olabilir. Nihai değer malzeme, kalınlık, geometri ve kontrol planına göre teyit edilmelidir.</p>
<h3 id="lazer-kesimle-h7-delik-yapilabilir-mi">Lazer kesimle H7 delik yapılabilir mi?</h3>
<p>H7, hassas bir delik tolerans bölgesidir. Lazer kesim çoğu uygulamada H7 deliğin son işlemi olarak görülmemelidir. Delik lazerle paylı ön kesilip rayba veya boralama ile H7'ye tamamlanabilir.</p>
<h3 id="en-kucuk-lazer-kesim-deligi-ne-kadar-olabilir">En küçük lazer kesim deliği ne kadar olabilir?</h3>
<p>Ön tasarımda delik çapının en az sac kalınlığı kadar seçilmesi güvenli bir başlangıçtır. Kalın paslanmaz veya alüminyumda daha büyük oran gerekebilir. Daha küçük delikler numune ve proses teyidi gerektirir.</p>
<h3 id="lazer-kesim-sonrasi-parca-neden-egilir">Lazer kesim sonrası parça neden eğilir?</h3>
<p>Sacın iç gerilimleri kesimle serbest kalabilir. Isı girdisi, uzun ince geometri, yoğun delik düzeni ve kesim sırası da deformasyona neden olabilir. Bu durum yalnızca makine hassasiyetiyle açıklanamaz.</p>
<h3 id="bukum-acisi-toleransi-kac-derece-olmalidir">Büküm açısı toleransı kaç derece olmalıdır?</h3>
<p>Standart hava bükümde ±1° pratik bir başlangıçtır. Uygun takım, proses ayarı ve kontrolle ±0,5° değerlendirilebilir. Uzun, kalın veya yüksek dayanımlı parçalarda daha geniş tolerans gerekebilir.</p>
<h3 id="bukum-sonrasi-olcu-neden-degisir">Büküm sonrası ölçü neden değişir?</h3>
<p>Gerçek sac kalınlığı, iç yarıçap, K-faktörü, kalıp açıklığı ve geri yaylanma açılım ile son ölçü arasındaki ilişkiyi etkiler. Üreticinin gerçek takım verileriyle açılım hesaplanmalıdır.</p>
<h3 id="plazma-mi-lazer-mi-daha-hassastir">Plazma mı, lazer mi daha hassastır?</h3>
<p>Genel olarak lazer daha dar kerf, daha küçük detay ve daha yüksek boyutsal hassasiyet sağlar. Plazma kalın levhada daha ekonomik olabilir. Seçim yalnızca toleransa değil kalınlık, yüzey ve toplam maliyete göre yapılmalıdır.</p>
<h3 id="su-jeti-kesim-isi-etkisi-olusturur-mu">Su jeti kesim ısı etkisi oluşturur mu?</h3>
<p>Su jeti belirgin bir termal kesim bölgesi oluşturmaz. Buna karşılık kalın malzemede kesim yüzeyi sapması ve hız-kalite dengesi dikkate alınmalıdır.</p>
<h3 id="cnc-isleme-her-zaman-0-01-mm-midir">CNC işleme her zaman ±0,01 mm midir?</h3>
<p>Hayır. CNC, otomatik kontrol edilen bir üretim yöntemidir; tolerans seviyesi değildir. ±0,01 mm bazı uygun özelliklerde mümkün olabilir, ancak parça boyutu, rijitlik, bağlama ve ölçüm koşulları değerlendirilmelidir.</p>
<h3 id="teknik-resimde-butun-olculere-tolerans-vermeli-miyim">Teknik resimde bütün ölçülere tolerans vermeli miyim?</h3>
<p>Hayır. Kritik ölçüler bireysel olarak tanımlanmalı, diğer ölçüler uygun genel tolerans sistemine bağlanmalıdır. Aşırı toleranslandırma maliyeti ve çelişki riskini artırır.</p>
<h3 id="boya-sonrasi-olcu-degisir-mi">Boya sonrası ölçü değişir mi?</h3>
<p>Evet. Boya ve diğer kaplamalar yüzeylere kalınlık ekler. Dar geçmeler, dişler ve pim delikleri için maskeleme veya kaplama sonrası işleme planlanmalıdır.</p>
<h3 id="kaynakli-montajda-lazer-kesim-toleransi-korunur-mu">Kaynaklı montajda lazer kesim toleransı korunur mu?</h3>
<p>Her zaman korunmaz. Kaynak ısı girdisi çekme, eğilme ve burulma oluşturabilir. Kaynaklı montaj için ayrı tolerans ve gerekiyorsa kaynak sonrası işleme tanımlanmalıdır.</p>
<h3 id="olcum-raporu-talep-edilebilir-mi">Ölçüm raporu talep edilebilir mi?</h3>
<p>Evet. Kritik ölçüler, numune planı, cihaz, rapor formatı ve izlenebilirlik teklif aşamasında belirtilmelidir. Yüzde yüz kontrol ile örnekleme kontrolü farklı maliyet ve termin oluşturur.</p>
<h2 id="wolfse-ile-tolerans-odakli-uretim-sureci">WOLFSE ile Tolerans Odaklı Üretim Süreci</h2>
<p>WOLFSE'ye teklif talebi gönderirken DXF/DWG kesim dosyasını, varsa STEP modelini ve PDF teknik resmi birlikte paylaşın. Malzeme, kalınlık, adet, yüzey işlemi ve kritik toleransları belirtin. Teknik ekip; geometriyi kesim, büküm, kaynak ve gerekli ikincil işlemler açısından değerlendirerek uygulanabilir toleransları teklif aşamasında netleştirir.</p>
<p><strong>Doğru tolerans, en dar tolerans değildir. Doğru tolerans; parçanın görevini güvenilir biçimde yerine getirmesini sağlayan, ölçülebilir ve ekonomik toleranstır.</strong></p>
<p><a href="/teklif-al/">Hızlı Teklif Al</a> · <a href="/hizmetler/cnc-fiber-lazer-kesim/">CNC Fiber Lazer Kesim</a> · <a href="/hizmetler/cnc-abkant-bukum/">CNC Abkant Büküm</a> · <a href="/hizmetler/boru-profil-lazer-kesim/">Boru ve Profil Lazer Kesim</a> · <a href="/blog/dxf-dwg-dosya-hazirlama-rehberi/">DXF/DWG Dosya Hazırlama</a></p>
<h2 id="teknik-referanslar">Teknik Referanslar</h2>
<p>Bu rehber hazırlanırken aşağıdaki standart ailelerinin güncel kapsamları esas alınmıştır. Proje sözleşmesinde kullanılacak nüsha, dil, yıl ve değişiklikler ayrıca doğrulanmalıdır.</p>
<ul>
<li><a href="https://www.iso.org/standard/60321.html" rel="nofollow noopener" target="_blank">ISO 9013:2017</a> ve <a href="https://www.iso.org/standard/87851.html" rel="nofollow noopener" target="_blank">Amd 1:2024</a> — Termal kesimlerin sınıflandırılması, geometrik ürün şartları ve kalite toleransları</li>
<li><a href="https://www.iso.org/standard/7748.html" rel="nofollow noopener" target="_blank">ISO 2768-1:1989</a> — Bireysel tolerans gösterimi olmayan doğrusal ve açısal ölçüler için genel toleranslar</li>
<li><a href="https://www.iso.org/standard/72514.html" rel="nofollow noopener" target="_blank">ISO 22081:2021</a> — Genel geometrik ve genel boyut şartları</li>
<li><a href="https://www.iso.org/standard/66777.html" rel="nofollow noopener" target="_blank">ISO 1101:2017</a> — Geometrik tolerans sembolleri ve yorum kuralları</li>
<li><a href="https://www.iso.org/standard/45975.html" rel="nofollow noopener" target="_blank">ISO 286-1:2010</a> ve <a href="https://www.iso.org/standard/54915.html" rel="nofollow noopener" target="_blank">ISO 286-2:2010</a> — Doğrusal ölçüler için tolerans kod sistemi, delik ve mil bölgeleri</li>
<li><a href="https://www.iso.org/standard/86032.html" rel="nofollow noopener" target="_blank">ISO 13920:2023</a> — Kaynaklı konstrüksiyonlarda genel toleranslar</li>
<li><a href="https://www.iso.org/standard/61328.html" rel="nofollow noopener" target="_blank">ISO 13715:2017</a> — Tanımsız şekilli kenarların gösterimi ve ölçülendirilmesi</li>
<li><a href="https://www.iso.org/standard/72196.html" rel="nofollow noopener" target="_blank">ISO 21920-1:2021</a> — Yüzey dokusunun teknik dokümantasyonda gösterimi</li>
<li><a href="https://www.iso.org/standard/80702.html" rel="nofollow noopener" target="_blank">ISO 1:2022</a> — Boyutsal ve geometrik özellikler için standart referans sıcaklığı</li>
<li><a href="https://www.iso.org/standard/70137.html" rel="nofollow noopener" target="_blank">ISO 14253-1:2017</a> — Ölçümle uygunluk ve uygunsuzluk karar kuralları</li>
</ul>
<p><em>Son güncelleme: 12 Temmuz 2026.</em></p>
</div>`;
