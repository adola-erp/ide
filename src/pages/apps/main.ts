import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <a href="/" class="nav-brand">θ ProCode IDE</a>
            </nav>
            <div class="page-container">
                <h1 class="modern-title">Apps & Integrations</h1>
                <p style="color: var(--secondary-text); margin-bottom: 3rem;">Connect your favorite tools to streamline your development workflow.</p>

                <div class="modern-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><i class="github icon" style="font-size: 1.5rem;"></i></div>
                        <h3 class="feature-title">GitHub</h3>
                        <p class="feature-desc">Automatically sync your code solutions to a GitHub repository.</p>
                        <button class="ui button basic inverted mini fluid" style="margin-top: 1rem;">Connect</button>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="terminal icon" style="font-size: 1.5rem;"></i></div>
                        <h3 class="feature-title">VS Code</h3>
                        <p class="feature-desc">Open any problem directly in your local VS Code environment.</p>
                        <button class="ui button basic inverted mini fluid" style="margin-top: 1rem;">Install Extension</button>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="discord icon" style="font-size: 1.5rem;"></i></div>
                        <h3 class="feature-title">Discord</h3>
                        <p class="feature-desc">Share your progress and badges with your Discord community.</p>
                        <button class="ui button basic inverted mini fluid" style="margin-top: 1rem;">Connect</button>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="slack icon" style="font-size: 1.5rem;"></i></div>
                        <h3 class="feature-title">Slack</h3>
                        <p class="feature-desc">Get notifications for competition results and friend requests.</p>
                        <button class="ui button basic inverted mini fluid" style="margin-top: 1rem;">Connect</button>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 4rem;">
                    <a href="/" class="ui button basic inverted">Back to Workspace</a>
                </div>
            </div>
        </div>
    `;
}
