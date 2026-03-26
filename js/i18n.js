/* ============================================
   SnapToolbox - Internationalization (i18n)
   Auto-detects browser language, supports manual toggle.
   ============================================ */

const I18N = {
  // Current language
  currentLang: 'en',

  // Supported languages
  supported: ['en', 'ja'],

  // --- Translation Dictionaries ---
  translations: {
    // ===== Common (Header, Footer, Cookie Banner) =====
    common: {
      en: {
        nav_tools: 'Tools',
        nav_about: 'About',
        nav_contact: 'Contact',
        footer_tools: 'Tools',
        footer_legal: 'Legal',
        footer_about: 'About',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_cookies: 'Cookie Policy',
        footer_about_text: 'Free online tools that run entirely in your browser. No signup, no data collection.',
        footer_copyright: '© 2026 SnapToolbox. All rights reserved. All processing is done locally in your browser.',
        cookie_message: 'We use cookies to improve your experience and analyze site traffic. No personal data is collected by our tools.',
        cookie_policy_link: 'Cookie Policy',
        cookie_accept: 'Accept',
        cookie_decline: 'Decline',
        lang_toggle: '日本語',
        breadcrumb_home: 'Home',
      },
      ja: {
        nav_tools: 'ツール',
        nav_about: 'サイトについて',
        nav_contact: 'お問い合わせ',
        footer_tools: 'ツール一覧',
        footer_legal: '法的情報',
        footer_about: 'サイトについて',
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_cookies: 'Cookieポリシー',
        footer_about_text: 'すべてブラウザ内で完結する無料オンラインツール。登録不要、データ収集なし。',
        footer_copyright: '© 2026 SnapToolbox. All rights reserved. すべての処理はお使いのブラウザ内で行われます。',
        cookie_message: 'サイト改善とアクセス解析のためCookieを使用しています。ツール利用時に個人データは収集されません。',
        cookie_policy_link: 'Cookieポリシー',
        cookie_accept: '同意する',
        cookie_decline: '拒否する',
        lang_toggle: 'English',
        breadcrumb_home: 'ホーム',
      }
    },

    // ===== Index / Landing Page =====
    index: {
      en: {
        hero_title: 'Free Online Tools',
        hero_subtitle: 'Fast, free, and private. No signup required. All tools run entirely in your browser.',
        search_placeholder: 'Search tools...',
        cat_image: 'Image Tools',
        cat_text: 'Text & Developer Tools',
        cat_calc: 'Calculators & Converters',
        cat_security: 'Security Tools',
        featured_badge: 'Most Popular',
        featured_desc: 'Compress JPEG, PNG, and WebP images without losing quality. All processing happens in your browser — your images are never uploaded.',
        tool_image_compressor: 'Image Compressor',
        tool_image_compressor_desc: 'Compress images without losing quality. Supports JPEG, PNG, WebP.',
        tool_image_converter: 'Image Format Converter',
        tool_image_converter_desc: 'Convert images between PNG, JPEG, WebP formats instantly.',
        tool_json: 'JSON Formatter',
        tool_json_desc: 'Format, validate, and beautify JSON data with syntax highlighting.',
        tool_char: 'Character Counter',
        tool_char_desc: 'Count characters, words, sentences, and paragraphs in real time.',
        tool_qr: 'QR Code Generator',
        tool_qr_desc: 'Generate QR codes from text or URLs. Download as PNG.',
        tool_unit: 'Unit Converter',
        tool_unit_desc: 'Convert between length, weight, temperature, and more.',
        tool_color: 'Color Converter',
        tool_color_desc: 'Convert colors between HEX, RGB, HSL formats with live preview.',
        tool_password: 'Password Generator',
        tool_password_desc: 'Generate strong, random passwords with cryptographic security.',
        coming_soon: 'Coming Soon',
        about_title: 'Why SnapToolbox?',
        about_1_title: 'Privacy First',
        about_1_desc: 'All processing happens in your browser. We never upload or store your data.',
        about_2_title: '100% Free',
        about_2_desc: 'No hidden fees, no signup walls, no premium tiers. Every tool is completely free.',
        about_3_title: 'Lightning Fast',
        about_3_desc: 'No server round-trips. Everything runs locally for instant results.',
        privacy_note: '100% browser-based. Your data never leaves your device.',
        cta_title: 'Try our most popular tool',
        cta_desc: 'Compress images up to 80% smaller — right in your browser. No upload, no waiting.',
        cta_btn: 'Compress Images Now',
        mascot_curious: 'Curious',
        mascot_focused: 'Focused',
        mascot_relaxed: 'Relaxed',
        mascot_techy: 'Techy',
      },
      ja: {
        hero_title: '無料オンラインツール',
        hero_subtitle: '高速・無料・プライバシー保護。登録不要。すべてブラウザ内で動作します。',
        search_placeholder: 'ツールを検索...',
        cat_image: '画像ツール',
        cat_text: 'テキスト・開発者ツール',
        cat_calc: '計算・変換ツール',
        cat_security: 'セキュリティツール',
        featured_badge: '人気No.1',
        featured_desc: 'JPEG, PNG, WebP画像を画質を保ったまま圧縮。すべてブラウザ内で処理され、画像がアップロードされることはありません。',
        tool_image_compressor: '画像圧縮',
        tool_image_compressor_desc: '画質を保ちながら画像を圧縮。JPEG, PNG, WebP対応。',
        tool_image_converter: '画像フォーマット変換',
        tool_image_converter_desc: 'PNG, JPEG, WebP間で画像を即座に変換。',
        tool_json: 'JSON整形ツール',
        tool_json_desc: 'JSONデータの整形・検証・シンタックスハイライト表示。',
        tool_char: '文字数カウンター',
        tool_char_desc: '文字数・単語数・文数・段落数をリアルタイムでカウント。',
        tool_qr: 'QRコード生成',
        tool_qr_desc: 'テキストやURLからQRコードを生成。PNG形式でダウンロード可能。',
        tool_unit: '単位変換',
        tool_unit_desc: '長さ・重さ・温度など、さまざまな単位を変換。',
        tool_color: 'カラー変換',
        tool_color_desc: 'HEX, RGB, HSL間でカラーコードを変換。リアルタイムプレビュー付き。',
        tool_password: 'パスワード生成',
        tool_password_desc: '暗号学的に安全な強力ランダムパスワードを生成。',
        coming_soon: '近日公開',
        about_title: 'SnapToolboxの特長',
        about_1_title: 'プライバシー最優先',
        about_1_desc: 'すべての処理はブラウザ内で完結。データのアップロードや保存は一切行いません。',
        about_2_title: '完全無料',
        about_2_desc: '隠れた料金なし、登録の壁なし、有料プランなし。すべてのツールが完全無料です。',
        about_3_title: '超高速',
        about_3_desc: 'サーバー通信なし。ローカル処理で瞬時に結果が得られます。',
        privacy_note: '100%ブラウザ完結。あなたのデータは端末から一切出ません。',
        cta_title: '一番人気のツールを試す',
        cta_desc: '画像を最大80%軽量化。ブラウザだけで完結、アップロード不要。',
        cta_btn: '画像を圧縮する',
        mascot_curious: 'わくわく',
        mascot_focused: '集中',
        mascot_relaxed: 'のんびり',
        mascot_techy: 'テクノ',
      }
    },

    // ===== Image Compressor =====
    image_compressor: {
      en: {
        title: 'Image Compressor',
        subtitle: 'Compress images without losing quality. All processing happens in your browser.',
        drop_title: 'Drop your image here',
        drop_desc: 'or click to select a file (JPEG, PNG, WebP — Max 50MB)',
        quality_label: 'Quality',
        format_label: 'Output Format',
        compress_btn: 'Compress',
        download_btn: 'Download',
        original: 'Original',
        compressed: 'Compressed',
        reduction: 'Reduction',
        privacy_note: 'Your images are never uploaded to any server.',
      },
      ja: {
        title: '画像圧縮ツール',
        subtitle: '画質を保ちながら画像を圧縮。すべての処理はブラウザ内で完結します。',
        drop_title: '画像をここにドロップ',
        drop_desc: 'またはクリックしてファイルを選択（JPEG, PNG, WebP — 最大50MB）',
        quality_label: '品質',
        format_label: '出力形式',
        compress_btn: '圧縮する',
        download_btn: 'ダウンロード',
        original: '元のサイズ',
        compressed: '圧縮後',
        reduction: '削減率',
        privacy_note: '画像がサーバーにアップロードされることはありません。',
      }
    },

    // ===== JSON Formatter =====
    json_formatter: {
      en: {
        title: 'JSON Formatter & Validator',
        subtitle: 'Format, validate, and beautify JSON data instantly.',
        input_label: 'Input JSON',
        input_placeholder: 'Paste your JSON here...',
        format_btn: 'Format',
        minify_btn: 'Minify',
        clear_btn: 'Clear',
        copy_btn: 'Copy',
        output_label: 'Formatted Output',
        indent_label: 'Indent',
        valid_json: 'Valid JSON',
        invalid_json: 'Invalid JSON',
        privacy_note: 'No data is sent to any server.',
        mascot_bubble: 'Paste your JSON and I\'ll format it nice and neat — no rush!',
      },
      ja: {
        title: 'JSON整形・検証ツール',
        subtitle: 'JSONデータを即座に整形・検証・美化。',
        input_label: '入力JSON',
        input_placeholder: 'JSONをここに貼り付け...',
        format_btn: '整形',
        minify_btn: '圧縮',
        clear_btn: 'クリア',
        copy_btn: 'コピー',
        output_label: '整形結果',
        indent_label: 'インデント',
        valid_json: '有効なJSON',
        invalid_json: '無効なJSON',
        privacy_note: 'データがサーバーに送信されることはありません。',
        mascot_bubble: 'JSONを貼り付けてね。ゆっくりキレイに整えるよ！',
      }
    },

    // ===== Character Counter =====
    character_counter: {
      en: {
        title: 'Character Counter',
        subtitle: 'Count characters, words, sentences, and paragraphs in real time.',
        input_placeholder: 'Start typing or paste your text here...',
        characters: 'Characters',
        characters_no_space: 'Characters (no spaces)',
        words: 'Words',
        sentences: 'Sentences',
        paragraphs: 'Paragraphs',
        reading_time: 'Reading Time',
        clear_btn: 'Clear',
        copy_btn: 'Copy Text',
        privacy_note: 'Your text is never sent to any server.',
        mascot_bubble: 'Let me count every character for you. Take your time typing!',
      },
      ja: {
        title: '文字数カウンター',
        subtitle: '文字数・単語数・文数・段落数をリアルタイムでカウント。',
        input_placeholder: 'ここにテキストを入力または貼り付け...',
        characters: '文字数',
        characters_no_space: '文字数（空白除く）',
        words: '単語数',
        sentences: '文数',
        paragraphs: '段落数',
        reading_time: '読了時間',
        clear_btn: 'クリア',
        copy_btn: 'テキストをコピー',
        privacy_note: 'テキストがサーバーに送信されることはありません。',
        mascot_bubble: '文字数、ぜ〜んぶ数えるよ。ゆっくり書いてね！',
      }
    },

    // ===== QR Code Generator =====
    qr_generator: {
      en: {
        title: 'QR Code Generator',
        subtitle: 'Generate QR codes from text or URLs. Download as PNG.',
        input_label: 'Text or URL',
        input_placeholder: 'Enter text or URL...',
        size_label: 'Size',
        fg_color: 'Foreground Color',
        bg_color: 'Background Color',
        generate_btn: 'Generate QR Code',
        download_btn: 'Download PNG',
        privacy_note: 'No data is sent to any server.',
      },
      ja: {
        title: 'QRコード生成ツール',
        subtitle: 'テキストやURLからQRコードを生成。PNG形式でダウンロード可能。',
        input_label: 'テキストまたはURL',
        input_placeholder: 'テキストまたはURLを入力...',
        size_label: 'サイズ',
        fg_color: '前景色',
        bg_color: '背景色',
        generate_btn: 'QRコード生成',
        download_btn: 'PNGダウンロード',
        privacy_note: 'データがサーバーに送信されることはありません。',
      }
    },

    // ===== Unit Converter =====
    unit_converter: {
      en: {
        title: 'Unit Converter',
        subtitle: 'Convert between various units of measurement instantly.',
        category_label: 'Category',
        from_label: 'From',
        to_label: 'To',
        swap_btn: 'Swap',
        result_label: 'Result',
        cat_length: 'Length',
        cat_weight: 'Weight',
        cat_temperature: 'Temperature',
        cat_area: 'Area',
        cat_volume: 'Volume',
        cat_speed: 'Speed',
        cat_data: 'Data',
        cat_time: 'Time',
        privacy_note: 'All calculations happen in your browser.',
        mascot_bubble: 'Converting units is easy — just relax and let me handle it!',
      },
      ja: {
        title: '単位変換ツール',
        subtitle: 'さまざまな単位を即座に変換。',
        category_label: 'カテゴリ',
        from_label: '変換元',
        to_label: '変換先',
        swap_btn: '入替',
        result_label: '変換結果',
        cat_length: '長さ',
        cat_weight: '重さ',
        cat_temperature: '温度',
        cat_area: '面積',
        cat_volume: '体積',
        cat_speed: '速度',
        cat_data: 'データ',
        cat_time: '時間',
        privacy_note: 'すべての計算はブラウザ内で行われます。',
        mascot_bubble: '単位変換はおまかせ！のんびり待っててね！',
      }
    },

    // ===== Color Converter =====
    color_converter: {
      en: {
        title: 'Color Converter',
        subtitle: 'Convert colors between HEX, RGB, and HSL with live preview.',
        hex_label: 'HEX',
        rgb_label: 'RGB',
        hsl_label: 'HSL',
        copy_btn: 'Copy',
        preview_label: 'Color Preview',
        privacy_note: 'All processing happens in your browser.',
        mascot_bubble: 'Pick any color — I\'ll convert it to every format you need!',
      },
      ja: {
        title: 'カラー変換ツール',
        subtitle: 'HEX, RGB, HSL間でカラーコードを変換。リアルタイムプレビュー付き。',
        hex_label: 'HEX',
        rgb_label: 'RGB',
        hsl_label: 'HSL',
        copy_btn: 'コピー',
        preview_label: 'カラープレビュー',
        privacy_note: 'すべての処理はブラウザ内で行われます。',
        mascot_bubble: '好きな色を選んでね。全フォーマットに変換するよ！',
      }
    },

    // ===== Password Generator =====
    password_generator: {
      en: {
        title: 'Password Generator',
        subtitle: 'Generate strong, random passwords with cryptographic security.',
        length_label: 'Password Length',
        uppercase: 'Uppercase (A-Z)',
        lowercase: 'Lowercase (a-z)',
        numbers: 'Numbers (0-9)',
        symbols: 'Symbols (!@#$...)',
        exclude_ambiguous: 'Exclude ambiguous characters (0, O, l, 1, I)',
        generate_btn: 'Generate Password',
        generate_multi_btn: 'Generate 5 Passwords',
        copy_btn: 'Copy',
        strength: 'Strength',
        entropy: 'Entropy',
        strength_weak: 'Weak',
        strength_fair: 'Fair',
        strength_strong: 'Strong',
        strength_very_strong: 'Very Strong',
        privacy_note: 'Generated in your browser using cryptographic randomness. Never sent to any server.',
      },
      ja: {
        title: 'パスワード生成ツール',
        subtitle: '暗号学的に安全な強力ランダムパスワードを生成。',
        length_label: 'パスワードの長さ',
        uppercase: '大文字 (A-Z)',
        lowercase: '小文字 (a-z)',
        numbers: '数字 (0-9)',
        symbols: '記号 (!@#$...)',
        exclude_ambiguous: '紛らわしい文字を除外 (0, O, l, 1, I)',
        generate_btn: 'パスワード生成',
        generate_multi_btn: '5個まとめて生成',
        copy_btn: 'コピー',
        strength: '強度',
        entropy: 'エントロピー',
        strength_weak: '弱い',
        strength_fair: 'やや弱い',
        strength_strong: '強い',
        strength_very_strong: '非常に強い',
        privacy_note: 'ブラウザ内で暗号学的乱数を使用して生成。サーバーへの送信は一切ありません。',
      }
    },
  },

  // --- Detect Language ---
  detectLanguage() {
    // 1. Check localStorage for user preference
    const saved = localStorage.getItem('snaptools_lang');
    if (saved && this.supported.includes(saved)) return saved;

    // 2. Check browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('ja')) return 'ja';

    return 'en';
  },

  // --- Get translation ---
  t(section, key) {
    const dict = this.translations[section];
    if (!dict) return key;
    const langDict = dict[this.currentLang] || dict['en'];
    return langDict[key] || key;
  },

  // --- Apply translations to DOM ---
  applyTranslations() {
    // Elements with data-i18n="section.key"
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n').split('.');
      const text = this.t(section, key);
      if (text) el.textContent = text;
    });

    // Elements with data-i18n-placeholder="section.key"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n-placeholder').split('.');
      const text = this.t(section, key);
      if (text) el.placeholder = text;
    });

    // Elements with data-i18n-title="section.key"
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n-title').split('.');
      const text = this.t(section, key);
      if (text) el.title = text;
    });

    // Update lang toggle button text
    const langBtn = document.querySelector('.lang-toggle') || document.querySelector('.st-lang-btn');
    if (langBtn) {
      langBtn.textContent = this.t('common', 'lang_toggle');
    }

    // Update html lang attribute
    document.documentElement.lang = this.currentLang;
  },

  // --- Toggle Language ---
  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'ja' : 'en';
    localStorage.setItem('snaptools_lang', this.currentLang);
    this.applyTranslations();
  },

  // --- Set specific language ---
  setLang(lang) {
    if (this.supported.includes(lang)) {
      this.currentLang = lang;
      localStorage.setItem('snaptools_lang', lang);
      this.applyTranslations();
    }
  },

  // --- Translate by selector (for pages with complex DOM) ---
  translateBySelector(mappings) {
    mappings.forEach(([selector, section, key]) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = this.t(section, key);
    });
  },

  // --- Register page-specific callback ---
  _pageCallbacks: [],
  onTranslate(callback) {
    this._pageCallbacks.push(callback);
    // Run immediately with current lang
    callback(this.currentLang);
  },

  // --- Initialize ---
  init() {
    this.currentLang = this.detectLanguage();
    this.applyTranslations();
    // Run page-specific callbacks
    this._pageCallbacks.forEach(cb => cb(this.currentLang));
  }
};

// Override applyTranslations to also run page callbacks
const _origApply = I18N.applyTranslations.bind(I18N);
I18N.applyTranslations = function() {
  _origApply();
  this._pageCallbacks.forEach(cb => cb(this.currentLang));
}.bind(I18N);

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => I18N.init());
