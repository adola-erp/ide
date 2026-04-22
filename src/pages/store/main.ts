import '../styles.css';
import { renderHeader } from '../home/main';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper animate-fade-in">
            ${renderHeader()}
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="font-size: 2.5rem; margin-bottom: 0.5rem;">ProCode Store</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Redeem your points for exclusive items.</p>
                </div>

                <div class="modern-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                    <div class="modern-card" style="padding: 0; overflow: hidden; border: none; background: var(--panel-bg); display: flex; flex-direction: column;">
                        <div style="height: 200px; background: #252525; display: flex; align-items: center; justify-content: center; font-size: 5rem;">👕</div>
                        <div style="padding: 2rem;">
                            <h2 class="modern-subtitle" style="margin-bottom: 0.5rem;">ProCode T-Shirt</h2>
                            <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">High-quality cotton tee with embroidered logo.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-weight: 800; color: var(--accent-color);">5,000 Points</span>
                                <button class="header-submit-btn">Redeem</button>
                            </div>
                        </div>
                    </div>

                    <div class="modern-card" style="padding: 0; overflow: hidden; border: none; background: var(--panel-bg); display: flex; flex-direction: column;">
                        <div style="height: 200px; background: #252525; display: flex; align-items: center; justify-content: center; font-size: 5rem;">🎫</div>
                        <div style="padding: 2rem;">
                            <h2 class="modern-subtitle" style="margin-bottom: 0.5rem;">Premium (Monthly)</h2>
                            <p style="color: var(--secondary-text); margin-bottom: 1.5rem;">Unlock all premium features for 30 days.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-weight: 800; color: var(--accent-color);">8,000 Points</span>
                                <button class="header-submit-btn">Redeem</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
