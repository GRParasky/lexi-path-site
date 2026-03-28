/**
 * LexiPath — Landing Page JavaScript
 *
 * Responsibilities:
 *   1. Fetch the latest release version from GitHub API
 *   2. Build platform-specific download URLs (they include the version number)
 *   3. Mobile navigation hamburger toggle
 *
 * No frameworks. No build step. Pure vanilla JS.
 * Loaded with `defer` so it never blocks page rendering.
 */

/* -----------------------------------------------------------
   CONSTANTS
   ----------------------------------------------------------- */
const GITHUB_API = 'https://api.github.com/repos/GRParasky/lexi-path-desktop/releases/latest';

/**
 * Build the download URL for each platform.
 * GitHub release asset filenames include the version number,
 * so we must fetch it dynamically from the API.
 *
 * @param {string} version - e.g. "1.0.3" (no "v" prefix)
 * @returns {{ windows: string, mac: string, linux: string }}
 */
function buildDownloadUrls(version) {
  const base = 'https://github.com/GRParasky/lexi-path-desktop/releases/latest/download';
  return {
    windows: `${base}/LexiPath-Setup-${version}.exe`,
    mac:     `${base}/LexiPath-${version}-arm64.dmg`,
    linux:   `${base}/LexiPath-${version}.AppImage`,
  };
}

/* -----------------------------------------------------------
   FETCH LATEST RELEASE
   ----------------------------------------------------------- */
async function initDownloadSection() {
  const versionBadge   = document.getElementById('version-badge');
  const footerVersion  = document.getElementById('footer-version');
  const dlWindows      = document.getElementById('dl-windows');
  const dlMac          = document.getElementById('dl-mac');
  const dlLinux        = document.getElementById('dl-linux');

  try {
    const response = await fetch(GITHUB_API);

    // GitHub API returns 403 if rate limited. Surface a friendly fallback.
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

    const data = await response.json();

    // tag_name is "v1.0.3" — strip the leading "v" for the filename
    const tagName = data.tag_name;                    // "v1.0.3"
    const version = tagName.replace(/^v/, '');        // "1.0.3"

    const urls = buildDownloadUrls(version);

    // Update version badges
    if (versionBadge)  versionBadge.textContent  = tagName;
    if (footerVersion) footerVersion.textContent  = tagName;

    // Update download button hrefs
    if (dlWindows) dlWindows.href = urls.windows;
    if (dlMac)     dlMac.href     = urls.mac;
    if (dlLinux)   dlLinux.href   = urls.linux;

  } catch (err) {
    // Non-fatal: the buttons still render; they just fall back to the
    // releases page instead of a direct asset download.
    console.warn('Could not fetch latest release from GitHub API:', err.message);

    const releasesPage = 'https://github.com/GRParasky/lexi-path-desktop/releases/latest';

    if (dlWindows) dlWindows.href = releasesPage;
    if (dlMac)     dlMac.href     = releasesPage;
    if (dlLinux)   dlLinux.href   = releasesPage;

    if (versionBadge)  versionBadge.textContent  = 'latest';
    if (footerVersion) footerVersion.textContent  = 'latest';
  }
}

/* -----------------------------------------------------------
   MOBILE NAVIGATION TOGGLE
   ----------------------------------------------------------- */
function initMobileNav() {
  const toggle  = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-links');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');

    // Update aria-expanded for screen readers
    toggle.setAttribute('aria-expanded', String(isOpen));

    // Swap hamburger icon ↔ close icon
    toggle.querySelector('.icon-menu').hidden  = isOpen;
    toggle.querySelector('.icon-close').hidden = !isOpen;
  });

  // Close mobile nav when a link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.icon-menu').hidden  = false;
      toggle.querySelector('.icon-close').hidden = true;
    });
  });
}

/* -----------------------------------------------------------
   ENTRY POINT
   Runs after DOM is ready (script has `defer` attribute).
   ----------------------------------------------------------- */
initDownloadSection();
initMobileNav();
