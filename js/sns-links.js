/* ============================================
   SnapToolbox — SNS Links Module
   Lets users register & display their social links.
   Stored in localStorage, shared across all pages.
   ============================================ */

const SnsLinks = {
  STORAGE_KEY: 'snaptools_sns_links',

  // SNS type detection rules (order matters — first match wins)
  SNS_TYPES: [
    { key: 'x',         patterns: ['twitter.com', 'x.com'],              label: 'X (Twitter)' },
    { key: 'instagram',  patterns: ['instagram.com'],                     label: 'Instagram' },
    { key: 'youtube',    patterns: ['youtube.com', 'youtu.be'],           label: 'YouTube' },
    { key: 'tiktok',     patterns: ['tiktok.com'],                        label: 'TikTok' },
    { key: 'facebook',   patterns: ['facebook.com', 'fb.com', 'fb.me'],  label: 'Facebook' },
    { key: 'linkedin',   patterns: ['linkedin.com'],                      label: 'LinkedIn' },
    { key: 'github',     patterns: ['github.com'],                        label: 'GitHub' },
    { key: 'threads',    patterns: ['threads.net'],                       label: 'Threads' },
    { key: 'mastodon',   patterns: ['mastodon.social', 'mstdn.jp', 'mastodon.'], label: 'Mastodon' },
    { key: 'note',       patterns: ['note.com'],                          label: 'note' },
    { key: 'bluesky',    patterns: ['bsky.app'],                          label: 'Bluesky' },
    { key: 'pinterest',  patterns: ['pinterest.com', 'pin.it'],           label: 'Pinterest' },
    { key: 'twitch',     patterns: ['twitch.tv'],                         label: 'Twitch' },
    { key: 'discord',    patterns: ['discord.gg', 'discord.com'],         label: 'Discord' },
    { key: 'website',    patterns: [],                                    label: 'Website' },
  ],

  // Emoji icons for each SNS type (text-only, no image dependencies)
  SNS_ICONS: {
    x:         '𝕏',
    instagram: '📷',
    youtube:   '▶️',
    tiktok:    '♪',
    facebook:  'f',
    linkedin:  'in',
    github:    '⌨️',
    threads:   '@',
    mastodon:  '🐘',
    note:      '✏️',
    bluesky:   '🦋',
    pinterest: '📌',
    twitch:    '🎮',
    discord:   '💬',
    website:   '🔗',
  },

  // --- Lifecycle ---
  init() {
    this.injectCSS();
    const container = document.getElementById('snsLinksSection');
    if (!container) return;
    this.container = container;
    this.render();
  },

  // --- CSS injection (works on both shared-CSS and self-contained pages) ---
  injectCSS() {
    if (document.getElementById('sns-links-css')) return;
    const style = document.createElement('style');
    style.id = 'sns-links-css';
    style.textContent = `
      /* --- SNS Links Module --- */
      .sns-section {
        background: var(--st-surface-low, #F5F8E8);
        border-radius: var(--st-radius, 20px);
        padding: 1.25rem 1.5rem;
        margin: 1.5rem 0;
      }

      .sns-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;
      }

      .sns-title {
        font-size: 0.92rem;
        font-weight: 700;
        color: var(--st-text, #1A2008);
      }

      .sns-title-sep {
        font-weight: 400;
        color: var(--st-text-tertiary, #687048);
        margin: 0 0.15rem;
      }

      .sns-title-sub {
        font-size: 0.78rem;
        font-weight: 400;
        color: var(--st-text-secondary, #4D5338);
      }

      .sns-note {
        font-size: 0.75rem;
        color: var(--st-text-tertiary, #687048);
        margin: 0 0 0.75rem 0;
        padding-left: 1.2rem;
        line-height: 1.7;
        list-style: disc;
      }

      .sns-note li {
        margin-bottom: 0.1rem;
      }

      .sns-add-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        background: none;
        border: 1.5px solid var(--st-outline, #B5BB96);
        border-radius: var(--st-radius-pill, 999px);
        padding: 0.3rem 0.85rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--st-text-secondary, #4D5338);
        font-family: var(--st-font, 'Plus Jakarta Sans', sans-serif);
        cursor: pointer;
        transition: all 0.2s;
      }

      .sns-add-btn:hover {
        border-color: var(--st-primary, #3D5C2E);
        color: var(--st-primary, #3D5C2E);
        background: var(--st-primary-container, #D4EDCA);
      }

      .sns-add-btn svg {
        width: 14px;
        height: 14px;
      }

      /* --- Link list --- */
      .sns-links-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .sns-link-item {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.85rem;
        background: var(--st-card, #FFFFFF);
        border: 1px solid var(--st-outline-variant, #CDD2B2);
        border-radius: var(--st-radius-pill, 999px);
        font-size: 0.82rem;
        font-weight: 500;
        color: var(--st-primary, #3D5C2E);
        text-decoration: none;
        transition: all 0.2s;
        position: relative;
      }

      .sns-link-item:hover {
        background: var(--st-primary-container, #D4EDCA);
        border-color: var(--st-primary, #3D5C2E);
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(61, 92, 46, 0.12);
      }

      .sns-link-icon {
        font-size: 0.85rem;
        line-height: 1;
        min-width: 1em;
        text-align: center;
      }

      .sns-link-label {
        font-weight: 600;
        white-space: nowrap;
      }

      .sns-link-name {
        color: var(--st-text-secondary, #4D5338);
        font-weight: 400;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sns-delete-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-left: 0.2rem;
        color: var(--st-error, #A83828);
        font-size: 0.9rem;
        line-height: 1;
        opacity: 0.6;
        transition: opacity 0.15s;
      }

      .sns-link-item:hover .sns-delete-btn {
        display: inline-flex;
      }

      .sns-delete-btn:hover {
        opacity: 1;
      }

      /* --- Empty state --- */
      .sns-empty {
        font-size: 0.82rem;
        color: var(--st-text-tertiary, #687048);
        text-align: center;
        padding: 0.5rem 0;
      }

      /* --- Add form --- */
      .sns-form {
        display: none;
        margin-top: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid var(--st-outline-variant, #CDD2B2);
      }

      .sns-form.open {
        display: block;
      }

      .sns-form-row {
        display: flex;
        gap: 0.5rem;
      }

      .sns-form-input {
        flex: 1;
        padding: 0.55rem 0.85rem;
        border: 1.5px solid var(--st-outline, #B5BB96);
        border-radius: var(--st-radius-md, 14px);
        font-size: 0.85rem;
        font-family: var(--st-font, 'Plus Jakarta Sans', sans-serif);
        color: var(--st-text, #1A2008);
        background: var(--st-card, #FFFFFF);
        outline: none;
        transition: border-color 0.2s;
      }

      .sns-form-input:focus {
        border-color: var(--st-primary, #3D5C2E);
        box-shadow: 0 0 0 3px rgba(61, 92, 46, 0.1);
      }

      .sns-form-input::placeholder {
        color: var(--st-text-tertiary, #687048);
      }

      .sns-form-btn {
        padding: 0.55rem 1.1rem;
        border: none;
        border-radius: var(--st-radius-md, 14px);
        font-size: 0.82rem;
        font-weight: 700;
        font-family: var(--st-font, 'Plus Jakarta Sans', sans-serif);
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .sns-form-save {
        background: var(--st-primary, #3D5C2E);
        color: #fff;
      }

      .sns-form-save:hover {
        background: var(--st-primary-dim, #2E4A20);
      }

      .sns-form-cancel {
        background: var(--st-surface-container, #EFF3DE);
        color: var(--st-text-secondary, #4D5338);
      }

      .sns-form-cancel:hover {
        background: var(--st-surface-high, #E8EDCF);
      }

      .sns-form-error {
        font-size: 0.75rem;
        color: var(--st-error, #A83828);
        margin-top: 0.4rem;
        display: none;
      }

      .sns-form-error.show {
        display: block;
      }

      /* Responsive */
      @media (max-width: 480px) {
        .sns-section {
          padding: 1rem;
        }
        .sns-form-row {
          flex-direction: column;
        }
        .sns-link-name {
          max-width: 100px;
        }
      }
    `;
    document.head.appendChild(style);
  },

  // --- Data ---
  getLinks() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveLinks(links) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(links));
  },

  addLink(url) {
    url = url.trim();
    if (!url) return false;

    // Auto-prepend https:// if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch (e) {
      return false;
    }

    const links = this.getLinks();
    // Prevent duplicates
    if (links.some(l => l.url === url)) return false;

    const type = this.detectType(url);
    links.push({ url, type: type.key, label: type.label, addedAt: Date.now() });
    this.saveLinks(links);
    return true;
  },

  removeLink(index) {
    const links = this.getLinks();
    links.splice(index, 1);
    this.saveLinks(links);
  },

  detectType(url) {
    const lc = url.toLowerCase();
    for (const sns of this.SNS_TYPES) {
      if (sns.patterns.length === 0) continue; // skip 'website' fallback
      for (const p of sns.patterns) {
        if (lc.includes(p)) return sns;
      }
    }
    // Fallback: website
    return this.SNS_TYPES[this.SNS_TYPES.length - 1];
  },

  // Extract display name from URL
  extractName(url) {
    try {
      const u = new URL(url);
      // Try to get username from path
      const path = u.pathname.replace(/^\/+|\/+$/g, '');
      if (path) {
        const parts = path.split('/');
        const name = parts[0].replace(/^@/, '');
        if (name && name.length < 40) return '@' + name;
      }
      return u.hostname.replace('www.', '');
    } catch (e) {
      return url;
    }
  },

  // --- i18n helper ---
  t(key) {
    if (typeof I18N !== 'undefined' && I18N.translations && I18N.translations.common) {
      const lang = I18N.currentLang || 'en';
      const dict = I18N.translations.common[lang] || I18N.translations.common.en;
      if (dict && dict[key]) return dict[key];
    }
    // Fallback English
    const fallback = {
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
    };
    return fallback[key] || key;
  },

  // --- Render ---
  render() {
    const links = this.getLinks();

    this.container.innerHTML = `
      <div class="sns-section">
        <div class="sns-header">
          <span class="sns-title">${this.t('sns_title')}<span class="sns-title-sep"> / </span><span class="sns-title-sub">${this.t('sns_title_sub')}</span></span>
          <button class="sns-add-btn" id="snsAddBtn">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="8" y1="3" x2="8" y2="13"/>
              <line x1="3" y1="8" x2="13" y2="8"/>
            </svg>
            ${this.t('sns_add')}
          </button>
        </div>
        <ul class="sns-note">
          <li>${this.t('sns_note_1')}</li>
          <li>${this.t('sns_note_2')}</li>
        </ul>
        <div class="sns-links-list" id="snsLinksList">
          ${links.length === 0
            ? `<div class="sns-empty">${this.t('sns_empty')}</div>`
            : links.map((link, i) => `
                <span class="sns-link-item">
                  <a href="${this.escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:0.4rem;color:inherit;text-decoration:none;">
                    <span class="sns-link-icon">${this.SNS_ICONS[link.type] || '🔗'}</span>
                    <span class="sns-link-label">${this.escapeHtml(link.label)}</span>
                    <span class="sns-link-name">${this.escapeHtml(this.extractName(link.url))}</span>
                  </a>
                  <button class="sns-delete-btn" data-index="${i}" title="Delete">×</button>
                </span>
              `).join('')
          }
        </div>
        <div class="sns-form" id="snsForm">
          <div class="sns-form-row">
            <input type="url" class="sns-form-input" id="snsUrlInput" placeholder="${this.t('sns_placeholder')}">
            <button class="sns-form-btn sns-form-save" id="snsSaveBtn">${this.t('sns_save')}</button>
            <button class="sns-form-btn sns-form-cancel" id="snsCancelBtn">${this.t('sns_cancel')}</button>
          </div>
          <div class="sns-form-error" id="snsFormError">Invalid URL</div>
        </div>
      </div>
    `;

    this.bindEvents();
  },

  bindEvents() {
    // Add button
    const addBtn = document.getElementById('snsAddBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const form = document.getElementById('snsForm');
        form.classList.toggle('open');
        if (form.classList.contains('open')) {
          document.getElementById('snsUrlInput').focus();
        }
      });
    }

    // Save button
    const saveBtn = document.getElementById('snsSaveBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.handleSave());
    }

    // Cancel button
    const cancelBtn = document.getElementById('snsCancelBtn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        document.getElementById('snsForm').classList.remove('open');
        document.getElementById('snsUrlInput').value = '';
        document.getElementById('snsFormError').classList.remove('show');
      });
    }

    // Enter key in input
    const input = document.getElementById('snsUrlInput');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleSave();
      });
    }

    // Delete buttons
    document.querySelectorAll('.sns-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        this.removeLink(idx);
        this.render();
      });
    });
  },

  handleSave() {
    const input = document.getElementById('snsUrlInput');
    const error = document.getElementById('snsFormError');
    const url = input.value.trim();

    if (!url) {
      error.classList.add('show');
      return;
    }

    const success = this.addLink(url);
    if (success) {
      input.value = '';
      error.classList.remove('show');
      document.getElementById('snsForm').classList.remove('open');
      this.render();
    } else {
      error.classList.add('show');
    }
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => SnsLinks.init());
