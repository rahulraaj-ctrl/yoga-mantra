export default function GoogleReviewsSection() {
    const reviewShots = [
        'Paste+Review+Screenshot+1',
        'Paste+Review+Screenshot+2',
        'Paste+Review+Screenshot+3',
        'Paste+Review+Screenshot+4',
        'Paste+Review+Screenshot+5',
        'Paste+Review+Screenshot+6',
    ]

    return (
        <section id="google-reviews">
            <div className="wrap">
                <div className="google-box reveal">
                    <div className="google-left">
                        <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
                            <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.7-6.1 8.1-11.3 8.1-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.1-5.1C33.8 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z" />
                            <path fill="#FF3D00" d="M6.3 14.7l5.9 4.3C13.8 15.6 18.6 12.5 24 12.5c3.1 0 5.8 1.1 8 3l5.1-5.1C33.8 6.5 29.2 4.5 24 4.5c-7.7 0-14.3 4.4-17.7 10.2z" />
                            <path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.2c-2 1.4-4.5 2.3-7.1 2.3-5.2 0-9.6-3.5-11.2-8.2l-6 4.6C10 39 16.5 43.5 24 43.5z" />
                            <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.1 5.2c-.4.4 6.8-5 6.8-14.5 0-1.2-.1-2.4-.5-3.6z" />
                        </svg>
                        <div>
                            <div className="google-rating-num">
                                4.9 <span className="stars" style={{ fontSize: '1rem' }}>★★★★★</span>
                            </div>
                            <div className="google-sub">Based on 180+ Google Reviews</div>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Yoga+Mantra+Vikas+Nagar+Lucknow" target="_blank" rel="noreferrer" className="btn btn-outline">
                        Read All Reviews →
                    </a>
                </div>

                <p style={{ marginTop: '28px', fontSize: '0.85rem', color: '#5c5c4e', textAlign: 'center' }}>
                    📷 Screenshots of real reviews from our students
                </p>
                <div className="review-shots-grid">
                    {reviewShots.map((item, index) => (
                        <div className="review-shot-card reveal" key={item} style={{ transitionDelay: `${index * 60}ms` }}>
                            <img src={`https://placehold.co/500x260/ffffff/2a2a22?text=${item}`} alt="Google review screenshot placeholder" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
