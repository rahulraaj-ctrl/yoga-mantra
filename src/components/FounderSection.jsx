import anupma from "../assets/anupma_bhatt.jpeg"
export default function FounderSection() {
    return (
        <section id="founder" style={{ background: 'var(--cream-soft)' }}>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">🙏 Guidance Matters</span>
                    <h2>Meet The Founder</h2>
                </div>
                <div className="founder-card reveal">
                    <img
                        src={anupma}
                        alt="Founder photo placeholder"
                    />
                    <div className="founder-body">
                        <h3>Mrs. Anupam Bhatt</h3>
                        <span className="founder-role">Founder, Yoga Mantra Wellness · M.A., B.Ed · 3+ Years Experience</span>
                        <p>
                            Mrs. Anupam Bhatt founded Yoga Mantra with a simple belief — yoga should feel practical, supportive and approachable for every modern lifestyle problem. Backed by formal education and multiple specialised certifications, she guides students with patience, correct technique and a calm, wellness-focused approach.
                        </p>
                        <ul className="cred-list">
                            <li>🎓 M.A., B.Ed · Pursuing M.A. in Yoga</li>
                            <li>📜 PGDYT — 400 Hrs Yoga Therapy</li>
                            <li>✨ Certified Face Yoga Trainer</li>
                            <li>🌬️ Certified in Meditation & Pranayama</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
