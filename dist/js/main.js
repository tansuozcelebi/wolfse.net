/* WOLFSE — istemci tarafı etkileşim. Bağımlılıksız, hafif. */
(function () {
  "use strict";

  /* ---- Mobil menü ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  var header = document.querySelector(".site-header");

  // Header yüksekliğini ölç ve CSS değişkenine yaz — menü paneli tam header'ın
  // altından başlasın (sabit 68px varsayımı iOS Safari + büyük logoda kayıyordu).
  function syncHeaderHeight() {
    if (!header) return;
    var h = Math.round(header.getBoundingClientRect().height);
    if (h) document.documentElement.style.setProperty("--header-h", h + "px");
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight, { passive: true });
  window.addEventListener("orientationchange", function () {
    setTimeout(syncHeaderHeight, 250);
  });
  window.addEventListener("load", syncHeaderHeight);

  if (toggle && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    };
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      syncHeaderHeight();
      setMenu(!nav.classList.contains("open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) setMenu(false);
    });
    // Menü açıkken dışarı dokununca kapat
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (e.target.closest("#primary-nav") || e.target.closest(".nav-toggle")) return;
      setMenu(false);
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

  /* ---- Kampanya penceresi (ilk girişte bir kez) ---- */
  var promo = document.getElementById("promo-modal");
  if (promo) {
    var pVer = promo.getAttribute("data-version") || "1";
    var pKey = "wolfse_promo_" + pVer;
    var pEnd = promo.getAttribute("data-end");
    var seen = false;
    try { seen = !!localStorage.getItem(pKey); } catch (e) {}
    // Bitiş tarihi geçtiyse gösterme (YYYY-MM-DD; gün sonuna kadar geçerli)
    var expired = false;
    if (pEnd) { var end = new Date(pEnd + "T23:59:59"); if (!isNaN(end) && Date.now() > end.getTime()) expired = true; }

    var promoLastFocus = null;
    var promoFocusables = function () {
      return Array.prototype.slice.call(
        promo.querySelectorAll('a[href], button:not([disabled])')
      );
    };
    var promoTrap = function (e) {
      if (e.key !== "Tab") return;
      var f = promoFocusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    var promoKey = function (e) {
      if (e.key === "Escape" && !promo.hidden) closePromo();
      else promoTrap(e);
    };
    var promoEvent = function (name) {
      try { if (window.gtag) window.gtag("event", name, { event_category: "promo", event_label: pVer }); } catch (e) {}
    };

    var closePromo = function (fromCta) {
      if (promo.hidden) return;
      promo.hidden = true;
      document.documentElement.classList.remove("promo-open");
      document.removeEventListener("keydown", promoKey, true);
      try { localStorage.setItem(pKey, "1"); } catch (e) {}
      promoEvent(fromCta ? "promo_cta_click" : "promo_dismiss");
      if (promoLastFocus && promoLastFocus.focus) { try { promoLastFocus.focus(); } catch (e) {} }
    };

    if (!seen && !expired) {
      setTimeout(function () {
        promoLastFocus = document.activeElement;
        promo.hidden = false;
        document.documentElement.classList.add("promo-open");
        var f = promoFocusables();
        if (f.length) f[0].focus(); // kapat (×) düğmesine odaklan — kazayla Enter kapatır
        document.addEventListener("keydown", promoKey, true);
        promoEvent("promo_view");
      }, 700);
      promo.querySelectorAll("[data-promo-dismiss]").forEach(function (el) {
        var isCta = el.tagName === "A" && el.getAttribute("href");
        el.addEventListener("click", function () { closePromo(!!isCta); });
      });
    }
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

  /* ---- Video Modal ---- */
  function initVideoModal() {
    var modal = document.getElementById("video-modal");
    var video = document.getElementById("intro-video");
    var closeBtn = document.querySelector(".video-close-btn");

    if (!modal || !video || !closeBtn) return;

    function closeModal() {
      modal.classList.remove("active");
      closeBtn.classList.remove("show");
      video.pause();
      video.currentTime = 0;
      document.body.classList.remove("nav-open");
    }

    // Sayfa yüklendiğinde modal'ı göster
    function showModal() {
      modal.classList.add("active");
      var pr = video.play();
      if (pr && typeof pr.catch === "function") {
        // Otomatik oynatma engellenirse (iOS) kapat butonunu hemen göster
        pr.catch(function () { closeBtn.classList.add("show"); });
      }
    }

    // Video bittiğinde close butonu göster
    video.addEventListener("ended", function () { closeBtn.classList.add("show"); });
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("active")) closeModal(); });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showModal);
    } else {
      showModal();
    }
  }

  initVideoModal();
})();
