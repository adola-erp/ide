import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper">
            <nav class="page-nav">
                <a href="/" class="nav-brand">θ ProCode IDE</a>
            </nav>
            <div class="page-container">
                <h1 class="modern-title">Settings</h1>

                <div class="modern-card">
                    <h2 class="modern-subtitle">Editor Settings</h2>
                    <form class="ui form">
                        <div class="two fields">
                            <div class="field">
                                <label>Theme</label>
                                <select class="ui dropdown">
                                    <option value="vs-dark">Deep Ocean (Dark)</option>
                                    <option value="vs-light">Snow White (Light)</option>
                                    <option value="hc-black">High Contrast</option>
                                </select>
                            </div>
                            <div class="field">
                                <label>Font Size</label>
                                <input type="number" value="14" min="8" max="32">
                            </div>
                        </div>

                        <div class="field">
                            <label>Font Family</label>
                            <select class="ui dropdown">
                                <option value="JetBrains Mono">JetBrains Mono</option>
                                <option value="Fira Code">Fira Code</option>
                                <option value="Source Code Pro">Source Code Pro</option>
                            </select>
                        </div>

                        <div class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" checked>
                                <label style="color: white !important;">Enable autocomplete</label>
                            </div>
                        </div>

                        <div style="margin-top: 2rem;">
                            <button class="ui primary button" type="submit">Save Preferences</button>
                            <a href="/" class="ui button basic inverted">Cancel</a>
                        </div>
                    </form>
                </div>

                <div class="modern-card">
                    <h2 class="modern-subtitle">Account Settings</h2>
                    <form class="ui form">
                        <div class="field">
                            <label>Username</label>
                            <input type="text" value="johndoe">
                        </div>
                        <div class="field">
                            <label>Email Address</label>
                            <input type="email" value="john@example.com">
                        </div>
                        <button class="ui button basic inverted">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}
