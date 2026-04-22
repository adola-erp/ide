import '../styles.css';
import { renderHeader, initTheme, initSidebar } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper animate-fade-in">
            <!-- Mobile Sidebar -->
            <div id="mobile-sidebar" class="mobile-drawer">
                <div class="drawer-content">
                    <div class="drawer-header-internal">
                        <div class="logo-box"><span>L</span></div>
                        <button id="close-sidebar" class="header-icon-btn"><i class="x icon"></i></button>
                    </div>
                    <div class="drawer-links">
                        <a href="/">Explore</a>
                        <a href="/interview.html">Problems</a>
                        <a href="/contest.html">Contest</a>
                        <a href="/store.html">Discuss</a>
                        <div class="drawer-divider"></div>
                        <a href="/premium.html">Premium</a>
                        <a href="/profile.html" class="active">Profile</a>
                        <a href="/settings.html">Settings</a>
                    </div>
                </div>
            </div>
            <div id="sidebar-overlay" class="drawer-overlay"></div>
            ${renderHeader()}
            <div class="page-container">
                <div class="modern-card" style="display: flex; align-items: center; gap: 3rem; padding: 4rem; border: none; background: linear-gradient(135deg, var(--panel-bg) 0%, rgba(255, 161, 22, 0.05) 100%);">
                    <div style="width: 140px; height: 140px; background: var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 4rem; font-weight: 800; color: white; box-shadow: 0 10px 20px rgba(255, 161, 22, 0.2);">JD</div>
                    <div style="flex: 1;">
                        <h1 class="modern-title" style="margin-bottom: 0.5rem; font-size: 2.5rem;">John Doe</h1>
                        <p style="color: var(--secondary-text); font-size: 1.1rem; margin-bottom: 1.5rem;">Full-Stack Engineer • Competitive Programmer</p>
                        <div style="display: flex; gap: 2rem; border-top: 1px solid var(--border-color); paddingTop: 1.5rem;">
                            <div style="text-align: center;"><div style="font-size: 1.5rem; font-weight: 800;">124</div><div style="font-size: 0.8rem; color: var(--secondary-text); text-transform: uppercase;">Solved</div></div>
                            <div style="text-align: center;"><div style="font-size: 1.5rem; font-weight: 800;">1,420</div><div style="font-size: 0.8rem; color: var(--secondary-text); text-transform: uppercase;">Rank</div></div>
                            <div style="text-align: center;"><div style="font-size: 1.5rem; font-weight: 800;">2,450</div><div style="font-size: 0.8rem; color: var(--secondary-text); text-transform: uppercase;">Points</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile Footer -->
            <footer class="mobile-footer mobile-only-flex">
                <a href="/"><i class="compass icon"></i><span>Explore</span></a>
                <a href="/interview.html"><i class="code branch icon"></i><span>Code</span></a>
                <a href="/store.html"><i class="shopping bag icon"></i><span>Store</span></a>
                <a href="/profile.html" class="active"><i class="user circle icon"></i><span>Profile</span></a>
            </footer>
        </div>
    `;
    initTheme();
    initSidebar();
}
