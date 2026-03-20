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
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; margin-top: 20px; text-align: left;">
                <div style="background: rgba(255,255,255,0.05); padding: 10px; font-weight: 900; text-transform: uppercase; font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 8px;">
                    🏆 <span>${displayTitle}</span>
                </div>
                <div style="max-height: 250px; overflow-y: auto;">
        `;

        if (rankings.length === 0) {
            html += `<div style="padding: 20px; text-align: center; color: #555; font-style: italic; font-size: 0.8rem;">${emptyMsg}</div>`;
        } else {
            rankings.slice(0, 10).forEach((r, i) => {
                const isTop = i < 3;
                const colors = ['#ffd700', '#c0c0c0', '#cd7f32'];
                const color = isTop ? colors[i] : '#666';

                html += `
                    <div style="display: flex; align-items: center; padding: 10px 15px; border-bottom: 1px solid rgba(255,255,255,0.02);">
                        <span style="width: 25px; font-weight: 900; color: ${color}; font-size: 0.8rem;">${i + 1}</span>
                        <span style="flex-grow: 1; font-weight: 700; font-size: 0.85rem; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #ccc;">${r.username}</span>
                        <span style="font-weight: 900; color: var(--primary); font-size: 0.95rem; text-shadow: 0 0 10px var(--primary-glow);">${r.score}</span>
                    </div>
                `;
            });
        }

        html += `</div></div>`;
        container.innerHTML = html;
    }
};
