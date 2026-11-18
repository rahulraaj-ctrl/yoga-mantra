export default function GallerySection() {
    return (
        <section>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">📸 Class Glimpses</span>
                    <h2>Our Studio & Sessions</h2>
                </div>
                <div className="gallery-grid">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <img
                            key={index}
                            className="reveal"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            src={`https://placehold.co/300x200/${index % 2 === 0 ? '22421c' : '2d5016'}/f7f2e7?text=Photo+${index + 1}`}
                            alt={`Gallery photo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
