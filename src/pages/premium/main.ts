import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <a href="/" class="nav-brand">θ ProCode IDE</a>
            </nav>
            <div class="page-container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="modern-title" style="margin-bottom: 1rem;">Choose Your Plan</h1>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Unlock advanced features and boost your coding productivity.</p>
                </div>

                <div class="modern-grid">
                    <div class="modern-card" style="display: flex; flex-direction: column; text-align: center; height: 100%;">
                        <div style="margin-bottom: 2rem;">
                            <h2 class="modern-subtitle">Free</h2>
                            <div style="font-size: 2.5rem; font-weight: 700; margin: 1rem 0;">$0</div>
                            <p style="color: var(--secondary-text);">Perfect for beginners</p>
                        </div>
                        <ul style="text-align: left; color: var(--text-color); margin-bottom: 2rem; flex-grow: 1; padding-left: 1rem;">
                            <li style="margin-bottom: 0.8rem;">Standard execution speed</li>
                            <li style="margin-bottom: 0.8rem;">Access to basic problems</li>
                            <li style="margin-bottom: 0.8rem;">Community support</li>
                        </ul>
                        <button class="ui button basic inverted fluid">Current Plan</button>
                    </div>

                    <div class="modern-card" style="display: flex; flex-direction: column; text-align: center; border-color: var(--accent-color); position: relative; height: 100%;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent-color); color: #1a1a1a; padding: 2px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">POPULAR</div>
                        <div style="margin-bottom: 2rem;">
                            <h2 class="modern-subtitle">Pro</h2>
                            <div style="font-size: 2.5rem; font-weight: 700; margin: 1rem 0;">$9.99<span style="font-size: 1rem; font-weight: 400; color: var(--secondary-text);">/mo</span></div>
                            <p style="color: var(--secondary-text);">For serious developers</p>
                        </div>
                        <ul style="text-align: left; color: var(--text-color); margin-bottom: 2rem; flex-grow: 1; padding-left: 1rem;">
                            <li style="margin-bottom: 0.8rem;">Priority execution speed</li>
                            <li style="margin-bottom: 0.8rem;">AI code suggestions</li>
                            <li style="margin-bottom: 0.8rem;">Unlimited private projects</li>
                            <li style="margin-bottom: 0.8rem;">No advertisements</li>
                        </ul>
                        <button class="ui primary button fluid">Upgrade to Pro</button>
                    </div>

                    <div class="modern-card" style="display: flex; flex-direction: column; text-align: center; height: 100%;">
                        <div style="margin-bottom: 2rem;">
                            <h2 class="modern-subtitle">Team</h2>
                            <div style="font-size: 2.5rem; font-weight: 700; margin: 1rem 0;">$24<span style="font-size: 1rem; font-weight: 400; color: var(--secondary-text);">/mo</span></div>
                            <p style="color: var(--secondary-text);">For small teams</p>
                        </div>
                        <ul style="text-align: left; color: var(--text-color); margin-bottom: 2rem; flex-grow: 1; padding-left: 1rem;">
                            <li style="margin-bottom: 0.8rem;">Everything in Pro</li>
                            <li style="margin-bottom: 0.8rem;">Collaborative coding</li>
                            <li style="margin-bottom: 0.8rem;">Team management tools</li>
                            <li style="margin-bottom: 0.8rem;">Priority support</li>
                        </ul>
                        <button class="ui button basic inverted fluid">Contact Sales</button>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 4rem;">
                    <a href="/" class="ui button basic inverted">Back to Workspace</a>
                </div>
            </div>
        </div>
    `;
}
