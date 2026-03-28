/**
 * LexiPath — i18n (internationalisation)
 *
 * How it works:
 *   1. Every translatable element in index.html has a `data-i18n="key"` attribute.
 *      Elements that contain HTML (like <code> tags) use `data-i18n-html="key"` instead.
 *   2. `applyLanguage(lang)` loops through all those elements and swaps the text.
 *   3. The chosen language is saved to localStorage so it persists across visits.
 *
 * Supported languages: en, pt-BR, es, de, it, fr
 */

const TRANSLATIONS = {

  /* ─── ENGLISH ──────────────────────────────────────────── */
  en: {
    'nav.features':   'Features',
    'nav.download':   'Download',
    'nav.contribute': 'Contribute',
    'nav.issues':     'Issues',
    'nav.cta':        'Download',

    'hero.badge':        'open source\u00a0·\u00a0free forever',
    'hero.heading1':     'Learn from YouTube,',
    'hero.heading2':     'even offline.',
    'hero.tagline':      'LexiPath turns your YouTube playlists into structured learning paths — download any video for offline playback, track your progress, and study without an internet connection. No account. No subscription.',
    'hero.btn.download': '⬇ Download for free',
    'hero.btn.github':   'View on GitHub',
    'hero.version':      'Current version:',
    'hero.platforms':    'Windows, macOS & Linux',

    'features.label':              'What you get',
    'features.heading':            "Everything you need. Nothing you don't.",
    'features.desc':               'Built for people who want to learn without distractions, paywalls, or an internet connection.',
    'features.offline.title':      'Offline video playback',
    'features.offline.desc':       'Download any video in your learning path and watch it without internet. Files are stored in your OS user folder and survive app updates.',
    'features.paths.title':        'Structured learning paths',
    'features.paths.desc':         'Organise YouTube videos into named paths with custom ordering. Import from a YouTube playlist URL or add videos one by one.',
    'features.languages.title':    '6 languages',
    'features.languages.desc':     'The full UI is available in English, Brazilian Portuguese, Spanish, German, Italian, and French — pick yours in the top-right corner.',
    'features.updates.title':      'Auto-update',
    'features.updates.desc':       'LexiPath silently checks for new versions on launch. On Windows and Linux it downloads and applies updates in the background. macOS links you to the latest release page.',
    'features.crossplatform.title':'Truly cross-platform',
    'features.crossplatform.desc': 'Native installers for Windows (.exe), macOS (.dmg), and Linux (.AppImage). No virtualisation, no Docker, no browser required.',
    'features.noaccount.title':    'No account needed',
    'features.noaccount.desc':     'LexiPath creates a local user on first launch. No email, no password, no sign-up. Your data never leaves your machine.',

    'download.label':           'Get LexiPath',
    'download.heading':         'Download for your platform',
    'download.desc':            'Free and open-source. Always the latest version.',
    'download.windows.filetype':'.exe installer',
    'download.windows.btn':     'Download for Windows',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Download for macOS',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Download for Linux',
    'download.note':            'All releases are available on the <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">GitHub Releases page</a>. Checksums and release notes included.',

    'contributors.label':        'Open source',
    'contributors.heading':      'Want to contribute?',
    'contributors.desc':         'LexiPath is built with Django + React + Electron. Set up your dev environment in 5 steps and start shipping.',
    'contributors.step1.title':  'Clone the repo',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — the main branch is always stable.',
    'contributors.step2.title':  'Install backend dependencies',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ required. A virtual environment is recommended.',
    'contributors.step3.title':  'Install frontend dependencies',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ required.',
    'contributors.step4.title':  'Run both servers',
    'contributors.step4.desc':   'Open two terminals: run <code>python run_server.py</code> in <code>backend/</code> and <code>npm run dev</code> in <code>frontend/</code>.',
    'contributors.step5.title':  'Open a pull request',
    'contributors.step5.desc':   'Fork the repo, create a branch, make your change, and open a PR. All PRs run automated builds on Windows, macOS, and Linux.',
    'contributors.btn.repo':     'Browse the repo',
    'contributors.btn.prs':      'Open PRs',

    'issues.label':        'Feedback',
    'issues.heading':      'Found a bug? Have an idea?',
    'issues.desc':         'All issue tracking happens on GitHub. Pick the right template and submit — we read everything.',
    'issues.bug.title':    'Report a bug',
    'issues.bug.desc':     'Something not working as expected? Open a bug report — include your OS, app version, and steps to reproduce.',
    'issues.bug.btn':      'Report a bug',
    'issues.feature.title':'Suggest a feature',
    'issues.feature.desc': "Have an idea that would make LexiPath better? Describe the problem you're solving and your proposed solution.",
    'issues.feature.btn':  'Suggest a feature',

    'footer.version': 'Version',
    'footer.license': 'MIT License',
  },

  /* ─── BRAZILIAN PORTUGUESE ─────────────────────────────── */
  'pt-BR': {
    'nav.features':   'Funcionalidades',
    'nav.download':   'Baixar',
    'nav.contribute': 'Contribuir',
    'nav.issues':     'Problemas',
    'nav.cta':        'Baixar',

    'hero.badge':        'código aberto\u00a0·\u00a0gratuito para sempre',
    'hero.heading1':     'Aprenda com o YouTube,',
    'hero.heading2':     'mesmo sem internet.',
    'hero.tagline':      'O LexiPath transforma suas playlists do YouTube em trilhas de aprendizado estruturadas — baixe vídeos para assistir offline, acompanhe seu progresso e estude sem conexão. Sem conta. Sem assinatura.',
    'hero.btn.download': '⬇ Baixar gratuitamente',
    'hero.btn.github':   'Ver no GitHub',
    'hero.version':      'Versão atual:',
    'hero.platforms':    'Windows, macOS e Linux',

    'features.label':              'O que você ganha',
    'features.heading':            'Tudo que você precisa. Nada além disso.',
    'features.desc':               'Feito para quem quer aprender sem distrações, paywalls ou conexão com a internet.',
    'features.offline.title':      'Reprodução offline',
    'features.offline.desc':       'Baixe qualquer vídeo da sua trilha e assista sem internet. Os arquivos ficam na pasta de dados do usuário e sobrevivem a atualizações do app.',
    'features.paths.title':        'Trilhas de aprendizado',
    'features.paths.desc':         'Organize vídeos do YouTube em trilhas nomeadas com ordem personalizada. Importe de uma URL de playlist ou adicione vídeos um a um.',
    'features.languages.title':    '6 idiomas',
    'features.languages.desc':     'A interface completa está disponível em inglês, português brasileiro, espanhol, alemão, italiano e francês — escolha o seu no canto superior direito.',
    'features.updates.title':      'Atualização automática',
    'features.updates.desc':       'O LexiPath verifica novas versões ao iniciar. No Windows e Linux, baixa e aplica atualizações em segundo plano. No macOS, exibe um link para a página de releases.',
    'features.crossplatform.title':'Verdadeiramente multiplataforma',
    'features.crossplatform.desc': 'Instaladores nativos para Windows (.exe), macOS (.dmg) e Linux (.AppImage). Sem virtualização, Docker ou navegador necessário.',
    'features.noaccount.title':    'Sem conta necessária',
    'features.noaccount.desc':     'O LexiPath cria um usuário local na primeira inicialização. Sem e-mail, senha ou cadastro. Seus dados nunca saem do seu computador.',

    'download.label':           'Obtenha o LexiPath',
    'download.heading':         'Baixe para sua plataforma',
    'download.desc':            'Gratuito e de código aberto. Sempre a versão mais recente.',
    'download.windows.filetype':'instalador .exe',
    'download.windows.btn':     'Baixar para Windows',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Baixar para macOS',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Baixar para Linux',
    'download.note':            'Todas as versões estão disponíveis na <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">página de Releases do GitHub</a>. Checksums e notas de versão incluídos.',

    'contributors.label':        'Código aberto',
    'contributors.heading':      'Quer contribuir?',
    'contributors.desc':         'O LexiPath é construído com Django + React + Electron. Configure seu ambiente em 5 passos e comece a contribuir.',
    'contributors.step1.title':  'Clone o repositório',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — a branch principal está sempre estável.',
    'contributors.step2.title':  'Instale as dependências do backend',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ necessário. Recomenda-se um ambiente virtual.',
    'contributors.step3.title':  'Instale as dependências do frontend',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ necessário.',
    'contributors.step4.title':  'Execute os dois servidores',
    'contributors.step4.desc':   'Abra dois terminais: execute <code>python run_server.py</code> em <code>backend/</code> e <code>npm run dev</code> em <code>frontend/</code>.',
    'contributors.step5.title':  'Abra um pull request',
    'contributors.step5.desc':   'Faça um fork, crie uma branch, faça sua alteração e abra um PR. Todos os PRs executam builds automatizados no Windows, macOS e Linux.',
    'contributors.btn.repo':     'Ver repositório',
    'contributors.btn.prs':      'PRs abertos',

    'issues.label':        'Feedback',
    'issues.heading':      'Encontrou um bug? Tem uma ideia?',
    'issues.desc':         'Todo o rastreamento de problemas acontece no GitHub. Escolha o template certo e envie — lemos tudo.',
    'issues.bug.title':    'Reportar um bug',
    'issues.bug.desc':     'Algo não funcionando como esperado? Abra um relatório de bug — inclua seu SO, versão do app e passos para reproduzir.',
    'issues.bug.btn':      'Reportar um bug',
    'issues.feature.title':'Sugerir uma funcionalidade',
    'issues.feature.desc': 'Tem uma ideia que tornaria o LexiPath melhor? Descreva o problema que está resolvendo e sua solução proposta.',
    'issues.feature.btn':  'Sugerir funcionalidade',

    'footer.version': 'Versão',
    'footer.license': 'Licença MIT',
  },

  /* ─── SPANISH ───────────────────────────────────────────── */
  es: {
    'nav.features':   'Funcionalidades',
    'nav.download':   'Descargar',
    'nav.contribute': 'Contribuir',
    'nav.issues':     'Problemas',
    'nav.cta':        'Descargar',

    'hero.badge':        'código abierto\u00a0·\u00a0gratis para siempre',
    'hero.heading1':     'Aprende en YouTube,',
    'hero.heading2':     'incluso sin internet.',
    'hero.tagline':      'LexiPath convierte tus listas de YouTube en rutas de aprendizaje estructuradas — descarga vídeos para reproducción sin conexión, haz seguimiento de tu progreso y estudia sin internet. Sin cuenta. Sin suscripción.',
    'hero.btn.download': '⬇ Descargar gratis',
    'hero.btn.github':   'Ver en GitHub',
    'hero.version':      'Versión actual:',
    'hero.platforms':    'Windows, macOS y Linux',

    'features.label':              'Qué obtienes',
    'features.heading':            'Todo lo que necesitas. Nada más.',
    'features.desc':               'Diseñado para quienes quieren aprender sin distracciones, muros de pago ni conexión a internet.',
    'features.offline.title':      'Reproducción sin conexión',
    'features.offline.desc':       'Descarga cualquier vídeo de tu ruta y míralo sin internet. Los archivos se almacenan en la carpeta de usuario del SO y sobreviven a las actualizaciones.',
    'features.paths.title':        'Rutas de aprendizaje estructuradas',
    'features.paths.desc':         'Organiza vídeos de YouTube en rutas con nombres y orden personalizado. Importa desde una URL de lista de reproducción o añade vídeos uno a uno.',
    'features.languages.title':    '6 idiomas',
    'features.languages.desc':     'La interfaz completa está disponible en inglés, portugués brasileño, español, alemán, italiano y francés — elige el tuyo en la esquina superior derecha.',
    'features.updates.title':      'Actualización automática',
    'features.updates.desc':       'LexiPath busca nuevas versiones al iniciar. En Windows y Linux descarga y aplica actualizaciones en segundo plano. En macOS muestra un enlace a la página de releases.',
    'features.crossplatform.title':'Verdaderamente multiplataforma',
    'features.crossplatform.desc': 'Instaladores nativos para Windows (.exe), macOS (.dmg) y Linux (.AppImage). Sin virtualización, Docker ni navegador.',
    'features.noaccount.title':    'Sin cuenta necesaria',
    'features.noaccount.desc':     'LexiPath crea un usuario local al primer inicio. Sin correo, sin contraseña, sin registro. Tus datos nunca salen de tu máquina.',

    'download.label':           'Obtén LexiPath',
    'download.heading':         'Descarga para tu plataforma',
    'download.desc':            'Gratis y de código abierto. Siempre la última versión.',
    'download.windows.filetype':'instalador .exe',
    'download.windows.btn':     'Descargar para Windows',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Descargar para macOS',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Descargar para Linux',
    'download.note':            'Todas las versiones están disponibles en la <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">página de Releases de GitHub</a>. Checksums y notas de versión incluidos.',

    'contributors.label':        'Código abierto',
    'contributors.heading':      '¿Quieres contribuir?',
    'contributors.desc':         'LexiPath está construido con Django + React + Electron. Configura tu entorno en 5 pasos y empieza a contribuir.',
    'contributors.step1.title':  'Clona el repositorio',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — la rama principal está siempre estable.',
    'contributors.step2.title':  'Instala las dependencias del backend',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ requerido. Se recomienda un entorno virtual.',
    'contributors.step3.title':  'Instala las dependencias del frontend',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ requerido.',
    'contributors.step4.title':  'Ejecuta ambos servidores',
    'contributors.step4.desc':   'Abre dos terminales: ejecuta <code>python run_server.py</code> en <code>backend/</code> y <code>npm run dev</code> en <code>frontend/</code>.',
    'contributors.step5.title':  'Abre un pull request',
    'contributors.step5.desc':   'Haz un fork, crea una rama, realiza tu cambio y abre un PR. Todos los PRs ejecutan builds automatizados en Windows, macOS y Linux.',
    'contributors.btn.repo':     'Ver repositorio',
    'contributors.btn.prs':      'PRs abiertos',

    'issues.label':        'Feedback',
    'issues.heading':      '¿Encontraste un error? ¿Tienes una idea?',
    'issues.desc':         'Todo el seguimiento de problemas ocurre en GitHub. Elige la plantilla correcta y envíala — leemos todo.',
    'issues.bug.title':    'Reportar un error',
    'issues.bug.desc':     '¿Algo no funciona como se esperaba? Abre un reporte de error — incluye tu SO, versión del app y pasos para reproducir.',
    'issues.bug.btn':      'Reportar un error',
    'issues.feature.title':'Sugerir una función',
    'issues.feature.desc': '¿Tienes una idea que haría LexiPath mejor? Describe el problema que estás resolviendo y tu solución propuesta.',
    'issues.feature.btn':  'Sugerir una función',

    'footer.version': 'Versión',
    'footer.license': 'Licencia MIT',
  },

  /* ─── GERMAN ────────────────────────────────────────────── */
  de: {
    'nav.features':   'Funktionen',
    'nav.download':   'Herunterladen',
    'nav.contribute': 'Beitragen',
    'nav.issues':     'Fehler melden',
    'nav.cta':        'Herunterladen',

    'hero.badge':        'Open Source\u00a0·\u00a0für immer kostenlos',
    'hero.heading1':     'Lerne mit YouTube,',
    'hero.heading2':     'auch offline.',
    'hero.tagline':      'LexiPath verwandelt deine YouTube-Playlists in strukturierte Lernpfade — lade Videos für die Offline-Wiedergabe herunter, verfolge deinen Fortschritt und lerne ohne Internetverbindung. Kein Konto. Kein Abo.',
    'hero.btn.download': '⬇ Kostenlos herunterladen',
    'hero.btn.github':   'Auf GitHub ansehen',
    'hero.version':      'Aktuelle Version:',
    'hero.platforms':    'Windows, macOS und Linux',

    'features.label':              'Was du bekommst',
    'features.heading':            'Alles, was du brauchst. Nichts, was du nicht brauchst.',
    'features.desc':               'Für alle, die ohne Ablenkungen, Paywalls oder Internetverbindung lernen möchten.',
    'features.offline.title':      'Offline-Videowiedergabe',
    'features.offline.desc':       'Lade jedes Video in deinem Lernpfad herunter und schaue es ohne Internet. Dateien werden im Benutzerordner gespeichert und überleben App-Updates.',
    'features.paths.title':        'Strukturierte Lernpfade',
    'features.paths.desc':         'Organisiere YouTube-Videos in benannten Pfaden mit benutzerdefinierter Reihenfolge. Importiere von einer Playlist-URL oder füge Videos einzeln hinzu.',
    'features.languages.title':    '6 Sprachen',
    'features.languages.desc':     'Die vollständige Benutzeroberfläche ist auf Englisch, Brasilianischem Portugiesisch, Spanisch, Deutsch, Italienisch und Französisch verfügbar.',
    'features.updates.title':      'Automatische Updates',
    'features.updates.desc':       'LexiPath prüft beim Start still auf neue Versionen. Auf Windows und Linux werden Updates im Hintergrund heruntergeladen. macOS zeigt einen Link zur Release-Seite.',
    'features.crossplatform.title':'Wirklich plattformübergreifend',
    'features.crossplatform.desc': 'Native Installer für Windows (.exe), macOS (.dmg) und Linux (.AppImage). Keine Virtualisierung, kein Docker, kein Browser erforderlich.',
    'features.noaccount.title':    'Kein Konto erforderlich',
    'features.noaccount.desc':     'LexiPath erstellt beim ersten Start einen lokalen Benutzer. Keine E-Mail, kein Passwort, keine Registrierung. Deine Daten verlassen deinen Computer nie.',

    'download.label':           'LexiPath herunterladen',
    'download.heading':         'Für deine Plattform herunterladen',
    'download.desc':            'Kostenlos und Open Source. Immer die neueste Version.',
    'download.windows.filetype':'.exe-Installer',
    'download.windows.btn':     'Für Windows herunterladen',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Für macOS herunterladen',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Für Linux herunterladen',
    'download.note':            'Alle Versionen sind auf der <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">GitHub-Releases-Seite</a> verfügbar. Checksums und Release-Notes enthalten.',

    'contributors.label':        'Open Source',
    'contributors.heading':      'Möchtest du beitragen?',
    'contributors.desc':         'LexiPath ist mit Django + React + Electron gebaut. Richte deine Entwicklungsumgebung in 5 Schritten ein und fang an.',
    'contributors.step1.title':  'Repository klonen',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — der Hauptbranch ist immer stabil.',
    'contributors.step2.title':  'Backend-Abhängigkeiten installieren',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ erforderlich. Eine virtuelle Umgebung wird empfohlen.',
    'contributors.step3.title':  'Frontend-Abhängigkeiten installieren',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ erforderlich.',
    'contributors.step4.title':  'Beide Server starten',
    'contributors.step4.desc':   'Öffne zwei Terminals: führe <code>python run_server.py</code> in <code>backend/</code> aus und <code>npm run dev</code> in <code>frontend/</code>.',
    'contributors.step5.title':  'Pull Request öffnen',
    'contributors.step5.desc':   'Forke das Repo, erstelle einen Branch, mache deine Änderung und öffne einen PR. Alle PRs führen automatisierte Builds auf Windows, macOS und Linux durch.',
    'contributors.btn.repo':     'Repository ansehen',
    'contributors.btn.prs':      'Offene PRs',

    'issues.label':        'Feedback',
    'issues.heading':      'Einen Fehler gefunden? Eine Idee?',
    'issues.desc':         'Das gesamte Issue-Tracking findet auf GitHub statt. Wähle die richtige Vorlage und sende sie ab — wir lesen alles.',
    'issues.bug.title':    'Fehler melden',
    'issues.bug.desc':     'Funktioniert etwas nicht wie erwartet? Öffne einen Bug-Report — gib dein OS, die App-Version und Schritte zur Reproduktion an.',
    'issues.bug.btn':      'Fehler melden',
    'issues.feature.title':'Funktion vorschlagen',
    'issues.feature.desc': 'Hast du eine Idee, die LexiPath besser machen würde? Beschreibe das Problem und deine vorgeschlagene Lösung.',
    'issues.feature.btn':  'Funktion vorschlagen',

    'footer.version': 'Version',
    'footer.license': 'MIT-Lizenz',
  },

  /* ─── ITALIAN ───────────────────────────────────────────── */
  it: {
    'nav.features':   'Funzionalità',
    'nav.download':   'Scarica',
    'nav.contribute': 'Contribuisci',
    'nav.issues':     'Segnalazioni',
    'nav.cta':        'Scarica',

    'hero.badge':        'open source\u00a0·\u00a0gratuito per sempre',
    'hero.heading1':     'Impara da YouTube,',
    'hero.heading2':     'anche offline.',
    'hero.tagline':      'LexiPath trasforma le tue playlist YouTube in percorsi di apprendimento strutturati — scarica i video per la riproduzione offline, monitora i tuoi progressi e studia senza connessione. Nessun account. Nessun abbonamento.',
    'hero.btn.download': '⬇ Scarica gratuitamente',
    'hero.btn.github':   'Vedi su GitHub',
    'hero.version':      'Versione attuale:',
    'hero.platforms':    'Windows, macOS e Linux',

    'features.label':              'Cosa ottieni',
    'features.heading':            'Tutto ciò di cui hai bisogno. Niente di più.',
    'features.desc':               'Pensato per chi vuole imparare senza distrazioni, paywall o connessione a internet.',
    'features.offline.title':      'Riproduzione offline',
    'features.offline.desc':       'Scarica qualsiasi video del tuo percorso e guardalo senza internet. I file vengono salvati nella cartella utente del SO e sopravvivono agli aggiornamenti.',
    'features.paths.title':        'Percorsi di apprendimento strutturati',
    'features.paths.desc':         'Organizza i video YouTube in percorsi con nome e ordine personalizzato. Importa da un URL di playlist o aggiungi video uno per uno.',
    'features.languages.title':    '6 lingue',
    'features.languages.desc':     "L'interfaccia completa è disponibile in inglese, portoghese brasiliano, spagnolo, tedesco, italiano e francese.",
    'features.updates.title':      'Aggiornamento automatico',
    'features.updates.desc':       "LexiPath controlla silenziosamente nuove versioni all'avvio. Su Windows e Linux scarica e applica gli aggiornamenti in background. Su macOS mostra un link alla pagina dei release.",
    'features.crossplatform.title':'Veramente multipiattaforma',
    'features.crossplatform.desc': 'Installer nativi per Windows (.exe), macOS (.dmg) e Linux (.AppImage). Nessuna virtualizzazione, Docker o browser richiesto.',
    'features.noaccount.title':    'Nessun account necessario',
    'features.noaccount.desc':     'LexiPath crea un utente locale al primo avvio. Nessuna email, password o registrazione. I tuoi dati non lasciano mai il tuo computer.',

    'download.label':           'Scarica LexiPath',
    'download.heading':         'Scarica per la tua piattaforma',
    'download.desc':            "Gratuito e open source. Sempre l'ultima versione.",
    'download.windows.filetype':'installer .exe',
    'download.windows.btn':     'Scarica per Windows',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Scarica per macOS',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Scarica per Linux',
    'download.note':            'Tutte le versioni sono disponibili nella <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">pagina Releases di GitHub</a>. Checksum e note di rilascio inclusi.',

    'contributors.label':        'Open source',
    'contributors.heading':      'Vuoi contribuire?',
    'contributors.desc':         'LexiPath è costruito con Django + React + Electron. Configura il tuo ambiente in 5 passi e inizia a contribuire.',
    'contributors.step1.title':  'Clona il repository',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — il branch principale è sempre stabile.',
    'contributors.step2.title':  'Installa le dipendenze del backend',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ richiesto. Si consiglia un ambiente virtuale.',
    'contributors.step3.title':  'Installa le dipendenze del frontend',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ richiesto.',
    'contributors.step4.title':  'Avvia entrambi i server',
    'contributors.step4.desc':   'Apri due terminali: esegui <code>python run_server.py</code> in <code>backend/</code> e <code>npm run dev</code> in <code>frontend/</code>.',
    'contributors.step5.title':  'Apri una pull request',
    'contributors.step5.desc':   'Fai un fork del repo, crea un branch, effettua la modifica e apri una PR. Tutte le PR eseguono build automatizzati su Windows, macOS e Linux.',
    'contributors.btn.repo':     'Sfoglia il repository',
    'contributors.btn.prs':      'PR aperte',

    'issues.label':        'Feedback',
    'issues.heading':      "Hai trovato un bug? Hai un'idea?",
    'issues.desc':         'Tutto il tracciamento dei problemi avviene su GitHub. Scegli il template giusto e invia — leggiamo tutto.',
    'issues.bug.title':    'Segnala un bug',
    'issues.bug.desc':     "Qualcosa non funziona come previsto? Apri un bug report — includi il tuo OS, la versione dell'app e i passaggi per riprodurre il problema.",
    'issues.bug.btn':      'Segnala un bug',
    'issues.feature.title':'Suggerisci una funzionalità',
    'issues.feature.desc': "Hai un'idea che renderebbe LexiPath migliore? Descrivi il problema che stai risolvendo e la tua soluzione proposta.",
    'issues.feature.btn':  'Suggerisci una funzionalità',

    'footer.version': 'Versione',
    'footer.license': 'Licenza MIT',
  },

  /* ─── FRENCH ────────────────────────────────────────────── */
  fr: {
    'nav.features':   'Fonctionnalités',
    'nav.download':   'Télécharger',
    'nav.contribute': 'Contribuer',
    'nav.issues':     'Signaler',
    'nav.cta':        'Télécharger',

    'hero.badge':        'open source\u00a0·\u00a0gratuit pour toujours',
    'hero.heading1':     'Apprends depuis YouTube,',
    'hero.heading2':     'même hors ligne.',
    'hero.tagline':      "LexiPath transforme tes playlists YouTube en parcours d'apprentissage structurés — télécharge des vidéos pour une lecture hors ligne, suis tes progrès et étudie sans connexion internet. Sans compte. Sans abonnement.",
    'hero.btn.download': '⬇ Télécharger gratuitement',
    'hero.btn.github':   'Voir sur GitHub',
    'hero.version':      'Version actuelle\u00a0:',
    'hero.platforms':    'Windows, macOS et Linux',

    'features.label':              'Ce que tu obtiens',
    'features.heading':            'Tout ce dont tu as besoin. Rien de plus.',
    'features.desc':               "Conçu pour ceux qui veulent apprendre sans distractions, paywalls ni connexion internet.",
    'features.offline.title':      'Lecture vidéo hors ligne',
    'features.offline.desc':       "Télécharge n'importe quelle vidéo de ton parcours et regarde-la sans internet. Les fichiers sont stockés dans le dossier utilisateur du système et survivent aux mises à jour.",
    'features.paths.title':        "Parcours d'apprentissage structurés",
    'features.paths.desc':         "Organise des vidéos YouTube en parcours nommés avec un ordre personnalisé. Importe depuis une URL de playlist ou ajoute des vidéos une par une.",
    'features.languages.title':    '6 langues',
    'features.languages.desc':     "L'interface complète est disponible en anglais, portugais brésilien, espagnol, allemand, italien et français.",
    'features.updates.title':      'Mise à jour automatique',
    'features.updates.desc':       'LexiPath vérifie silencieusement les nouvelles versions au démarrage. Sur Windows et Linux, les mises à jour sont téléchargées et appliquées en arrière-plan. Sur macOS, un lien vers la page des releases est affiché.',
    'features.crossplatform.title':'Vraiment multiplateforme',
    'features.crossplatform.desc': 'Installateurs natifs pour Windows (.exe), macOS (.dmg) et Linux (.AppImage). Aucune virtualisation, Docker ou navigateur requis.',
    'features.noaccount.title':    'Aucun compte nécessaire',
    'features.noaccount.desc':     "LexiPath crée un utilisateur local au premier lancement. Aucun e-mail, mot de passe ou inscription. Tes données ne quittent jamais ton ordinateur.",

    'download.label':           'Obtenir LexiPath',
    'download.heading':         'Télécharger pour ta plateforme',
    'download.desc':            'Gratuit et open source. Toujours la dernière version.',
    'download.windows.filetype':'installateur .exe',
    'download.windows.btn':     'Télécharger pour Windows',
    'download.mac.filetype':    '.dmg (Apple Silicon)',
    'download.mac.btn':         'Télécharger pour macOS',
    'download.linux.filetype':  '.AppImage',
    'download.linux.btn':       'Télécharger pour Linux',
    'download.note':            'Toutes les versions sont disponibles sur la <a href="https://github.com/GRParasky/lexi-path-desktop/releases" target="_blank" rel="noopener noreferrer">page Releases de GitHub</a>. Checksums et notes de version inclus.',

    'contributors.label':        'Open source',
    'contributors.heading':      'Tu veux contribuer\u00a0?',
    'contributors.desc':         'LexiPath est construit avec Django + React + Electron. Configure ton environnement en 5 étapes et commence à contribuer.',
    'contributors.step1.title':  'Cloner le dépôt',
    'contributors.step1.desc':   '<code>git clone https://github.com/GRParasky/lexi-path-desktop.git</code> — la branche principale est toujours stable.',
    'contributors.step2.title':  'Installer les dépendances backend',
    'contributors.step2.desc':   '<code>cd backend && pip install -r requirements.txt</code> — Python 3.11+ requis. Un environnement virtuel est recommandé.',
    'contributors.step3.title':  'Installer les dépendances frontend',
    'contributors.step3.desc':   '<code>cd frontend && npm install</code> — Node 20+ requis.',
    'contributors.step4.title':  'Lancer les deux serveurs',
    'contributors.step4.desc':   'Ouvre deux terminaux\u00a0: exécute <code>python run_server.py</code> dans <code>backend/</code> et <code>npm run dev</code> dans <code>frontend/</code>.',
    'contributors.step5.title':  'Ouvrir une pull request',
    'contributors.step5.desc':   'Fais un fork du dépôt, crée une branche, effectue ta modification et ouvre une PR. Toutes les PRs exécutent des builds automatisés sur Windows, macOS et Linux.',
    'contributors.btn.repo':     'Parcourir le dépôt',
    'contributors.btn.prs':      'PRs ouvertes',

    'issues.label':        'Feedback',
    'issues.heading':      'Tu as trouvé un bug\u00a0? Tu as une idée\u00a0?',
    'issues.desc':         'Tout le suivi des problèmes se fait sur GitHub. Choisis le bon modèle et envoie — nous lisons tout.',
    'issues.bug.title':    'Signaler un bug',
    'issues.bug.desc':     "Quelque chose ne fonctionne pas comme prévu\u00a0? Ouvre un rapport de bug — inclus ton OS, la version de l'app et les étapes pour reproduire.",
    'issues.bug.btn':      'Signaler un bug',
    'issues.feature.title':'Suggérer une fonctionnalité',
    'issues.feature.desc': 'Tu as une idée qui améliorerait LexiPath\u00a0? Décris le problème que tu résous et ta solution proposée.',
    'issues.feature.btn':  'Suggérer une fonctionnalité',

    'footer.version': 'Version',
    'footer.license': 'Licence MIT',
  },
};

/* -----------------------------------------------------------
   APPLY LANGUAGE
   Finds every [data-i18n] and [data-i18n-html] element and
   updates its content from the translations object.
   ----------------------------------------------------------- */
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Update <html lang="..."> for screen readers and SEO
  document.documentElement.lang = lang;

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Nodes that contain HTML (e.g. <code> inside a <p>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Sync the selector value (in case called programmatically)
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;

  localStorage.setItem('lexi-lang', lang);
}

/* -----------------------------------------------------------
   INIT — apply saved language on load, wire up the selector
   ----------------------------------------------------------- */
const savedLang = localStorage.getItem('lexi-lang') || 'en';
applyLanguage(savedLang);

document.getElementById('lang-select')?.addEventListener('change', e => {
  applyLanguage(e.target.value);
});
