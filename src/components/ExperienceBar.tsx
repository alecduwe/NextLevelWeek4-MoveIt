export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0XP</span>
            <div>
                <div style={{ width: '60%' }} />

                <span className="current-experience" style={{ left: '50%' }}
                >300XP</span>
            </div>
            <span>600XP</span>
        </header>
    );
}