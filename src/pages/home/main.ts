import '../styles.css';

const appElement = document.getElementById('app');
if (appElement) {
    appElement.innerHTML = `
        <div class="page-wrapper" style="background-color: #0f0f0f;">
            <nav class="page-nav" style="justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 2rem;">
                    <a href="/" class="nav-brand">θ ProCode</a>
                    <a href="/" style="color: white; font-weight: 600; text-decoration: none; border-bottom: 2px solid white; padding-bottom: 5px;">Problems</a>
                    <a href="#" style="color: var(--secondary-text); text-decoration: none;">Contest</a>
                    <a href="#" style="color: var(--secondary-text); text-decoration: none;">Discuss</a>
                    <a href="#" style="color: var(--secondary-text); text-decoration: none;">Interview</a>
                    <a href="#" style="color: var(--secondary-text); text-decoration: none;">Store</a>
                </div>
                <div style="display: flex; align-items: center; gap: 1.5rem;">
                    <div class="ui icon input" style="width: 250px;">
                        <input type="text" placeholder="Search..." style="background: rgba(255,255,255,0.05); border: none; border-radius: 20px; color: white;">
                        <i class="search icon"></i>
                    </div>
                    <i class="bell icon" style="color: var(--secondary-text); cursor: pointer;"></i>
                    <i class="fire icon" style="color: var(--secondary-text); cursor: pointer;"></i>
                    <div style="width: 30px; height: 30px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer;">JD</div>
                    <a href="/premium.html" class="ui orange button mini" style="border-radius: 20px;">Premium</a>
                </div>
            </nav>

            <div style="display: flex; padding: 2rem; gap: 2rem; max-width: 1400px; margin: 0 auto;">
                <!-- Left Sidebar -->
                <div style="width: 240px; display: flex; flex-direction: column; gap: 1.5rem;">
                    <div class="modern-card" style="padding: 1rem;">
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 10px; color: white; cursor: pointer; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                                <i class="book icon"></i> <strong>Library</strong>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px; color: var(--secondary-text); cursor: pointer; padding: 10px;">
                                <i class="bolt icon"></i> Quest <span class="ui blue label mini" style="margin-left: auto;">New</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px; color: var(--secondary-text); cursor: pointer; padding: 10px;">
                                <i class="compass icon"></i> Explore
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px; color: var(--secondary-text); cursor: pointer; padding: 10px;">
                                <i class="graduation cap icon"></i> Study Plan
                            </div>
                        </div>
                    </div>

                    <div style="padding: 0 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--secondary-text); margin-bottom: 1rem;">
                            <span style="font-size: 0.8rem; font-weight: bold;">MY LISTS</span>
                            <i class="plus icon" style="font-size: 0.7rem; cursor: pointer;"></i>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; color: var(--secondary-text); cursor: pointer;">
                            <i class="star outline icon"></i> Favorite
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div style="flex: 1; display: flex; flex-direction: column; gap: 2rem;">
                    <!-- Featured Cards -->
                    <div style="display: flex; gap: 1.5rem; overflow-x: auto; padding-bottom: 1rem;">
                        <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%); position: relative; overflow: hidden; padding: 1.5rem;">
                            <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">ProCode at Your Fingertips</div>
                            <div style="font-size: 0.9rem; color: var(--secondary-text);">Master algorithms on the go.</div>
                            <div style="position: absolute; bottom: -20px; right: -20px; font-size: 5rem; opacity: 0.1; color: var(--accent-color);">θ</div>
                        </div>
                        <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #ff9a00 0%, #ff5100 100%); padding: 1.5rem; color: white;">
                            <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">JavaScript 30 Days Challenge</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Beginner Friendly</div>
                            <div style="margin-top: 1.5rem; font-weight: bold; font-size: 1.5rem;">DAY 30</div>
                        </div>
                        <div class="modern-card" style="min-width: 300px; background: linear-gradient(135deg, #007bff 0%, #00d4ff 100%); padding: 1.5rem; color: white;">
                            <div style="font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">Top Interview Questions</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Cracker coding interviews</div>
                        </div>
                    </div>

                    <!-- Topics Chips -->
                    <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; color: var(--secondary-text);">
                        <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Array <span style="opacity: 0.5;">2141</span></span>
                        <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">String <span style="opacity: 0.5;">867</span></span>
                        <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Hash Table <span style="opacity: 0.5;">808</span></span>
                        <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Math <span style="opacity: 0.5;">666</span></span>
                        <span style="background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">Dynamic Programming <span style="opacity: 0.5;">652</span></span>
                        <span style="color: var(--accent-color); font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 5px;">Expand <i class="chevron down icon" style="font-size: 0.7rem;"></i></span>
                    </div>

                    <!-- Problem Categories -->
                    <div style="display: flex; gap: 1rem;">
                        <button class="ui basic inverted button active" style="border-radius: 10px; background: white !important; color: black !important;">All Topics</button>
                        <button class="ui basic inverted button" style="border-radius: 10px;"><i class="code icon"></i> Algorithms</button>
                        <button class="ui basic inverted button" style="border-radius: 10px;"><i class="database icon"></i> Database</button>
                        <button class="ui basic inverted button" style="border-radius: 10px;"><i class="terminal icon"></i> Shell</button>
                    </div>

                    <!-- Search and Filters -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="ui icon input" style="width: 300px;">
                            <input type="text" placeholder="Search questions..." style="background: rgba(255,255,255,0.05); border: none; border-radius: 8px; color: white;">
                            <i class="search icon"></i>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; color: var(--secondary-text); font-size: 0.9rem;">
                            <span>22/3906 Solved</span>
                            <i class="shuffle icon" style="cursor: pointer;"></i>
                        </div>
                    </div>

                    <!-- Problem Table -->
                    <div class="modern-card" style="padding: 0;">
                        <div style="padding: 1rem 1.5rem; display: flex; align-items: center; border-bottom: 1px solid var(--border-color); color: #2cbb5d; cursor: pointer;" onclick="window.location.href='/editor.html'">
                            <i class="check circle icon"></i>
                            <span style="margin-left: 1rem;">1. Two Sum</span>
                            <span style="margin-left: auto; font-size: 0.85rem; color: #2cbb5d;">Easy</span>
                            <span style="margin-left: 2rem; color: var(--secondary-text);">57.4%</span>
                        </div>
                        <div style="padding: 1rem 1.5rem; display: flex; align-items: center; border-bottom: 1px solid var(--border-color); color: white; cursor: pointer;" onclick="window.location.href='/editor.html'">
                            <i class="circle outline icon" style="color: var(--secondary-text);"></i>
                            <span style="margin-left: 1rem;">2. Add Two Numbers</span>
                            <span style="margin-left: auto; font-size: 0.85rem; color: #ffa116;">Medium</span>
                            <span style="margin-left: 2rem; color: var(--secondary-text);">48.3%</span>
                        </div>
                        <div style="padding: 1rem 1.5rem; display: flex; align-items: center; color: white; cursor: pointer;" onclick="window.location.href='/editor.html'">
                            <i class="circle outline icon" style="color: var(--secondary-text);"></i>
                            <span style="margin-left: 1rem;">1722. Minimize Hamming Distance After Swap Operations</span>
                            <span style="margin-left: auto; font-size: 0.85rem; color: #ffa116;">Medium</span>
                            <span style="margin-left: 2rem; color: var(--secondary-text);">49.6%</span>
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar -->
                <div style="width: 300px; display: flex; flex-direction: column; gap: 2rem;">
                    <!-- Calendar Card -->
                    <div class="modern-card" style="padding: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="font-weight: bold;">Day 21</span>
                            <span style="font-size: 0.75rem; color: var(--secondary-text);">23:51:35 left</span>
                        </div>
                        <!-- Mock Calendar -->
                        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center; font-size: 0.7rem; color: var(--secondary-text);">
                            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                            <div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div style="color: transparent;">-</div><div>1</div><div>2</div>
                            <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                            <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                            <div>17</div><div>18</div><div>19</div><div>20</div><div style="background: #2cbb5d; color: white; border-radius: 50%; width: 18px; height: 18px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">21</div><div>22</div><div>23</div>
                        </div>
                        <div style="margin-top: 1.5rem; display: flex; gap: 5px;">
                            <span class="ui orange label mini" style="width: 25px; text-align: center;">W1</span>
                            <span class="ui orange label mini" style="width: 25px; text-align: center;">W2</span>
                            <span class="ui orange label mini" style="width: 25px; text-align: center;">W3</span>
                            <span style="font-size: 0.7rem; color: var(--secondary-text); margin-left: auto;">Less than a day</span>
                        </div>
                    </div>

                    <!-- Trending Companies -->
                    <div class="modern-card" style="padding: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="font-weight: bold;">Trending Companies</span>
                            <div style="display: flex; gap: 5px;">
                                <i class="chevron left icon" style="font-size: 0.7rem; cursor: pointer;"></i>
                                <i class="chevron right icon" style="font-size: 0.7rem; cursor: pointer;"></i>
                            </div>
                        </div>
                        <div class="ui icon input fluid mini">
                            <input type="text" placeholder="Search for a company..." style="background: rgba(255,255,255,0.05); border: none; color: white;">
                            <i class="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
