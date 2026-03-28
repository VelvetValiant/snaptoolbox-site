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
        pwa_install: 'Install App',
      },
      ja: {
        nav_tools: 'ツール',
        nav_about: 'サイトについて',
        nav_contact: 'お問合せ',
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
        pwa_install: 'アプリで使う',
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
        other_tools_title: 'More Tools',
        banner_privacy: '100% Browser-Based',
        banner_free: 'Truly Free & Unlimited',
        banner_quality: 'Quality Control',
        banner_allinone: '5+ Tools in One',
        banner_lang: 'EN / JA',
        banner_desc: 'Your data never leaves your device. No signup, no limits.',
        banner_more: 'Learn more →',
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
        other_tools_title: 'その他のツール',
        banner_privacy: '100%ブラウザ完結',
        banner_free: '完全無料＆無制限',
        banner_quality: '品質コントロール',
        banner_allinone: '5種類以上のツール',
        banner_lang: 'EN / JA',
        banner_desc: 'データはデバイスの外に出ません。登録不要、制限なし。',
        banner_more: '詳しく見る →',
        mascot_curious: 'わくわく',
        mascot_focused: '集中',
        mascot_relaxed: 'のんびり',
        mascot_techy: 'テクノ',
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
        feat_5_desc: 'Switch between English and Japanese with one click. We\'re expanding to more languages — so everyone can use powerful tools in their own language.',
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
        compare_lang_us: 'EN / JA',
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
        feat_5_desc: 'ワンクリックで英語と日本語を切り替え。対応言語はさらに拡大予定 — 誰もが自分の言語でパワフルなツールを使える世界を目指しています。',
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
        compare_lang_us: 'EN / JA',
        compare_lang_them: '英語のみ',
        cta_title: '今すぐ試してみませんか？',
        cta_desc: '画像圧縮、JSON整形、その他のツールを — 無料で、ブラウザだけで。',
        cta_btn: 'ツールへ移動',
        contact_title: 'お問合せ',
        contact_desc: 'ご質問、フィードバック、提携に関するお問合せなど、お気軽にご連絡ください。',
      }
    },

    // ===== Image Editor =====
    image_editor: {
      en: {
        title: 'Image Editor',
        subtitle: 'Adjust, crop, rotate and enhance — all in your browser.',
        privacy_note: 'Your images stay on your device. Nothing is uploaded.',
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
      },
      ja: {
        title: '画像補正ツール',
        subtitle: '調整・トリミング・回転・補正 — すべてブラウザ内で完結。',
        privacy_note: '画像はデバイスの外に出ません。アップロードは一切なし。',
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
      }
    },

    // ===== Image Compressor =====
    image_compressor: {
      en: {
        title: 'Image Compressor',
        subtitle: 'Compress images without losing quality. All processing happens in your browser.',
        drop_title: 'Drop your image here',
        drop_desc: 'or click to select a file (JPEG, PNG, WebP — Max 50MB)',
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
