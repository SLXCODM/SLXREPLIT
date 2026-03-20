/**
 * SLX Ranking System - Vanilla JS client
 */
const RankingSystem = window.RankingSystem = {
    // Detect environment
    getApiUrl() {
        return '';
    },

    async fetchTopRanks(gameId) {
        try {
            const baseUrl = this.getApiUrl();
            const response = await fetch(`${baseUrl}/api/rankings/${gameId}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("text/html")) {
                throw new Error("API returned HTML instead of JSON. Server routing issue.");
            }

            return await response.json();
        } catch (error) {
            console.error('Leaderboard fetch error:', error);
            return [];
        }
    },

    async submitScore(gameId, username, score) {
        try {
            const baseUrl = this.getApiUrl();
            const response = await fetch(`${baseUrl}/api/rankings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ game_id: gameId, username, score })
            });

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("text/html")) {
                throw new Error("API returned HTML instead of JSON. Server routing issue.");
            }

            return await response.json();
        } catch (error) {
            console.error('Failed to submit score:', error);
        }
    },

    renderLeaderboard(containerId, rankings, title = 'Top Rankings') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const lang = localStorage.getItem('slx_language') || 'pt';
        const emptyMsg = lang === 'pt' ? 'Nenhum recorde ainda.' : 'No records yet.';
        const defaultTitle = lang === 'pt' ? 'Melhores Recordes' : 'Top Rankings';
        const displayTitle = title || defaultTitle;

        let html = `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 255, 0.2); border-radius: 12px; overflow: hidden; margin-top: 25px; text-align: left; box-shadow: 0 0 20px rgba(0,0,0,0.5); backdrop-filter: blur(5px);">
                <div style="background: rgba(0, 242, 255, 0.1); padding: 12px 15px; font-weight: 900; text-transform: uppercase; font-size: 0.85rem; border-bottom: 1px solid rgba(0, 242, 255, 0.2); display: flex; align-items: center; justify-content: space-between; color: var(--primary);">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span>🏆 ${displayTitle}</span>
                    </div>
                </div>
                <div style="max-height: 250px; overflow-y: auto;">
        `;

        if (rankings.length === 0) {
            html += `<div style="padding: 30px; text-align: center; color: #666; font-style: italic; font-size: 0.85rem;">${emptyMsg}</div>`;
        } else {
            rankings.slice(0, 10).forEach((r, i) => {
                const isTop = i < 3;
                const colors = ['#ffd700', '#c0c0c0', '#cd7f32'];
                const color = isTop ? colors[i] : '#666';
                const bg = i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent';

                html += `
                    <div style="display: flex; align-items: center; padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.03); background: ${bg}; transition: background 0.2s;">
                        <span style="width: 30px; font-weight: 900; color: ${color}; font-size: 0.9rem;">${i + 1}</span>
                        <span style="flex-grow: 1; font-weight: 700; font-size: 0.85rem; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #fff; opacity: 0.9;">${r.username}</span>
                        <div style="text-align: right;">
                            <span style="font-weight: 900; color: var(--primary); font-size: 1rem; text-shadow: 0 0 8px var(--primary-glow);">${r.score}</span>
                            <div style="font-size: 0.55rem; color: #444; text-transform: uppercase; letter-spacing: 1px; margin-top: -2px;">points</div>
                        </div>
                    </div>
                `;
            });
        }

        html += `</div></div>`;
        container.innerHTML = html;
    }
};
