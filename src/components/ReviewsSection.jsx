import { useState } from 'react'
import t1 from "../assets/testimonial/v1.mp4"
import t2 from "../assets/testimonial/v2.mp4"
import t3 from "../assets/testimonial/v3.mp4"

export default function ReviewsSection() {
    const [playingIndex, setPlayingIndex] = useState(null)

    const testimonialItems = [
        {
            title: 'Working Professional, Lucknow',
            quote: 'Stress aur sleep quality dono improve hui — ab subah fresh feel hota hai.',
            image: t1,
        },
        {
            title: 'Online Student, Delhi',
            quote: 'Online classes beginner-friendly aur convenient hain, ghar se hi attend kar leti hoon.',
            image: t2,
        },
        {
            title: 'Studio Student, Lucknow',
            quote: 'PCOD mein bahut farak pada hai, doctor bhi surprised hai.',
            image: t3,
        },
    ]

    const toggleVideo = (event, index) => {
        const video = event.currentTarget.querySelector('video')

        if (playingIndex === index) {
            video.pause()
            setPlayingIndex(null)
            return
        }

        document.querySelectorAll('.test-card video').forEach((item) => item.pause())
        setPlayingIndex(index)
        video.play()
    }

    return (
        <section id="reviews" style={{ background: 'var(--cream-soft)' }}>
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">💬 Student Results</span>
                    <h2>People Are Feeling Better, Naturally</h2>
                    <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#5c5c4e' }}>
                        Card par tap karke video testimonial play karein.
                    </p>
                </div>
                
                <div className="test-grid">
                    {testimonialItems.map((item, index) => (
                        <button
                            type="button"
                            className={`test-card reveal ${playingIndex === index ? 'is-playing' : ''}`}
                            key={item.title}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={(event) => toggleVideo(event, index)}
                            aria-label={`Play testimonial by ${item.title}`}
                        >
                            <span className="reel-tag">📸 Reel</span>
                            <video src={item.image} loop muted playsInline preload="metadata"></video>
                            <div className="play-btn">{playingIndex === index ? '❚❚' : '▶'}</div>
                            <div className="test-caption">
                                <span className="stars">★★★★★</span>
                                <p>{item.quote}</p>
                                <div className="test-who">{item.title}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
