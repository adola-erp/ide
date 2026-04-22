import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper animate-fade-in">
            ${renderHeader()}
            <div class="page-container">
                <div style="margin-bottom: 3rem;">
                    <h1 class="modern-title" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Contests</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Compete with the best and climb the global leaderboard.</p>
                </div>

                <div class="modern-card" style="padding: 0; overflow: hidden; border: none; background: linear-gradient(135deg, #ffa116 0%, #ff7b00 100%); color: white; display: flex; align-items: center; justify-content: space-between;">
                    <div style="padding: 3rem;">
                        <div style="text-transform: uppercase; font-size: 0.75rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 1rem;">Featured Event</div>
                        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Weekly Contest 402</h2>
                        <div style="display: flex; gap: 2rem; font-size: 1.1rem; font-weight: 600;">
                            <div>Starts in: <span style="font-variant-numeric: tabular-nums;">02:14:22</span></div>
                            <div>•</div>
                            <div>5,420 Registered</div>
                        </div>
                        <button class="ui button white" style="margin-top: 2rem; border-radius: 8px; font-weight: 800; padding: 1rem 2rem;">Register Now</button>
                    </div>
                    <div class="desktop-only-flex" style="font-size: 15rem; opacity: 0.1; line-height: 1; margin-right: -2rem;">🏆</div>
                </div>

                <div class="home-layout" style="margin-top: 3rem;">
                    <div class="main-content">
                        <h3 class="modern-subtitle">Upcoming Events</h3>
                        <div class="problem-table-container">
                            <div class="problem-row">
                                <div class="problem-row-left">
                                    <span class="problem-title">Biweekly Contest 132</span>
                                </div>
                                <span style="color: var(--secondary-text); font-size: 0.85rem;">July 25, 2026</span>
                            </div>
                        </div>
                    </div>
                    <div class="side-content">
                        <div class="modern-card">
                            <h3 class="modern-subtitle" style="font-size: 1rem;">Your Stats</h3>
                            <div style="font-size: 2rem; font-weight: 800;">1,420</div>
                            <div style="color: var(--secondary-text); font-size: 0.8rem; text-transform: uppercase;">Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
