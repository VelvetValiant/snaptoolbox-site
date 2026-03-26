/* ============================================
   SnapToolbox — Shared JavaScript
   Cookie Consent, Navigation, Utilities
   ============================================ */

// --- Mobile Navigation Toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.st-nav-toggle');
  const nav = document.querySelector('.st-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
});

// --- Cookie Consent (GDPR / CCPA Compliant) ---
const CookieConsent = {
  STORAGE_KEY: 'snaptools_cookie_consent',

  init() {
    const consent = localStorage.getItem(this.STORAGE_KEY);
    if (!consent) {
      this.showBanner();
    } else {
      const parsed = JSON.parse(consent);
      if (parsed.analytics) {
        this.loadAnalytics();
      }
    }
  },

  showBanner() {
    const banner = document.querySelector('.st-cookie');
    if (banner) {
      banner.classList.add('show');
    }
  },

  accept() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      essential: true,
      analytics: true,
      advertising: true,
      timestamp: new Date().toISOString()
    }));
    this.hideBanner();
    this.loadAnalytics();
    this.loadAds();
  },

  decline() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      essential: true,
      analytics: false,
      advertising: false,
      timestamp: new Date().toISOString()
    }));
    this.hideBanner();
  },

  hideBanner() {
    const banner = document.querySelector('.st-cookie');
    if (banner) banner.classList.remove('show');
  },

  loadAnalytics() {
    // Google Analytics placeholder
    // Replace GA_MEASUREMENT_ID with your actual ID
    /*
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', { anonymize_ip: true });
    */
  },

  loadAds() {
    // AdSense — already loaded via <script> tag in <head>
  }
};

document.addEventListener('DOMContentLoaded', () => CookieConsent.init());

// --- Toast Notification ---
function showToast(message, duration = 2500) {
  let toast = document.querySelector('.st-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'st-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// --- Copy to Clipboard ---
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied!');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!');
  }
}

// Backward compatibility alias
const copyToClipboard = copyText;

// --- File Size Formatter ---
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Search Filter (for index page) ---
function initSearch() {
  const input = document.querySelector('#tool-search');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.st-tool-card');
    const categories = document.querySelectorAll('.st-category-section');

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });

    categories.forEach(section => {
      const visibleCards = section.querySelectorAll('.st-tool-card:not([style*="display: none"])');
      section.style.display = visibleCards.length > 0 ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
