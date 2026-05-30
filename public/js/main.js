/* WOLFSE — istemci tarafı etkileşim. Bağımlılıksız, hafif. */
(function () {
  "use strict";

  /* ---- Mobil menü ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- SSS akordiyon ---- */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---- Çerez bildirimi ---- */
  var COOKIE_KEY = "wolfse_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var consent = null;
    try { consent = localStorage.getItem(COOKIE_KEY); } catch (e) {}
    if (!consent) banner.hidden = false;
    banner.querySelectorAll("[data-cookie]").forEach(function (b) {
      b.addEventListener("click", function () {
        var val = b.getAttribute("data-cookie");
        try { localStorage.setItem(COOKIE_KEY, val); } catch (e) {}
        banner.hidden = true;
        if (val === "kabul") loadAnalytics();
      });
    });
    if (consent === "kabul") loadAnalytics();
  }

  /* ---- Analitik/pixel yükleme (onay sonrası) ----
     Gerçek ID'ler src/data/site.js içinde TODO olarak işaretlidir.
     Placeholder (XXXX) içeren ID'ler yüklenmez. */
  function loadAnalytics() {
    // window.WOLFSE_IDS build sırasında enjekte edilebilir; yoksa atla.
    var ids = window.WOLFSE_IDS || {};
    if (ids.ga4 && ids.ga4.indexOf("XXXX") === -1) {
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + ids.ga4;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", ids.ga4);
    }
    // Meta Pixel / LinkedIn / Google Ads benzer şekilde eklenebilir (onay sonrası).
  }

  /* ---- Dönüşüm olayı (teklif gönderimi) ---- */
  function trackLead() {
    try {
      if (window.gtag) {
        window.gtag("event", "generate_lead", { event_category: "quote", event_label: "teklif_formu" });
        // Google Ads conversion (ID/label gerçek olduğunda)
        var ids = window.WOLFSE_IDS || {};
        if (ids.adsId && ids.adsLabel && ids.adsId.indexOf("XXXX") === -1) {
          window.gtag("event", "conversion", { send_to: ids.adsId + "/" + ids.adsLabel });
        }
      }
      if (window.fbq) window.fbq("track", "Lead");
      if (window.lintrk) window.lintrk("track", { conversion_id: (window.WOLFSE_IDS || {}).linkedinConversion });
    } catch (e) {}
  }

  /* ---- Teklif formu doğrulama + gönderim ---- */
  var form = document.getElementById("quote-form");
  if (form) {
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(name, msg) {
      var span = form.querySelector('.error[data-for="' + name + '"]');
      var field = span ? span.closest(".field") : null;
      if (span) span.textContent = msg || "";
      if (field) field.classList.toggle("invalid", !!msg);
    }

    function validate() {
      var ok = true;
      var get = function (n) { return (form.elements[n] && form.elements[n].value || "").trim(); };

      if (!get("ad_soyad")) { setError("ad", "Lütfen ad soyad girin."); ok = false; } else setError("ad", "");
      if (!get("telefon")) { setError("telefon", "Lütfen telefon girin."); ok = false; } else setError("telefon", "");
      var email = get("email");
      if (!email || !EMAIL_RE.test(email)) { setError("email", "Geçerli bir e-posta girin."); ok = false; } else setError("email", "");
      if (!get("hizmet_turu")) { setError("hizmet", "Lütfen hizmet türü seçin."); ok = false; } else setError("hizmet", "");
      if (!form.elements["kvkk_onay"].checked) { setError("kvkk", "Devam etmek için KVKK onayı gereklidir."); ok = false; } else setError("kvkk", "");

      // Dosya boyutu kontrolü (25 MB)
      var fileInput = form.elements["dosya"];
      if (fileInput && fileInput.files && fileInput.files.length) {
        var max = 25 * 1024 * 1024, big = false;
        for (var i = 0; i < fileInput.files.length; i++) if (fileInput.files[i].size > max) big = true;
        if (big) { setError("dosya", "Her dosya en fazla 25 MB olabilir."); ok = false; } else setError("dosya", "");
      }
      return ok;
    }

    form.addEventListener("submit", function (e) {
      // Honeypot dolu ise sessizce iptal (bot)
      if (form.elements["website"] && form.elements["website"].value) { e.preventDefault(); return; }
      if (!validate()) { e.preventDefault(); var inv = form.querySelector(".field.invalid"); if (inv) inv.scrollIntoView({ behavior: "smooth", block: "center" }); return; }

      var endpoint = form.getAttribute("action");
      if (!endpoint || endpoint === "#") {
        // Backend yoksa: mailto fallback ile temel bilgileri ilet
        e.preventDefault();
        var to = form.getAttribute("data-mailto") || "";
        var get = function (n) { return (form.elements[n] && form.elements[n].value || "").trim(); };
        var subject = "Teklif Talebi — " + (get("firma") || get("ad_soyad"));
        var bodyLines = [
          "Ad Soyad: " + get("ad_soyad"),
          "Firma: " + get("firma"),
          "Telefon: " + get("telefon"),
          "E-posta: " + get("email"),
          "Şehir: " + get("sehir"),
          "Hizmet: " + get("hizmet_turu"),
          "Malzeme: " + get("malzeme_turu"),
          "Kalınlık: " + get("kalinlik"),
          "Adet: " + get("adet"),
          "Termin: " + get("termin"),
          "",
          "Açıklama:",
          get("aciklama"),
          "",
          "(Not: Dosya ekleri e-posta istemcinizden manuel eklenmelidir.)"
        ];
        trackLead();
        window.location.href =
          "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines.join("\n"));
        var note = document.getElementById("form-success");
        if (note) { note.hidden = false; note.textContent = "E-posta istemciniz açılıyor… Açılmazsa lütfen bilgileri " + to + " adresine gönderin."; }
        return;
      }

      // Endpoint varsa fetch ile gönder; başarıda teşekkür sayfasına yönlendir
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; }
      var note2 = document.getElementById("form-success");
      if (note2) { note2.hidden = false; note2.textContent = "Talebiniz gönderiliyor…"; }

      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) { trackLead(); window.location.href = "/tesekkurler"; }
          else throw new Error("Gönderim hatası");
        })
        .catch(function () {
          if (btn) btn.disabled = false;
          if (note2) { note2.style.color = "#ff6b6b"; note2.textContent = "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile iletişime geçin."; }
        });
    });
  }
})();
