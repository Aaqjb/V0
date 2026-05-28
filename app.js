(() => {
  'use strict';

  const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const CATEGORIES = {
    Work: { icon: '💼', varName: '--work' },
    Gym: { icon: '🏋️', varName: '--gym' },
    German: { icon: '📘', varName: '--german' },
    Piano: { icon: '🎹', varName: '--piano' },
    Meal: { icon: '🍽️', varName: '--meal' },
    Rest: { icon: '🌙', varName: '--rest' }
  };

  const DEFAULT_COLORS = {
    accent: '#347DFF', cyan: '#30D1F5', violet: '#9457FF', mint: '#30E6B8',
    lightStart: '#EFFAFF', lightMiddle: '#FAF5FF', lightEnd: '#EBFFF9',
    darkStart: '#090C17', darkMiddle: '#141026', darkEnd: '#091A21',
    Work: '#3B63ED', Gym: '#F55C7A', German: '#12A8AD', Piano: '#9C6BF0', Meal: '#F29C36', Rest: '#6B7A9C'
  };

  const PRESETS = {
    Aurora: { accent: '#347DFF', cyan: '#30D1F5', violet: '#9457FF', mint: '#30E6B8', lightStart: '#EFFAFF', lightMiddle: '#FAF5FF', lightEnd: '#EBFFF9', darkStart: '#090C17', darkMiddle: '#141026', darkEnd: '#091A21', Work: '#3B63ED', Gym: '#F55C7A', German: '#12A8AD', Piano: '#9C6BF0', Meal: '#F29C36', Rest: '#6B7A9C' },
    Sakura: { accent: '#FF6FAE', cyan: '#FFB8D3', violet: '#B987FF', mint: '#84E8D4', lightStart: '#FFF2F8', lightMiddle: '#F7F0FF', lightEnd: '#FFF8ED', darkStart: '#170812', darkMiddle: '#251325', darkEnd: '#161021', Work: '#A970FF', Gym: '#FF5C8A', German: '#D86BD2', Piano: '#8A7CFF', Meal: '#FF9B6A', Rest: '#8B8EA8' },
    Ocean: { accent: '#0984E3', cyan: '#00CEC9', violet: '#6C5CE7', mint: '#55EFC4', lightStart: '#EAF8FF', lightMiddle: '#F1FFFE', lightEnd: '#EEF1FF', darkStart: '#06111F', darkMiddle: '#071B2D', darkEnd: '#061E22', Work: '#0984E3', Gym: '#00B894', German: '#00CEC9', Piano: '#6C5CE7', Meal: '#FDCB6E', Rest: '#74B9FF' },
    Emerald: { accent: '#12B886', cyan: '#38D9A9', violet: '#845EF7', mint: '#69DB7C', lightStart: '#EEFFF6', lightMiddle: '#F3FFF0', lightEnd: '#F5F1FF', darkStart: '#07180F', darkMiddle: '#0A2118', darkEnd: '#10172D', Work: '#2F80ED', Gym: '#EB5757', German: '#12B886', Piano: '#845EF7', Meal: '#F2994A', Rest: '#8A94A6' },
    Sunset: { accent: '#FF7A59', cyan: '#FFD166', violet: '#9B5DE5', mint: '#00F5D4', lightStart: '#FFF4EA', lightMiddle: '#FFF8D8', lightEnd: '#F7ECFF', darkStart: '#1B0D0A', darkMiddle: '#29140C', darkEnd: '#170E28', Work: '#F15BB5', Gym: '#FF595E', German: '#00BBF9', Piano: '#9B5DE5', Meal: '#FFCA3A', Rest: '#8D99AE' },
    Mono: { accent: '#111827', cyan: '#6B7280', violet: '#374151', mint: '#9CA3AF', lightStart: '#F8FAFC', lightMiddle: '#EEF2F7', lightEnd: '#FFFFFF', darkStart: '#070707', darkMiddle: '#111111', darkEnd: '#1B1B1B', Work: '#111827', Gym: '#4B5563', German: '#374151', Piano: '#6B7280', Meal: '#9CA3AF', Rest: '#D1D5DB' }
  };

  const SCHEDULE = {
    Monday: [
      block('Monday', 0, '06:45', '07:00', 'Wake up / quick reset', 'Rest'),
      block('Monday', 1, '07:00', '07:30', 'German listening + vocab', 'German'),
      block('Monday', 2, '07:30', '08:00', 'Breakfast / get ready', 'Meal'),
      block('Monday', 3, '08:00', '16:00', 'Work', 'Work'),
      block('Monday', 4, '16:00', '17:00', 'Dinner / rest', 'Meal'),
      block('Monday', 5, '17:00', '19:00', 'Work', 'Work'),
      block('Monday', 6, '19:30', '21:00', 'Gym — Push day', 'Gym'),
      block('Monday', 7, '21:00', '21:30', 'Shower + protein meal', 'Meal'),
      block('Monday', 8, '21:30', '22:15', 'Light German review', 'German'),
      block('Monday', 9, '22:45', null, 'Sleep target', 'Rest')
    ],
    Tuesday: [
      block('Tuesday', 0, '06:45', '07:00', 'Wake up', 'Rest'),
      block('Tuesday', 1, '07:00', '07:30', 'German listening', 'German'),
      block('Tuesday', 2, '07:30', '08:00', 'Breakfast / get ready', 'Meal'),
      block('Tuesday', 3, '08:00', '16:00', 'Work', 'Work'),
      block('Tuesday', 4, '16:00', '17:00', 'Dinner / rest', 'Meal'),
      block('Tuesday', 5, '17:00', '19:00', 'Work', 'Work'),
      block('Tuesday', 6, '19:30', '20:30', 'German active study', 'German'),
      block('Tuesday', 7, '20:30', '21:15', 'Piano — pop songs/chords', 'Piano'),
      block('Tuesday', 8, '21:15', '22:00', 'Relax', 'Rest'),
      block('Tuesday', 9, '22:45', null, 'Sleep target', 'Rest')
    ],
    Wednesday: [
      block('Wednesday', 0, '06:45', '07:00', 'Wake up', 'Rest'),
      block('Wednesday', 1, '07:00', '07:30', 'German listening', 'German'),
      block('Wednesday', 2, '07:30', '08:00', 'Breakfast / get ready', 'Meal'),
      block('Wednesday', 3, '08:00', '16:00', 'Work', 'Work'),
      block('Wednesday', 4, '16:00', '17:00', 'Dinner / rest', 'Meal'),
      block('Wednesday', 5, '17:00', '19:00', 'Work', 'Work'),
      block('Wednesday', 6, '19:30', '21:00', 'Gym — Pull / back focus', 'Gym'),
      block('Wednesday', 7, '21:15', '22:00', 'Relax / light German immersion', 'German'),
      block('Wednesday', 8, '22:45', null, 'Sleep target', 'Rest')
    ],
    Thursday: [
      block('Thursday', 0, '06:45', '07:00', 'Wake up', 'Rest'),
      block('Thursday', 1, '07:00', '07:30', 'German listening', 'German'),
      block('Thursday', 2, '07:30', '08:00', 'Breakfast / get ready', 'Meal'),
      block('Thursday', 3, '08:00', '16:00', 'Work', 'Work'),
      block('Thursday', 4, '16:00', '17:00', 'Dinner / rest', 'Meal'),
      block('Thursday', 5, '17:00', '19:00', 'Work', 'Work'),
      block('Thursday', 6, '19:30', '20:30', 'German grammar / speaking', 'German'),
      block('Thursday', 7, '20:30', '21:15', 'Piano — pop songs/chords', 'Piano'),
      block('Thursday', 8, '21:15', '22:00', 'Free time', 'Rest'),
      block('Thursday', 9, '22:45', null, 'Sleep target', 'Rest')
    ],
    Friday: [
      block('Friday', 0, '06:45', '07:00', 'Wake up', 'Rest'),
      block('Friday', 1, '07:00', '07:30', 'German immersion', 'German'),
      block('Friday', 2, '07:30', '08:00', 'Breakfast / get ready', 'Meal'),
      block('Friday', 3, '08:00', '16:00', 'Work', 'Work'),
      block('Friday', 4, '16:00', '17:00', 'Dinner / rest', 'Meal'),
      block('Friday', 5, '17:00', '19:00', 'Work', 'Work'),
      block('Friday', 6, '19:30', '21:00', 'Gym — Legs + shoulders + abs', 'Gym'),
      block('Friday', 7, '21:15', '22:15', 'Relax / social', 'Rest'),
      block('Friday', 8, '23:00', null, 'Sleep target', 'Rest')
    ],
    Saturday: [
      block('Saturday', 0, '07:30', '08:00', 'Wake up / breakfast', 'Meal'),
      block('Saturday', 1, '08:00', '08:30', 'German review', 'German'),
      block('Saturday', 2, '09:00', '19:00', 'Work', 'Work'),
      block('Saturday', 3, '19:30', '20:45', 'Gym — Upper aesthetic focus', 'Gym'),
      block('Saturday', 4, '21:00', '22:00', 'Relax', 'Rest'),
      block('Saturday', 5, '23:00', null, 'Sleep target', 'Rest')
    ],
    Sunday: [
      block('Sunday', 0, '08:00', '08:30', 'Wake up / breakfast', 'Meal'),
      block('Sunday', 1, '08:30', '09:15', 'Piano — easy song practice', 'Piano'),
      block('Sunday', 2, '09:00', '19:00', 'Work', 'Work'),
      block('Sunday', 3, '19:30', '20:30', 'German media / study', 'German'),
      block('Sunday', 4, '20:30', '21:30', 'Meal prep / life admin', 'Meal'),
      block('Sunday', 5, '22:30', null, 'Sleep target', 'Rest')
    ]
  };

  const RULES = {
    Monday: 'Train hard, avoid junk volume. Main goal: progressive overload + recovery.',
    Tuesday: 'German first, piano second. Keep piano enjoyable so it stays consistent.',
    Wednesday: 'Train hard, avoid junk volume. Main goal: progressive overload + recovery.',
    Thursday: 'German first, piano second. Keep piano enjoyable so it stays consistent.',
    Friday: 'Train hard, avoid junk volume. Main goal: progressive overload + recovery.',
    Saturday: 'Shorter evening load. Keep the routine clean and repeatable.',
    Sunday: 'Maintenance mode: piano, German, meal prep, and recovery.'
  };



  const MED_TABS = [
    ['roadmap', 'Prep board'], ['stations', 'Stations'], ['ethics', 'Ethics'], ['nhs', 'NHS'], ['stories', 'Stories'], ['super', 'Supercurriculars']
  ];
  const SUPER_TABS = [
    ['books', 'Books'], ['articles', 'Articles'], ['podcasts', 'Podcasts & talks'], ['research', 'Research'], ['experience', 'Experience']
  ];

  const MED_CHECKLIST = [
    ['why-medicine', 'Write a 90-second Why Medicine answer using one real experience, one reflection, and one patient-centred insight.'],
    ['work-exp', 'Prepare three work-experience stories: empathy, teamwork, and a mistake or challenge.'],
    ['ethics-pillars', 'Practise autonomy, beneficence, non-maleficence, and justice until you can apply them naturally.'],
    ['nhs-values', 'Know the NHS values and link them to behaviour, not just definitions.'],
    ['gmc', 'Read the core ideas in Good medical practice and practise using them in judgement scenarios.'],
    ['hot-topics', 'Prepare balanced views on waiting lists, strikes, AI, vaccination, confidentiality, and resource allocation.'],
    ['reflection-bank', 'Build a reflection bank using Situation, Action, Learning, Application.'],
    ['mock-recording', 'Record at least one timed mock answer and improve the structure, pace, and conclusion.']
  ];

  const STATION_TYPES = [
    ['Motivation', 'Why medicine, why this university, why now, and what you understand about the reality of the career.'],
    ['Ethics', 'Confidentiality, consent, capacity, safeguarding, truth-telling, professionalism, and resource allocation.'],
    ['Communication', 'Explaining clearly, active listening, empathy, signposting, and checking understanding.'],
    ['Teamwork', 'Leadership, conflict, delegation, reliability, and learning from feedback.'],
    ['Data / prioritisation', 'Making safe decisions under time pressure and explaining your reasoning aloud.'],
    ['Role play', 'Stay calm, clarify the concern, acknowledge emotion, and move toward a safe practical next step.']
  ];

  const ETHICS_PROMPTS = [
    'Who is affected and what are their interests?',
    'Does the patient have capacity and enough information to decide?',
    'What does confidentiality require, and is there a serious risk that justifies disclosure?',
    'What action reduces harm while respecting the patient as much as possible?',
    'What would you escalate, document, or ask a senior about?',
    'How would you communicate the decision kindly and clearly?'
  ];

  const NHS_TOPICS = [
    ['Waiting lists', 'Think about clinical priority, fairness, workforce pressure, and communication with patients.'],
    ['Junior doctor strikes', 'Balance staff wellbeing, patient safety, pay/retention, and continuity of care.'],
    ['AI in healthcare', 'Use cases: triage support, imaging, admin. Risks: bias, accountability, confidentiality.'],
    ['Vaccination', 'Autonomy matters, but so do public health, misinformation, and protecting vulnerable people.'],
    ['Health inequality', 'Consider poverty, language barriers, digital exclusion, housing, and access to primary care.'],
    ['Resource allocation', 'Use fairness, evidence, urgency, benefit, and transparency in decision-making.']
  ];

  const STORY_BANK = [
    ['Empathy', 'A time you noticed distress, listened first, and changed your approach.'],
    ['Teamwork', 'A time you helped a group work better, especially when something was unclear.'],
    ['Resilience', 'A time you struggled, recovered, and changed your system.'],
    ['Integrity', 'A time honesty or responsibility mattered more than convenience.'],
    ['Leadership', 'A time you made the next step clearer for others without dominating.'],
    ['Reflection', 'A time feedback changed your behaviour afterwards.']
  ];

  const SUPER_CONTENT = {
    books: [
      ['This is Going to Hurt', 'Do not just say it is funny or shocking. Think about burnout, hierarchy, honesty, patient safety, and the human cost of the NHS.'],
      ['When Breath Becomes Air', 'Focus on identity, mortality, communication, and how illness changes the doctor-patient relationship.'],
      ['Being Mortal', 'Think about autonomy, end-of-life care, dignity, and medicine not being only about extending life.'],
      ['The Man Who Mistook His Wife for a Hat', 'Use it to think about person-centred care and seeing the patient beyond the condition.']
    ],
    articles: [
      ['BMJ / Student BMJ article', 'Ask: what is the central claim, what evidence supports it, and what would a patient or clinician worry about?'],
      ['NHS England update', 'Ask: what problem is being solved, who benefits, who may be disadvantaged, and how success is measured?'],
      ['Medical ethics article', 'Ask: where do autonomy, safety, fairness, and professional duty conflict?'],
      ['Health inequality article', 'Ask: what structural factor is causing the outcome and what realistic intervention could help?']
    ],
    podcasts: [
      ['The BMJ Podcast', 'Listen for how clinicians reason through uncertainty, trade-offs, evidence, and patient priorities.'],
      ['NHS / public health talks', 'Extract one issue, one stakeholder conflict, and one thing you would ask at interview.'],
      ['University lectures', 'Use them to build curiosity, not to show off technical detail.'],
      ['Patient stories', 'Think about communication, dignity, and what good care felt like from the patient side.']
    ],
    research: [
      ['GMC Good medical practice', 'Turn each principle into behaviour: what would a safe medical student actually do?'],
      ['NHS values', 'Prepare examples of when you showed respect, compassion, commitment, and working together.'],
      ['Clinical trial summary', 'Think about evidence quality, consent, risk, benefit, and uncertainty.'],
      ['Guidelines', 'Ask why standardisation helps safety but still needs individual clinical judgement.']
    ],
    experience: [
      ['GP shadowing', 'Notice continuity of care, safeguarding, time pressure, confidentiality, and multidisciplinary work.'],
      ['Hospital volunteering', 'Look for communication, dignity, team roles, and how small tasks affect patient experience.'],
      ['Care home / community work', 'Think about vulnerability, autonomy, patience, and long-term relationships.'],
      ['Customer service / tutoring', 'Translate it into communication, conflict management, responsibility, and reflection.']
    ]
  };


  const memory = new Map();
  let deferredInstallPrompt = null;

  const storage = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (_) {
        return memory.has(key) ? memory.get(key) : fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); }
      catch (_) { memory.set(key, value); }
    },
    remove(key) {
      try { localStorage.removeItem(key); }
      catch (_) { memory.delete(key); }
    }
  };

  const state = {
    tab: storage.get('weeklyflow.web.tab', 'today'),
    selectedDate: new Date(),
    weekOffset: 0,
    search: '',
    category: 'All',
    theme: storage.get('weeklyflow.web.theme', 'system'),
    colors: { ...DEFAULT_COLORS, ...storage.get('weeklyflow.web.colors', {}) },
    wallpaper: storage.get('weeklyflow.web.wallpaper', { dataUrl: '', opacity: 0.28, blur: 0, overlay: 0.18 }),
    medTab: storage.get('weeklyflow.med.tab', 'roadmap'),
    superTab: storage.get('weeklyflow.med.superTab', 'books')
  };

  const els = {
    root: document.documentElement,
    content: document.getElementById('content'),
    dateStrip: document.getElementById('dateStrip'),
    statsGrid: document.getElementById('statsGrid'),
    headlineDate: document.getElementById('headlineDate'),
    headlineSub: document.getElementById('headlineSub'),
    focusDialog: document.getElementById('focusDialog'),
    focusContent: document.getElementById('focusContent'),
    toast: document.getElementById('toast'),
    sidebarFocusTitle: document.getElementById('sidebarFocusTitle'),
    sidebarFocusMeta: document.getElementById('sidebarFocusMeta'),
    wallpaperLayer: document.getElementById('wallpaperLayer'),
    liveClockTime: document.getElementById('liveClockTime'),
    liveClockDate: document.getElementById('liveClockDate')
  };

  function block(day, index, start, end, title, category) {
    return { id: `${day.toLowerCase()}-${index}`, day, start, end, title, category };
  }
  function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function minutes(time) {
    if (!time) return null;
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }
  function duration(block) {
    if (!block.end) return 0;
    return Math.max(0, minutes(block.end) - minutes(block.start));
  }
  function durationText(mins) {
    if (!mins) return 'Target';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h && m) return `${h}h ${m}m`;
    if (h) return `${h}h`;
    return `${m}m`;
  }
  function dateKey(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }
  function weekdayName(date) {
    return WEEKDAYS[(date.getDay() + 6) % 7];
  }
  function startOfWeek(date) {
    const d = new Date(date);
    d.setHours(0,0,0,0);
    const day = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - day + state.weekOffset * 7);
    return d;
  }
  function addDays(date, count) {
    const d = new Date(date);
    d.setDate(d.getDate() + count);
    return d;
  }
  function formatDate(date, format = 'long') {
    if (format === 'short') return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' }).format(date);
    if (format === 'weekday') return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short' }).format(date);
    return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  }
  function isSameDay(a, b) { return dateKey(a) === dateKey(b); }
  function currentMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  }
  function cssVarForCategory(category) {
    return `var(${CATEGORIES[category]?.varName || '--accent'})`;
  }
  function iconForCategory(category) { return CATEGORIES[category]?.icon || '•'; }
  function isValidHex(value) { return /^#?[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(String(value).trim()); }
  function normalizedHex(value) {
    const v = String(value).trim().replace('#', '').toUpperCase();
    return `#${v}`;
  }
  function storageBase(date = state.selectedDate) { return `weeklyflow.web.${dateKey(date)}`; }
  function getCompleted(date = state.selectedDate) { return new Set(storage.get(`${storageBase(date)}.completions`, [])); }
  function setCompleted(set, date = state.selectedDate) { storage.set(`${storageBase(date)}.completions`, [...set].sort()); }
  function getNotes(date = state.selectedDate) { return storage.get(`${storageBase(date)}.notes`, {}); }
  function setNotes(notes, date = state.selectedDate) { storage.set(`${storageBase(date)}.notes`, notes); }
  function getExtraTasks(date = state.selectedDate) { return storage.get(`${storageBase(date)}.extraTasks`, []); }
  function setExtraTasks(tasks, date = state.selectedDate) { storage.set(`${storageBase(date)}.extraTasks`, tasks); }
  function getExtraDone(date = state.selectedDate) { return new Set(storage.get(`${storageBase(date)}.extraDone`, [])); }
  function setExtraDone(done, date = state.selectedDate) { storage.set(`${storageBase(date)}.extraDone`, [...done].sort()); }
  function getReflection(date = state.selectedDate) { return storage.get(`${storageBase(date)}.reflection`, { mood: 3, energy: 3, note: '' }); }
  function setReflection(reflection, date = state.selectedDate) { storage.set(`${storageBase(date)}.reflection`, reflection); }

  function isStandaloneApp() {
    return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function pwaStatusText() {
    if (isStandaloneApp()) return 'Installed — running from your Home Screen.';
    if (!('serviceWorker' in navigator)) return 'Installable features are limited in this browser.';
    if (location.protocol === 'file:') return 'Open from a hosted HTTPS link to enable install and offline mode.';
    return navigator.onLine ? 'Ready to install once hosted. Offline mode will activate after first load.' : 'Offline — showing cached app if previously installed.';
  }

  function collectBackupData() {
    const data = {};
    try {
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (key && key.startsWith('weeklyflow.web.')) data[key] = localStorage.getItem(key);
      }
    } catch (_) {}
    try {
      memory.forEach((value, key) => {
        if (key && key.startsWith('weeklyflow.web.') && data[key] == null) data[key] = JSON.stringify(value);
      });
    } catch (_) {}
    return {
      app: 'Weekly Flow',
      backupVersion: 1,
      exportedAt: new Date().toISOString(),
      selectedDate: dateKey(state.selectedDate),
      data
    };
  }

  function downloadTextFile(filename, text, type = 'application/json') {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportBackup() {
    const payload = collectBackupData();
    const filename = `weekly-flow-backup-${dateKey(new Date())}.json`;
    downloadTextFile(filename, JSON.stringify(payload, null, 2));
    toast('Backup exported');
  }

  function importBackupFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result || '{}'));
        const data = payload.data || payload;
        if (!data || typeof data !== 'object') throw new Error('Invalid backup');
        Object.entries(data).forEach(([key, raw]) => {
          if (!key.startsWith('weeklyflow.web.')) return;
          const value = typeof raw === 'string' ? raw : JSON.stringify(raw);
          try { localStorage.setItem(key, value); }
          catch (_) {
            try { memory.set(key, JSON.parse(value)); }
            catch { memory.set(key, value); }
          }
        });
        state.tab = storage.get('weeklyflow.web.tab', 'today');
        state.theme = storage.get('weeklyflow.web.theme', 'system');
        state.colors = { ...DEFAULT_COLORS, ...storage.get('weeklyflow.web.colors', {}) };
        state.wallpaper = storage.get('weeklyflow.web.wallpaper', { dataUrl: '', opacity: 0.28, blur: 0, overlay: 0.18 });
        applyWallpaper();
        if (payload.selectedDate) selectDateFromKey(payload.selectedDate);
        render();
        toast('Backup imported');
      } catch (error) {
        toast('Import failed');
      }
    };
    reader.readAsText(file);
  }

  function showInstallInstructions() {
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const body = ios
      ? 'In Safari, tap Share, then Add to Home Screen. The app will open full-screen with its icon and cached offline shell.'
      : 'Use your browser menu and choose Install app / Add to Home screen. On Chrome, the install prompt may appear automatically after hosting.';
    els.focusContent.innerHTML = `<div class="focus-hero">
      <div class="focus-icon">↗</div>
      <p class="eyebrow">Install Weekly Flow</p>
      <h2>Home Screen setup</h2>
      <p class="muted">${esc(body)}</p>
      <ol class="install-steps">
        <li>Upload this folder to Netlify, Vercel, GitHub Pages, or another HTTPS host.</li>
        <li>Open the hosted link in Safari or Chrome.</li>
        <li>Add it to your Home Screen.</li>
        <li>Open it once online so offline caching can finish.</li>
      </ol>
    </div>`;
    if (typeof els.focusDialog.showModal === 'function') els.focusDialog.showModal();
    else els.focusDialog.setAttribute('open', '');
  }

  async function installApp() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(() => null);
      deferredInstallPrompt = null;
      return;
    }
    showInstallInstructions();
  }

  async function checkOfflineReadiness() {
    if (location.protocol === 'file:') return toast('Host online to enable offline mode');
    if (!('serviceWorker' in navigator)) return toast('Offline mode unsupported here');
    try {
      await navigator.serviceWorker.ready;
      toast('Offline mode ready');
    } catch (_) {
      toast('Offline mode still activating');
    }
  }

  function applyThemeAndColors() {
    els.root.dataset.theme = state.theme;
    storage.set('weeklyflow.web.theme', state.theme);
    const rootStyle = els.root.style;
    const map = {
      accent: '--accent', cyan: '--cyan', violet: '--violet', mint: '--mint',
      lightStart: '--light-start', lightMiddle: '--light-middle', lightEnd: '--light-end',
      darkStart: '--dark-start', darkMiddle: '--dark-middle', darkEnd: '--dark-end',
      Work: '--work', Gym: '--gym', German: '--german', Piano: '--piano', Meal: '--meal', Rest: '--rest'
    };
    Object.entries(map).forEach(([key, cssName]) => rootStyle.setProperty(cssName, state.colors[key] || DEFAULT_COLORS[key]));
    storage.set('weeklyflow.web.colors', state.colors);
  }

  function applyWallpaper() {
    const wp = state.wallpaper || {};
    els.root.style.setProperty('--wallpaper-opacity', String(Number(wp.opacity ?? 0.28)));
    els.root.style.setProperty('--wallpaper-blur', `${Number(wp.blur ?? 0)}px`);
    els.root.style.setProperty('--wallpaper-overlay', String(Number(wp.overlay ?? 0.18)));
    if (els.wallpaperLayer && wp.dataUrl) {
      els.wallpaperLayer.style.backgroundImage = `url("${wp.dataUrl}")`;
      document.body.classList.add('has-wallpaper');
    } else if (els.wallpaperLayer) {
      els.wallpaperLayer.style.backgroundImage = '';
      document.body.classList.remove('has-wallpaper');
    }
    storage.set('weeklyflow.web.wallpaper', state.wallpaper);
  }

  function updateLiveClock() {
    const now = new Date();
    if (els.liveClockTime) {
      els.liveClockTime.textContent = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
      }).format(now);
    }
    if (els.liveClockDate) {
      els.liveClockDate.textContent = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short', day: 'numeric', month: 'short'
      }).format(now);
    }
  }

  function processWallpaperFile(file) {
    if (!file || !file.type.startsWith('image/')) return toast('Choose an image file');
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      try {
        const targetW = 1200;
        const targetH = 900; // 4:3
        const sourceRatio = img.width / img.height;
        const targetRatio = targetW / targetH;
        let sx = 0, sy = 0, sw = img.width, sh = img.height;
        if (sourceRatio > targetRatio) {
          sw = img.height * targetRatio;
          sx = (img.width - sw) / 2;
        } else {
          sh = img.width / targetRatio;
          sy = (img.height - sh) / 2;
        }
        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d', { alpha: false });
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);
        state.wallpaper = { ...(state.wallpaper || {}), dataUrl: canvas.toDataURL('image/jpeg', 0.72) };
        applyWallpaper();
        renderSettings();
        toast('Wallpaper applied');
      } catch (_) {
        toast('Wallpaper failed');
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    };
    img.onerror = () => { URL.revokeObjectURL(objectUrl); toast('Image could not load'); };
    img.src = objectUrl;
  }

  function selectedBlocks() { return SCHEDULE[weekdayName(state.selectedDate)] || []; }
  function filteredBlocks() {
    const q = state.search.toLowerCase().trim();
    return selectedBlocks().filter(block => {
      const matchesCategory = state.category === 'All' || block.category === state.category;
      const matchesSearch = !q || block.title.toLowerCase().includes(q) || block.category.toLowerCase().includes(q) || block.start.includes(q) || (block.end || '').includes(q);
      return matchesCategory && matchesSearch;
    });
  }
  function dayProgress(date) {
    const day = weekdayName(date);
    const blocks = SCHEDULE[day] || [];
    const completed = getCompleted(date);
    const extras = getExtraTasks(date);
    const extraDone = getExtraDone(date);
    const done = blocks.filter(b => completed.has(b.id)).length + extras.filter(t => extraDone.has(t.id)).length;
    const total = blocks.length + extras.length;
    return { done, total, fraction: total ? done / total : 0, percent: total ? Math.round((done / total) * 100) : 0 };
  }
  function plannedMinutes(date = state.selectedDate) {
    return (SCHEDULE[weekdayName(date)] || []).reduce((sum, b) => sum + duration(b), 0);
  }
  function activeStatus(block) {
    if (!isSameDay(state.selectedDate, new Date())) return '';
    const now = currentMinutes();
    const start = minutes(block.start);
    const end = block.end ? minutes(block.end) : start + 1;
    if (now >= start && now < end) return 'now';
    if (now < start) return 'upcoming';
    return 'past';
  }
  function nextBlock(date = state.selectedDate, incompleteOnly = false) {
    const blocks = SCHEDULE[weekdayName(date)] || [];
    const completed = getCompleted(date);
    const now = isSameDay(date, new Date()) ? currentMinutes() : -1;
    let upcoming = blocks.find(b => (minutes(b.end || b.start) >= now) && (!incompleteOnly || !completed.has(b.id)));
    if (!upcoming && incompleteOnly) upcoming = blocks.find(b => !completed.has(b.id));
    return upcoming || blocks[0] || null;
  }

  function render() {
    applyThemeAndColors();
    updateNav();
    renderHeader();
    renderDateStrip();
    renderStats();
    updateSidebarFocus();
    if (state.tab === 'today') renderToday();
    else if (state.tab === 'week') renderWeek();
    else if (state.tab === 'insights') renderInsights();
    else if (state.tab === 'plan') renderPlan();
    else if (state.tab === 'med') renderMedInterview();
    else renderSettings();
  }

  function updateNav() {
    document.querySelectorAll('[data-action="tab"]').forEach(button => {
      const isActive = button.dataset.tab === state.tab;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }
  function renderHeader() {
    els.headlineDate.textContent = formatDate(state.selectedDate, 'weekday');
    const day = weekdayName(state.selectedDate);
    const todayMarker = isSameDay(state.selectedDate, new Date()) ? 'Today • ' : '';
    els.headlineSub.textContent = `${todayMarker}${day} plan. ${RULES[day] || 'Your calm, structured day.'}`;
  }
  function renderDateStrip() {
    const start = startOfWeek(new Date());
    els.dateStrip.innerHTML = WEEKDAYS.map((day, index) => {
      const date = addDays(start, index);
      const progress = dayProgress(date);
      const active = isSameDay(date, state.selectedDate);
      const today = isSameDay(date, new Date());
      return `<button class="date-card ${active ? 'active' : ''} ${today ? 'today' : ''}" data-action="select-date" data-date="${dateKey(date)}">
        <span class="day-name">${day.slice(0,3)}</span>
        <span class="day-num">${date.getDate()}</span>
        <span class="day-progress"><span style="width:${progress.percent}%"></span></span>
        <small>${progress.done}/${progress.total}</small>
      </button>`;
    }).join('');
  }
  function renderStats() {
    const progress = dayProgress(state.selectedDate);
    const blocks = selectedBlocks();
    const mins = plannedMinutes(state.selectedDate);
    const next = nextBlock(state.selectedDate, true);
    els.statsGrid.innerHTML = `
      <article class="stat-card"><small>Completion</small><strong>${progress.percent}%</strong><small>${progress.done}/${progress.total} blocks complete</small></article>
      <article class="stat-card"><small>Blocks</small><strong>${blocks.length}</strong><small>${getExtraTasks().length} extra task${getExtraTasks().length === 1 ? '' : 's'}</small></article>
      <article class="stat-card"><small>Planned time</small><strong>${durationText(mins)}</strong><small>scheduled focus time</small></article>
      <article class="stat-card"><small>Next</small><strong style="font-size:1.25rem">${next ? esc(next.title) : '—'}</strong><small>${next ? `${next.start}${next.end ? '–' + next.end : ''}` : 'No block'}</small></article>`;
  }
  function updateSidebarFocus() {
    const block = nextBlock(state.selectedDate, true);
    els.sidebarFocusTitle.textContent = block ? block.title : 'All done';
    els.sidebarFocusMeta.textContent = block ? `${block.start}${block.end ? '–' + block.end : ''} • ${block.category}` : 'No incomplete blocks';
  }

  function renderToday() {
    const blocks = filteredBlocks();
    const categoryOptions = ['All', ...Object.keys(CATEGORIES)].map(c => `<option value="${c}" ${state.category === c ? 'selected' : ''}>${c}</option>`).join('');
    els.content.innerHTML = `<div class="view">
      <div class="toolbar">
        <label><span class="eyebrow">Search</span><input type="search" value="${esc(state.search)}" placeholder="Search blocks, times, categories…" data-field="search" /></label>
        <label><span class="eyebrow">Category</span><select data-field="category">${categoryOptions}</select></label>
        <button class="primary-button" data-action="open-focus">Focus next block</button>
      </div>
      <div class="timeline">${blocks.length ? blocks.map(renderTimelineCard).join('') : '<div class="empty">No blocks match this search/filter.</div>'}</div>
    </div>`;
  }

  function renderTimelineCard(block) {
    const completed = getCompleted().has(block.id);
    const notes = getNotes();
    const status = activeStatus(block);
    const badge = status === 'now' ? '<span class="badge">Live now</span>' : status === 'upcoming' ? '<span class="badge">Upcoming</span>' : '';
    return `<article class="timeline-card ${completed ? 'complete' : ''} ${status === 'now' ? 'now' : ''}" style="--cat-color:${cssVarForCategory(block.category)}" data-block-id="${block.id}">
      <span class="timeline-dot"></span>
      <div class="time-block"><strong>${esc(block.start)}</strong><span>${block.end ? esc(block.end) : 'Target'}</span></div>
      <div>
        <div class="title-row"><h3 class="block-title">${esc(block.title)}</h3>${badge}</div>
        <span class="category-pill">${iconForCategory(block.category)} ${esc(block.category)}</span>
        <small> ${durationText(duration(block))}</small>
        <details class="note-box">
          <summary class="muted">Notes</summary>
          <textarea data-field="note" data-block-id="${block.id}" placeholder="Add a note for this block…">${esc(notes[block.id] || '')}</textarea>
        </details>
      </div>
      <button class="check-button ${completed ? 'done' : ''}" data-action="toggle-block" data-block-id="${block.id}" aria-label="Toggle ${esc(block.title)}">${completed ? '✓' : ''}</button>
    </article>`;
  }

  function renderWeek() {
    const start = startOfWeek(new Date());
    const weekCards = WEEKDAYS.map((day, i) => {
      const date = addDays(start, i);
      const p = dayProgress(date);
      const mins = plannedMinutes(date);
      return `<button class="glass-card week-card" data-action="select-date-tab" data-date="${dateKey(date)}" style="text-align:left">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center">
          <div><p class="eyebrow">${esc(day)}</p><h3>${formatDate(date, 'short')}</h3><small>${durationText(mins)} planned</small></div>
          <div class="progress-ring" style="--value:${p.percent}"><span>${p.percent}%</span></div>
        </div>
        <small>${p.done}/${p.total} completed</small>
      </button>`;
    }).join('');
    els.content.innerHTML = `<div class="view">
      <div style="display:flex;justify-content:space-between;gap:14px;align-items:flex-start;flex-wrap:wrap">
        <div><p class="eyebrow">Weekly overview</p><h2>Your current week</h2><p class="muted">Tap a day to open its timetable.</p></div>
        <button class="danger-button" data-action="reset-week">Reset this week</button>
      </div>
      <div class="card-grid">${weekCards}</div>
    </div>`;
  }

  function renderInsights() {
    const start = startOfWeek(new Date());
    const weekDates = WEEKDAYS.map((_, i) => addDays(start, i));
    const progress = weekDates.map(dayProgress);
    const weekDone = progress.reduce((s, p) => s + p.done, 0);
    const weekTotal = progress.reduce((s, p) => s + p.total, 0);
    const weekPercent = weekTotal ? Math.round(weekDone / weekTotal * 100) : 0;
    const categoryMins = Object.keys(CATEGORIES).map(cat => ({ cat, minutes: Object.values(SCHEDULE).flat().filter(b => b.category === cat).reduce((s, b) => s + duration(b), 0) }));
    const maxMins = Math.max(...categoryMins.map(x => x.minutes), 1);
    const bars = categoryMins.map(({ cat, minutes: mins }) => `<div class="bar-row" style="--cat-color:${cssVarForCategory(cat)}">
      <strong>${iconForCategory(cat)} ${cat}</strong><div class="bar-track"><div class="bar-fill" style="width:${Math.round(mins / maxMins * 100)}%"></div></div><small>${durationText(mins)}</small>
    </div>`).join('');
    const dayBars = progress.map((p, i) => `<div class="bar-row"><strong>${WEEKDAYS[i].slice(0,3)}</strong><div class="bar-track"><div class="bar-fill" style="width:${p.percent}%"></div></div><small>${p.percent}%</small></div>`).join('');
    els.content.innerHTML = `<div class="view two-col">
      <section class="glass-card">
        <p class="eyebrow">Insights</p><h2>${weekPercent}% weekly completion</h2>
        <p class="muted">${weekDone}/${weekTotal} scheduled and extra tasks completed this week.</p>
        <div class="bars">${dayBars}</div>
      </section>
      <section class="glass-card">
        <p class="eyebrow">Time allocation</p><h2>Category balance</h2>
        <div class="bars">${bars}</div>
      </section>
    </div>`;
  }

  function renderPlan() {
    const tasks = getExtraTasks();
    const done = getExtraDone();
    const reflection = getReflection();
    const taskRows = tasks.length ? tasks.map(task => `<div class="task-item" style="--cat-color:${cssVarForCategory(task.category)}">
      <button class="check-button ${done.has(task.id) ? 'done' : ''}" data-action="toggle-extra" data-task-id="${task.id}">${done.has(task.id) ? '✓' : ''}</button>
      <div><strong>${esc(task.title)}</strong><br><small>${iconForCategory(task.category)} ${esc(task.category)}${task.dueTime ? ' • ' + esc(task.dueTime) : ''}</small></div>
      <button class="icon-button" data-action="delete-extra" data-task-id="${task.id}">×</button>
    </div>`).join('') : '<div class="empty">No extra tasks added for this date.</div>';
    const categoryOptions = Object.keys(CATEGORIES).map(c => `<option value="${c}">${c}</option>`).join('');
    els.content.innerHTML = `<div class="view two-col">
      <section class="glass-card">
        <p class="eyebrow">Plan</p><h2>Add extra task</h2>
        <div class="form-grid">
          <label><span>Task</span><input id="extraTitle" placeholder="e.g. Finish German Anki" /></label>
          <label><span>Category</span><select id="extraCategory">${categoryOptions}</select></label>
          <label><span>Due time</span><input id="extraTime" type="time" /></label>
          <button class="primary-button" data-action="add-extra">Add</button>
        </div>
        <div class="task-list">${taskRows}</div>
      </section>
      <section class="glass-card">
        <p class="eyebrow">Daily reflection</p><h2>How did the day feel?</h2>
        <label><span>Mood</span><div class="mood-grid">${[1,2,3,4,5].map(n => `<button class="rating-button ${reflection.mood === n ? 'active' : ''}" data-action="set-rating" data-kind="mood" data-value="${n}">${n}</button>`).join('')}</div></label>
        <br>
        <label><span>Energy</span><div class="mood-grid">${[1,2,3,4,5].map(n => `<button class="rating-button ${reflection.energy === n ? 'active' : ''}" data-action="set-rating" data-kind="energy" data-value="${n}">${n}</button>`).join('')}</div></label>
        <br>
        <label><span>Notes</span><textarea data-field="reflection-note" placeholder="What went well? What needs changing?">${esc(reflection.note || '')}</textarea></label>
        <button class="soft-button full" data-action="copy-summary">Copy daily summary</button>
      </section>
    </div>`;
  }


  function getMedChecks() {
    return new Set(storage.get('weeklyflow.med.checks', []));
  }
  function setMedChecks(set) {
    storage.set('weeklyflow.med.checks', [...set]);
  }
  function medTabButton([id, label]) {
    return `<button class="pill-tab ${state.medTab === id ? 'active' : ''}" data-action="med-tab" data-med-tab="${id}">${esc(label)}</button>`;
  }
  function superTabButton([id, label]) {
    return `<button class="pill-tab ${state.superTab === id ? 'active' : ''}" data-action="super-tab" data-super-tab="${id}">${esc(label)}</button>`;
  }
  function renderMedChecklist() {
    const checks = getMedChecks();
    return MED_CHECKLIST.map(([id, label]) => `<label class="med-check ${checks.has(id) ? 'done' : ''}">
      <button class="check-button ${checks.has(id) ? 'done' : ''}" data-action="toggle-med-check" data-med-id="${id}" aria-label="Toggle ${esc(label)}">${checks.has(id) ? '✓' : ''}</button>
      <span>${esc(label)}</span>
    </label>`).join('');
  }
  function renderMedInterview() {
    const checks = getMedChecks();
    const progress = Math.round((checks.size / MED_CHECKLIST.length) * 100);
    const tabs = MED_TABS.map(medTabButton).join('');
    let body = '';
    if (state.medTab === 'roadmap') body = renderMedRoadmap(progress);
    else if (state.medTab === 'stations') body = renderMedStations();
    else if (state.medTab === 'ethics') body = renderMedEthics();
    else if (state.medTab === 'nhs') body = renderMedNHS();
    else if (state.medTab === 'stories') body = renderMedStories();
    else body = renderMedSupercurriculars();
    els.content.innerHTML = `<div class="view med-view">
      <div class="med-hero">
        <div>
          <p class="eyebrow">UK medicine interviews</p>
          <h2>Med Interview Prep</h2>
          <p class="muted">A lightweight prep board for MMIs, ethics, NHS topics, reflections, and supercurricular reading.</p>
        </div>
        <div class="progress-ring med-progress" style="--value:${progress}"><span>${progress}%</span></div>
      </div>
      <div class="pill-tabs" role="tablist">${tabs}</div>
      ${body}
    </div>`;
  }
  function renderMedRoadmap(progress) {
    return `<div class="two-col">
      <section class="glass-card med-card">
        <p class="eyebrow">Priority checklist</p><h2>${progress}% complete</h2>
        <div class="med-checklist">${renderMedChecklist()}</div>
      </section>
      <section class="glass-card med-card">
        <p class="eyebrow">Weekly method</p><h2>How to use this tab</h2>
        <div class="med-grid-single">
          ${['Pick one station type per day.', 'Write one reflection after each supercurricular.', 'Practise aloud with a timer rather than only reading.', 'After each mock, improve one thing: structure, empathy, evidence, or conclusion.'].map(x => `<div class="mini-note">${esc(x)}</div>`).join('')}
        </div>
      </section>
    </div>`;
  }
  function renderMedStations() {
    return `<div class="card-grid med-cards">
      ${STATION_TYPES.map(([title, text]) => `<article class="glass-card med-card"><p class="eyebrow">Station type</p><h3>${esc(title)}</h3><p class="muted">${esc(text)}</p><div class="mini-note"><strong>Think:</strong> What example from your life proves this skill?</div></article>`).join('')}
    </div>`;
  }
  function renderMedEthics() {
    return `<div class="two-col">
      <section class="glass-card med-card"><p class="eyebrow">Ethics framework</p><h2>Use this sequence</h2><div class="number-list">${ETHICS_PROMPTS.map((p,i)=>`<div><strong>${i+1}</strong><span>${esc(p)}</span></div>`).join('')}</div></section>
      <section class="glass-card med-card"><p class="eyebrow">Interview style</p><h2>How to sound safe</h2><p class="muted">Avoid pretending there is one perfect answer. Show that you would gather information, protect safety, respect autonomy, and escalate appropriately.</p><div class="mini-note">Useful phrase: “I would not make this decision in isolation; I would seek senior advice and document clearly.”</div></section>
    </div>`;
  }
  function renderMedNHS() {
    return `<div class="card-grid med-cards">${NHS_TOPICS.map(([title,text])=>`<article class="glass-card med-card"><p class="eyebrow">NHS topic</p><h3>${esc(title)}</h3><p class="muted">${esc(text)}</p><div class="mini-note">Prepare a balanced point: patient view, staff view, system view.</div></article>`).join('')}</div>`;
  }
  function renderMedStories() {
    return `<div class="two-col">
      <section class="glass-card med-card"><p class="eyebrow">Story bank</p><h2>Examples to prepare</h2><div class="story-list">${STORY_BANK.map(([title,text])=>`<div class="story-row"><strong>${esc(title)}</strong><span>${esc(text)}</span></div>`).join('')}</div></section>
      <section class="glass-card med-card"><p class="eyebrow">Reflection formula</p><h2>SALA</h2><div class="number-list"><div><strong>S</strong><span>Situation: what happened?</span></div><div><strong>A</strong><span>Action: what did you do?</span></div><div><strong>L</strong><span>Learning: what did it teach you?</span></div><div><strong>A</strong><span>Application: how will it make you a better medical student/doctor?</span></div></div></section>
    </div>`;
  }
  function renderMedSupercurriculars() {
    const tabs = SUPER_TABS.map(superTabButton).join('');
    const rows = SUPER_CONTENT[state.superTab] || SUPER_CONTENT.books;
    return `<section class="glass-card med-card">
      <div style="display:flex;justify-content:space-between;gap:14px;align-items:flex-start;flex-wrap:wrap"><div><p class="eyebrow">Supercurriculars</p><h2>Read, listen, reflect</h2><p class="muted">The point is not to collect titles. The point is to extract judgement, empathy, and insight.</p></div></div>
      <div class="pill-tabs sub-tabs" role="tablist">${tabs}</div>
      <div class="super-list">${rows.map(([title, think])=>`<article class="super-item"><h3>${esc(title)}</h3><p>${esc(think)}</p><textarea placeholder="My reflection: What did this change in how I think about medicine?"></textarea></article>`).join('')}</div>
    </section>`;
  }

  function renderSettings() {
    const paletteKeys = [
      ['accent', 'Accent'], ['cyan', 'Glow cyan'], ['violet', 'Glow violet'], ['mint', 'Glow mint'],
      ['lightStart', 'Light background 1'], ['lightMiddle', 'Light background 2'], ['lightEnd', 'Light background 3'],
      ['darkStart', 'Dark background 1'], ['darkMiddle', 'Dark background 2'], ['darkEnd', 'Dark background 3'],
      ['Work', 'Work'], ['Gym', 'Gym'], ['German', 'German'], ['Piano', 'Piano'], ['Meal', 'Meal'], ['Rest', 'Rest']
    ];
    const colorControls = paletteKeys.map(([key, label]) => `<label class="color-control">
      <span class="color-swatch" style="background:${state.colors[key] || DEFAULT_COLORS[key]}"></span>
      <span><span>${label}</span><input data-field="color" data-color-key="${key}" value="${esc(state.colors[key] || DEFAULT_COLORS[key])}" placeholder="#347DFF" /></span>
    </label>`).join('');
    const presets = Object.keys(PRESETS).map(name => `<button class="soft-button" data-action="apply-preset" data-preset="${name}">${name}</button>`).join('');
    els.content.innerHTML = `<div class="view settings-grid">
      <section class="glass-card">
        <p class="eyebrow">Appearance</p><h2>Theme</h2>
        <label><span>Mode</span><select data-field="theme"><option ${state.theme === 'system' ? 'selected' : ''}>system</option><option ${state.theme === 'light' ? 'selected' : ''}>light</option><option ${state.theme === 'dark' ? 'selected' : ''}>dark</option></select></label>
        <br><p class="muted">Colours, notes and progress are saved locally on this browser.</p>
        <button class="danger-button full" data-action="reset-day">Reset selected day</button>
      </section>
      <section class="glass-card">
        <p class="eyebrow">Wallpaper</p><h2>4:3 background image</h2>
        <div class="wallpaper-preview" style="${state.wallpaper?.dataUrl ? `background-image:url('${state.wallpaper.dataUrl}')` : ''}"></div>
        <br>
        <div class="preset-row">
          <button class="primary-button" data-action="choose-wallpaper">Upload wallpaper</button>
          <button class="soft-button" data-action="reset-wallpaper">Remove</button>
        </div>
        <input id="wallpaperFile" type="file" accept="image/*" data-field="wallpaper-file" hidden />
        <div class="range-grid">
          <label class="range-control"><span>Strength</span><input type="range" min="0" max="0.75" step="0.01" data-field="wallpaper-opacity" value="${esc(state.wallpaper?.opacity ?? 0.28)}" /></label>
          <label class="range-control"><span>Blur</span><input type="range" min="0" max="12" step="1" data-field="wallpaper-blur" value="${esc(state.wallpaper?.blur ?? 0)}" /></label>
          <label class="range-control"><span>Dark overlay</span><input type="range" min="0" max="0.65" step="0.01" data-field="wallpaper-overlay" value="${esc(state.wallpaper?.overlay ?? 0.18)}" /></label>
        </div>
      </section>
      <section class="glass-card">
        <p class="eyebrow">Home Screen</p><h2>Installable app</h2>
        <p class="status-pill">${esc(pwaStatusText())}</p>
        <p class="muted">When hosted on HTTPS, this version can be added to your Home Screen and run in standalone app mode.</p>
        <div class="preset-row">
          <button class="primary-button" data-action="install-app">Install / instructions</button>
          <button class="soft-button" data-action="check-offline">Check offline</button>
        </div>
      </section>
      <section class="glass-card">
        <p class="eyebrow">Backup</p><h2>Export / import</h2>
        <p class="muted">Export a JSON backup of your progress, notes, tasks, reflections, theme and custom colours. Import it later to restore everything.</p>
        <div class="preset-row">
          <button class="primary-button" data-action="export-backup">Export backup</button>
          <button class="soft-button" data-action="import-backup">Import backup</button>
        </div>
        <input id="backupFile" type="file" accept="application/json,.json" data-field="backup-file" hidden />
      </section>
      <section class="glass-card">
        <p class="eyebrow">Presets</p><h2>Colour combinations</h2>
        <div class="preset-row">${presets}</div>
      </section>
      <section class="glass-card" style="grid-column:1/-1">
        <p class="eyebrow">Custom colours</p><h2>Enter any hex colour code</h2>
        <p class="muted">Use six-digit hex like <strong>#347DFF</strong>. Eight-digit alpha hex like <strong>#347DFFCC</strong> also works in modern browsers.</p>
        <div class="color-grid">${colorControls}</div>
        <button class="soft-button full" data-action="reset-colors">Reset colours</button>
      </section>
    </div>`;
  }

  function toggleBlock(id) {
    const completed = getCompleted();
    completed.has(id) ? completed.delete(id) : completed.add(id);
    setCompleted(completed);
    toast(completed.has(id) ? 'Marked complete' : 'Marked incomplete');
    render();
  }
  function selectDateFromKey(key) {
    const [y,m,d] = key.split('-').map(Number);
    state.selectedDate = new Date(y, m - 1, d);
  }
  function exportSummary() {
    const blocks = selectedBlocks();
    const completed = getCompleted();
    const extras = getExtraTasks();
    const extraDone = getExtraDone();
    const lines = [`Weekly Flow — ${formatDate(state.selectedDate)}`, `Progress: ${dayProgress(state.selectedDate).done}/${dayProgress(state.selectedDate).total} complete`, '', 'Schedule'];
    blocks.forEach(b => lines.push(`${completed.has(b.id) ? '✓' : '○'} ${b.start}${b.end ? '–' + b.end : ''} — ${b.title}`));
    if (extras.length) {
      lines.push('', 'Extra tasks');
      extras.forEach(t => lines.push(`${extraDone.has(t.id) ? '✓' : '○'} ${t.title}${t.dueTime ? ' at ' + t.dueTime : ''}`));
    }
    const reflection = getReflection();
    lines.push('', `Mood: ${reflection.mood}/5`, `Energy: ${reflection.energy}/5`, reflection.note ? `Note: ${reflection.note}` : '');
    return lines.join('\n').trim();
  }
  async function copySummary() {
    const text = exportSummary();
    try { await navigator.clipboard.writeText(text); toast('Summary copied'); }
    catch (_) { prompt('Copy your summary:', text); }
  }
  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => els.toast.classList.remove('show'), 1600);
  }
  function openFocus() {
    const block = nextBlock(state.selectedDate, true);
    const p = dayProgress(state.selectedDate);
    if (!block) {
      els.focusContent.innerHTML = `<div class="focus-hero"><div class="focus-icon">✓</div><h2>All done</h2><p class="muted">Every scheduled block for this day is complete.</p></div>`;
    } else {
      els.focusContent.innerHTML = `<div class="focus-hero" style="--cat-color:${cssVarForCategory(block.category)}">
        <div class="focus-icon" style="background:linear-gradient(135deg, var(--cat-color), var(--accent))">${iconForCategory(block.category)}</div>
        <p class="eyebrow">Focus next block</p>
        <h2>${esc(block.title)}</h2>
        <p class="muted">${esc(block.start)}${block.end ? '–' + esc(block.end) : ''} • ${esc(block.category)} • ${durationText(duration(block))}</p>
        <p>${esc(RULES[block.day] || '')}</p>
        <button class="primary-button full" data-action="toggle-block" data-block-id="${block.id}">Mark complete</button>
        <small>${p.percent}% complete for ${formatDate(state.selectedDate, 'short')}</small>
      </div>`;
    }
    if (typeof els.focusDialog.showModal === 'function') els.focusDialog.showModal();
    else els.focusDialog.setAttribute('open', '');
  }

  function handleClick(event) {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'tab') {
      state.tab = button.dataset.tab;
      storage.set('weeklyflow.web.tab', state.tab);
      if (history.replaceState) history.replaceState(null, '', `#${state.tab}`);
      render();
    } else if (action === 'select-date') {
      selectDateFromKey(button.dataset.date);
      render();
    } else if (action === 'select-date-tab') {
      selectDateFromKey(button.dataset.date);
      state.tab = 'today';
      storage.set('weeklyflow.web.tab', state.tab);
      if (history.replaceState) history.replaceState(null, '', '#today');
      render();
    } else if (action === 'go-today') {
      state.weekOffset = 0;
      state.selectedDate = new Date();
      render();
    } else if (action === 'prev-week' || action === 'next-week') {
      state.weekOffset += action === 'next-week' ? 1 : -1;
      state.selectedDate = addDays(state.selectedDate, action === 'next-week' ? 7 : -7);
      render();
    } else if (action === 'toggle-theme') {
      state.theme = state.theme === 'dark' ? 'light' : state.theme === 'light' ? 'system' : 'dark';
      render();
      toast(`Theme: ${state.theme}`);
    } else if (action === 'med-tab') {
      state.medTab = button.dataset.medTab;
      storage.set('weeklyflow.med.tab', state.medTab);
      renderMedInterview();
    } else if (action === 'super-tab') {
      state.superTab = button.dataset.superTab;
      storage.set('weeklyflow.med.superTab', state.superTab);
      renderMedInterview();
    } else if (action === 'toggle-med-check') {
      const checks = getMedChecks();
      checks.has(button.dataset.medId) ? checks.delete(button.dataset.medId) : checks.add(button.dataset.medId);
      setMedChecks(checks);
      renderMedInterview();
    } else if (action === 'toggle-block') {
      toggleBlock(button.dataset.blockId);
    } else if (action === 'open-focus') {
      openFocus();
    } else if (action === 'close-focus') {
      els.focusDialog.close?.();
      els.focusDialog.removeAttribute('open');
    } else if (action === 'add-extra') {
      const title = document.getElementById('extraTitle')?.value || '';
      const category = document.getElementById('extraCategory')?.value || 'Work';
      const dueTime = document.getElementById('extraTime')?.value || '';
      if (!title.trim()) return toast('Enter a task title');
      const tasks = getExtraTasks();
      tasks.push({ id: globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function' ? globalThis.crypto.randomUUID() : String(Date.now()), title: title.trim(), category, dueTime });
      setExtraTasks(tasks);
      toast('Task added');
      render();
    } else if (action === 'toggle-extra') {
      const done = getExtraDone();
      done.has(button.dataset.taskId) ? done.delete(button.dataset.taskId) : done.add(button.dataset.taskId);
      setExtraDone(done);
      render();
    } else if (action === 'delete-extra') {
      setExtraTasks(getExtraTasks().filter(t => t.id !== button.dataset.taskId));
      const done = getExtraDone();
      done.delete(button.dataset.taskId);
      setExtraDone(done);
      render();
    } else if (action === 'set-rating') {
      const reflection = getReflection();
      reflection[button.dataset.kind] = Number(button.dataset.value);
      setReflection(reflection);
      render();
    } else if (action === 'copy-summary') {
      copySummary();
    } else if (action === 'apply-preset') {
      state.colors = { ...state.colors, ...PRESETS[button.dataset.preset] };
      render();
      toast(`${button.dataset.preset} applied`);
    } else if (action === 'reset-colors') {
      state.colors = { ...DEFAULT_COLORS };
      render();
      toast('Colours reset');
    } else if (action === 'choose-wallpaper') {
      document.getElementById('wallpaperFile')?.click();
    } else if (action === 'reset-wallpaper') {
      state.wallpaper = { dataUrl: '', opacity: 0.28, blur: 0, overlay: 0.18 };
      applyWallpaper();
      renderSettings();
      toast('Wallpaper removed');
    } else if (action === 'export-backup') {
      exportBackup();
    } else if (action === 'import-backup') {
      document.getElementById('backupFile')?.click();
    } else if (action === 'install-app') {
      installApp();
    } else if (action === 'check-offline') {
      checkOfflineReadiness();
    } else if (action === 'reset-day') {
      ['completions', 'notes', 'extraTasks', 'extraDone', 'reflection'].forEach(s => storage.remove(`${storageBase()}.${s}`));
      render();
      toast('Day reset');
    } else if (action === 'reset-week') {
      WEEKDAYS.forEach((_, i) => {
        const d = addDays(startOfWeek(new Date()), i);
        ['completions', 'notes', 'extraTasks', 'extraDone', 'reflection'].forEach(s => storage.remove(`${storageBase(d)}.${s}`));
      });
      render();
      toast('Week reset');
    }
  }

  function handleInput(event) {
    const input = event.target;
    const field = input.dataset.field;
    if (!field) return;
    if (field === 'search') { state.search = input.value; renderToday(); }
    if (field === 'category') { state.category = input.value; renderToday(); }
    if (field === 'note') {
      const notes = getNotes();
      notes[input.dataset.blockId] = input.value;
      setNotes(notes);
    }
    if (field === 'reflection-note') {
      const reflection = getReflection();
      reflection.note = input.value;
      setReflection(reflection);
    }
    if (field === 'theme') {
      state.theme = input.value;
      render();
    }
    if (field === 'wallpaper-opacity' || field === 'wallpaper-blur' || field === 'wallpaper-overlay') {
      const key = field.replace('wallpaper-', '');
      state.wallpaper = { ...(state.wallpaper || {}), [key]: Number(input.value) };
      applyWallpaper();
    }
    if (field === 'color') {
      const key = input.dataset.colorKey;
      const value = input.value.trim();
      if (isValidHex(value)) {
        state.colors[key] = normalizedHex(value);
        applyThemeAndColors();
        input.closest('.color-control')?.querySelector('.color-swatch')?.style.setProperty('background', state.colors[key]);
      }
    }
  }

  function handleChange(event) {
    const input = event.target;
    if (input.dataset.field === 'backup-file') {
      importBackupFile(input.files?.[0]);
      input.value = '';
    }
    if (input.dataset.field === 'wallpaper-file') {
      processWallpaperFile(input.files?.[0]);
      input.value = '';
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => null);
    });
  }

  function init() {
    const hashTab = location.hash.replace('#', '');
    if (['today', 'week', 'insights', 'plan', 'med', 'settings'].includes(hashTab)) {
      state.tab = hashTab;
      storage.set('weeklyflow.web.tab', state.tab);
    }
    applyThemeAndColors();
    applyWallpaper();
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      deferredInstallPrompt = event;
      toast('Install option ready');
    });
    window.addEventListener('appinstalled', () => toast('Installed'));
    registerServiceWorker();
    document.addEventListener('click', handleClick);
    document.addEventListener('input', handleInput);
    document.addEventListener('change', handleChange);
    render();
    setInterval(() => {
      if (state.tab === 'today' && isSameDay(state.selectedDate, new Date())) render();
    }, 60_000);
  }

  init();
})();
