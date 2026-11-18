export default function ReviewsSection() {
    const testimonialItems = [
        {
            title: 'Working Professional, Lucknow',
            quote: 'Stress aur sleep quality dono improve hui — ab subah fresh feel hota hai.',
            image: 'https://placehold.co/400x700/22421c/f7f2e7?text=Replace%3A+Video+Thumbnail+1',
        },
        {
            title: 'Online Student, Delhi',
            quote: 'Online classes beginner-friendly aur convenient hain, ghar se hi attend kar leti hoon.',
            image: 'https://placehold.co/400x700/2d5016/f7f2e7?text=Replace%3A+Video+Thumbnail+2',
        },
        {
            title: 'Studio Student, Lucknow',
            quote: 'PCOD mein bahut farak pada hai, doctor bhi surprised hai.',
            image: 'https://placehold.co/400x700/3d5a2e/f7f2e7?text=Replace%3A+Video+Thumbnail+3',
        },
    ]

    return (
        <section id="reviews" style={{ background: 'var(--cream-soft)' }}>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">💬 Student Results</span>
                    <h2>People Are Feeling Better, Naturally</h2>
                    <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#5c5c4e' }}>
                        Tap any card to watch the video testimonial.
                    </p>
                </div>
                <div className="test-grid">
                    {testimonialItems.map((item, index) => (
                        <a href="#" className="test-card reveal" key={item.title} style={{ transitionDelay: `${index * 100}ms` }}>
                            <span className="reel-tag">📸 Reel</span>
                            <img src={item.image} alt="Video testimonial thumbnail" />
                            <div className="play-btn">▶</div>
                            <div className="test-caption">
                                <span className="stars">★★★★★</span>
                                <p>{item.quote}</p>
                                <div className="test-who">{item.title}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
