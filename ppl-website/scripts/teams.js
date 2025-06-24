document.querySelectorAll('.player-card').forEach(card => {
    const statsBtn = card.querySelector('.player-stat-btn');
    const statsPanel = card.querySelector('.stats-panel');
    const closeBtn = card.querySelector('.close-stats-btn');

    statsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    statsPanel.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
    statsPanel.classList.remove('active');
    });
});