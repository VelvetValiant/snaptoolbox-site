/* ============================================
   SnapToolbox - Internationalization (i18n)
   Auto-detects browser language, supports manual toggle.
   ============================================ */

const I18N = {
  // Current language
  currentLang: 'en',

  // Supported languages
  supported: ['en', 'ja', 'zh-TW'],

  // --- Translation Dictionaries ---
  translations: {
    // ===== Common (Header, Footer, Cookie Banner) =====
    common: {
      en: {
        nav_tools: 'Tools',
        nav_about: 'About',
        nav_contact: 'Contact',
        footer_image_tools: 'Image Tools',
        footer_other_tools: 'Other Tools',
        footer_legal: 'Legal',
        footer_about: 'About',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_cookies: 'Cookie Policy',
        footer_about_text: 'Free online tools that run entirely in your browser. No signup, no data collection.',
        footer_copyright: '© 2026 SnapToolbox. All rights reserved.<br>All processing is done locally in your browser.',
        cookie_message: 'We use cookies to improve your experience and analyze site traffic. No personal data is collected by our tools.',
        cookie_policy_link: 'Cookie Policy',
        cookie_accept: 'Accept',
        cookie_decline: 'Decline',
        lang_toggle: '日本語',
        breadcrumb_home: 'Home',
        footer_home: 'Home',
        footer_home_link: 'Back to Top',
        footer_contact: 'Contact',
        footer_contact_link: 'Contact Us',
        sns_title: 'SNS MyLink',
        sns_title_sub: 'Register your SNS accounts for quick access from any page.',
        sns_add: 'Add Link',
        sns_placeholder: 'https://twitter.com/yourname',
        sns_save: 'Save',
        sns_cancel: 'Cancel',
        sns_empty: 'No links yet. Add your social links!',
        sns_note_1: 'Links are displayed only — no data is shared.',
        sns_note_2: 'Please download edited images before use.',
        sns_delete_confirm: 'Remove this link?',
        pwa_install: 'Add to Home',
      },
      ja: {
        nav_tools: 'ツール',
        nav_about: 'サイトについて',
        nav_contact: 'お問合せ',
        footer_image_tools: '画像ツール',
        footer_other_tools: 'その他のツール',
        footer_legal: '法的情報',
        footer_about: 'サイトについて',
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_cookies: 'Cookieポリシー',
        footer_about_text: 'すべてブラウザ内で完結する無料オンラインツール。登録不要、データ収集なし。',
        footer_copyright: '© 2026 SnapToolbox. All rights reserved.<br>すべての処理はお使いのブラウザ内で行われます。',
        cookie_message: 'サイト改善とアクセス解析のためCookieを使用しています。ツール利用時に個人データは収集されません。',
        cookie_policy_link: 'Cookieポリシー',
        cookie_accept: '同意する',
        cookie_decline: '拒否する',
        lang_toggle: 'English',
        breadcrumb_home: 'ホーム',
        footer_home: 'ホーム',
        footer_home_link: 'サイトトップへ',
        footer_contact: 'お問合せ',
        footer_contact_link: 'お問合せはこちら',
        sns_title: 'SNS マイリンク',
        sns_title_sub: 'SNSアカウントを登録すると全ページからアクセス可能です。',
        sns_add: 'リンクを追加',
        sns_placeholder: 'https://twitter.com/yourname',
        sns_save: '保存',
        sns_cancel: 'キャンセル',
        sns_empty: 'リンクはまだありません。SNSリンクを追加しましょう！',
        sns_note_1: 'リンク表示のみでデータの共有などはありません。',
        sns_note_2: '補正画像はダウンロードしてから利用してください',
        sns_delete_confirm: 'このリンクを削除しますか？',
        pwa_install: 'ホーム画面に追加',
      },
      'zh-TW': {
        nav_tools: '工具',
        nav_about: '關於',
        nav_contact: '聯絡我們',
        footer_image_tools: '圖片工具',
        footer_other_tools: '其他工具',
        footer_legal: '法律資訊',
        footer_about: '關於本站',
        footer_privacy: '隱私權政策',
        footer_terms: '服務條款',
        footer_cookies: 'Cookie 政策',
        footer_about_text: '完全在瀏覽器中運行的免費線上工具。無需註冊，不收集任何資料。',
        footer_copyright: '© 2026 SnapToolbox. All rights reserved.<br>所有處理均在您的瀏覽器中完成。',
        cookie_message: '我們使用 Cookie 來改善體驗並分析流量。工具使用時不會收集任何個人資料。',
        cookie_policy_link: 'Cookie 政策',
        cookie_accept: '同意',
        cookie_decline: '拒絕',
        lang_toggle: '繁體中文',
        breadcrumb_home: '首頁',
        footer_home: '首頁',
        footer_home_link: '回到頂部',
        footer_contact: '聯絡我們',
        footer_contact_link: '聯絡方式',
        sns_title: 'SNS 我的連結',
        sns_title_sub: '註冊您的社群帳號，即可從任何頁面快速存取。',
        sns_add: '新增連結',
        sns_placeholder: 'https://twitter.com/yourname',
        sns_save: '儲存',
        sns_cancel: '取消',
        sns_empty: '尚無連結。新增您的社群連結吧！',
        sns_note_1: '僅顯示連結，不會分享任何資料。',
        sns_note_2: '請先下載編輯後的圖片再使用。',
        sns_delete_confirm: '確定要移除此連結嗎？',
        pwa_install: '加到主畫面',
      }
    },

    // ===== Index / Landing Page =====
    index: {
      en: {
        hero_title: 'Image Compression — Fast & Free',
        hero_subtitle_1: 'All tools run 100% in your browser — your files never leave your device.',
        hero_subtitle_2: 'Fast, free, unlimited. No signup, no server upload.',
        search_placeholder: 'Search tools...',
        cat_image: 'Image Tools',
        cat_text: 'Text & Developer Tools',
        cat_calc: 'Calculators & Converters',
        cat_security: 'Security Tools',
        featured_badge: 'Most Popular',
        featured_desc: 'Compress JPEG, PNG, and WebP images without losing quality. All processing happens in your browser — your images are never uploaded.',
        tool_image_compressor: 'Image Compressor',
        tool_image_compressor_desc: 'Compress images without losing quality. Supports JPEG, PNG, WebP.',
        tool_image_editor: 'Image Editor',
        tool_image_editor_desc: 'Adjust brightness, contrast, crop, rotate and denoise images in your browser.',
        tool_image_converter: 'Image Format Converter',
        tool_image_converter_desc: 'Convert images between PNG, JPEG, WebP formats instantly.',
        tool_pdf_converter: 'PDF Converter',
        tool_pdf_converter_desc: 'Convert PDF to images or images to PDF. All in your browser.',
        tool_json: 'JSON Formatter',
        tool_json_desc: 'Format, validate, and beautify JSON data with syntax highlighting.',
        tool_char: 'Character Counter',
        tool_char_desc: 'Count characters, words, sentences, and paragraphs in real time.',
        tool_qr: 'QR Code Generator',
        tool_qr_desc: 'Generate QR codes from text or URLs. Download as PNG.',
        tool_color: 'Color Converter',
        tool_color_desc: 'Convert colors between HEX, RGB, HSL formats with live preview.',
        tool_youtube_thumb: 'YouTube Thumbnail',
        tool_youtube_thumb_desc: 'Create eye-catching YouTube thumbnails with text, templates & backgrounds.',
        tool_youtube_thumb_sub: 'Video & Social',
        tool_password: 'Password Generator',
        tool_password_desc: 'Generate strong, random passwords with cryptographic security.',
        coming_soon: 'Coming Soon',
        other_tools_title: 'All Tools',
        other_tools_sub: 'Other Tools',
        tool_json_sub: 'Dev & Data',
        tool_char_sub: 'Writing & Text',
        tool_color_sub: 'Design & Color',
        banner_privacy: '100% Browser-Based',
        banner_free: 'Truly Free & Unlimited',
        banner_quality: 'Quality Control',
        banner_allinone: '5+ Tools in One',
        banner_lang: 'EN / JA / 繁中',
        banner_desc: 'Your data never leaves your device. No signup, no limits.',
        banner_more: 'Learn more',
        support_title: 'Buy this sloth a coffee ☕',
        support_desc: 'SnapToolbox is free forever. If you find it useful, a small coffee helps keep the servers running!',
        support_btn: '☕ Buy me a coffee',
      },
      ja: {
        hero_title: '画像圧縮 — 高速＆無料',
        hero_subtitle_1: 'すべてのツールがブラウザ内で完結 — ファイルがデバイスの外に出ることはありません。',
        hero_subtitle_2: '高速・無料・無制限。登録不要、サーバー送信なし。',
        search_placeholder: 'ツールを検索...',
        cat_image: '画像ツール',
        cat_text: 'テキスト・開発者ツール',
        cat_calc: '計算・変換ツール',
        cat_security: 'セキュリティツール',
        featured_badge: '人気No.1',
        featured_desc: 'JPEG, PNG, WebP画像を画質を保ったまま圧縮。すべてブラウザ内で処理され、画像がアップロードされることはありません。',
        tool_image_compressor: '画像圧縮',
        tool_image_compressor_desc: '画質を保ちながら画像を圧縮。JPEG, PNG, WebP対応。',
        tool_image_editor: '画像補正ツール',
        tool_image_editor_desc: '明るさ・コントラスト・トリミング・回転・ノイズ除去をブラウザで。',
        tool_image_converter: '画像フォーマット変換',
        tool_image_converter_desc: 'PNG, JPEG, WebP間で画像を即座に変換。',
        tool_pdf_converter: 'PDF変換ツール',
        tool_pdf_converter_desc: 'PDFを画像に、画像をPDFに変換。すべてブラウザ内で完結。',
        tool_json: 'JSON整形ツール',
        tool_json_desc: 'JSONデータの整形・検証・シンタックスハイライト表示。',
        tool_char: '文字数カウンター',
        tool_char_desc: '文字数・単語数・文数・段落数をリアルタイムでカウント。',
        tool_qr: 'QRコード生成',
        tool_qr_desc: 'テキストやURLからQRコードを生成。PNG形式でダウンロード可能。',
        tool_color: 'カラー変換',
        tool_color_desc: 'HEX, RGB, HSL間でカラーコードを変換。リアルタイムプレビュー付き。',
        tool_youtube_thumb: 'YouTubeサムネイル',
        tool_youtube_thumb_desc: 'テキスト・テンプレート・背景で目を引くYouTubeサムネイルを作成。',
        tool_youtube_thumb_sub: '動画・SNS',
        tool_password: 'パスワード生成',
        tool_password_desc: '暗号学的に安全な強力ランダムパスワードを生成。',
        coming_soon: '近日公開',
        other_tools_title: 'ツール一覧',
        other_tools_sub: 'その他のツール',
        tool_json_sub: '開発・データ',
        tool_char_sub: 'ライティング・テキスト',
        tool_color_sub: 'デザイン・カラー',
        banner_privacy: '100%ブラウザ完結',
        banner_free: '完全無料＆無制限',
        banner_quality: '品質コントロール',
        banner_allinone: '5種類以上のツール',
        banner_lang: 'EN / JA / 繁中',
        banner_desc: 'データはデバイスの外に出ません。登録不要、制限なし。',
        banner_more: '詳しく見る',
        support_title: 'このナマケモノにコーヒーを ☕',
        support_desc: 'SnapToolboxはずっと無料です。もし気に入っていただけたら、コーヒー1杯分のサポートが運営の力になります！',
        support_btn: '☕ コーヒーをおごる',
        mascot_curious: 'わくわく',
        mascot_focused: '集中',
        mascot_relaxed: 'のんびり',
        mascot_techy: 'テクノ',
      },
      'zh-TW': {
        hero_title: '圖片壓縮 — 快速且免費',
        hero_subtitle_1: '所有工具皆在瀏覽器中運行 — 您的檔案絕不會離開裝置。',
        hero_subtitle_2: '快速、免費、無限制。無需註冊，不上傳至伺服器。',
        search_placeholder: '搜尋工具...',
        cat_image: '圖片工具',
        cat_text: '文字與開發者工具',
        cat_calc: '計算與轉換工具',
        cat_security: '安全工具',
        featured_badge: '最受歡迎',
        featured_desc: '壓縮 JPEG、PNG、WebP 圖片且不損失品質。所有處理都在瀏覽器中完成，圖片絕不會被上傳。',
        tool_image_compressor: '圖片壓縮',
        tool_image_compressor_desc: '保持品質的同時壓縮圖片。支援 JPEG、PNG、WebP。',
        tool_image_editor: '圖片編輯器',
        tool_image_editor_desc: '在瀏覽器中調整亮度、對比、裁切、旋轉和降噪。',
        tool_image_converter: '圖片格式轉換',
        tool_image_converter_desc: '在 PNG、JPEG、WebP 格式之間即時轉換。',
        tool_pdf_converter: 'PDF 轉換工具',
        tool_pdf_converter_desc: '將 PDF 轉為圖片，或將圖片轉為 PDF。全部在瀏覽器中完成。',
        tool_json: 'JSON 格式化工具',
        tool_json_desc: '格式化、驗證和美化 JSON 資料，支援語法高亮。',
        tool_char: '字數計算器',
        tool_char_desc: '即時計算字元數、字數、句數和段落數。',
        tool_qr: 'QR Code 產生器',
        tool_qr_desc: '從文字或網址產生 QR Code，可下載為 PNG。',
        tool_color: '顏色轉換',
        tool_color_desc: '在 HEX、RGB、HSL 格式之間轉換顏色，即時預覽。',
        tool_youtube_thumb: 'YouTube 縮圖',
        tool_youtube_thumb_desc: '使用文字、範本和背景建立吸睛的 YouTube 縮圖。',
        tool_youtube_thumb_sub: '影片・社群',
        tool_password: '密碼產生器',
        tool_password_desc: '使用加密技術產生安全的隨機密碼。',
        coming_soon: '即將推出',
        other_tools_title: '工具一覽',
        other_tools_sub: '其他工具',
        tool_json_sub: '開發・資料',
        tool_char_sub: '寫作・文字',
        tool_color_sub: '設計・顏色',
        banner_privacy: '100% 瀏覽器完成',
        banner_free: '完全免費且無限制',
        banner_quality: '品質控制',
        banner_allinone: '5 種以上工具',
        banner_lang: 'EN / JA / 繁中',
        banner_desc: '資料絕不離開您的裝置。無需註冊，沒有限制。',
        banner_more: '了解更多',
        support_title: '請這隻樹懶喝杯咖啡 ☕',
        support_desc: 'SnapToolbox 永久免費。如果覺得好用，一杯咖啡的支持就是最大的鼓勵！',
        support_btn: '☕ 請喝咖啡',
      }
    },

    // ===== About Page =====
    about: {
      en: {
        breadcrumb: 'About',
        hero_title: 'Why SnapToolbox?',
        hero_subtitle: 'Unlike typical online tools, SnapToolbox is designed to put you in control. Here\'s what makes us different.',
        feat_1_title: 'Your Data Never Leaves',
        feat_1_desc: 'Other tools upload your files to their servers. SnapToolbox processes everything in your browser using JavaScript — your images, text, and data stay 100% on your device. No server, no risk.',
        feat_2_title: 'Truly Unlimited & Free',
        feat_2_desc: 'No "20 files per session" limit, no 5MB cap, no hidden paywalls. Use every tool as many times as you want, with no file size restrictions. Free means free.',
        feat_3_title: 'You Control the Quality',
        feat_3_desc: 'Adjust compression with a quality slider and choose your output format. Other tools decide for you — we let you find the perfect balance between size and quality.',
        feat_4_title: 'All-in-One Toolbox',
        feat_4_desc: 'Image compression, JSON formatting, text counting, unit conversion, and color picking — all in one place. No more juggling between different sites for each task.',
        feat_5_title: 'Multilingual Support',
        feat_5_desc: 'Switch between English, Japanese, and Traditional Chinese with one click. We\'re expanding to more languages — so everyone can use powerful tools in their own language.',
        compare_title: 'How We Compare',
        compare_others: 'Typical Tools',
        compare_row_privacy: 'Data Privacy',
        compare_privacy_us: 'Browser only',
        compare_privacy_them: 'Server upload',
        compare_row_price: 'Price',
        compare_price_us: 'Free, unlimited',
        compare_price_them: 'Free tier limited',
        compare_row_quality: 'Quality Control',
        compare_quality_us: 'Adjustable slider',
        compare_quality_them: 'Auto only',
        compare_row_filesize: 'File Size Limit',
        compare_filesize_us: '50MB+',
        compare_filesize_them: '5MB (free)',
        compare_row_tools: 'Multiple Tools',
        compare_tools_us: '5+ tools',
        compare_tools_them: '1 tool',
        compare_row_lang: 'Languages',
        compare_lang_us: 'EN / JA / 繁中',
        compare_lang_them: 'English only',
        cta_title: 'Ready to try?',
        cta_desc: 'Start compressing images, formatting JSON, and more — free, right in your browser.',
        cta_btn: 'Go to Tools',
        contact_title: 'Contact',
        contact_desc: 'Questions, feedback, or partnership inquiries? We\'d love to hear from you.',
      },
      ja: {
        breadcrumb: 'SnapToolboxについて',
        hero_title: 'SnapToolboxの特長',
        hero_subtitle: '他のオンラインツールとは違う、あなたが主役の設計。その違いをご覧ください。',
        feat_1_title: 'あなたのデータは外に出ない',
        feat_1_desc: '他のツールはファイルをサーバーにアップロードします。SnapToolboxはすべてJavaScriptでブラウザ内処理。画像もテキストもデータも、100%あなたの端末に留まります。',
        feat_2_title: '本当に無制限＆無料',
        feat_2_desc: '「1回20枚まで」の制限も、5MBの上限も、隠れた課金もありません。すべてのツールを何度でも、ファイルサイズ制限なしで使えます。',
        feat_3_title: '品質はあなたがコントロール',
        feat_3_desc: '品質スライダーで圧縮率を調整し、出力フォーマットも選べます。他のツールはアルゴリズム任せ — SnapToolboxはあなたに最適なバランスを委ねます。',
        feat_4_title: 'オールインワン・ツールボックス',
        feat_4_desc: '画像圧縮、JSON整形、文字数カウント、単位変換、カラー変換 — すべてが一つの場所に。もう複数のサイトを行き来する必要はありません。',
        feat_5_title: '多言語対応',
        feat_5_desc: 'ワンクリックで英語・日本語・繁體中文を切り替え。対応言語はさらに拡大予定 — 誰もが自分の言語でパワフルなツールを使える世界を目指しています。',
        compare_title: '他のツールとの比較',
        compare_others: '一般的なツール',
        compare_row_privacy: 'データの安全性',
        compare_privacy_us: 'ブラウザ完結',
        compare_privacy_them: 'サーバー送信',
        compare_row_price: '料金',
        compare_price_us: '無料・無制限',
        compare_price_them: '無料枠に制限',
        compare_row_quality: '品質コントロール',
        compare_quality_us: 'スライダーで調整',
        compare_quality_them: '自動のみ',
        compare_row_filesize: 'ファイルサイズ上限',
        compare_filesize_us: '50MB+',
        compare_filesize_them: '5MB（無料）',
        compare_row_tools: '複数ツール',
        compare_tools_us: '5種類以上',
        compare_tools_them: '1種類',
        compare_row_lang: '対応言語',
        compare_lang_us: 'EN / JA / 繁中',
        compare_lang_them: '英語のみ',
        cta_title: '今すぐ試してみませんか？',
        cta_desc: '画像圧縮、JSON整形、その他のツールを — 無料で、ブラウザだけで。',
        cta_btn: 'ツールへ移動',
        contact_title: 'お問合せ',
        contact_desc: 'ご質問、フィードバック、提携に関するお問合せなど、お気軽にご連絡ください。',
      },
      'zh-TW': {
        breadcrumb: '關於 SnapToolbox',
        hero_title: 'SnapToolbox 的特色',
        hero_subtitle: '與其他線上工具不同，SnapToolbox 讓您掌控一切。來看看我們的不同之處。',
        feat_1_title: '資料絕不外洩',
        feat_1_desc: '其他工具會將檔案上傳至伺服器。SnapToolbox 使用 JavaScript 在瀏覽器中處理所有內容，您的圖片、文字和資料 100% 留在裝置上。',
        feat_2_title: '真正無限制且免費',
        feat_2_desc: '沒有「每次 20 個檔案」的限制，沒有 5MB 上限，沒有隱藏付費。所有工具不限次數使用，不限檔案大小。',
        feat_3_title: '品質由您掌控',
        feat_3_desc: '使用品質滑桿調整壓縮率，並選擇輸出格式。其他工具自動決定，我們讓您找到最佳平衡。',
        feat_4_title: '全方位工具箱',
        feat_4_desc: '圖片壓縮、JSON 格式化、字數計算、單位轉換、顏色轉換，全部集中在一個地方。',
        feat_5_title: '多語言支援',
        feat_5_desc: '一鍵切換英文、日文和繁體中文。我們將持續擴展更多語言。',
        compare_title: '與其他工具的比較',
        compare_others: '一般工具',
        compare_row_privacy: '資料安全性',
        compare_privacy_us: '瀏覽器完成',
        compare_privacy_them: '上傳至伺服器',
        compare_row_price: '價格',
        compare_price_us: '免費、無限制',
        compare_price_them: '免費版有限制',
        compare_row_quality: '品質控制',
        compare_quality_us: '滑桿可調整',
        compare_quality_them: '僅自動',
        compare_row_filesize: '檔案大小上限',
        compare_filesize_us: '50MB+',
        compare_filesize_them: '5MB（免費）',
        compare_row_tools: '多種工具',
        compare_tools_us: '5 種以上',
        compare_tools_them: '1 種',
        compare_row_lang: '支援語言',
        compare_lang_us: 'EN / JA / 繁中',
        compare_lang_them: '僅英文',
        cta_title: '準備好試試了嗎？',
        cta_desc: '開始壓縮圖片、格式化 JSON 等等 — 免費，在瀏覽器中即可使用。',
        cta_btn: '前往工具',
        contact_title: '聯絡我們',
        contact_desc: '有任何問題、回饋或合作洽詢？我們很樂意聽取您的意見。',
      }
    },

    // ===== Image Editor =====
    image_editor: {
      en: {
        title: 'Image Editor',
        subtitle: 'Adjust, crop, rotate and enhance — all in your browser.',
        privacy_note: 'Your images stay on your device.<br class="sp-br"> Nothing is uploaded.',
        breadcrumb: 'Image Editor',
        drop_title: 'Drop an image here',
        drop_sub: 'or click to select a file',
        drop_btn: 'Choose Image',
        formats_supported: 'JPEG, PNG, WebP',
        tab_adjust: 'Adjust',
        tab_crop: 'Crop',
        tab_rotate: 'Rotate',
        brightness: 'Brightness',
        contrast: 'Contrast',
        saturation: 'Saturation',
        sharpness: 'Sharpness',
        denoise: 'Noise Reduction',
        reset_adjustments: 'Reset',
        crop_instruction: 'Drag on the image to select the area to crop.',
        crop_apply: 'Apply Crop',
        crop_reset: 'Reset',
        rotate_left: 'Rotate Left 90°',
        rotate_right: 'Rotate Right 90°',
        flip_h: 'Flip Horizontal',
        flip_v: 'Flip Vertical',
        free_rotate: 'Free Rotate',
        download_btn: 'Download',
        new_image_btn: 'New Image',
        original_size: 'Original',
        edited_size: 'Edited',
        feat_1_title: 'Real-time Preview',
        feat_1_desc: 'See changes instantly as you adjust sliders.',
        feat_2_title: 'Privacy First',
        feat_2_desc: 'All processing happens locally in your browser.',
        feat_3_title: '6 Tools in One',
        feat_3_desc: 'Brightness, crop, rotate, sharpen, denoise and more.',
        support_title: 'Buy this baby rhino a coffee ☕',
      },
      ja: {
        title: '画像補正ツール',
        subtitle: '調整・トリミング・回転・補正 — すべてブラウザ内で完結。',
        privacy_note: '画像はデバイスの外に出ません。<br class="sp-br">アップロードは一切なし。',
        breadcrumb: '画像補正ツール',
        drop_title: 'ここに画像をドロップ',
        drop_sub: 'またはクリックしてファイルを選択',
        drop_btn: '画像を選択',
        formats_supported: 'JPEG, PNG, WebP',
        tab_adjust: '調整',
        tab_crop: 'トリミング',
        tab_rotate: '回転',
        brightness: '明るさ',
        contrast: 'コントラスト',
        saturation: '彩度',
        sharpness: 'シャープネス',
        denoise: 'ノイズ除去',
        reset_adjustments: 'リセット',
        crop_instruction: '画像上でドラッグして切り抜き範囲を選択してください。',
        crop_apply: 'トリミング実行',
        crop_reset: 'リセット',
        rotate_left: '左に90°回転',
        rotate_right: '右に90°回転',
        flip_h: '左右反転',
        flip_v: '上下反転',
        free_rotate: '自由回転',
        download_btn: 'ダウンロード',
        new_image_btn: '新しい画像',
        original_size: '元のサイズ',
        edited_size: '編集後',
        feat_1_title: 'リアルタイムプレビュー',
        feat_1_desc: 'スライダー操作で変化を即座に確認。',
        feat_2_title: 'プライバシー重視',
        feat_2_desc: 'すべての処理はブラウザ内で完結。',
        feat_3_title: '6つの機能を搭載',
        feat_3_desc: '明るさ・トリミング・回転・シャープネス・ノイズ除去など。',
        support_title: 'このサイの赤ちゃんにコーヒーを ☕',
      },
      'zh-TW': {
        title: '圖片編輯器',
        subtitle: '調整、裁切、旋轉和增強 — 全部在瀏覽器中完成。',
        privacy_note: '圖片不會離開您的裝置。<br class="sp-br">不會上傳任何內容。',
        breadcrumb: '圖片編輯器',
        drop_title: '將圖片拖放至此',
        drop_sub: '或點擊選擇檔案',
        drop_btn: '選擇圖片',
        formats_supported: 'JPEG, PNG, WebP',
        tab_adjust: '調整',
        tab_crop: '裁切',
        tab_rotate: '旋轉',
        brightness: '亮度',
        contrast: '對比',
        saturation: '飽和度',
        sharpness: '銳利度',
        denoise: '降噪',
        reset_adjustments: '重設',
        crop_instruction: '在圖片上拖曳以選擇裁切區域。',
        crop_apply: '執行裁切',
        crop_reset: '重設',
        rotate_left: '向左旋轉 90°',
        rotate_right: '向右旋轉 90°',
        flip_h: '水平翻轉',
        flip_v: '垂直翻轉',
        free_rotate: '自由旋轉',
        download_btn: '下載',
        new_image_btn: '新圖片',
        original_size: '原始大小',
        edited_size: '編輯後',
        feat_1_title: '即時預覽',
        feat_1_desc: '調整滑桿時即時查看變化。',
        feat_2_title: '隱私優先',
        feat_2_desc: '所有處理都在瀏覽器中本機完成。',
        feat_3_title: '6 合 1 工具',
        feat_3_desc: '亮度、裁切、旋轉、銳化、降噪等。',
        support_title: '請這隻小犀牛喝杯咖啡 ☕',
      }
    },

    // ===== YouTube Thumbnail Generator =====
    youtube_thumb: {
      en: {
        title: 'YouTube Thumbnail Generator',
        subtitle: 'Create professional, eye-catching thumbnails for your videos instantly.',
        privacy_note: 'Your images stay on your device.<br class="sp-br"> Nothing is uploaded.',
        tab_background: 'Background',
        tab_text: 'Text',
        tab_style: 'Templates',
        upload_bg: 'Upload Background',
        bg_color: 'Background Color',
        add_title: '+ Add Title',
        add_subtitle: '+ Add Subtitle',
        font_size: 'Font Size',
        text_color: 'Text Color',
        stroke_color: 'Outline Color',
        stroke_width: 'Outline Width',
        position: 'Position Presets',
        pos_top_left: 'Top Left',
        pos_top_center: 'Top Center',
        pos_top_right: 'Top Right',
        pos_center_left: 'Center Left',
        pos_center: 'Center',
        pos_center_right: 'Center Right',
        pos_bottom_left: 'Bottom Left',
        pos_bottom_center: 'Bottom Center',
        pos_bottom_right: 'Bottom Right',
        template_bold: 'Bold Impact',
        template_gaming: 'Gaming',
        template_tutorial: 'Tutorial',
        template_vlog: 'Vlog',
        btn_download: 'Download PNG',
        btn_reset: 'Reset',
        feature_hd: '1280×720 HD',
        feature_hd_desc: 'Perfect YouTube thumbnail size, ready to upload.',
        feature_browser: '100% Browser-Based',
        feature_browser_desc: 'No server uploads, no installation needed.',
        feature_watermark: 'No Watermark',
        feature_watermark_desc: 'Your thumbnail is yours — completely original.',
        support_title: 'Buy this baby flamingo a coffee ☕',
        drop_title: 'Drop a background image here',
        drop_sub: 'or click to upload',
        text_layers: 'Text Layers',
        no_text: 'Add title or subtitle to begin.',
        delete_text: 'Delete',
        select_text: 'Select a text layer to edit',
        text_label: 'Text Content',
        text_placeholder: 'Enter text',
      },
      ja: {
        title: 'YouTubeサムネイルジェネレーター',
        subtitle: 'プロ品質の目を引くサムネイルを、あなたの動画のために即座に作成。',
        privacy_note: '画像はデバイスの外に出ません。<br class="sp-br">アップロードは一切なし。',
        tab_background: '背景',
        tab_text: 'テキスト',
        tab_style: 'テンプレート',
        upload_bg: '背景画像をアップロード',
        bg_color: '背景色',
        add_title: '+ タイトルを追加',
        add_subtitle: '+ サブタイトルを追加',
        font_size: 'フォントサイズ',
        text_color: 'テキスト色',
        stroke_color: '縁取り色',
        stroke_width: '縁取り幅',
        position: '位置プリセット',
        pos_top_left: '左上',
        pos_top_center: '上中央',
        pos_top_right: '右上',
        pos_center_left: '左中央',
        pos_center: '中央',
        pos_center_right: '右中央',
        pos_bottom_left: '左下',
        pos_bottom_center: '下中央',
        pos_bottom_right: '右下',
        template_bold: 'ボールドインパクト',
        template_gaming: 'ゲーミング',
        template_tutorial: 'チュートリアル',
        template_vlog: 'Vlog',
        btn_download: 'PNGダウンロード',
        btn_reset: 'リセット',
        feature_hd: '1280×720 HD',
        feature_hd_desc: 'YouTube推奨サイズ。そのままアップロード可能。',
        feature_browser: '100%ブラウザ完結',
        feature_browser_desc: 'サーバー送信なし。インストール不要。',
        feature_watermark: 'ウォーターマークなし',
        feature_watermark_desc: 'サムネイルは完全にあなたのもの。',
        support_title: 'SnapToolboxにコーヒー1杯のサポートを ☕',
        drop_title: '背景画像をここにドロップ',
        drop_sub: 'またはクリックしてアップロード',
        text_layers: 'テキストレイヤー',
        no_text: 'タイトルまたはサブタイトルを追加してください。',
        delete_text: '削除',
        select_text: '編集するテキストレイヤーを選択',
        text_label: 'テキスト内容',
        text_placeholder: 'テキストを入力',
      },
      'zh-TW': {
        title: 'YouTube 縮圖產生器',
        subtitle: '立即為您的影片建立專業、吸睛的縮圖。',
        privacy_note: '圖片不會離開您的裝置。<br class="sp-br">不會上傳任何內容。',
        tab_background: '背景',
        tab_text: '文字',
        tab_style: '範本',
        upload_bg: '上傳背景圖片',
        bg_color: '背景顏色',
        add_title: '+ 新增標題',
        add_subtitle: '+ 新增副標題',
        font_size: '字體大小',
        text_color: '文字顏色',
        stroke_color: '外框顏色',
        stroke_width: '外框寬度',
        position: '位置預設',
        pos_top_left: '左上',
        pos_top_center: '上中',
        pos_top_right: '右上',
        pos_center_left: '左中',
        pos_center: '置中',
        pos_center_right: '右中',
        pos_bottom_left: '左下',
        pos_bottom_center: '下中',
        pos_bottom_right: '右下',
        template_bold: '大膽衝擊',
        template_gaming: '遊戲風格',
        template_tutorial: '教學風格',
        template_vlog: 'Vlog',
        btn_download: '下載 PNG',
        btn_reset: '重設',
        feature_hd: '1280×720 HD',
        feature_hd_desc: '完美的 YouTube 縮圖尺寸，可直接上傳。',
        feature_browser: '100% 瀏覽器完成',
        feature_browser_desc: '不上傳至伺服器，無需安裝。',
        feature_watermark: '無浮水印',
        feature_watermark_desc: '縮圖完全屬於你 — 百分百原創。',
        support_title: '請 SnapToolbox 喝杯咖啡 ☕',
        drop_title: '將背景圖片拖放至此',
        drop_sub: '或點擊上傳',
        text_layers: '文字圖層',
        no_text: '新增標題或副標題以開始。',
        delete_text: '刪除',
        select_text: '選擇要編輯的文字圖層',
        text_label: '文字內容',
        text_placeholder: '輸入文字',
      }
    },

    // ===== Image Compressor =====
    image_compressor: {
      en: {
        title: 'Image Compressor',
        subtitle: 'Compress images without losing quality. All processing happens in your browser.',
        drop_title: 'Drop your image here',
        drop_desc: 'or click to select a file (JPEG, PNG, WebP — Max 50MB)',
        drop_btn: 'Select Images',
        quality_label: 'Compression Level',
        format_label: 'Save As',
        fmt_original: 'Keep Original',
        compress_btn: 'Compress',
        download_btn: 'Download',
        download_all_btn: 'Download All Files',
        original: 'Original',
        compressed: 'Compressed',
        reduction: 'Reduction',
        privacy_note: 'Your images are never uploaded to any server.',
        adv_unlimited: 'Unlimited — No file count limit',
        adv_quality: 'Adjustable quality slider',
        adv_size: '50MB+ per file',
      },
      ja: {
        title: '画像圧縮ツール',
        subtitle: '画質を保ちながら画像を圧縮。すべての処理はブラウザ内で完結します。',
        drop_title: '画像をここにドロップ',
        drop_desc: 'またはクリックしてファイルを選択（JPEG, PNG, WebP — 最大50MB）',
        drop_btn: '画像を選択',
        quality_label: '圧縮の強さ',
        format_label: '保存する形式',
        fmt_original: 'そのまま（元の形式）',
        compress_btn: '圧縮する',
        download_btn: 'ダウンロード',
        download_all_btn: '一括ダウンロード',
        original: '元のサイズ',
        compressed: '圧縮後',
        reduction: '削減率',
        privacy_note: '画像がサーバーにアップロードされることはありません。',
        adv_unlimited: '無制限 — ファイル数制限なし',
        adv_quality: '品質スライダーで調整可能',
        adv_size: '1ファイル50MB+対応',
      },
      'zh-TW': {
        title: '圖片壓縮工具',
        subtitle: '保持品質的同時壓縮圖片。所有處理都在瀏覽器中完成。',
        drop_title: '將圖片拖放至此',
        drop_desc: '或點擊選擇檔案（JPEG、PNG、WebP — 最大 50MB）',
        drop_btn: '選擇圖片',
        quality_label: '壓縮強度',
        format_label: '儲存格式',
        fmt_original: '保持原格式',
        compress_btn: '壓縮',
        download_btn: '下載',
        download_all_btn: '全部下載',
        original: '原始大小',
        compressed: '壓縮後',
        reduction: '縮減率',
        privacy_note: '圖片絕不會上傳至任何伺服器。',
        adv_unlimited: '無限制 — 不限檔案數量',
        adv_quality: '品質滑桿可調整',
        adv_size: '單檔 50MB+ 支援',
      }
    },

    // ===== PDF Converter =====
    pdf_converter: {
      en: {
        title: 'PDF Converter',
        subtitle: 'PDF to Image. Image to PDF. Right in your browser.',
        breadcrumb: 'PDF Converter',
        privacy_note: 'Your files stay on your device. Nothing is uploaded.',
        adv_multipage: 'Multi-page support',
        adv_hd: 'High-resolution output',
        adv_free: '100% Free',
        mode_pdf2img: 'PDF → Image',
        mode_img2pdf: 'Image → PDF',
        drop_title_pdf: 'Drop your PDF here',
        drop_desc_pdf: 'or click to browse your files',
        drop_title_img: 'Drop your images here',
        drop_desc_img: 'or click to browse — they will be combined into one PDF',
        drop_btn: 'Choose Files',
        format_label: 'Format',
        scale_label: 'Scale',
        pages_label: 'Pages',
        pages_all: 'All Pages',
        pages_first: 'First Page Only',
        pages_custom: 'Custom Range',
        page_size_label: 'Page Size',
        page_size_fit: 'Fit to Image',
        orientation_label: 'Orientation',
        orientation_auto: 'Auto',
        orientation_portrait: 'Portrait',
        orientation_landscape: 'Landscape',
        quality_label: 'Quality',
        file_count: '{n} file(s)',
        clear_all: 'Clear All',
        badge_ready: 'Ready',
        convert_btn: 'Convert',
        converting: 'Converting…',
        done: 'Done!',
        error_retry: 'Error — Try Again',
        stat_input: 'Input',
        stat_output: 'Output',
        stat_format: 'Format',
        stat_images: 'Images',
        stat_pdf_size: 'PDF Size',
        stat_pages: 'Pages',
        download_btn: 'Download',
        download_all_btn: 'Download All Files',
        feature1_title: 'Private',
        feature1_desc: 'All conversion happens locally. Your files never leave your device.',
        feature2_title: 'Fast',
        feature2_desc: 'Powered by your browser. No waiting for server processing.',
        feature3_title: 'High Quality',
        feature3_desc: 'Adjustable scale for crisp, high-resolution output images.',
        support_title: 'Buy this baby seal a coffee ☕',
      },
      ja: {
        title: 'PDF変換ツール',
        subtitle: 'PDFを画像に。画像をPDFに。ブラウザだけで完結。',
        breadcrumb: 'PDF変換ツール',
        privacy_note: 'ファイルはデバイスの外に出ません。アップロードは一切なし。',
        adv_multipage: '複数ページ対応',
        adv_hd: '高解像度出力',
        adv_free: '完全無料',
        mode_pdf2img: 'PDF → 画像',
        mode_img2pdf: '画像 → PDF',
        drop_title_pdf: 'PDFをここにドロップ',
        drop_desc_pdf: 'またはクリックしてファイルを選択',
        drop_title_img: '画像をここにドロップ',
        drop_desc_img: 'またはクリックして選択 — 1つのPDFにまとめます',
        drop_btn: 'ファイルを選択',
        format_label: 'フォーマット',
        scale_label: '倍率',
        pages_label: 'ページ',
        pages_all: 'すべてのページ',
        pages_first: '最初のページのみ',
        pages_custom: 'カスタム範囲',
        page_size_label: 'ページサイズ',
        page_size_fit: '画像に合わせる',
        orientation_label: '向き',
        orientation_auto: '自動',
        orientation_portrait: '縦向き',
        orientation_landscape: '横向き',
        quality_label: '品質',
        file_count: '{n} ファイル',
        clear_all: 'すべてクリア',
        badge_ready: '準備完了',
        convert_btn: '変換する',
        converting: '変換中…',
        done: '完了！',
        error_retry: 'エラー — もう一度',
        stat_input: '入力',
        stat_output: '出力',
        stat_format: 'フォーマット',
        stat_images: '画像数',
        stat_pdf_size: 'PDFサイズ',
        stat_pages: 'ページ数',
        download_btn: 'ダウンロード',
        download_all_btn: '一括ダウンロード',
        feature1_title: 'プライバシー保護',
        feature1_desc: 'すべての変換はブラウザ内で完結。ファイルがデバイスの外に出ることはありません。',
        feature2_title: '高速処理',
        feature2_desc: 'ブラウザの力で即座に変換。サーバー待ち時間ゼロ。',
        feature3_title: '高品質出力',
        feature3_desc: '倍率を調整して、鮮明な高解像度画像を出力。',
        support_title: 'このアザラシにコーヒーを ☕',
      },
      'zh-TW': {
        title: 'PDF 轉換工具',
        subtitle: 'PDF 轉圖片。圖片轉 PDF。在瀏覽器中即可完成。',
        breadcrumb: 'PDF 轉換工具',
        privacy_note: '檔案不會離開您的裝置，不會上傳任何內容。',
        adv_multipage: '支援多頁',
        adv_hd: '高解析度輸出',
        adv_free: '100% 免費',
        mode_pdf2img: 'PDF → 圖片',
        mode_img2pdf: '圖片 → PDF',
        drop_title_pdf: '將 PDF 拖放至此',
        drop_desc_pdf: '或點擊選擇檔案',
        drop_title_img: '將圖片拖放至此',
        drop_desc_img: '或點擊選擇 — 將合併為一個 PDF',
        drop_btn: '選擇檔案',
        format_label: '格式',
        scale_label: '倍率',
        pages_label: '頁面',
        pages_all: '所有頁面',
        pages_first: '僅第一頁',
        pages_custom: '自訂範圍',
        page_size_label: '頁面大小',
        page_size_fit: '配合圖片',
        orientation_label: '方向',
        orientation_auto: '自動',
        orientation_portrait: '直式',
        orientation_landscape: '橫式',
        quality_label: '品質',
        file_count: '{n} 個檔案',
        clear_all: '全部清除',
        badge_ready: '就緒',
        convert_btn: '轉換',
        converting: '轉換中…',
        done: '完成！',
        error_retry: '錯誤 — 請重試',
        stat_input: '輸入',
        stat_output: '輸出',
        stat_format: '格式',
        stat_images: '圖片數',
        stat_pdf_size: 'PDF 大小',
        stat_pages: '頁數',
        download_btn: '下載',
        download_all_btn: '全部下載',
        feature1_title: '隱私保護',
        feature1_desc: '所有轉換都在本機完成。檔案絕不會離開您的裝置。',
        feature2_title: '快速處理',
        feature2_desc: '由瀏覽器驅動，無需等待伺服器處理。',
        feature3_title: '高品質輸出',
        feature3_desc: '可調整倍率，輸出清晰的高解析度圖片。',
        support_title: '請這隻小海豹喝杯咖啡 ☕',
      }
    },

    // ===== JSON Formatter =====
    json_formatter: {
      en: {
        title: 'JSON Formatter & Validator',
        subtitle: 'Format, validate, minify, and beautify JSON online. Instant syntax highlighting and error detection.',
        input_label: '📥 JSON Input',
        input_placeholder: 'Paste your JSON here...',
        format_btn: 'Format',
        minify_btn: 'Minify',
        validate_btn: 'Validate',
        clear_btn: 'Clear',
        copy_btn: 'Copy',
        copy_output_btn: 'Copy Output',
        sample_btn: 'Sample',
        output_label: '📤 Formatted Output',
        indent_label: 'Indentation',
        indent_2: '2 Spaces',
        indent_4: '4 Spaces',
        indent_tab: 'Tab',
        controls_title: 'Controls',
        stat_chars: 'Characters',
        stat_lines: 'Lines',
        stat_depth: 'Object Depth',
        stat_status: 'Status',
        valid_json: '✓ Valid JSON',
        valid_json_desc: 'Your JSON is properly formatted',
        invalid_json: '❌ Invalid JSON',
        privacy_note: 'No data is sent to any server.',
        tool_desc: '<strong>Free JSON Tool:</strong> Paste your JSON code to format, validate, and analyze it instantly. Get real-time error detection with line numbers, character counts, object depth analysis, and more. No installation needed — everything runs in your browser.',
        mascot_bubble: 'Paste your JSON and I\'ll format it nice and neat — no rush!',
        faq_title: 'Frequently Asked Questions',
        faq_q1: 'What is JSON?',
        faq_a1: 'JSON (JavaScript Object Notation) is a lightweight data format used for data exchange. It\'s human-readable and widely supported across programming languages.',
        faq_q2: 'Is my data secure?',
        faq_a2: 'Yes! All processing happens entirely in your browser. Your data is never sent to any server and never stored anywhere.',
        faq_q3: 'What\'s the difference between Format and Minify?',
        faq_a3: '<strong>Format</strong> adds indentation and line breaks for readability. <strong>Minify</strong> removes all extra whitespace to create the smallest file size.',
      },
      ja: {
        title: 'JSON整形・検証ツール',
        subtitle: 'JSONの整形・検証・圧縮・美化をオンラインで。シンタックスハイライトとエラー検出をリアルタイムに。',
        input_label: '📥 JSON入力',
        input_placeholder: 'JSONをここに貼り付け...',
        format_btn: '整形',
        minify_btn: '圧縮',
        validate_btn: '検証',
        clear_btn: 'クリア',
        copy_btn: 'コピー',
        copy_output_btn: '結果をコピー',
        sample_btn: 'サンプル',
        output_label: '📤 整形結果',
        indent_label: 'インデント',
        indent_2: '2スペース',
        indent_4: '4スペース',
        indent_tab: 'タブ',
        controls_title: '操作パネル',
        stat_chars: '文字数',
        stat_lines: '行数',
        stat_depth: 'ネストの深さ',
        stat_status: 'ステータス',
        valid_json: '✓ 有効なJSON',
        valid_json_desc: 'JSONは正しい形式です',
        invalid_json: '❌ 無効なJSON',
        privacy_note: 'データがサーバーに送信されることはありません。',
        tool_desc: '<strong>無料JSONツール：</strong>JSONコードを貼り付けるだけで、整形・検証・分析が即座にできます。行番号付きのリアルタイムエラー検出、文字数カウント、オブジェクトの深さ分析など。インストール不要 — すべてブラウザ内で完結します。',
        mascot_bubble: 'JSONを貼り付けてね。ゆっくりキレイに整えるよ！',
        faq_title: 'よくある質問',
        faq_q1: 'JSONとは？',
        faq_a1: 'JSON（JavaScript Object Notation）は、データの受け渡しに使われる軽量なデータ形式です。人間にも読みやすく、多くのプログラミング言語でサポートされています。',
        faq_q2: 'データは安全ですか？',
        faq_a2: 'はい！すべての処理はブラウザ内で完結します。データがサーバーに送信されたり、保存されたりすることは一切ありません。',
        faq_q3: '「整形」と「圧縮」の違いは？',
        faq_a3: '<strong>整形</strong>はインデントと改行を追加して読みやすくします。<strong>圧縮</strong>は余分な空白をすべて取り除き、ファイルサイズを最小化します。',
      },
      'zh-TW': {
        title: 'JSON 格式化與驗證工具',
        subtitle: '線上格式化、驗證、壓縮和美化 JSON。即時語法高亮和錯誤檢測。',
        input_label: '📥 JSON 輸入',
        input_placeholder: '在此貼上您的 JSON...',
        format_btn: '格式化',
        minify_btn: '壓縮',
        validate_btn: '驗證',
        clear_btn: '清除',
        copy_btn: '複製',
        copy_output_btn: '複製結果',
        sample_btn: '範例',
        output_label: '📤 格式化結果',
        indent_label: '縮排',
        indent_2: '2 個空格',
        indent_4: '4 個空格',
        indent_tab: 'Tab',
        controls_title: '控制面板',
        stat_chars: '字元數',
        stat_lines: '行數',
        stat_depth: '巢狀深度',
        stat_status: '狀態',
        valid_json: '✓ 有效的 JSON',
        valid_json_desc: '您的 JSON 格式正確',
        invalid_json: '❌ 無效的 JSON',
        privacy_note: '資料不會傳送至任何伺服器。',
        tool_desc: '<strong>免費 JSON 工具：</strong>貼上 JSON 程式碼即可立即格式化、驗證和分析。即時錯誤檢測、字元計數、物件深度分析等。無需安裝 — 全部在瀏覽器中完成。',
        mascot_bubble: '貼上你的 JSON，我會慢慢幫你整理乾淨！',
        faq_title: '常見問題',
        faq_q1: '什麼是 JSON？',
        faq_a1: 'JSON（JavaScript Object Notation）是一種輕量的資料格式，用於資料交換。易於閱讀，且廣泛支援各種程式語言。',
        faq_q2: '我的資料安全嗎？',
        faq_a2: '是的！所有處理完全在瀏覽器中完成。資料不會傳送至伺服器，也不會儲存在任何地方。',
        faq_q3: '「格式化」和「壓縮」有什麼區別？',
        faq_a3: '<strong>格式化</strong>會新增縮排和換行以提高可讀性。<strong>壓縮</strong>會移除所有多餘的空白以縮小檔案大小。',
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
      },
      'zh-TW': {
        title: '字數計算器',
        subtitle: '即時計算字元數、字數、句數和段落數。',
        input_placeholder: '在此輸入或貼上文字...',
        characters: '字元數',
        characters_no_space: '字元數（不含空格）',
        words: '字數',
        sentences: '句數',
        paragraphs: '段落數',
        reading_time: '閱讀時間',
        clear_btn: '清除',
        copy_btn: '複製文字',
        privacy_note: '文字不會傳送至任何伺服器。',
        mascot_bubble: '我來幫你數每一個字元，慢慢寫沒關係！',
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
      },
      'zh-TW': {
        title: 'QR Code 產生器',
        subtitle: '從文字或網址產生 QR Code，可下載為 PNG。',
        input_label: '文字或網址',
        input_placeholder: '輸入文字或網址...',
        size_label: '大小',
        fg_color: '前景色',
        bg_color: '背景色',
        generate_btn: '產生 QR Code',
        download_btn: '下載 PNG',
        privacy_note: '資料不會傳送至任何伺服器。',
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
      },
      'zh-TW': {
        title: '顏色轉換工具',
        subtitle: '在 HEX、RGB、HSL 之間轉換顏色，即時預覽。',
        hex_label: 'HEX',
        rgb_label: 'RGB',
        hsl_label: 'HSL',
        copy_btn: '複製',
        preview_label: '顏色預覽',
        privacy_note: '所有處理都在瀏覽器中完成。',
        mascot_bubble: '選擇任何顏色，我幫你轉換成所有格式！',
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
      },
      'zh-TW': {
        title: '密碼產生器',
        subtitle: '使用加密技術產生安全的隨機密碼。',
        length_label: '密碼長度',
        uppercase: '大寫字母 (A-Z)',
        lowercase: '小寫字母 (a-z)',
        numbers: '數字 (0-9)',
        symbols: '符號 (!@#$...)',
        exclude_ambiguous: '排除易混淆字元 (0, O, l, 1, I)',
        generate_btn: '產生密碼',
        generate_multi_btn: '產生 5 組密碼',
        copy_btn: '複製',
        strength: '強度',
        entropy: '熵',
        strength_weak: '弱',
        strength_fair: '一般',
        strength_strong: '強',
        strength_very_strong: '非常強',
        privacy_note: '在瀏覽器中使用加密隨機數產生。絕不會傳送至伺服器。',
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
    if (browserLang === 'zh-tw' || browserLang === 'zh-hant' || browserLang.startsWith('zh-hant')) return 'zh-TW';
    // Traditional Chinese regions: Taiwan, Hong Kong, Macau
    if (browserLang === 'zh-hk' || browserLang === 'zh-mo') return 'zh-TW';

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

    // Elements with data-i18n-html="section.key" (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n-html').split('.');
      const text = this.t(section, key);
      if (text) el.innerHTML = text;
    });

    // Elements with data-i18n-title="section.key"
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n-title').split('.');
      const text = this.t(section, key);
      if (text) el.title = text;
    });

    // Update language selector dropdown
    this._updateLangSelector();

    // Update html lang attribute
    document.documentElement.lang = this.currentLang;
  },

  // --- Language definitions for dropdown ---
  _langMeta: {
    'en':    { flag: '🇺🇸', label: 'English' },
    'ja':    { flag: '🇯🇵', label: '日本語' },
    'zh-TW': { flag: '🇹🇼', label: '繁體中文' },
  },

  // --- Build / update language selector dropdown ---
  _updateLangSelector() {
    document.querySelectorAll('.st-lang-select').forEach(wrap => {
      const btnLabel = wrap.querySelector('.st-lang-current-label');
      const btnFlag = wrap.querySelector('.st-lang-current-flag');
      if (btnLabel) btnLabel.textContent = this._langMeta[this.currentLang].label;
      if (btnFlag) btnFlag.textContent = this._langMeta[this.currentLang].flag;
      // Update active state
      wrap.querySelectorAll('.st-lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === this.currentLang);
      });
    });
  },

  // --- Initialize dropdown from a placeholder element ---
  _initLangDropdowns() {
    // Inject dropdown CSS if not already present (for pages without style.css)
    if (!document.getElementById('st-lang-dropdown-css')) {
      const style = document.createElement('style');
      style.id = 'st-lang-dropdown-css';
      style.textContent = `
        .st-lang-select{position:relative;display:inline-block}
        .st-lang-select-btn{display:inline-flex;align-items:center;gap:.4rem;background:none;border:1.5px solid var(--st-outline-variant,#ccc);border-radius:999px;padding:.3rem .7rem .3rem .6rem;cursor:pointer;font-size:.8rem;font-weight:600;color:var(--st-text-secondary,#555);font-family:var(--st-font,system-ui,sans-serif);transition:all .2s;white-space:nowrap}
        .st-lang-select-btn svg{width:15px;height:15px;flex-shrink:0;opacity:.7}
        .st-lang-select-btn .st-lang-chevron{width:12px;height:12px;transition:transform .2s}
        .st-lang-select-btn:hover,.st-lang-select.open .st-lang-select-btn{border-color:var(--st-primary,#3D5C2E);color:var(--st-primary,#3D5C2E);background:var(--st-primary-container,#EFF3DE)}
        .st-lang-select.open .st-lang-select-btn svg{opacity:1}
        .st-lang-select.open .st-lang-chevron{transform:rotate(180deg)}
        .st-lang-dropdown{display:none;position:absolute;top:calc(100% + 6px);right:0;min-width:150px;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.12),0 2px 8px rgba(0,0,0,.06);z-index:1000;overflow:hidden;animation:st-lang-fade .15s ease}
        @keyframes st-lang-fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
        .st-lang-select.open .st-lang-dropdown{display:block}
        .st-lang-option{display:flex;align-items:center;gap:.5rem;width:100%;padding:.55rem .9rem;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#333;font-family:var(--st-font,system-ui,sans-serif);transition:background .15s;text-align:left}
        .st-lang-option:hover{background:#f0f4e8}
        .st-lang-option.active{background:var(--st-primary-container,#EFF3DE);color:var(--st-primary,#3D5C2E);font-weight:700}
        .st-lang-option .st-lang-flag{font-size:1.05rem}
        .st-lang-option+.st-lang-option{border-top:1px solid #f0f0f0}
      `;
      document.head.appendChild(style);
    }

    document.querySelectorAll('.st-lang-btn').forEach(oldBtn => {
      // Build dropdown HTML
      const wrap = document.createElement('div');
      wrap.className = 'st-lang-select';

      const meta = this._langMeta[this.currentLang];
      const globeSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
      const chevronSvg = '<svg class="st-lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

      wrap.innerHTML = `
        <button class="st-lang-select-btn" aria-haspopup="listbox" aria-expanded="false">
          ${globeSvg}
          <span class="st-lang-current-flag">${meta.flag}</span>
          <span class="st-lang-current-label">${meta.label}</span>
          ${chevronSvg}
        </button>
        <div class="st-lang-dropdown" role="listbox">
          ${this.supported.map(code => {
            const m = this._langMeta[code];
            const active = code === this.currentLang ? ' active' : '';
            return `<button class="st-lang-option${active}" role="option" data-lang="${code}">
              <span class="st-lang-flag">${m.flag}</span>${m.label}
            </button>`;
          }).join('')}
        </div>
      `;

      // Events
      const btn = wrap.querySelector('.st-lang-select-btn');
      const dropdown = wrap.querySelector('.st-lang-dropdown');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrap.classList.contains('open');
        // Close all other dropdowns
        document.querySelectorAll('.st-lang-select.open').forEach(el => el.classList.remove('open'));
        if (!isOpen) {
          wrap.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      dropdown.addEventListener('click', (e) => {
        const opt = e.target.closest('.st-lang-option');
        if (opt) {
          const lang = opt.dataset.lang;
          wrap.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          this.setLang(lang);
        }
      });

      // Replace old button
      oldBtn.parentNode.replaceChild(wrap, oldBtn);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.st-lang-select.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.st-lang-select-btn').setAttribute('aria-expanded', 'false');
      });
    });
  },

  // --- Toggle Language (cycle — kept for backward compatibility) ---
  toggleLang() {
    const order = ['en', 'ja', 'zh-TW'];
    const idx = order.indexOf(this.currentLang);
    this.currentLang = order[(idx + 1) % order.length];
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
    this._initLangDropdowns();
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
