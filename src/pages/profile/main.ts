import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <a href="/" class="nav-brand">θ ProCode IDE</a>
            </nav>
            <div class="page-container">
                <div class="modern-card" style="padding-top: 3rem;">
                    <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
                        <div style="width: 100px; height: 100px; background: var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: 700; color: #1a1a1a;">JD</div>
                        <div>
                            <h1 class="modern-title" style="margin-bottom: 0.5rem;">John Doe</h1>
                            <p style="color: var(--secondary-text); margin-bottom: 1rem;">Full Stack Developer | Competitive Coder</p>
                            <div style="display: flex; gap: 1.5rem; color: var(--text-color);">
                                <span><strong>150</strong> Solved</span>
                                <span><strong>22</strong> Friends</span>
                                <span><strong>5</strong> Badges</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modern-grid">
                    <div class="modern-card">
                        <h3 class="modern-subtitle">Stats Overview</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center;">
                            <div style="padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 10px;">
                                <div style="color: #2cbb5d; font-size: 1.5rem; font-weight: 700;">85</div>
                                <div style="font-size: 0.8rem; color: var(--secondary-text);">Easy</div>
                            </div>
                            <div style="padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 10px;">
                                <div style="color: #ffa116; font-size: 1.5rem; font-weight: 700;">45</div>
                                <div style="font-size: 0.8rem; color: var(--secondary-text);">Medium</div>
                            </div>
                            <div style="padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 10px;">
                                <div style="color: #ef4743; font-size: 1.5rem; font-weight: 700;">20</div>
                                <div style="font-size: 0.8rem; color: var(--secondary-text);">Hard</div>
                            </div>
                            <div style="padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 10px;">
                                <div style="color: var(--accent-color); font-size: 1.5rem; font-weight: 700;">Level 5</div>
                                <div style="font-size: 0.8rem; color: var(--secondary-text);">Current Rank</div>
                            </div>
                        </div>
                    </div>

                    <div class="modern-card">
                        <h3 class="modern-subtitle">Recent Activity</h3>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="padding: 0.8rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                <div>Two Sum</div>
                                <div style="color: #2cbb5d; font-size: 0.8rem;">Accepted</div>
                            </div>
                            <div style="padding: 0.8rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                <div>Add Two Numbers</div>
                                <div style="color: #2cbb5d; font-size: 0.8rem;">Accepted</div>
                            </div>
                            <div style="padding: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
                                <div>Median of Two Arrays</div>
                                <div style="color: #ef4743; font-size: 0.8rem;">Failed</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 2rem;">
                    <a href="/" class="ui button primary">Edit Profile</a>
                    <a href="/" class="ui button basic inverted">Back to Editor</a>
                </div>
            </div>
        </div>
    `;
}
