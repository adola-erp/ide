import '../styles.css';
import { MOCK_PROBLEMS } from '../../data/mockProblems';

const appElement = document.getElementById('app');

function renderHeader() {
    return `
        <header class="procode-main-header">
            <div class="header-left">
                <button id="open-sidebar" class="header-icon-btn mobile-only-inline"><i class="bars icon"></i></button>
                <div class="logo-box"><span>L</span></div>
                <div class="divider desktop-only-flex"></div>
                <a href="/" class="icon-link desktop-only-flex" title="Home"><i class="home icon" style="font-size: 1.1rem;"></i></a>

                <div class="nav-links-modern desktop-only-flex">
                    <a href="/" class="active">Explore</a>
                    <a href="/interview.html">Problems</a>
                    <a href="/contest.html">Contest</a>
                    <a href="/store.html">Discuss</a>
                </div>
            </div>

            <div class="header-right">
                 <button class="header-icon-btn" id="home-theme-toggle">
                    <i class="sun icon"></i>
                 </button>
                 <button class="header-icon-btn desktop-only-flex" title="Notifications">
                    <i class="bell icon"></i>
                 </button>
                 <div class="streak-info desktop-only-flex">
                   <i class="fire icon" style="color: #ffa116; margin: 0;"></i>
                   <span>12</span>
                 </div>
                 <a href="/premium.html" class="header-premium-btn">Premium</a>
                 <div class="header-profile-avatar" onclick="window.location.href='/profile.html'">
                    <i class="user icon"></i>
                 </div>
            </div>
        </header>
    `;
}

function initTheme() {
    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle('light-mode');
        localStorage.setItem('procode-theme', isLight ? 'light' : 'dark');
        const icon = document.querySelector('#home-theme-toggle i');
        if (icon) {
            icon.className = isLight ? 'moon icon' : 'sun icon';
        }
    };
    document.getElementById('home-theme-toggle')?.addEventListener('click', toggleTheme);

    if (localStorage.getItem('procode-theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        const icon = document.querySelector('#home-theme-toggle i');
        if (icon) icon.className = 'moon icon';
    }
}

function initSidebar() {
    document.getElementById('open-sidebar')?.addEventListener('click', () => {
        document.getElementById('mobile-sidebar')?.classList.add('open');
        document.getElementById('sidebar-overlay')?.classList.add('visible');
    });

    const closeSidebar = () => {
        document.getElementById('mobile-sidebar')?.classList.remove('open');
        document.getElementById('sidebar-overlay')?.classList.remove('visible');
    };

    document.getElementById('close-sidebar')?.addEventListener('click', closeSidebar);
    document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);
}

function renderHome() {
    if (!appElement || window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;

    const problemsHtml = MOCK_PROBLEMS.map(p => {
        const diffColor = p.difficulty === 'Easy' ? '#2cbb5d' : p.difficulty === 'Medium' ? '#ffa116' : '#ef4743';
        const diffBg = p.difficulty === 'Easy' ? 'rgba(44, 187, 93, 0.1)' : p.difficulty === 'Medium' ? 'rgba(255, 161, 22, 0.1)' : 'rgba(239, 71, 67, 0.1)';

        return `
            <div class="problem-row" onclick="window.location.href='/editor.html?id=${p.id}'">
                <div class="problem-row-left" style="display: flex; align-items: center; gap: 1rem; min-width: 0;">
                    <i class="check circle icon" style="color: #2cbb5d; font-size: 0.9rem; opacity: 0.1;"></i>
                    <span class="problem-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.id}. ${p.title}</span>
                </div>
                <div class="problem-row-right" style="display: flex; align-items: center; gap: 2rem; flex-shrink: 0;">
                    <span class="diff-badge" style="color: ${diffColor}; background: ${diffBg};">${p.difficulty}</span>
                    <span class="acceptance-rate mobile-hidden" style="color: var(--secondary-text); font-size: 0.85rem; width: 60px; text-align: right;">${(Math.random() * 40 + 40).toFixed(1)}%</span>
                </div>
            </div>
        `;
    }).join('');

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
                        <a href="/" class="active">Explore</a>
                        <a href="/interview.html">Problems</a>
                        <a href="/contest.html">Contest</a>
                        <a href="/store.html">Discuss</a>
                        <div class="drawer-divider"></div>
                        <a href="/premium.html">Premium</a>
                        <a href="/profile.html">Profile</a>
                        <a href="/settings.html">Settings</a>
                    </div>
                </div>
            </div>
            <div id="sidebar-overlay" class="drawer-overlay"></div>

            ${renderHeader()}

            <div class="page-container">
                <div class="home-layout">
                    <!-- Main Content -->
                    <div class="main-content">
                        <!-- Hero Section -->
                        <div class="modern-card hero-section" style="background: linear-gradient(135deg, #2cbb5d 0%, #1a8e44 100%); color: white; padding: 2rem; border: none; margin-bottom: 2rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h1 style="font-size: 1.75rem; margin-bottom: 0.5rem; font-weight: 800;">Welcome back, Coder!</h1>
                                    <p style="opacity: 0.9; font-size: 1rem;">Ready to sharpen your skills today? Pick up where you left off.</p>
                                    <button class="ui button white" style="margin-top: 1.5rem; border-radius: 8px; font-weight: bold; padding: 0.75rem 1.5rem;">Continue Solving</button>
                                </div>
                                <div class="desktop-only-flex" style="font-size: 5rem; opacity: 0.2;">θ</div>
                            </div>
                        </div>

                        <!-- Filter Chips -->
                        <div class="topics-container" style="margin-bottom: 1.5rem;">
                            <span class="topic-chip active" style="background: var(--accent-color); color: black;">All Topics</span>
                            <span class="topic-chip">Array</span>
                            <span class="topic-chip">String</span>
                            <span class="topic-chip">Hash Table</span>
                            <span class="topic-chip">Dynamic Programming</span>
                            <span class="topic-chip">More <i class="chevron down icon" style="font-size: 0.7rem; margin-left: 5px;"></i></span>
                        </div>

                        <!-- Problem Table -->
                        <div class="problem-table-container">
                            <div style="padding: 1rem 1.5rem; background: var(--dark-bg); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                <div style="font-weight: 600; font-size: 0.875rem; color: var(--secondary-text); display: flex; gap: 2rem;">
                                    <span style="width: 250px;">Title</span>
                                    <span class="mobile-hidden">Acceptance</span>
                                    <span>Difficulty</span>
                                </div>
                            </div>
                            <div class="custom-scrollbar" style="max-height: 800px; overflow-y: auto;">
                                ${problemsHtml}
                            </div>
                        </div>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="side-content">
                        <!-- Progress Card -->
                        <div class="modern-card" style="padding: 1.5rem; margin-bottom: 2rem;">
                            <h3 style="font-size: 1rem; margin-bottom: 1.5rem; font-weight: 700;">Progress Overview</h3>
                            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 1.5rem;">
                                <div style="width: 60px; height: 60px; border-radius: 50%; border: 6px solid #2cbb5d; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">124</div>
                                <div>
                                    <div style="font-size: 0.8rem; color: var(--secondary-text);">Problems Solved</div>
                                    <div style="font-weight: 700;">Top 5% this month</div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                    <span style="color: #2cbb5d;">Easy</span>
                                    <span>82/150</span>
                                </div>
                                <div style="height: 4px; background: #333; border-radius: 2px;"><div style="width: 54%; height: 100%; background: #2cbb5d; border-radius: 2px;"></div></div>

                                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-top: 5px;">
                                    <span style="color: #ffa116;">Medium</span>
                                    <span>38/150</span>
                                </div>
                                <div style="height: 4px; background: #333; border-radius: 2px;"><div style="width: 25%; height: 100%; background: #ffa116; border-radius: 2px;"></div></div>

                                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-top: 5px;">
                                    <span style="color: #ef4743;">Hard</span>
                                    <span>4/150</span>
                                </div>
                                <div style="height: 4px; background: #333; border-radius: 2px;"><div style="width: 3%; height: 100%; background: #ef4743; border-radius: 2px;"></div></div>
                            </div>
                        </div>

                        <!-- Calendar Card -->
                        <div class="modern-card" style="padding: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                                <span style="font-weight: 700; font-size: 0.95rem;">July 2026</span>
                                <i class="chevron right icon" style="color: var(--secondary-text); font-size: 0.8rem; cursor: pointer;"></i>
                            </div>
                            <div class="mock-calendar">
                                <div style="font-weight: bold; opacity: 0.5;">S</div><div style="font-weight: bold; opacity: 0.5;">M</div><div style="font-weight: bold; opacity: 0.5;">T</div><div style="font-weight: bold; opacity: 0.5;">W</div><div style="font-weight: bold; opacity: 0.5;">T</div><div style="font-weight: bold; opacity: 0.5;">F</div><div style="font-weight: bold; opacity: 0.5;">S</div>
                                <div class="empty"></div><div class="empty"></div><div class="empty"></div><div class="empty"></div><div class="empty"></div><div>1</div><div>2</div>
                                <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                                <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                                <div>17</div><div>18</div><div>19</div><div>20</div><div class="today">21</div><div>22</div><div>23</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Footer -->
            <footer class="mobile-footer mobile-only-flex">
                <a href="/" class="active"><i class="compass icon"></i><span>Explore</span></a>
                <a href="/interview.html"><i class="code branch icon"></i><span>Code</span></a>
                <a href="/store.html"><i class="shopping bag icon"></i><span>Store</span></a>
                <a href="/profile.html"><i class="user circle icon"></i><span>Profile</span></a>
            </footer>
        </div>
    `;

    initTheme();
    initSidebar();
}

renderHome();

export { renderHeader, initTheme, initSidebar };
