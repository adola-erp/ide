import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <a href="/" class="nav-brand">θ ProCode IDE</a>
            </nav>
            <div class="page-container">
                <h1 class="modern-title">Find Friends</h1>

                <div class="modern-card">
                    <div class="ui action input fluid">
                        <input type="text" placeholder="Search by username or email...">
                        <button class="ui primary button">Search</button>
                    </div>
                </div>

                <h2 class="modern-subtitle">Suggested for you</h2>
                <div class="modern-grid">
                    <div class="feature-card" style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
                        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">AS</div>
                        <div style="flex-grow: 1;">
                            <div style="font-weight: 600;">Alice Smith</div>
                            <div style="font-size: 0.8rem; color: var(--secondary-text);">Level 12</div>
                        </div>
                        <button class="ui button basic inverted mini">Add</button>
                    </div>

                    <div class="feature-card" style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
                        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">BW</div>
                        <div style="flex-grow: 1;">
                            <div style="font-weight: 600;">Bob White</div>
                            <div style="font-size: 0.8rem; color: var(--secondary-text);">Level 8</div>
                        </div>
                        <button class="ui button basic inverted mini">Add</button>
                    </div>

                    <div class="feature-card" style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
                        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">CL</div>
                        <div style="flex-grow: 1;">
                            <div style="font-weight: 600;">Charlie Lee</div>
                            <div style="font-size: 0.8rem; color: var(--secondary-text);">Level 15</div>
                        </div>
                        <button class="ui button basic inverted mini">Add</button>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 4rem;">
                    <a href="/" class="ui button basic inverted">Back to Workspace</a>
                </div>
            </div>
        </div>
    `;
}
